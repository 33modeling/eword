import { useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  Flame,
  Home,
  Play,
  RotateCcw,
  Star,
  Target,
  Trophy,
  Volume2,
  X,
} from 'lucide-react'
import './App.css'
import { WordScene } from './components/WordScene'
import { categories, lessonGroups, studyWords, targetWordCount, wordById, type StudyWord } from './data/words'

type AppMode = 'home' | 'study' | 'quiz' | 'result'

type Progress = {
  bestScore: number
  bestStreak: number
  totalStars: number
  totalXp: number
  attempts: number
  perfectRuns: number
  studyStreak: number
  lastPlayedDate: string | null
  dailyDate: string | null
  dailyQuizCount: number
  dailyXp: number
  dailyPerfectCount: number
  completedLessonIds: string[]
  lessonStars: Record<string, number>
}

type QuizAnswer = {
  wordId: string
  selectedId: string
  correct: boolean
}

type ResultSummary = {
  lessonTitle: string
  correctCount: number
  totalCount: number
  stars: number
  score: number
  xpEarned: number
  levelBefore: number
  levelAfter: number
  totalXpAfter: number
  bestStreak: number
  missedWords: StudyWord[]
}

const STORAGE_KEY = 'eword-progress-v1'
const XP_PER_LEVEL = 140

const defaultProgress: Progress = {
  bestScore: 0,
  bestStreak: 0,
  totalStars: 0,
  totalXp: 0,
  attempts: 0,
  perfectRuns: 0,
  studyStreak: 0,
  lastPlayedDate: null,
  dailyDate: null,
  dailyQuizCount: 0,
  dailyXp: 0,
  dailyPerfectCount: 0,
  completedLessonIds: [],
  lessonStars: {},
}

const lessonIds = new Set(lessonGroups.map((lesson) => lesson.id))
const levelTitles = [
  '첫 단어 탐험가',
  '그림 단어 수집가',
  '소리 단어 연습생',
  '퀴즈 도전자',
  '단어 별 모으기',
  '영어 말문 열기',
  '헷갈림 해결사',
  '문장 준비생',
  '단어 챔피언',
  '영어 자신감 리더',
]

function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultProgress
    const parsed = JSON.parse(raw) as Partial<Progress>
    const lessonStars =
      parsed.lessonStars && typeof parsed.lessonStars === 'object' && !Array.isArray(parsed.lessonStars)
        ? Object.fromEntries(
            Object.entries(parsed.lessonStars)
              .filter(([key]) => lessonIds.has(key))
              .map(([key, value]) => [key, Number(value) || 0]),
          )
        : {}
    const completedLessonIds = Array.isArray(parsed.completedLessonIds)
      ? parsed.completedLessonIds.filter((id): id is string => typeof id === 'string' && lessonIds.has(id))
      : []
    const totalStars = Object.values(lessonStars).reduce((total, current) => total + current, 0)
    const derivedXp = totalStars * 40 + (Number(parsed.attempts) || 0) * 8
    const today = getDateKey()
    const hasTodayStats = parsed.dailyDate === today

    return {
      bestScore: Number(parsed.bestScore) || 0,
      bestStreak: Number(parsed.bestStreak) || 0,
      totalStars,
      totalXp: Number(parsed.totalXp) || derivedXp,
      attempts: Number(parsed.attempts) || 0,
      perfectRuns: Number(parsed.perfectRuns) || 0,
      studyStreak: Number(parsed.studyStreak) || 0,
      lastPlayedDate: typeof parsed.lastPlayedDate === 'string' ? parsed.lastPlayedDate : null,
      dailyDate: hasTodayStats ? today : null,
      dailyQuizCount: hasTodayStats ? Number(parsed.dailyQuizCount) || 0 : 0,
      dailyXp: hasTodayStats ? Number(parsed.dailyXp) || 0 : 0,
      dailyPerfectCount: hasTodayStats ? Number(parsed.dailyPerfectCount) || 0 : 0,
      lessonStars,
      completedLessonIds,
    }
  } catch {
    return defaultProgress
  }
}

function saveProgress(progress: Progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

function getDateKey(date = new Date()) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

function getYesterdayKey() {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)

  return getDateKey(yesterday)
}

