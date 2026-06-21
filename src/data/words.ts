export type WordCategory =
  | 'morning'
  | 'play'
  | 'home'
  | 'class'
  | 'food'
  | 'body'
  | 'feeling'
  | 'place'
  | 'nature'

export type StudyWord = {
  id: string
  word: string
  meaning: string
  category: WordCategory
  phrase: string
  koreanHint: string
  cheer: string
  icon?: string
}

type WordKind =
  | 'action'
  | 'thing'
  | 'food'
  | 'body'
  | 'place'
  | 'nature'
  | 'feeling'
  | 'polite'
  | 'adjective'
  | 'direction'
  | 'time'
  | 'number'

type WordRow = readonly [
  id: string,
  word: string,
  meaning: string,
  category: WordCategory,
  kind: WordKind,
  koreanHint?: string,
  icon?: string,
]

type LessonSeed = {
  id: string
  title: string
  description: string
  words: readonly WordRow[]
}

export const targetWordCount = 1500

export const categories: Record<
  WordCategory,
  { label: string; shortLabel: string; color: string }
> = {
  morning: { label: '하루 일과', shortLabel: '일과', color: '#2f80ed' },
  play: { label: '움직임과 놀이', shortLabel: '놀이', color: '#f2994a' },
  home: { label: '집에서', shortLabel: '집', color: '#27ae60' },
  class: { label: '교실', shortLabel: '교실', color: '#eb5757' },
  food: { label: '음식', shortLabel: '음식', color: '#9b51e0' },
  body: { label: '몸과 옷', shortLabel: '몸', color: '#00a6a6' },
  feeling: { label: '마음과 인사', shortLabel: '마음', color: '#d84f7a' },
  place: { label: '장소와 물건', shortLabel: '장소', color: '#6d5dfc' },
  nature: { label: '자연과 방향', shortLabel: '자연', color: '#7a8b20' },
}

const cheers = [
  '좋아요, 찾았어요!',
  '또박또박 정답!',
  '잘 기억했어요!',
  '헷갈리는 단어도 골라냈어요!',
  '한 단계 올라갔어요!',
]

const noArticleWords = new Set([
  'rice',
  'soup',
  'milk',
  'water',
  'juice',
  'yogurt',
  'noodle',
  'salad',
  'paper',
  'scissors',
  'pajamas',
  'pants',
  'shoes',
  'socks',
  'gloves',
  'thanks',
  'home',
  'school',
  'rain',
  'snow',
  'wind',
])

const drinkWords = new Set(['milk', 'water', 'juice'])

function article(word: string) {
  if (word.includes(' ') || noArticleWords.has(word)) return ''
  return /^[aeiou]/.test(word) ? 'an ' : 'a '
}

function makePhrase(word: string, kind: WordKind) {
  if (kind === 'action') return `I can ${word}.`
  if (kind === 'food') return drinkWords.has(word) ? `I drink ${word}.` : `I eat ${article(word)}${word}.`
  if (kind === 'feeling') return `I feel ${word}.`
  if (kind === 'polite') return `I say ${word}.`
  if (kind === 'adjective') return `It is ${word}.`
  if (kind === 'direction') return `It is ${word}.`
  if (kind === 'time') return `It is ${word}.`
  if (kind === 'number') return `I see ${word}.`
  return `I see ${article(word)}${word}.`
}

function makeHint(meaning: string, kind: WordKind) {
  if (kind === 'action') return `${meaning} 행동을 떠올리며 영어 단어를 익혀요.`
  if (kind === 'feeling') return `${meaning} 마음을 나타내는 영어 단어예요.`
  if (kind === 'polite') return `${meaning} 때 쓰는 예쁜 영어 표현이에요.`
  if (kind === 'adjective') return `${meaning} 상태나 느낌을 나타내요.`
  if (kind === 'direction') return `${meaning} 위치나 방향을 나타내요.`
  if (kind === 'time') return `${meaning} 시간을 나타내는 말이에요.`
  if (kind === 'number') return `${meaning} 수나 양을 나타내는 말이에요.`
  return `${meaning} 그림과 함께 영어 이름을 익혀요.`
}

