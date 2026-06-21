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
]

type LessonSeed = {
  id: string
  title: string
  description: string
  words: readonly WordRow[]
}

export const targetWordCount = 300

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

export const studyWords: StudyWord[] = lessonSeeds.flatMap((lesson, lessonIndex) =>
  lesson.words.map((row, wordIndex) => {
    const [id, word, meaning, category, kind, koreanHint] = row as WordRow

    return {
      id,
      word,
      meaning,
      category,
      phrase: makePhrase(word, kind),
      koreanHint: koreanHint ?? makeHint(meaning, kind),
      cheer: cheers[(lessonIndex + wordIndex) % cheers.length],
    }
  }),
)

export const lessonGroups = lessonSeeds.map((lesson, index) => ({
  id: lesson.id,
  title: lesson.title,
  badge: `${index + 1}단계`,
  description: lesson.description,
  words: lesson.words.map(([id]) => id),
}))

export const wordById = new Map(studyWords.map((word) => [word.id, word]))