function getNextStudyStreak(progress: Progress) {
  const today = getDateKey()
  if (progress.lastPlayedDate === today) return Math.max(1, progress.studyStreak)
  if (progress.lastPlayedDate === getYesterdayKey()) return progress.studyStreak + 1
  return 1
}

function getTodayProgress(progress: Progress) {
  const today = getDateKey()

  return {
    dailyDate: today,
    dailyQuizCount: progress.dailyDate === today ? progress.dailyQuizCount : 0,
    dailyXp: progress.dailyDate === today ? progress.dailyXp : 0,
    dailyPerfectCount: progress.dailyDate === today ? progress.dailyPerfectCount : 0,
  }
}

function getLevelStats(totalXp: number) {
  const level = Math.floor(totalXp / XP_PER_LEVEL) + 1
  const currentLevelXp = totalXp % XP_PER_LEVEL
  const progressPercent = Math.round((currentLevelXp / XP_PER_LEVEL) * 100)
  const title = levelTitles[Math.min(level - 1, levelTitles.length - 1)]

  return {
    level,
    title,
    currentLevelXp,
    xpForLevel: XP_PER_LEVEL,
    progressPercent,
  }
}

function hashSeed(text: string) {
  return Array.from(text).reduce((acc, char) => acc + char.charCodeAt(0), 2166136261)
}

function shuffleWithSeed<T>(items: T[], seed: number) {
  const copy = [...items]
  let value = seed || 1

  for (let index = copy.length - 1; index > 0; index -= 1) {
    value = (value * 1664525 + 1013904223) >>> 0
    const swapIndex = value % (index + 1)
    ;[copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]]
  }

  return copy
}

function speak(text: string) {
  if (!('speechSynthesis' in window)) return

  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'en-US'
  utterance.rate = 0.82
  utterance.pitch = 1.06
  window.speechSynthesis.speak(utterance)
}

function getLessonWords(lessonIndex: number) {
  return lessonGroups[lessonIndex].words
    .map((id) => wordById.get(id))
    .filter((word): word is StudyWord => Boolean(word))
}

function getStars(correctCount: number, totalCount: number) {
  if (correctCount === totalCount) return 3
  if (correctCount >= Math.ceil(totalCount * 0.75)) return 2
  if (correctCount >= Math.ceil(totalCount * 0.5)) return 1
  return 0
}

function getEarnedXp(correctCount: number, stars: number, bestStreak: number, missedCount: number) {
  return correctCount * 12 + stars * 25 + Math.min(bestStreak, 10) * 4 + (missedCount === 0 ? 30 : 0)
}