const lessonSeeds = [
  {
    id: 'basic-move',
    title: '기본 움직임',
    description: 'run, walk처럼 헷갈리기 쉬운 몸동작',
    words: [
      ['run', 'run', '달리다', 'play', 'action'],
      ['walk', 'walk', '걷다', 'play', 'action'],
      ['jump', 'jump', '뛰다', 'play', 'action'],
      ['hop', 'hop', '깡충 뛰다', 'play', 'action'],
      ['skip', 'skip', '깡충깡충 가다', 'play', 'action'],
      ['crawl', 'crawl', '기어가다', 'play', 'action'],
      ['climb', 'climb', '오르다', 'play', 'action'],
      ['slide', 'slide', '미끄러지다', 'play', 'action'],
      ['swing', 'swing', '흔들다', 'play', 'action'],
      ['dance', 'dance', '춤추다', 'play', 'action'],
    ],
  },
  {
    id: 'move-direction',
    title: '이동과 방향',
    description: 'go/come, start/stop 같은 반대 동작',
    words: [
      ['go', 'go', '가다', 'morning', 'action'],
      ['come', 'come', '오다', 'morning', 'action'],
      ['stop', 'stop', '멈추다', 'play', 'action'],
      ['start', 'start', '시작하다', 'play', 'action'],
      ['turn', 'turn', '돌다', 'play', 'action'],
      ['follow', 'follow', '따라가다', 'class', 'action'],
      ['lead', 'lead', '이끌다', 'class', 'action'],
      ['cross', 'cross', '건너다', 'place', 'action'],
      ['pass', 'pass', '지나가다', 'place', 'action'],
      ['wait', 'wait', '기다리다', 'class', 'action'],
    ],
  },
  {
    id: 'body-pose',
    title: '몸 자세',
    description: 'sit/stand, hold/drop처럼 바로 비교하는 동작',
    words: [
      ['sit', 'sit', '앉다', 'class', 'action'],
      ['stand', 'stand', '서다', 'class', 'action'],
      ['bend', 'bend', '구부리다', 'body', 'action'],
      ['stretch', 'stretch', '쭉 펴다', 'body', 'action'],
      ['reach', 'reach', '손을 뻗다', 'body', 'action'],
      ['point', 'point', '가리키다', 'class', 'action'],
      ['touch', 'touch', '만지다', 'body', 'action'],
      ['hold', 'hold', '잡고 있다', 'body', 'action'],
      ['carry', 'carry', '나르다', 'home', 'action'],
      ['drop', 'drop', '떨어뜨리다', 'home', 'action'],
    ],
  },
  {
    id: 'hand-actions',
    title: '손으로 하는 일',
    description: 'push/pull, put/take처럼 자주 헷갈리는 말',
    words: [
      ['push', 'push', '밀다', 'home', 'action'],
      ['pull', 'pull', '당기다', 'home', 'action'],
      ['open', 'open', '열다', 'home', 'action'],
      ['close', 'close', '닫다', 'home', 'action'],
      ['put', 'put', '놓다', 'home', 'action'],
      ['take', 'take', '가져가다', 'home', 'action'],
      ['give', 'give', '주다', 'feeling', 'action'],
      ['get', 'get', '받다', 'feeling', 'action'],
      ['bring', 'bring', '가져오다', 'home', 'action'],
      ['pick', 'pick', '고르다', 'home', 'action'],
    ],
  },
  {
    id: 'morning-routine',
    title: '아침 루틴',
    description: '일어나서 나가기 전까지 쓰는 말',
    words: [
      ['wake', 'wake', '일어나다', 'morning', 'action'],
      ['wash', 'wash', '씻다', 'morning', 'action'],
      ['brush', 'brush', '닦다', 'morning', 'action'],
      ['comb', 'comb', '빗다', 'morning', 'action'],
      ['dress', 'dress', '옷을 입다', 'morning', 'action'],
      ['wear', 'wear', '입고 있다', 'body', 'action'],
      ['pack', 'pack', '챙기다', 'home', 'action'],
      ['leave', 'leave', '떠나다', 'place', 'action'],
      ['arrive', 'arrive', '도착하다', 'place', 'action'],
      ['rest', 'rest', '쉬다', 'morning', 'action'],
    ],
  },
  {
    id: 'clean-up',
    title: '씻고 정리하기',
    description: 'wipe/clean/sweep처럼 정리 동작 비교',
    words: [
      ['wipe', 'wipe', '닦아내다', 'home', 'action'],
      ['clean', 'clean', '청소하다', 'home', 'action'],
      ['sweep', 'sweep', '쓸다', 'home', 'action'],
      ['mop', 'mop', '대걸레질하다', 'home', 'action'],
      ['fold', 'fold', '접다', 'home', 'action'],
      ['hang', 'hang', '걸다', 'home', 'action'],
      ['scrub', 'scrub', '문질러 닦다', 'home', 'action'],
      ['rinse', 'rinse', '헹구다', 'home', 'action'],
      ['tidy', 'tidy', '정돈하다', 'home', 'action'],
      ['sort', 'sort', '분류하다', 'home', 'action'],
    ],
  },
  {
    id: 'eating-actions',
    title: '먹고 마시기',
    description: 'eat/drink/bite처럼 식사 중 쓰는 동작',
    words: [
      ['eat', 'eat', '먹다', 'food', 'action'],
      ['drink', 'drink', '마시다', 'food', 'action'],
      ['bite', 'bite', '베어 물다', 'food', 'action'],
      ['chew', 'chew', '씹다', 'food', 'action'],
      ['taste', 'taste', '맛보다', 'food', 'action'],
      ['swallow', 'swallow', '삼키다', 'food', 'action'],
      ['pour', 'pour', '따르다', 'food', 'action'],
      ['mix', 'mix', '섞다', 'food', 'action'],
      ['cook', 'cook', '요리하다', 'food', 'action'],
      ['bake', 'bake', '굽다', 'food', 'action'],
    ],
  },
  {
    id: 'table-things',
    title: '식탁 물건',
    description: 'cup/bowl/plate처럼 모양이 비슷한 물건',
    words: [
      ['cup', 'cup', '컵', 'food', 'thing'],
      ['bowl', 'bowl', '그릇', 'food', 'thing'],
      ['plate', 'plate', '접시', 'food', 'thing'],
      ['spoon', 'spoon', '숟가락', 'food', 'thing'],
      ['fork', 'fork', '포크', 'food', 'thing'],
      ['napkin', 'napkin', '냅킨', 'food', 'thing'],
      ['bottle', 'bottle', '병', 'food', 'thing'],
      ['lunchbox', 'lunchbox', '도시락통', 'food', 'thing'],
      ['straw', 'straw', '빨대', 'food', 'thing'],
      ['tray', 'tray', '쟁반', 'food', 'thing'],
    ],
  },
  {
    id: 'daily-food',
    title: '매일 먹는 음식',
    description: 'rice/bread/noodle처럼 식사 단어',
    words: [
      ['rice', 'rice', '밥', 'food', 'food'],
      ['bread', 'bread', '빵', 'food', 'food'],
      ['egg', 'egg', '달걀', 'food', 'food'],
      ['soup', 'soup', '수프', 'food', 'food'],
      ['milk', 'milk', '우유', 'food', 'food'],
      ['water', 'water', '물', 'food', 'food'],
      ['juice', 'juice', '주스', 'food', 'food'],
      ['noodle', 'noodle', '국수', 'food', 'food'],
      ['cheese', 'cheese', '치즈', 'food', 'food'],
      ['yogurt', 'yogurt', '요구르트', 'food', 'food'],
    ],
  },
  {
    id: 'fruit-veggie',
    title: '과일과 채소',
    description: '색과 모양으로 함께 익히는 음식',
    words: [
      ['apple', 'apple', '사과', 'food', 'food'],
      ['banana', 'banana', '바나나', 'food', 'food'],
      ['orange', 'orange', '오렌지', 'food', 'food'],
      ['grape', 'grape', '포도', 'food', 'food'],
      ['strawberry', 'strawberry', '딸기', 'food', 'food'],
      ['carrot', 'carrot', '당근', 'food', 'food'],
      ['potato', 'potato', '감자', 'food', 'food'],
      ['tomato', 'tomato', '토마토', 'food', 'food'],
      ['corn', 'corn', '옥수수', 'food', 'food'],
      ['salad', 'salad', '샐러드', 'food', 'food'],
    ],
  },
  {
    id: 'class-actions',
    title: '교실 활동',
    description: 'read/write/draw처럼 공부할 때 쓰는 말',
    words: [
      ['read', 'read', '읽다', 'class', 'action'],
      ['write', 'write', '쓰다', 'class', 'action'],
      ['draw', 'draw', '그리다', 'class', 'action'],
      ['color', 'color', '색칠하다', 'class', 'action'],
      ['count', 'count', '세다', 'class', 'action'],
      ['spell', 'spell', '철자를 말하다', 'class', 'action'],
      ['cut', 'cut', '자르다', 'class', 'action'],
      ['glue', 'glue', '붙이다', 'class', 'action'],
      ['erase', 'erase', '지우다', 'class', 'action'],
      ['copy', 'copy', '따라 쓰다', 'class', 'action'],
    ],
  },
  {
    id: 'listen-speak',
    title: '듣고 말하기',
    description: 'look/see/watch, say/tell/ask 비교',
    words: [
      ['listen', 'listen', '귀 기울여 듣다', 'class', 'action'],
      ['hear', 'hear', '들리다', 'class', 'action'],
      ['look', 'look', '보다', 'class', 'action'],
      ['see', 'see', '보이다', 'class', 'action'],
      ['watch', 'watch', '지켜보다', 'class', 'action'],
      ['say', 'say', '말하다', 'class', 'action'],
      ['tell', 'tell', '말해주다', 'class', 'action'],
      ['ask', 'ask', '묻다', 'class', 'action'],
      ['answer', 'answer', '대답하다', 'class', 'action'],
      ['repeat', 'repeat', '따라 말하다', 'class', 'action'],
    ],
  },
  {
    id: 'school-things',
    title: '학교 물건',
    description: 'pencil/crayon/marker처럼 비슷한 학용품',
    words: [
      ['book', 'book', '책', 'class', 'thing'],
      ['pencil', 'pencil', '연필', 'class', 'thing'],
      ['crayon', 'crayon', '크레용', 'class', 'thing'],
      ['marker', 'marker', '마커펜', 'class', 'thing'],
      ['paper', 'paper', '종이', 'class', 'thing'],
      ['scissors', 'scissors', '가위', 'class', 'thing'],
      ['glue-stick', 'glue stick', '풀', 'class', 'thing'],
      ['eraser', 'eraser', '지우개', 'class', 'thing'],
      ['ruler', 'ruler', '자', 'class', 'thing'],
      ['desk', 'desk', '책상', 'class', 'thing'],
    ],
  },
  {
    id: 'places',
    title: '자주 가는 곳',
    description: 'home/school/classroom처럼 장소 단어',
    words: [
      ['home', 'home', '집', 'place', 'place'],
      ['school', 'school', '학교', 'place', 'place'],
      ['classroom', 'classroom', '교실', 'place', 'place'],
      ['bathroom', 'bathroom', '화장실', 'place', 'place'],
      ['kitchen', 'kitchen', '부엌', 'place', 'place'],
      ['bedroom', 'bedroom', '침실', 'place', 'place'],
      ['park', 'park', '공원', 'place', 'place'],
      ['playground', 'playground', '놀이터', 'place', 'place'],
      ['library', 'library', '도서관', 'place', 'place'],
      ['store', 'store', '가게', 'place', 'place'],
    ],
  },
  {
    id: 'home-things',
    title: '집 안 물건',
    description: 'door/window/table처럼 매일 보는 물건',
    words: [
      ['door', 'door', '문', 'place', 'thing'],
      ['window', 'window', '창문', 'place', 'thing'],
      ['chair', 'chair', '의자', 'place', 'thing'],
      ['table', 'table', '식탁', 'place', 'thing'],
      ['bed', 'bed', '침대', 'place', 'thing'],
      ['sofa', 'sofa', '소파', 'place', 'thing'],
      ['lamp', 'lamp', '전등', 'place', 'thing'],
      ['clock', 'clock', '시계', 'place', 'thing'],
      ['mirror', 'mirror', '거울', 'place', 'thing'],
      ['shelf', 'shelf', '선반', 'place', 'thing'],
    ],
  },
  {
    id: 'people-family',
    title: '가족과 사람',
    description: 'mom/dad/friend/teacher처럼 사람을 부르는 말',
    words: [
      ['mom', 'mom', '엄마', 'feeling', 'thing'],
      ['dad', 'dad', '아빠', 'feeling', 'thing'],
      ['brother', 'brother', '남자 형제', 'feeling', 'thing'],
      ['sister', 'sister', '여자 형제', 'feeling', 'thing'],
      ['baby', 'baby', '아기', 'feeling', 'thing'],
      ['friend', 'friend', '친구', 'feeling', 'thing'],
      ['teacher', 'teacher', '선생님', 'class', 'thing'],
      ['child', 'child', '아이', 'feeling', 'thing'],
      ['family', 'family', '가족', 'feeling', 'thing'],
      ['neighbor', 'neighbor', '이웃', 'feeling', 'thing'],
    ],
  },
  {
    id: 'feelings',
    title: '감정 표현',
    description: 'happy/sad/angry처럼 표정으로 비교하는 말',
    words: [
      ['happy', 'happy', '기쁜', 'feeling', 'feeling'],
      ['sad', 'sad', '슬픈', 'feeling', 'feeling'],
      ['angry', 'angry', '화난', 'feeling', 'feeling'],
      ['scared', 'scared', '무서운', 'feeling', 'feeling'],
      ['tired', 'tired', '피곤한', 'feeling', 'feeling'],
      ['excited', 'excited', '신난', 'feeling', 'feeling'],
      ['bored', 'bored', '지루한', 'feeling', 'feeling'],
      ['proud', 'proud', '자랑스러운', 'feeling', 'feeling'],
      ['shy', 'shy', '부끄러운', 'feeling', 'feeling'],
      ['surprised', 'surprised', '놀란', 'feeling', 'feeling'],
    ],
  },
  {
    id: 'kind-words',
    title: '예쁜 말',
    description: 'please/sorry/thanks처럼 상황에 맞게 쓰는 말',
    words: [
      ['please', 'please', '부탁해요', 'feeling', 'polite'],
      ['sorry', 'sorry', '미안해요', 'feeling', 'polite'],
      ['thanks', 'thanks', '고마워요', 'feeling', 'polite'],
      ['hello', 'hello', '안녕하세요', 'feeling', 'polite'],
      ['goodbye', 'goodbye', '안녕히 가세요', 'feeling', 'polite'],
      ['welcome', 'welcome', '환영해요', 'feeling', 'polite'],
      ['excuse-me', 'excuse me', '실례합니다', 'feeling', 'polite'],
      ['share', 'share', '나누다', 'feeling', 'action'],
      ['help', 'help', '돕다', 'feeling', 'action'],
      ['promise', 'promise', '약속하다', 'feeling', 'action'],
    ],
  },
  {
    id: 'body-parts',
    title: '몸 이름',
    description: 'eye/ear, hand/foot처럼 몸 부위 비교',
    words: [
      ['head', 'head', '머리', 'body', 'body'],
      ['hair', 'hair', '머리카락', 'body', 'body'],
      ['face', 'face', '얼굴', 'body', 'body'],
      ['eye', 'eye', '눈', 'body', 'body'],
      ['ear', 'ear', '귀', 'body', 'body'],
      ['nose', 'nose', '코', 'body', 'body'],
      ['mouth', 'mouth', '입', 'body', 'body'],
      ['tooth', 'tooth', '이', 'body', 'body'],
      ['hand', 'hand', '손', 'body', 'body'],
      ['foot', 'foot', '발', 'body', 'body'],
    ],
  },
  {
    id: 'clothes',
    title: '옷과 신발',
    description: 'shirt/pants/shoes처럼 입는 것',
    words: [
      ['shirt', 'shirt', '셔츠', 'body', 'thing'],
      ['pants', 'pants', '바지', 'body', 'thing'],
      ['shoes', 'shoes', '신발', 'body', 'thing'],
      ['socks', 'socks', '양말', 'body', 'thing'],
      ['hat', 'hat', '모자', 'body', 'thing'],
      ['coat', 'coat', '코트', 'body', 'thing'],
      ['skirt', 'skirt', '치마', 'body', 'thing'],
      ['jacket', 'jacket', '재킷', 'body', 'thing'],
      ['gloves', 'gloves', '장갑', 'body', 'thing'],
      ['pajamas', 'pajamas', '잠옷', 'body', 'thing'],
    ],
  },
  {
    id: 'weather-nature',
    title: '날씨와 자연',
    description: 'sun/rain/snow처럼 밖에서 보는 말',
    words: [
      ['sun', 'sun', '해', 'nature', 'nature'],
      ['moon', 'moon', '달', 'nature', 'nature'],
      ['star', 'star', '별', 'nature', 'nature'],
      ['cloud', 'cloud', '구름', 'nature', 'nature'],
      ['rain', 'rain', '비', 'nature', 'nature'],
      ['snow', 'snow', '눈', 'nature', 'nature'],
      ['wind', 'wind', '바람', 'nature', 'nature'],
      ['sky', 'sky', '하늘', 'nature', 'nature'],
      ['tree', 'tree', '나무', 'nature', 'nature'],
      ['flower', 'flower', '꽃', 'nature', 'nature'],
    ],
  },
  {
    id: 'nearby-animals',
    title: '주변 동물',
    description: '집과 공원에서 볼 수 있는 쉬운 동물',
    words: [
      ['dog', 'dog', '강아지', 'nature', 'thing'],
      ['cat', 'cat', '고양이', 'nature', 'thing'],
      ['bird', 'bird', '새', 'nature', 'thing'],
      ['fish', 'fish', '물고기', 'nature', 'thing'],
      ['duck', 'duck', '오리', 'nature', 'thing'],
      ['ant', 'ant', '개미', 'nature', 'thing'],
      ['bee', 'bee', '벌', 'nature', 'thing'],
      ['butterfly', 'butterfly', '나비', 'nature', 'thing'],
      ['frog', 'frog', '개구리', 'nature', 'thing'],
      ['rabbit', 'rabbit', '토끼', 'nature', 'thing'],
    ],
  },
  {
    id: 'size-state',
    title: '크기와 상태',
    description: 'big/small, full/empty처럼 반대되는 말',
    words: [
      ['big', 'big', '큰', 'nature', 'adjective'],
      ['small', 'small', '작은', 'nature', 'adjective'],
      ['long', 'long', '긴', 'nature', 'adjective'],
      ['short', 'short', '짧은', 'nature', 'adjective'],
      ['tall', 'tall', '키가 큰', 'body', 'adjective'],
      ['low', 'low', '낮은', 'nature', 'adjective'],
      ['full', 'full', '가득 찬', 'food', 'adjective'],
      ['empty', 'empty', '빈', 'food', 'adjective'],
      ['heavy', 'heavy', '무거운', 'home', 'adjective'],
      ['light', 'light', '가벼운', 'home', 'adjective'],
    ],
  },
  {
    id: 'colors-shapes',
    title: '색과 모양',
    description: '색 이름과 기본 모양',
    words: [
      ['red', 'red', '빨간색', 'class', 'adjective'],
      ['blue', 'blue', '파란색', 'class', 'adjective'],
      ['yellow', 'yellow', '노란색', 'class', 'adjective'],
      ['green', 'green', '초록색', 'class', 'adjective'],
      ['black', 'black', '검은색', 'class', 'adjective'],
      ['white', 'white', '흰색', 'class', 'adjective'],
      ['circle', 'circle', '동그라미', 'class', 'thing'],
      ['square', 'square', '네모', 'class', 'thing'],
      ['triangle', 'triangle', '세모', 'class', 'thing'],
      ['line', 'line', '선', 'class', 'thing'],
    ],
  },
  {
    id: 'opposites',
    title: '반대 느낌',
    description: 'hot/cold, loud/quiet처럼 함께 외우는 말',
    words: [
      ['hot', 'hot', '뜨거운', 'nature', 'adjective'],
      ['cold', 'cold', '차가운', 'nature', 'adjective'],
      ['warm', 'warm', '따뜻한', 'nature', 'adjective'],
      ['cool', 'cool', '시원한', 'nature', 'adjective'],
      ['wet', 'wet', '젖은', 'nature', 'adjective'],
      ['soft', 'soft', '부드러운', 'body', 'adjective'],
      ['hard', 'hard', '딱딱한', 'body', 'adjective'],
      ['dirty', 'dirty', '더러운', 'home', 'adjective'],
      ['loud', 'loud', '시끄러운', 'class', 'adjective'],
      ['quiet', 'quiet', '조용한', 'class', 'adjective'],
    ],
  },
  {
    id: 'position',
    title: '위치와 방향',
    description: 'in/on/under, left/right처럼 헷갈리는 위치',
    words: [
      ['up', 'up', '위', 'nature', 'direction'],
      ['down', 'down', '아래', 'nature', 'direction'],
      ['left', 'left', '왼쪽', 'nature', 'direction'],
      ['right', 'right', '오른쪽', 'nature', 'direction'],
      ['in', 'in', '안에', 'place', 'direction'],
      ['on', 'on', '위에', 'place', 'direction'],
      ['under', 'under', '아래에', 'place', 'direction'],
      ['next-to', 'next to', '옆에', 'place', 'direction'],
      ['between', 'between', '사이에', 'place', 'direction'],
      ['behind', 'behind', '뒤에', 'place', 'direction'],
    ],
  },
  {
    id: 'time-words',
    title: '시간 말',
    description: 'today/tomorrow/yesterday처럼 시간 순서',
    words: [
      ['morning-word', 'morning', '아침', 'morning', 'time'],
      ['afternoon', 'afternoon', '오후', 'morning', 'time'],
      ['evening', 'evening', '저녁', 'morning', 'time'],
      ['night', 'night', '밤', 'morning', 'time'],
      ['today', 'today', '오늘', 'morning', 'time'],
      ['tomorrow', 'tomorrow', '내일', 'morning', 'time'],
      ['yesterday', 'yesterday', '어제', 'morning', 'time'],
      ['now', 'now', '지금', 'morning', 'time'],
      ['later', 'later', '나중에', 'morning', 'time'],
      ['soon', 'soon', '곧', 'morning', 'time'],
    ],
  },
  {
    id: 'numbers-amount',
    title: '수와 양',
    description: 'many/few, more/less처럼 양을 비교하는 말',
    words: [
      ['one', 'one', '하나', 'class', 'number'],
      ['two', 'two', '둘', 'class', 'number'],
      ['three', 'three', '셋', 'class', 'number'],
      ['first', 'first', '첫 번째', 'class', 'number'],
      ['last', 'last', '마지막', 'class', 'number'],
      ['many', 'many', '많은', 'class', 'number'],
      ['few', 'few', '적은', 'class', 'number'],
      ['more', 'more', '더 많은', 'class', 'number'],
      ['less', 'less', '더 적은', 'class', 'number'],
      ['all', 'all', '모두', 'class', 'number'],
    ],
  },
  {
    id: 'play-things',
    title: '놀이 물건',
    description: 'ball/bike/block처럼 놀이할 때 보는 물건',
    words: [
      ['ball', 'ball', '공', 'play', 'thing'],
      ['bike', 'bike', '자전거', 'play', 'thing'],
      ['block', 'block', '블록', 'play', 'thing'],
      ['toy', 'toy', '장난감', 'play', 'thing'],
      ['doll', 'doll', '인형', 'play', 'thing'],
      ['puzzle', 'puzzle', '퍼즐', 'play', 'thing'],
      ['kite', 'kite', '연', 'play', 'thing'],
      ['rope', 'rope', '줄', 'play', 'thing'],
      ['seesaw', 'seesaw', '시소', 'play', 'thing'],
      ['scooter', 'scooter', '킥보드', 'play', 'thing'],
    ],
  },
  {
    id: 'advanced-daily',
    title: '생활 동사 심화',
    description: 'choose/find/lose처럼 말하기에 자주 쓰는 동사',
    words: [
      ['choose', 'choose', '고르다', 'class', 'action'],
      ['find', 'find', '찾다', 'class', 'action'],
      ['lose', 'lose', '잃어버리다', 'class', 'action'],
      ['make', 'make', '만들다', 'home', 'action'],
      ['break', 'break', '깨뜨리다', 'home', 'action'],
      ['fix', 'fix', '고치다', 'home', 'action'],
      ['try', 'try', '시도하다', 'class', 'action'],
      ['practice', 'practice', '연습하다', 'class', 'action'],
      ['finish', 'finish', '끝내다', 'class', 'action'],
      ['remember', 'remember', '기억하다', 'class', 'action'],
    ],
  },
] satisfies readonly LessonSeed[]

