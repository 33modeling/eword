package com.modeling33.eword;

import android.os.Bundle;
import android.speech.tts.TextToSpeech;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import java.util.Locale;

@CapacitorPlugin(name = "NativeSpeech")
public class NativeSpeechPlugin extends Plugin {
    private TextToSpeech textToSpeech;
    private boolean ready = false;
    private PendingSpeech pendingSpeech;

    @Override
    public void load() {
        super.load();
        initializeTextToSpeech();
    }

    @PluginMethod
    public void speak(PluginCall call) {
        String text = call.getString("text", "");
        if (text == null || text.trim().isEmpty()) {
            call.reject("No text provided");
            return;
        }

        String lang = call.getString("lang", "en-US");
        float rate = call.getFloat("rate", 0.82F);
        float pitch = call.getFloat("pitch", 1.06F);

        getActivity()
            .runOnUiThread(
                () -> {
                    if (textToSpeech == null) {
                        pendingSpeech = new PendingSpeech(call, text, lang, rate, pitch);
                        initializeTextToSpeech();
                        return;
                    }

                    if (!ready) {
                        pendingSpeech = new PendingSpeech(call, text, lang, rate, pitch);
                        return;
                    }

                    speakNow(call, text, lang, rate, pitch);
                }
            );
    }

    @PluginMethod
    public void stop(PluginCall call) {
        getActivity()
            .runOnUiThread(
                () -> {
                    if (textToSpeech != null) {
                        textToSpeech.stop();
                    }
                    call.resolve();
                }
            );
    }

    private void initializeTextToSpeech() {
        getActivity()
            .runOnUiThread(
                () -> {
                    if (textToSpeech != null) return;

                    textToSpeech =
                        new TextToSpeech(
                            getContext(),
                            status -> {
                                getActivity()
                                    .runOnUiThread(
                                        () -> {
                                            ready = status == TextToSpeech.SUCCESS;
                                            if (ready) {
                                                textToSpeech.setLanguage(Locale.US);
                                                flushPendingSpeech();
                                            } else if (pendingSpeech != null) {
                                                pendingSpeech.call.reject("TextToSpeech initialization failed");
                                                pendingSpeech = null;
                                            }
                                        }
                                    );
                            }
                        );
                }
            );
    }

    private void flushPendingSpeech() {
        if (pendingSpeech == null) return;

        PendingSpeech speech = pendingSpeech;
        pendingSpeech = null;
        speakNow(speech.call, speech.text, speech.lang, speech.rate, speech.pitch);
    }

    private void speakNow(PluginCall call, String text, String lang, float rate, float pitch) {
        Locale locale = Locale.forLanguageTag(lang);
        int languageResult = textToSpeech.setLanguage(locale);
        if (languageResult == TextToSpeech.LANG_MISSING_DATA || languageResult == TextToSpeech.LANG_NOT_SUPPORTED) {
            textToSpeech.setLanguage(Locale.US);
        }

        textToSpeech.stop();
        textToSpeech.setSpeechRate(rate);
        textToSpeech.setPitch(pitch);

        Bundle params = new Bundle();
        int result = textToSpeech.speak(text, TextToSpeech.QUEUE_FLUSH, params, "eword-" + System.nanoTime());
        if (result == TextToSpeech.ERROR) {
            call.reject("TextToSpeech failed");
            return;
        }

        call.resolve();
    }

    @Override
    protected void handleOnDestroy() {
        if (textToSpeech != null) {
            textToSpeech.stop();
            textToSpeech.shutdown();
            textToSpeech = null;
        }
        super.handleOnDestroy();
    }

    private static class PendingSpeech {
        final PluginCall call;
        final String text;
        final String lang;
        final float rate;
        final float pitch;

        PendingSpeech(PluginCall call, String text, String lang, float rate, float pitch) {
            this.call = call;
            this.text = text;
            this.lang = lang;
            this.rate = rate;
            this.pitch = pitch;
        }
    }
}