function App() {
  const [mode, setMode] = useState<AppMode>('home')
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0)
  const [studyIndex, setStudyIndex] = useState(0)
  const [quizIndex, setQuizIndex] = useState(0)
  const [quizSeed, setQuizSeed] = useState(1)
  const [quizWords, setQuizWords] = useState<StudyWord[]>([])
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswer[]>([])
  const [progress, setProgress] = useState(loadProgress)
  const [result, setResult] = useState<ResultSummary | null>(null)

  const selectedLesson = lessonGroups[selectedLessonIndex]
  const lessonWords = useMemo(() => getLessonWords(selectedLessonIndex), [selectedLessonIndex])
  const currentStudyWord = lessonWords[studyIndex]
  const currentQuizWord = quizWords[quizIndex]
  const quizOptions = useMemo(() => {
    if (!currentQuizWord) return []

    const picked = new Map<string, StudyWord>()
    const addDistractors = (items: StudyWord[]) => {
      items.forEach((word) => {
        if (word.id !== currentQuizWord.id && !picked.has(word.id)) {
          picked.set(word.id, word)
        }
      })
    }

    const lessonDistractors = shuffleWithSeed(
      lessonWords.filter((word) => word.id !== currentQuizWord.id),
      hashSeed(`${currentQuizWord.id}-${quizSeed}-lesson`),
    )
    const categoryDistractors = shuffleWithSeed(
      studyWords.filter((word) => word.category === currentQuizWord.category && word.id !== currentQuizWord.id),
      hashSeed(`${currentQuizWord.id}-${quizSeed}-category`),
    )
    const fallbackDistractors = shuffleWithSeed(
      studyWords.filter((word) => word.id !== currentQuizWord.id),
      hashSeed(`${currentQuizWord.id}-${quizSeed}-fallback`),
    )

    addDistractors(lessonDistractors.slice(0, 2))
    addDistractors(categoryDistractors.slice(0, 8))
    addDistractors(fallbackDistractors)

    const wrongAnswers = Array.from(picked.values()).slice(0, 3)

    return shuffleWithSeed(
      [currentQuizWord, ...wrongAnswers],
      hashSeed(`${currentQuizWord.word}-${quizIndex}-${quizSeed}`),
    )
  }, [currentQuizWord, lessonWords, quizIndex, quizSeed])

  const answered = selectedOptionId !== null
  const selectedAnswer = selectedOptionId ? wordById.get(selectedOptionId) : null
  const isCorrect = answered && selectedOptionId === currentQuizWord?.id
  const levelStats = getLevelStats(progress.totalXp)
  const learnedWordCount = Math.min(targetWordCount, progress.completedLessonIds.length * 10)
  const completionPercent = Math.round((learnedWordCount / targetWordCount) * 100)
  const starAccuracy =
    progress.completedLessonIds.length > 0
      ? Math.round((progress.totalStars / (progress.completedLessonIds.length * 3)) * 100)
      : 0
  const nextLessonIndex = Math.max(
    0,
    lessonGroups.findIndex((lesson) => !progress.completedLessonIds.includes(lesson.id)),
  )
  const resultLevelStats = result ? getLevelStats(result.totalXpAfter) : null
  const todayProgress = getTodayProgress(progress)
  const dailyMissions = [
    {
      title: '오늘 퀴즈',
      value: Math.min(todayProgress.dailyQuizCount, 1),
      goal: 1,
      unit: '회',
      icon: '🎯',
    },
    {
      title: '오늘 XP',
      value: Math.min(todayProgress.dailyXp, 120),
      goal: 120,
      unit: 'XP',
      icon: '⚡',
    },
    {
      title: '완벽 완료',
      value: Math.min(todayProgress.dailyPerfectCount, 1),
      goal: 1,
      unit: '회',
      icon: '🏆',
    },
  ]
  const achievements = [
    {
      title: '첫 퀴즈',
      unlocked: progress.attempts >= 1,
      value: `${Math.min(progress.attempts, 1)}/1`,
      icon: '🎯',
    },
    {
      title: '100단어 여정',
      unlocked: learnedWordCount >= 100,
      value: `${Math.min(learnedWordCount, 100)}/100`,
      icon: '📚',
    },
    {
      title: '연속 7개',
      unlocked: progress.bestStreak >= 7,
      value: `${Math.min(progress.bestStreak, 7)}/7`,
      icon: '🔥',
    },
    {
      title: '완벽 3회',
      unlocked: progress.perfectRuns >= 3,
      value: `${Math.min(progress.perfectRuns, 3)}/3`,
      icon: '⭐',
    },
  ]

  function openLesson(index: number) {
    setSelectedLessonIndex(index)
    setStudyIndex(0)
    setResult(null)
    setMode('study')
  }

  function goHome() {
    setMode('home')
    setStudyIndex(0)
    setQuizIndex(0)
    setSelectedOptionId(null)
  }

  function startQuiz() {
    const seed = Date.now()
    setQuizSeed(seed)
    setQuizWords(shuffleWithSeed(lessonWords, seed))
    setQuizIndex(0)
    setSelectedOptionId(null)
    setScore(0)
    setStreak(0)
    setBestStreak(0)
    setAnswers([])
    setMode('quiz')
  }

  function selectAnswer(option: StudyWord) {
    if (answered || !currentQuizWord) return

    const correct = option.id === currentQuizWord.id
    const nextStreak = correct ? streak + 1 : 0
    const earned = correct ? 10 + Math.min(streak, 4) * 2 : 0

    setSelectedOptionId(option.id)
    setStreak(nextStreak)
    setBestStreak((current) => Math.max(current, nextStreak))
    setScore((current) => current + earned)
    setAnswers((current) => [
      ...current,
      { wordId: currentQuizWord.id, selectedId: option.id, correct },
    ])

    if (correct) {
      speak(currentQuizWord.word)
    }
  }

  function finishQuiz() {
    const totalCount = quizWords.length
    const finalCorrectCount = answers.filter((answer) => answer.correct).length
    const stars = getStars(finalCorrectCount, totalCount)
    const finalScore = score + stars * 10
    const missedWords = answers
      .filter((answer) => !answer.correct)
      .map((answer) => wordById.get(answer.wordId))
      .filter((word): word is StudyWord => Boolean(word))
    const levelBefore = getLevelStats(progress.totalXp).level
    const xpEarned = getEarnedXp(finalCorrectCount, stars, bestStreak, missedWords.length)
    const totalXpAfter = progress.totalXp + xpEarned
    const levelAfter = getLevelStats(totalXpAfter).level

    const nextResult: ResultSummary = {
      lessonTitle: selectedLesson.title,
      correctCount: finalCorrectCount,
      totalCount,
      stars,
      score: finalScore,
      xpEarned,
      levelBefore,
      levelAfter,
      totalXpAfter,
      bestStreak,
      missedWords,
    }

    const nextLessonStars = {
      ...progress.lessonStars,
      [selectedLesson.id]: Math.max(progress.lessonStars[selectedLesson.id] ?? 0, stars),
    }
    const completedLessonIds =
      nextLessonStars[selectedLesson.id] > 0 && !progress.completedLessonIds.includes(selectedLesson.id)
        ? [...progress.completedLessonIds, selectedLesson.id]
        : progress.completedLessonIds
    const nextDailyProgress = getTodayProgress(progress)

    const nextProgress: Progress = {
      bestScore: Math.max(progress.bestScore, finalScore),
      bestStreak: Math.max(progress.bestStreak, bestStreak),
      totalStars: Object.values(nextLessonStars).reduce((total, current) => total + current, 0),
      totalXp: totalXpAfter,
      attempts: progress.attempts + 1,
      perfectRuns: progress.perfectRuns + (missedWords.length === 0 ? 1 : 0),
      studyStreak: getNextStudyStreak(progress),
      lastPlayedDate: getDateKey(),
      dailyDate: nextDailyProgress.dailyDate,
      dailyQuizCount: nextDailyProgress.dailyQuizCount + 1,
      dailyXp: nextDailyProgress.dailyXp + xpEarned,
      dailyPerfectCount: nextDailyProgress.dailyPerfectCount + (missedWords.length === 0 ? 1 : 0),
      completedLessonIds,
      lessonStars: nextLessonStars,
    }

    setProgress(nextProgress)
    saveProgress(nextProgress)
    setResult(nextResult)
    setMode('result')
  }

  function nextQuiz() {
    if (!answered) return

    if (quizIndex + 1 >= quizWords.length) {
      finishQuiz()
      return
    }

    setQuizIndex((current) => current + 1)
    setSelectedOptionId(null)
  }

  function retryMissed() {
    openLesson(selectedLessonIndex)
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <button className="icon-button" type="button" onClick={goHome} aria-label="처음으로">
          <Home size={20} />
        </button>
        <div className="brand">
          <span className="brand-mark">Aa</span>
          <div>
            <strong>Easy Words</strong>
            <span>그림으로 배우는 첫 영어</span>
          </div>
        </div>
        <div className="score-pill" aria-label={`레벨 ${levelStats.level}`}>
          <Award size={18} />
          <strong>Lv {levelStats.level}</strong>
        </div>
      </header>

      {mode === 'home' && (
        <section className="home-screen">
          <div className="intro-band">
            <div className="intro-copy">
              <p className="eyebrow">6세 첫 영어 단어장</p>
              <h1>보고, 듣고, 맞히는 단어 놀이</h1>
              <p>
                목표 {targetWordCount}개 일상 단어를 그림과 짧은 문장으로 먼저 익히고, 바로 4지선다 퀴즈로
                기억을 확인합니다.
              </p>
            </div>
            <div className="hero-stage" aria-hidden="true">
              <WordScene word={studyWords[0]} compact />
              <div className="hero-badge">
                <Trophy size={19} />
                최고 {progress.bestScore}점
              </div>
            </div>
          </div>

          <section className="level-panel" aria-label="학습 레벨과 상태">
            <div className="level-card">
              <div className="level-orb">
                <span>Lv</span>
                <strong>{levelStats.level}</strong>
              </div>
              <div className="level-copy">
                <span>{levelStats.title}</span>
                <h2>다음 레벨까지 {levelStats.xpForLevel - levelStats.currentLevelXp} XP</h2>
                <div className="xp-track" aria-label={`레벨 진행률 ${levelStats.progressPercent}%`}>
                  <span style={{ width: `${levelStats.progressPercent}%` }} />
                </div>
                <p>
                  {progress.totalXp} XP · 최고 연속 {progress.bestStreak}개 · 완벽 완료 {progress.perfectRuns}회
                </p>
              </div>
            </div>

            <div className="status-grid">
              <div
                className="status-ring-card"
                style={{ '--status-value': `${completionPercent}%` } as CSSProperties}
              >
                <div className="status-ring">
                  <Target size={24} />
                </div>
                <span>단어 여정</span>
                <strong>
                  {learnedWordCount}/{targetWordCount}
                </strong>
              </div>
              <div
                className="status-ring-card"
                style={{ '--status-value': `${starAccuracy}%` } as CSSProperties}
              >
                <div className="status-ring">
                  <BarChart3 size={24} />
                </div>
                <span>별 정확도</span>
                <strong>{starAccuracy}%</strong>
              </div>
              <div
                className="status-ring-card"
                style={{ '--status-value': `${Math.min(100, progress.studyStreak * 14)}%` } as CSSProperties}
              >
                <div className="status-ring">
                  <Flame size={24} />
                </div>
                <span>연속 학습</span>
                <strong>{progress.studyStreak}일</strong>
              </div>
            </div>
          </section>

          <section className="quest-panel" aria-label="오늘 미션과 배지">
            <div className="quest-block">
              <div className="section-heading">
                <span>오늘 미션</span>
                <strong>{dailyMissions.filter((mission) => mission.value >= mission.goal).length}/3 완료</strong>
              </div>
              <div className="mission-grid">
                {dailyMissions.map((mission) => {
                  const percent = Math.round((mission.value / mission.goal) * 100)
                  const complete = mission.value >= mission.goal

                  return (
                    <div className={complete ? 'mission-card complete' : 'mission-card'} key={mission.title}>
                      <span className="mission-icon" aria-hidden="true">
                        {mission.icon}
                      </span>
                      <div>
                        <strong>{mission.title}</strong>
                        <span>
                          {mission.value}/{mission.goal} {mission.unit}
                        </span>
                        <div className="mission-track" aria-label={`${mission.title} ${percent}%`}>
                          <span style={{ width: `${Math.min(100, percent)}%` }} />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="quest-block">
              <div className="section-heading">
                <span>배지 컬렉션</span>
                <strong>{achievements.filter((badge) => badge.unlocked).length}/{achievements.length}</strong>
              </div>
              <div className="badge-grid">
                {achievements.map((badge) => (
                  <div className={badge.unlocked ? 'badge-card unlocked' : 'badge-card'} key={badge.title}>
                    <span aria-hidden="true">{badge.icon}</span>
                    <strong>{badge.title}</strong>
                    <small>{badge.value}</small>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="stat-row" aria-label="학습 기록">
            <div>
              <span>목표 단어</span>
              <strong>{targetWordCount}</strong>
            </div>
            <div>
              <span>완료 단계</span>
              <strong>{progress.completedLessonIds.length}</strong>
            </div>
            <div>
              <span>도전 횟수</span>
              <strong>{progress.attempts}</strong>
            </div>
            <div>
              <span>최고 점수</span>
              <strong>{progress.bestScore}</strong>
            </div>
          </section>

          <section className="lesson-grid" aria-label="학습 단계">
            {lessonGroups.map((lesson, index) => {
              const completed = progress.completedLessonIds.includes(lesson.id)
              const lessonStarCount = progress.lessonStars[lesson.id] ?? 0
              const previewWord = wordById.get(lesson.words[0]) ?? studyWords[0]

              return (
                <article
                  className={index === nextLessonIndex && !completed ? 'lesson-card lesson-card--next' : 'lesson-card'}
                  key={lesson.id}
                >
                  <div className="lesson-preview">
                    <WordScene word={previewWord} compact />
                    {index === nextLessonIndex && !completed && <span className="next-ribbon">추천</span>}
                  </div>
                  <div className="lesson-content">
                    <span className="lesson-badge">{lesson.badge}</span>
                    <h2>{lesson.title}</h2>
                    <p>{lesson.description}</p>
                    <div className="lesson-stars" aria-label={`${lessonStarCount}개 별`}>
                      {[0, 1, 2].map((starIndex) => (
                        <Star
                          key={starIndex}
                          size={17}
                          fill={starIndex < lessonStarCount ? 'currentColor' : 'none'}
                        />
                      ))}
                    </div>
                    <div className="lesson-progress" aria-hidden="true">
                      <span style={{ width: `${(lessonStarCount / 3) * 100}%` }} />
                    </div>
                    <div className="lesson-meta">
                      <span>{lesson.words.length}개 단어</span>
                      <span>{completed ? `${lessonStarCount}/3 별` : index === nextLessonIndex ? '추천 단계' : '새 도전'}</span>
                    </div>
                  </div>
                  <button className="primary-button" type="button" onClick={() => openLesson(index)}>
                    <Play size={18} fill="currentColor" />
                    시작
                  </button>
                </article>
              )
            })}
          </section>
        </section>
      )}

      {mode === 'study' && currentStudyWord && (
        <section className="study-screen">
          <div className="stage-header">
            <div>
              <p className="eyebrow">{selectedLesson.badge} 암기</p>
              <h1>{selectedLesson.title}</h1>
            </div>
            <div className="step-counter">
              {studyIndex + 1}
              <span>/{lessonWords.length}</span>
            </div>
          </div>

          <div className="study-layout">
            <article className="word-card">
              <WordScene word={currentStudyWord} />
              <div className="word-main">
                <div>
                  <span
                    className="category-chip"
                    style={{ '--chip-color': categories[currentStudyWord.category].color } as CSSProperties}
                  >
                    {categories[currentStudyWord.category].label}
                  </span>
                  <h2>{currentStudyWord.word}</h2>
                  <p>{currentStudyWord.meaning}</p>
                </div>
                <button
                  className="round-button"
                  type="button"
                  onClick={() => speak(currentStudyWord.word)}
                  aria-label={`${currentStudyWord.word} 듣기`}
                >
                  <Volume2 size={24} />
                </button>
              </div>
            </article>

            <aside className="memory-panel">
              <div className="sentence-box">
                <span>문장</span>
                <strong>{currentStudyWord.phrase}</strong>
                <button type="button" onClick={() => speak(currentStudyWord.phrase)}>
                  <Volume2 size={18} />
                  듣기
                </button>
              </div>
              <div className="hint-box">
                <BookOpen size={22} />
                <p>{currentStudyWord.koreanHint}</p>
              </div>
              <div className="mini-list" aria-label="이번 단계 단어">
                {lessonWords.map((word, index) => (
                  <button
                    type="button"
                    key={word.id}
                    className={index === studyIndex ? 'active' : ''}
                    onClick={() => setStudyIndex(index)}
                  >
                    {word.word}
                  </button>
                ))}
              </div>
            </aside>
          </div>

          <nav className="flow-actions" aria-label="암기 이동">
            <button
              className="secondary-button"
              type="button"
              onClick={() => setStudyIndex((current) => Math.max(0, current - 1))}
              disabled={studyIndex === 0}
            >
              <ChevronLeft size={19} />
              이전
            </button>
            {studyIndex + 1 < lessonWords.length ? (
              <button
                className="primary-button"
                type="button"
                onClick={() => setStudyIndex((current) => current + 1)}
              >
                다음
                <ChevronRight size={19} />
              </button>
            ) : (
              <button className="primary-button primary-button--wide" type="button" onClick={startQuiz}>
                퀴즈 시작
                <ArrowRight size={19} />
              </button>
            )}
          </nav>
        </section>
      )}

      {mode === 'quiz' && currentQuizWord && (
        <section className="quiz-screen">
          <div className="quiz-status">
            <div>
              <p className="eyebrow">그림 퀴즈</p>
              <h1>한국어에 맞는 영어는?</h1>
            </div>
            <div className="score-stack">
              <span>점수 {score}</span>
              <span>연속 {streak}</span>
            </div>
          </div>

          <div className="quiz-progress" aria-label="퀴즈 진행률">
            <span style={{ width: `${((quizIndex + 1) / quizWords.length) * 100}%` }} />
          </div>

          <div className="quiz-layout">
            <article className="quiz-picture">
              <WordScene word={currentQuizWord} />
              <div className="quiz-prompt">
                <span>한국어 문제</span>
                <strong>{currentQuizWord.meaning}</strong>
                {answered && <p>{currentQuizWord.koreanHint}</p>}
              </div>
            </article>

            <div className="option-grid">
              {quizOptions.map((option) => {
                const selected = selectedOptionId === option.id
                const correctOption = answered && option.id === currentQuizWord.id
                const wrongSelected = selected && option.id !== currentQuizWord.id

                return (
                  <button
                    type="button"
                    key={option.id}
                    className={[
                      'answer-option',
                      selected ? 'selected' : '',
                      correctOption ? 'correct' : '',
                      wrongSelected ? 'wrong' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    onClick={() => selectAnswer(option)}
                    disabled={answered}
                  >
                    <span>{option.word}</span>
                    {correctOption && <Check size={22} />}
                    {wrongSelected && <X size={22} />}
                  </button>
                )
              })}
            </div>
          </div>

          <div className={answered ? 'feedback show' : 'feedback'} aria-live="polite">
            {answered && (
              <>
                <strong>{isCorrect ? currentQuizWord.cheer : '다시 기억해봐요'}</strong>
                <span>
                  정답은 {currentQuizWord.word} · 뜻은 {currentQuizWord.meaning}
                  {selectedAnswer && !isCorrect ? `, 고른 답은 ${selectedAnswer.word}` : ''}
                </span>
              </>
            )}
          </div>

          <nav className="flow-actions" aria-label="퀴즈 이동">
            <button className="secondary-button" type="button" onClick={goHome}>
              <Home size={19} />
              처음
            </button>
            <button className="primary-button primary-button--wide" type="button" onClick={nextQuiz} disabled={!answered}>
              {quizIndex + 1 >= quizWords.length ? '결과 보기' : '다음 문제'}
              <ChevronRight size={19} />
            </button>
          </nav>
        </section>
      )}

      {mode === 'result' && result && (
        <section className="result-screen">
          <div className="result-hero">
            <Trophy size={44} />
            <p className="eyebrow">{result.lessonTitle} 결과</p>
            <h1>{result.score}점</h1>
            <div className="star-row" aria-label={`${result.stars}개 별`}>
              {[0, 1, 2].map((index) => (
                <Star key={index} size={34} fill={index < result.stars ? 'currentColor' : 'none'} />
              ))}
            </div>
            <p>
              {result.correctCount}/{result.totalCount}개 정답 · 최고 연속 {result.bestStreak}개
            </p>
          </div>

          {resultLevelStats && (
            <section className="reward-panel" aria-label="획득 보상">
              <div className="reward-main">
                <div className="reward-badge">
                  <Award size={28} />
                  <strong>+{result.xpEarned} XP</strong>
                </div>
                <div>
                  <span>{result.levelAfter > result.levelBefore ? '레벨업' : '레벨 진행'}</span>
                  <h2>
                    Lv {result.levelAfter} · {resultLevelStats.title}
                  </h2>
                  <div className="xp-track" aria-label={`레벨 진행률 ${resultLevelStats.progressPercent}%`}>
                    <span style={{ width: `${resultLevelStats.progressPercent}%` }} />
                  </div>
                  <p>
                    다음 레벨까지 {resultLevelStats.xpForLevel - resultLevelStats.currentLevelXp} XP 남았습니다.
                  </p>
                </div>
              </div>
            </section>
          )}

          {result.missedWords.length > 0 ? (
            <section className="missed-panel" aria-label="다시 볼 단어">
              <h2>한 번 더 보면 좋은 단어</h2>
              <div className="missed-list">
                {result.missedWords.map((word) => (
                  <button type="button" key={word.id} onClick={() => speak(word.word)}>
                    <WordScene word={word} compact />
                    <span>{word.word}</span>
                    <small>{word.meaning}</small>
                  </button>
                ))}
              </div>
            </section>
          ) : (
            <section className="perfect-panel">
              <Check size={32} />
              <h2>모두 맞혔어요</h2>
              <p>다음 단계로 넘어갈 준비가 됐습니다.</p>
            </section>
          )}

          <nav className="flow-actions" aria-label="결과 이동">
            <button className="secondary-button" type="button" onClick={goHome}>
              <Home size={19} />
              단계 선택
            </button>
            <button className="secondary-button" type="button" onClick={retryMissed}>
              <RotateCcw size={19} />
              다시 보기
            </button>
            <button
              className="primary-button primary-button--wide"
              type="button"
              onClick={() => openLesson((selectedLessonIndex + 1) % lessonGroups.length)}
            >
              다음 단계
              <ArrowRight size={19} />
            </button>
          </nav>
        </section>
      )}
    </main>
  )
}

export default App