type ComboWord = {
  word: string
  meaning: string
  icon: string
  category?: WordCategory
  kind?: WordKind
}

type ModifierWord = {
  word: string
  meaning: string
  title: string
  description: string
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function buildGeneratedLesson(
  id: string,
  title: string,
  description: string,
  category: WordCategory,
  words: ComboWord[],
): LessonSeed {
  return {
    id,
    title,
    description,
    words: words.map((word, index) => [
      `${id}-${slugify(word.word) || index}`,
      word.word,
      word.meaning,
      word.category ?? category,
      word.kind ?? 'thing',
      undefined,
      word.icon,
    ]),
  }
}

function makeModifierLessons(
  prefix: string,
  category: WordCategory,
  modifiers: readonly ModifierWord[],
  nouns: readonly ComboWord[],
  wordJoiner: (modifier: ModifierWord, noun: ComboWord) => ComboWord,
) {
  return modifiers.map((modifier) =>
    buildGeneratedLesson(
      `${prefix}-${slugify(modifier.word)}`,
      modifier.title,
      modifier.description,
      category,
      nouns.slice(0, 10).map((noun) => wordJoiner(modifier, noun)),
    ),
  )
}

const colorModifiers = [
  { word: 'red', meaning: '빨간', title: '빨간 물건', description: '색과 사물을 함께 보는 카드' },
  { word: 'blue', meaning: '파란', title: '파란 물건', description: '색과 사물을 함께 보는 카드' },
  { word: 'yellow', meaning: '노란', title: '노란 물건', description: '색과 사물을 함께 보는 카드' },
  { word: 'green', meaning: '초록', title: '초록 물건', description: '색과 사물을 함께 보는 카드' },
  { word: 'black', meaning: '검은', title: '검은 물건', description: '색과 사물을 함께 보는 카드' },
  { word: 'white', meaning: '하얀', title: '하얀 물건', description: '색과 사물을 함께 보는 카드' },
  { word: 'pink', meaning: '분홍', title: '분홍 물건', description: '색과 사물을 함께 보는 카드' },
  { word: 'purple', meaning: '보라', title: '보라 물건', description: '색과 사물을 함께 보는 카드' },
  { word: 'brown', meaning: '갈색', title: '갈색 물건', description: '색과 사물을 함께 보는 카드' },
  { word: 'orange', meaning: '주황', title: '주황 물건', description: '색과 사물을 함께 보는 카드' },
] satisfies readonly ModifierWord[]

const colorNouns = [
  { word: 'apple', meaning: '사과', icon: '🍎', category: 'food' },
  { word: 'ball', meaning: '공', icon: '⚽', category: 'play' },
  { word: 'car', meaning: '자동차', icon: '🚗', category: 'place' },
  { word: 'cup', meaning: '컵', icon: '☕', category: 'food' },
  { word: 'bag', meaning: '가방', icon: '🎒', category: 'place' },
  { word: 'book', meaning: '책', icon: '📚', category: 'class' },
  { word: 'hat', meaning: '모자', icon: '🧢', category: 'body' },
  { word: 'flower', meaning: '꽃', icon: '🌷', category: 'nature' },
  { word: 'chair', meaning: '의자', icon: '🪑', category: 'place' },
  { word: 'star', meaning: '별', icon: '⭐', category: 'nature' },
] satisfies readonly ComboWord[]

const animalModifiers = [
  { word: 'big', meaning: '큰', title: '큰 동물', description: '동물과 크기 표현을 함께 익혀요' },
  { word: 'small', meaning: '작은', title: '작은 동물', description: '동물과 크기 표현을 함께 익혀요' },
  { word: 'fast', meaning: '빠른', title: '빠른 동물', description: '동물과 속도 표현을 함께 익혀요' },
  { word: 'slow', meaning: '느린', title: '느린 동물', description: '동물과 속도 표현을 함께 익혀요' },
  { word: 'sleepy', meaning: '졸린', title: '졸린 동물', description: '동물과 상태 표현을 함께 익혀요' },
  { word: 'hungry', meaning: '배고픈', title: '배고픈 동물', description: '동물과 상태 표현을 함께 익혀요' },
  { word: 'friendly', meaning: '친절한', title: '친절한 동물', description: '동물과 성격 표현을 함께 익혀요' },
  { word: 'wild', meaning: '야생의', title: '야생 동물', description: '동물과 성격 표현을 함께 익혀요' },
  { word: 'baby', meaning: '아기', title: '아기 동물', description: '동물과 가족 표현을 함께 익혀요' },
  { word: 'quiet', meaning: '조용한', title: '조용한 동물', description: '동물과 소리 표현을 함께 익혀요' },
] satisfies readonly ModifierWord[]

const animalNouns = [
  { word: 'dog', meaning: '강아지', icon: '🐶', category: 'nature' },
  { word: 'cat', meaning: '고양이', icon: '🐱', category: 'nature' },
  { word: 'bird', meaning: '새', icon: '🐦', category: 'nature' },
  { word: 'fish', meaning: '물고기', icon: '🐟', category: 'nature' },
  { word: 'duck', meaning: '오리', icon: '🦆', category: 'nature' },
  { word: 'rabbit', meaning: '토끼', icon: '🐰', category: 'nature' },
  { word: 'frog', meaning: '개구리', icon: '🐸', category: 'nature' },
  { word: 'bee', meaning: '벌', icon: '🐝', category: 'nature' },
  { word: 'butterfly', meaning: '나비', icon: '🦋', category: 'nature' },
  { word: 'turtle', meaning: '거북이', icon: '🐢', category: 'nature' },
] satisfies readonly ComboWord[]

const transportActions = [
  { word: 'ride', meaning: '타기', title: '탈것 타기', description: 'ride와 탈것 단어를 함께 익혀요' },
  { word: 'drive', meaning: '운전하기', title: '탈것 운전', description: 'drive와 탈것 단어를 함께 익혀요' },
  { word: 'take', meaning: '이용하기', title: '탈것 이용', description: 'take와 탈것 단어를 함께 익혀요' },
  { word: 'wait for', meaning: '기다리기', title: '탈것 기다리기', description: '기다리는 상황을 익혀요' },
  { word: 'board', meaning: '탑승하기', title: '탈것 탑승', description: 'board와 탈것 단어를 함께 익혀요' },
  { word: 'wash', meaning: '씻기', title: '탈것 씻기', description: '탈것 관리 표현을 익혀요' },
  { word: 'fix', meaning: '고치기', title: '탈것 고치기', description: '탈것 관리 표현을 익혀요' },
  { word: 'park', meaning: '세우기', title: '탈것 세우기', description: 'park와 탈것 단어를 함께 익혀요' },
  { word: 'find', meaning: '찾기', title: '탈것 찾기', description: 'find와 탈것 단어를 함께 익혀요' },
  { word: 'miss', meaning: '놓치기', title: '탈것 놓치기', description: 'miss와 탈것 단어를 함께 익혀요' },
] satisfies readonly ModifierWord[]

const transportNouns = [
  { word: 'bus', meaning: '버스', icon: '🚌', category: 'place' },
  { word: 'car', meaning: '자동차', icon: '🚗', category: 'place' },
  { word: 'taxi', meaning: '택시', icon: '🚕', category: 'place' },
  { word: 'train', meaning: '기차', icon: '🚆', category: 'place' },
  { word: 'subway', meaning: '지하철', icon: '🚇', category: 'place' },
  { word: 'bike', meaning: '자전거', icon: '🚲', category: 'play' },
  { word: 'scooter', meaning: '킥보드', icon: '🛴', category: 'play' },
  { word: 'airplane', meaning: '비행기', icon: '✈️', category: 'place' },
  { word: 'boat', meaning: '배', icon: '⛵', category: 'place' },
  { word: 'truck', meaning: '트럭', icon: '🚚', category: 'place' },
] satisfies readonly ComboWord[]

const jobModifiers = [
  { word: 'kind', meaning: '친절한', title: '친절한 직업', description: '사람과 직업 단어를 함께 익혀요' },
  { word: 'busy', meaning: '바쁜', title: '바쁜 직업', description: '사람과 직업 단어를 함께 익혀요' },
  { word: 'helpful', meaning: '도와주는', title: '도와주는 직업', description: '사람과 직업 단어를 함께 익혀요' },
  { word: 'brave', meaning: '용감한', title: '용감한 직업', description: '사람과 직업 단어를 함께 익혀요' },
  { word: 'careful', meaning: '조심스러운', title: '조심스러운 직업', description: '사람과 직업 단어를 함께 익혀요' },
  { word: 'happy', meaning: '기쁜', title: '기쁜 직업', description: '감정과 직업 단어를 함께 익혀요' },
  { word: 'smart', meaning: '똑똑한', title: '똑똑한 직업', description: '사람과 직업 단어를 함께 익혀요' },
  { word: 'strong', meaning: '힘센', title: '힘센 직업', description: '사람과 직업 단어를 함께 익혀요' },
  { word: 'quiet', meaning: '조용한', title: '조용한 직업', description: '사람과 직업 단어를 함께 익혀요' },
  { word: 'friendly', meaning: '다정한', title: '다정한 직업', description: '사람과 직업 단어를 함께 익혀요' },
] satisfies readonly ModifierWord[]

const jobNouns = [
  { word: 'teacher', meaning: '선생님', icon: '🧑‍🏫', category: 'class' },
  { word: 'doctor', meaning: '의사', icon: '🧑‍⚕️', category: 'body' },
  { word: 'nurse', meaning: '간호사', icon: '👩‍⚕️', category: 'body' },
  { word: 'chef', meaning: '요리사', icon: '🧑‍🍳', category: 'food' },
  { word: 'farmer', meaning: '농부', icon: '🧑‍🌾', category: 'nature' },
  { word: 'driver', meaning: '운전기사', icon: '🧑‍✈️', category: 'place' },
  { word: 'artist', meaning: '화가', icon: '🧑‍🎨', category: 'class' },
  { word: 'singer', meaning: '가수', icon: '🎤', category: 'play' },
  { word: 'builder', meaning: '건축가', icon: '👷', category: 'place' },
  { word: 'firefighter', meaning: '소방관', icon: '🧑‍🚒', category: 'place' },
] satisfies readonly ComboWord[]

const scienceModifiers = [
  { word: 'bright', meaning: '밝은', title: '밝은 과학', description: '과학과 자연 단어를 함께 익혀요' },
  { word: 'dark', meaning: '어두운', title: '어두운 과학', description: '과학과 자연 단어를 함께 익혀요' },
  { word: 'round', meaning: '둥근', title: '둥근 과학', description: '모양과 과학 단어를 함께 익혀요' },
  { word: 'tiny', meaning: '아주 작은', title: '작은 과학', description: '크기와 과학 단어를 함께 익혀요' },
  { word: 'giant', meaning: '거대한', title: '큰 과학', description: '크기와 과학 단어를 함께 익혀요' },
  { word: 'moving', meaning: '움직이는', title: '움직이는 과학', description: '움직임과 과학 단어를 함께 익혀요' },
  { word: 'quiet', meaning: '조용한', title: '조용한 과학', description: '상태와 과학 단어를 함께 익혀요' },
  { word: 'warm', meaning: '따뜻한', title: '따뜻한 과학', description: '온도와 과학 단어를 함께 익혀요' },
  { word: 'cold', meaning: '차가운', title: '차가운 과학', description: '온도와 과학 단어를 함께 익혀요' },
  { word: 'shiny', meaning: '반짝이는', title: '반짝이는 과학', description: '보이는 느낌과 과학 단어를 함께 익혀요' },
] satisfies readonly ModifierWord[]

const scienceNouns = [
  { word: 'planet', meaning: '행성', icon: '🪐', category: 'nature' },
  { word: 'star', meaning: '별', icon: '⭐', category: 'nature' },
  { word: 'moon', meaning: '달', icon: '🌙', category: 'nature' },
  { word: 'rocket', meaning: '로켓', icon: '🚀', category: 'nature' },
  { word: 'cloud', meaning: '구름', icon: '☁️', category: 'nature' },
  { word: 'rainbow', meaning: '무지개', icon: '🌈', category: 'nature' },
  { word: 'rock', meaning: '돌', icon: '🪨', category: 'nature' },
  { word: 'magnet', meaning: '자석', icon: '🧲', category: 'class' },
  { word: 'battery', meaning: '건전지', icon: '🔋', category: 'class' },
  { word: 'robot', meaning: '로봇', icon: '🤖', category: 'class' },
] satisfies readonly ComboWord[]

const creativeActions = [
  { word: 'kick', meaning: '차기', title: '스포츠 동작', description: '스포츠와 예술 동작을 함께 익혀요' },
  { word: 'throw', meaning: '던지기', title: '던지기 동작', description: '스포츠와 예술 동작을 함께 익혀요' },
  { word: 'catch', meaning: '잡기', title: '잡기 동작', description: '스포츠와 예술 동작을 함께 익혀요' },
  { word: 'bounce', meaning: '튀기기', title: '튀기기 동작', description: '스포츠와 예술 동작을 함께 익혀요' },
  { word: 'paint', meaning: '칠하기', title: '그림 동작', description: '스포츠와 예술 동작을 함께 익혀요' },
  { word: 'draw', meaning: '그리기', title: '그리기 동작', description: '스포츠와 예술 동작을 함께 익혀요' },
  { word: 'play', meaning: '연주하기', title: '연주 동작', description: '스포츠와 예술 동작을 함께 익혀요' },
  { word: 'sing', meaning: '노래하기', title: '노래 동작', description: '스포츠와 예술 동작을 함께 익혀요' },
  { word: 'build', meaning: '만들기', title: '만들기 동작', description: '스포츠와 예술 동작을 함께 익혀요' },
  { word: 'show', meaning: '보여주기', title: '보여주기 동작', description: '스포츠와 예술 동작을 함께 익혀요' },
] satisfies readonly ModifierWord[]

const creativeNouns = [
  { word: 'ball', meaning: '공', icon: '⚽', category: 'play' },
  { word: 'hoop', meaning: '골대', icon: '🏀', category: 'play' },
  { word: 'bat', meaning: '배트', icon: '🏏', category: 'play' },
  { word: 'net', meaning: '그물', icon: '🥅', category: 'play' },
  { word: 'picture', meaning: '그림', icon: '🖼️', category: 'class' },
  { word: 'song', meaning: '노래', icon: '🎵', category: 'play' },
  { word: 'drum', meaning: '드럼', icon: '🥁', category: 'play' },
  { word: 'piano', meaning: '피아노', icon: '🎹', category: 'play' },
  { word: 'tower', meaning: '탑', icon: '🧱', category: 'play' },
  { word: 'stage', meaning: '무대', icon: '🎭', category: 'play' },
] satisfies readonly ComboWord[]

const digitalActions = [
  { word: 'tap', meaning: '톡 누르기', title: '디지털 누르기', description: '기기와 생활 표현을 익혀요' },
  { word: 'click', meaning: '클릭하기', title: '디지털 클릭', description: '기기와 생활 표현을 익혀요' },
  { word: 'swipe', meaning: '밀어 넘기기', title: '디지털 넘기기', description: '기기와 생활 표현을 익혀요' },
  { word: 'open', meaning: '열기', title: '디지털 열기', description: '기기와 생활 표현을 익혀요' },
  { word: 'close', meaning: '닫기', title: '디지털 닫기', description: '기기와 생활 표현을 익혀요' },
  { word: 'charge', meaning: '충전하기', title: '디지털 충전', description: '기기와 생활 표현을 익혀요' },
  { word: 'watch', meaning: '보기', title: '디지털 보기', description: '기기와 생활 표현을 익혀요' },
  { word: 'send', meaning: '보내기', title: '디지털 보내기', description: '기기와 생활 표현을 익혀요' },
  { word: 'save', meaning: '저장하기', title: '디지털 저장', description: '기기와 생활 표현을 익혀요' },
  { word: 'delete', meaning: '지우기', title: '디지털 지우기', description: '기기와 생활 표현을 익혀요' },
] satisfies readonly ModifierWord[]

const digitalNouns = [
  { word: 'phone', meaning: '휴대폰', icon: '📱', category: 'class' },
  { word: 'tablet', meaning: '태블릿', icon: '📱', category: 'class' },
  { word: 'computer', meaning: '컴퓨터', icon: '💻', category: 'class' },
  { word: 'screen', meaning: '화면', icon: '🖥️', category: 'class' },
  { word: 'button', meaning: '버튼', icon: '🔘', category: 'class' },
  { word: 'camera', meaning: '카메라', icon: '📷', category: 'class' },
  { word: 'photo', meaning: '사진', icon: '🖼️', category: 'class' },
  { word: 'message', meaning: '메시지', icon: '💬', category: 'class' },
  { word: 'game', meaning: '게임', icon: '🎮', category: 'play' },
  { word: 'map', meaning: '지도', icon: '🗺️', category: 'place' },
] satisfies readonly ComboWord[]

const healthActions = [
  { word: 'wash', meaning: '씻기', title: '건강 씻기', description: '몸을 돌보는 쉬운 생활 표현' },
  { word: 'dry', meaning: '말리기', title: '건강 말리기', description: '몸을 돌보는 쉬운 생활 표현' },
  { word: 'brush', meaning: '닦기', title: '건강 닦기', description: '몸을 돌보는 쉬운 생활 표현' },
  { word: 'cover', meaning: '가리기', title: '건강 가리기', description: '몸을 돌보는 쉬운 생활 표현' },
  { word: 'check', meaning: '확인하기', title: '건강 확인', description: '아플 때 쓰는 쉬운 표현' },
  { word: 'take', meaning: '먹기', title: '건강 먹기', description: '아플 때 쓰는 쉬운 표현' },
  { word: 'use', meaning: '사용하기', title: '건강 사용', description: '아플 때 쓰는 쉬운 표현' },
  { word: 'rest', meaning: '쉬게 하기', title: '건강 쉬기', description: '몸을 돌보는 쉬운 생활 표현' },
  { word: 'call', meaning: '부르기', title: '건강 도움', description: '도움이 필요할 때 쓰는 표현' },
  { word: 'visit', meaning: '방문하기', title: '건강 방문', description: '도움이 필요할 때 쓰는 표현' },
] satisfies readonly ModifierWord[]

const healthNouns = [
  { word: 'hands', meaning: '손', icon: '🖐️', category: 'body' },
  { word: 'face', meaning: '얼굴', icon: '🙂', category: 'body' },
  { word: 'teeth', meaning: '이', icon: '🦷', category: 'body' },
  { word: 'mouth', meaning: '입', icon: '👄', category: 'body' },
  { word: 'hair', meaning: '머리카락', icon: '💇', category: 'body' },
  { word: 'knee', meaning: '무릎', icon: '🦵', category: 'body' },
  { word: 'finger', meaning: '손가락', icon: '☝️', category: 'body' },
  { word: 'bandage', meaning: '밴드', icon: '🩹', category: 'body' },
  { word: 'medicine', meaning: '약', icon: '💊', category: 'body' },
  { word: 'thermometer', meaning: '체온계', icon: '🌡️', category: 'body' },
] satisfies readonly ComboWord[]

const shoppingActions = [
  { word: 'buy', meaning: '사기', title: '가게에서 사기', description: '물건을 고르고 계산하는 표현' },
  { word: 'pay for', meaning: '계산하기', title: '가게 계산', description: '물건을 고르고 계산하는 표현' },
  { word: 'choose', meaning: '고르기', title: '가게 고르기', description: '비슷한 물건을 비교하는 표현' },
  { word: 'find', meaning: '찾기', title: '가게 찾기', description: '비슷한 물건을 비교하는 표현' },
  { word: 'count', meaning: '세기', title: '가게 숫자', description: '돈과 수량을 익히는 표현' },
  { word: 'carry', meaning: '들기', title: '가게 들기', description: '장 본 물건을 옮기는 표현' },
  { word: 'pack', meaning: '담기', title: '가게 담기', description: '장 본 물건을 옮기는 표현' },
  { word: 'open', meaning: '열기', title: '가게 열기', description: '포장과 물건을 다루는 표현' },
  { word: 'close', meaning: '닫기', title: '가게 닫기', description: '포장과 물건을 다루는 표현' },
  { word: 'share', meaning: '나누기', title: '가게 나누기', description: '먹거리와 선물을 나누는 표현' },
] satisfies readonly ModifierWord[]

const shoppingNouns = [
  { word: 'cart', meaning: '카트', icon: '🛒', category: 'place' },
  { word: 'basket', meaning: '바구니', icon: '🧺', category: 'place' },
  { word: 'coin', meaning: '동전', icon: '🪙', category: 'place' },
  { word: 'ticket', meaning: '표', icon: '🎟️', category: 'place' },
  { word: 'bread', meaning: '빵', icon: '🍞', category: 'food' },
  { word: 'fruit', meaning: '과일', icon: '🍓', category: 'food' },
  { word: 'milk', meaning: '우유', icon: '🥛', category: 'food' },
  { word: 'candy', meaning: '사탕', icon: '🍬', category: 'food' },
  { word: 'gift', meaning: '선물', icon: '🎁', category: 'feeling' },
  { word: 'bag', meaning: '가방', icon: '🛍️', category: 'place' },
] satisfies readonly ComboWord[]

const cityActions = [
  { word: 'visit', meaning: '방문하기', title: '도시 방문', description: '도시에서 자주 쓰는 장소 표현' },
  { word: 'enter', meaning: '들어가기', title: '도시 입장', description: '도시에서 자주 쓰는 장소 표현' },
  { word: 'leave', meaning: '나가기', title: '도시 나가기', description: '도시에서 자주 쓰는 장소 표현' },
  { word: 'cross', meaning: '건너기', title: '도시 건너기', description: '길과 건물을 비교하는 표현' },
  { word: 'wait at', meaning: '기다리기', title: '도시 기다리기', description: '길과 건물을 비교하는 표현' },
  { word: 'meet at', meaning: '만나기', title: '도시 만나기', description: '약속 장소를 말하는 표현' },
  { word: 'find', meaning: '찾기', title: '도시 찾기', description: '약속 장소를 말하는 표현' },
  { word: 'clean', meaning: '청소하기', title: '도시 돌보기', description: '장소를 돌보는 표현' },
  { word: 'pass', meaning: '지나가기', title: '도시 지나가기', description: '이동하며 보는 장소 표현' },
  { word: 'look at', meaning: '보기', title: '도시 보기', description: '이동하며 보는 장소 표현' },
] satisfies readonly ModifierWord[]

const cityNouns = [
  { word: 'museum', meaning: '박물관', icon: '🏛️', category: 'place' },
  { word: 'station', meaning: '역', icon: '🚉', category: 'place' },
  { word: 'hospital', meaning: '병원', icon: '🏥', category: 'place' },
  { word: 'bank', meaning: '은행', icon: '🏦', category: 'place' },
  { word: 'bridge', meaning: '다리', icon: '🌉', category: 'place' },
  { word: 'street', meaning: '거리', icon: '🛣️', category: 'place' },
  { word: 'market', meaning: '시장', icon: '🏪', category: 'place' },
  { word: 'library', meaning: '도서관', icon: '📚', category: 'place' },
  { word: 'post office', meaning: '우체국', icon: '📮', category: 'place' },
  { word: 'playground', meaning: '놀이터', icon: '🛝', category: 'play' },
] satisfies readonly ComboWord[]

const outdoorActions = [
  { word: 'explore', meaning: '탐험하기', title: '바깥 탐험', description: '밖에서 만나는 자연 표현' },
  { word: 'collect', meaning: '모으기', title: '바깥 모으기', description: '밖에서 만나는 자연 표현' },
  { word: 'watch', meaning: '관찰하기', title: '바깥 관찰', description: '자연을 자세히 보는 표현' },
  { word: 'climb', meaning: '오르기', title: '바깥 오르기', description: '자연을 몸으로 느끼는 표현' },
  { word: 'cross', meaning: '건너기', title: '바깥 건너기', description: '자연을 몸으로 느끼는 표현' },
  { word: 'follow', meaning: '따라가기', title: '바깥 따라가기', description: '길과 방향을 익히는 표현' },
  { word: 'plant', meaning: '심기', title: '바깥 심기', description: '자연을 돌보는 표현' },
  { word: 'water', meaning: '물 주기', title: '바깥 물 주기', description: '자연을 돌보는 표현' },
  { word: 'pick', meaning: '줍기', title: '바깥 줍기', description: '작은 것을 찾는 표현' },
  { word: 'protect', meaning: '지키기', title: '바깥 지키기', description: '자연을 아끼는 표현' },
] satisfies readonly ModifierWord[]

const outdoorNouns = [
  { word: 'trail', meaning: '오솔길', icon: '🥾', category: 'nature' },
  { word: 'hill', meaning: '언덕', icon: '⛰️', category: 'nature' },
  { word: 'river', meaning: '강', icon: '🏞️', category: 'nature' },
  { word: 'leaf', meaning: '잎', icon: '🍃', category: 'nature' },
  { word: 'seed', meaning: '씨앗', icon: '🌱', category: 'nature' },
  { word: 'garden', meaning: '정원', icon: '🪴', category: 'nature' },
  { word: 'tent', meaning: '텐트', icon: '⛺', category: 'nature' },
  { word: 'campfire', meaning: '모닥불', icon: '🔥', category: 'nature' },
  { word: 'beach', meaning: '해변', icon: '🏖️', category: 'nature' },
  { word: 'shell', meaning: '조개껍데기', icon: '🐚', category: 'nature' },
] satisfies readonly ComboWord[]

const musicActions = [
  { word: 'play', meaning: '연주하기', title: '음악 연주', description: '소리와 악기 표현을 함께 익혀요' },
  { word: 'tap', meaning: '두드리기', title: '음악 두드리기', description: '소리와 악기 표현을 함께 익혀요' },
  { word: 'shake', meaning: '흔들기', title: '음악 흔들기', description: '소리와 악기 표현을 함께 익혀요' },
  { word: 'beat', meaning: '박자 치기', title: '음악 박자', description: '리듬을 느끼는 표현' },
  { word: 'listen to', meaning: '듣기', title: '음악 듣기', description: '리듬을 느끼는 표현' },
  { word: 'sing', meaning: '노래하기', title: '음악 노래', description: '노래와 소리를 말하는 표현' },
  { word: 'record', meaning: '녹음하기', title: '음악 녹음', description: '노래와 소리를 말하는 표현' },
  { word: 'practice', meaning: '연습하기', title: '음악 연습', description: '반복해서 익히는 표현' },
  { word: 'tune', meaning: '조율하기', title: '음악 조율', description: '악기를 준비하는 표현' },
  { word: 'carry', meaning: '들고 가기', title: '음악 들기', description: '악기를 옮기는 표현' },
] satisfies readonly ModifierWord[]

const musicNouns = [
  { word: 'drum', meaning: '드럼', icon: '🥁', category: 'play' },
  { word: 'piano', meaning: '피아노', icon: '🎹', category: 'play' },
  { word: 'guitar', meaning: '기타', icon: '🎸', category: 'play' },
  { word: 'violin', meaning: '바이올린', icon: '🎻', category: 'play' },
  { word: 'flute', meaning: '플루트', icon: '🎵', category: 'play' },
  { word: 'bell', meaning: '종', icon: '🔔', category: 'play' },
  { word: 'microphone', meaning: '마이크', icon: '🎤', category: 'play' },
  { word: 'speaker', meaning: '스피커', icon: '🔊', category: 'class' },
  { word: 'song', meaning: '노래', icon: '🎶', category: 'play' },
  { word: 'rhythm', meaning: '리듬', icon: '🎼', category: 'play' },
] satisfies readonly ComboWord[]

const generatedLessonSeeds = [
  ...makeModifierLessons('color', 'class', colorModifiers, colorNouns, (modifier, noun) => ({
    word: `${modifier.word} ${noun.word}`,
    meaning: `${modifier.meaning} ${noun.meaning}`,
    icon: noun.icon,
    category: noun.category,
  })),
  ...makeModifierLessons('animal', 'nature', animalModifiers, animalNouns, (modifier, noun) => ({
    word: `${modifier.word} ${noun.word}`,
    meaning: `${modifier.meaning} ${noun.meaning}`,
    icon: noun.icon,
    category: noun.category,
  })),
  ...makeModifierLessons('transport', 'place', transportActions, transportNouns, (modifier, noun) => ({
    word: `${modifier.word} ${noun.word}`,
    meaning: `${noun.meaning} ${modifier.meaning}`,
    icon: noun.icon,
    category: noun.category,
    kind: 'action',
  })),
  ...makeModifierLessons('job', 'feeling', jobModifiers, jobNouns, (modifier, noun) => ({
    word: `${modifier.word} ${noun.word}`,
    meaning: `${modifier.meaning} ${noun.meaning}`,
    icon: noun.icon,
    category: noun.category,
  })),
  ...makeModifierLessons('science', 'nature', scienceModifiers, scienceNouns, (modifier, noun) => ({
    word: `${modifier.word} ${noun.word}`,
    meaning: `${modifier.meaning} ${noun.meaning}`,
    icon: noun.icon,
    category: noun.category,
  })),
  ...makeModifierLessons('creative', 'play', creativeActions, creativeNouns, (modifier, noun) => ({
    word: `${modifier.word} ${noun.word}`,
    meaning: `${noun.meaning} ${modifier.meaning}`,
    icon: noun.icon,
    category: noun.category,
    kind: 'action',
  })),
  ...makeModifierLessons('digital', 'class', digitalActions, digitalNouns, (modifier, noun) => ({
    word: `${modifier.word} ${noun.word}`,
    meaning: `${noun.meaning} ${modifier.meaning}`,
    icon: noun.icon,
    category: noun.category,
    kind: 'action',
  })),
  ...makeModifierLessons('health', 'body', healthActions, healthNouns, (modifier, noun) => ({
    word: `${modifier.word} ${noun.word}`,
    meaning: `${noun.meaning} ${modifier.meaning}`,
    icon: noun.icon,
    category: noun.category,
    kind: 'action',
  })),
  ...makeModifierLessons('shopping', 'place', shoppingActions, shoppingNouns, (modifier, noun) => ({
    word: `${modifier.word} ${noun.word}`,
    meaning: `${noun.meaning} ${modifier.meaning}`,
    icon: noun.icon,
    category: noun.category,
    kind: 'action',
  })),
  ...makeModifierLessons('city', 'place', cityActions, cityNouns, (modifier, noun) => ({
    word: `${modifier.word} ${noun.word}`,
    meaning: `${noun.meaning} ${modifier.meaning}`,
    icon: noun.icon,
    category: noun.category,
    kind: 'action',
  })),
  ...makeModifierLessons('outdoor', 'nature', outdoorActions, outdoorNouns, (modifier, noun) => ({
    word: `${modifier.word} ${noun.word}`,
    meaning: `${noun.meaning} ${modifier.meaning}`,
    icon: noun.icon,
    category: noun.category,
    kind: 'action',
  })),
  ...makeModifierLessons('music', 'play', musicActions, musicNouns, (modifier, noun) => ({
    word: `${modifier.word} ${noun.word}`,
    meaning: `${noun.meaning} ${modifier.meaning}`,
    icon: noun.icon,
    category: noun.category,
    kind: 'action',
  })),
] satisfies readonly LessonSeed[]

const allLessonSeeds = [...lessonSeeds, ...generatedLessonSeeds].slice(0, targetWordCount / 10)

export const studyWords: StudyWord[] = allLessonSeeds.flatMap((lesson, lessonIndex) =>
  lesson.words.map((row, wordIndex) => {
    const [id, word, meaning, category, kind, koreanHint, icon] = row as WordRow

    return {
      id,
      word,
      meaning,
      category,
      phrase: makePhrase(word, kind),
      koreanHint: koreanHint ?? makeHint(meaning, kind),
      cheer: cheers[(lessonIndex + wordIndex) % cheers.length],
      icon,
    }
  }),
)

export const lessonGroups = allLessonSeeds.map((lesson, index) => ({
  id: lesson.id,
  title: lesson.title,
  badge: `${index + 1}단계`,
  description: lesson.description,
  words: lesson.words.map(([id]) => id),
}))

export const wordById = new Map(studyWords.map((word) => [word.id, word]))
