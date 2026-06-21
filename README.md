# Easy Words

6세 첫 영어 학습자를 위한 그림 단어 암기/퀴즈 웹앱입니다. 100개 일상 단어를 10단계로 나누어 먼저 그림, 뜻, 짧은 영어 문장으로 외운 뒤 4지선다 그림 퀴즈로 확인합니다.

## 주요 기능

- 단계형 학습: 10단계, 단계별 10개 단어 구성
- 암기 카드: 단어, 한국어 뜻, 영어 예문, 그림 설명을 먼저 확인
- 그림 퀴즈: 선택 전에는 한글 힌트 없이 그림을 보고 4개 영어 단어 중 정답 선택
- 점수 제도: 정답 점수, 연속 정답 보너스, 단계별 별, 최고 점수 저장
- 유아 친화 UI: 큰 그림, 큰 선택지, 짧은 문장, 단어/문장 듣기 버튼
- 오프라인 그림: 모든 학습 그림은 앱 내부 SVG 장면으로 제공
- Android APK: Capacitor Android 프로젝트 포함

## 웹 실행

```bash
npm install
npm run dev
```

## 웹 빌드

```bash
npm run build
```

## Android APK 빌드

이 머신 기준 Android SDK와 JDK 경로는 아래 스크립트에 반영되어 있습니다.

- `JAVA_HOME=/home/kms/.local/jdk21`
- `ANDROID_HOME=/home/kms/Android/Sdk`

```bash
npm run android:apk
```

생성 APK:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

Android Studio에서 열 때:

```bash
npm run android:open
```
