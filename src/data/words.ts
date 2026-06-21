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

type WordRow = readonly [
  id: string,
  word: string,
  meaning: string,
  category: WordCategory,
  phrase: string,
  koreanHint: string,
  cheer?: string,
]

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
  '그림을 잘 봤어요!',
  '한 단계 올라갔어요!',
]

const wordRows = [
  ['run', 'run', '달리다', 'play', 'I run to the ball.', '공을 향해 빠르게 달려요.', '빠르게 찾아냈어요!'],
  ['jump', 'jump', '뛰어오르다', 'play', 'I jump over a line.', '바닥 선을 폴짝 뛰어넘어요.', '폴짝 정답!'],
  ['walk', 'walk', '걷다', 'morning', 'I walk with my bag.', '가방을 메고 천천히 걸어요.', '차근차근 좋아요!'],
  ['go', 'go', '가다', 'morning', 'I go to school.', '학교 쪽으로 걸어가요.'],
  ['stop', 'stop', '멈추다', 'play', 'I stop at the line.', '빨간 표지 앞에서 멈춰요.'],
  ['sit', 'sit', '앉다', 'class', 'I sit on a chair.', '의자에 바르게 앉아요.'],
  ['stand', 'stand', '서다', 'class', 'I stand up.', '자리에서 똑바로 서요.'],
  ['come', 'come', '오다', 'home', 'I come to Dad.', '가족이 부르면 가까이 와요.'],
  ['turn', 'turn', '돌다', 'play', 'I turn around.', '몸을 빙글 돌려요.'],
  ['wait', 'wait', '기다리다', 'class', 'I wait in line.', '줄을 서서 차례를 기다려요.'],

  ['wake', 'wake', '일어나다', 'morning', 'I wake up early.', '아침에 눈을 뜨고 일어나요.', '상쾌하게 정답!'],
  ['wash', 'wash', '씻다', 'morning', 'I wash my hands.', '손에 비누 거품을 내고 씻어요.', '깨끗한 정답!'],
  ['brush', 'brush', '닦다', 'morning', 'I brush my teeth.', '칫솔로 이를 닦아요.', '반짝반짝 맞혔어요!'],
  ['dress', 'dress', '옷 입다', 'morning', 'I dress myself.', '아침에 옷을 갈아입어요.'],
  ['wear', 'wear', '입고 있다', 'body', 'I wear a hat.', '모자나 옷을 몸에 걸쳐요.'],
  ['comb', 'comb', '빗다', 'morning', 'I comb my hair.', '빗으로 머리를 가지런히 해요.'],
  ['eat', 'eat', '먹다', 'food', 'I eat rice for lunch.', '점심에 밥을 맛있게 먹어요.', '냠냠 정답!'],
  ['drink', 'drink', '마시다', 'food', 'I drink water.', '컵으로 물을 마셔요.', '시원하게 맞혔어요!'],
  ['sleep', 'sleep', '자다', 'morning', 'I sleep in my bed.', '침대에서 편하게 잠을 자요.', '포근한 정답!'],
  ['wipe', 'wipe', '닦아내다', 'home', 'I wipe my face.', '수건으로 얼굴이나 손을 닦아요.'],

  ['open', 'open', '열다', 'home', 'I open the door.', '손잡이를 잡고 문을 열어요.', '활짝 정답!'],
  ['close', 'close', '닫다', 'home', 'I close the box.', '상자 뚜껑을 꼭 닫아요.', '꼭 맞혔어요!'],
  ['help', 'help', '돕다', 'home', 'I help my mom.', '가족을 도와 물건을 들어요.', '마음까지 정답!'],
  ['clean', 'clean', '청소하다', 'home', 'I clean the table.', '수건으로 식탁을 닦아요.', '반듯하게 맞혔어요!'],
  ['cook', 'cook', '요리하다', 'home', 'I cook soup.', '냄비에서 따뜻한 국을 만들어요.', '따뜻한 정답!'],
  ['sweep', 'sweep', '쓸다', 'home', 'I sweep the floor.', '빗자루로 바닥을 쓸어요.'],
  ['fold', 'fold', '접다', 'home', 'I fold a towel.', '수건이나 옷을 반듯하게 접어요.'],
  ['carry', 'carry', '나르다', 'home', 'I carry a box.', '상자를 두 손으로 들어 옮겨요.'],
  ['pack', 'pack', '챙기다', 'home', 'I pack my bag.', '가방에 필요한 물건을 넣어요.'],
  ['share', 'share', '나누다', 'class', 'I share my crayons.', '친구에게 색연필을 나누어 줘요.', '함께해서 맞혔어요!'],

  ['read', 'read', '읽다', 'class', 'I read a book.', '책을 펼쳐 글을 읽어요.', '똑똑한 정답!'],
  ['write', 'write', '쓰다', 'class', 'I write my name.', '연필로 이름을 써요.', '또박또박 맞혔어요!'],
  ['draw', 'draw', '그리다', 'class', 'I draw a sun.', '종이에 해를 그려요.', '멋진 그림 정답!'],
  ['listen', 'listen', '듣다', 'class', 'I listen to music.', '귀를 기울여 소리를 들어요.', '귀 기울여 맞혔어요!'],
  ['look', 'look', '보다', 'class', 'I look at the picture.', '그림을 자세히 바라봐요.', '눈 크게 정답!'],
  ['count', 'count', '세다', 'class', 'I count the blocks.', '블록이 몇 개인지 하나씩 세요.'],
  ['cut', 'cut', '자르다', 'class', 'I cut paper.', '가위로 종이를 잘라요.'],
  ['glue', 'glue', '붙이다', 'class', 'I glue the paper.', '풀로 종이를 붙여요.'],
  ['color', 'color', '색칠하다', 'class', 'I color the star.', '크레용으로 그림에 색을 칠해요.'],
  ['ask', 'ask', '묻다', 'class', 'I ask a question.', '궁금한 것을 선생님께 물어요.'],

  ['play', 'play', '놀다', 'play', 'I play with blocks.', '블록을 쌓으며 놀아요.', '신나게 맞혔어요!'],
  ['sing', 'sing', '노래하다', 'play', 'I sing a happy song.', '즐거운 노래를 불러요.', '랄라 정답!'],
  ['dance', 'dance', '춤추다', 'play', 'I dance to music.', '음악에 맞춰 몸을 흔들어요.', '빙글빙글 맞혔어요!'],
  ['clap', 'clap', '박수치다', 'play', 'I clap my hands.', '두 손을 마주쳐 박수를 쳐요.', '짝짝짝 정답!'],
  ['throw', 'throw', '던지다', 'play', 'I throw a ball.', '공을 앞으로 던져요.'],
  ['catch', 'catch', '잡다', 'play', 'I catch a ball.', '날아오는 공을 두 손으로 잡아요.'],
  ['kick', 'kick', '차다', 'play', 'I kick the ball.', '발로 공을 차요.'],
  ['build', 'build', '쌓다', 'play', 'I build a tower.', '블록을 높이 쌓아요.'],
  ['ride', 'ride', '타다', 'play', 'I ride a bike.', '자전거나 탈것을 타요.'],
  ['slide', 'slide', '미끄러지다', 'play', 'I slide down.', '미끄럼틀을 타고 내려와요.'],

  ['rice', 'rice', '밥', 'food', 'I eat rice.', '그릇에 하얀 밥이 담겨 있어요.'],
  ['bread', 'bread', '빵', 'food', 'I eat bread.', '노릇한 빵을 손에 들어요.'],
  ['egg', 'egg', '달걀', 'food', 'I eat an egg.', '동그란 달걀이 접시에 있어요.'],
  ['milk', 'milk', '우유', 'food', 'I drink milk.', '하얀 우유가 컵에 담겨 있어요.'],
  ['water', 'water', '물', 'food', 'I drink water.', '맑은 물을 컵으로 마셔요.'],
  ['apple', 'apple', '사과', 'food', 'I eat an apple.', '빨간 사과를 한 입 먹어요.'],
  ['banana', 'banana', '바나나', 'food', 'I eat a banana.', '노란 바나나 껍질을 벗겨요.'],
  ['soup', 'soup', '수프', 'food', 'I eat soup.', '따뜻한 수프가 그릇에 있어요.'],
  ['snack', 'snack', '간식', 'food', 'I eat a snack.', '작은 간식을 접시에 담아요.'],
  ['spoon', 'spoon', '숟가락', 'food', 'I use a spoon.', '숟가락으로 음식을 떠요.'],

  ['hand', 'hand', '손', 'body', 'This is my hand.', '손가락이 있는 손을 들어요.'],
  ['foot', 'foot', '발', 'body', 'This is my foot.', '신발을 신는 발이에요.'],
  ['head', 'head', '머리', 'body', 'This is my head.', '머리 위에 모자가 있어요.'],
  ['eye', 'eye', '눈', 'body', 'This is my eye.', '눈으로 그림을 보아요.'],
  ['ear', 'ear', '귀', 'body', 'This is my ear.', '귀로 소리를 들어요.'],
  ['mouth', 'mouth', '입', 'body', 'This is my mouth.', '입으로 말하고 먹어요.'],
  ['tooth', 'tooth', '이', 'body', 'This is my tooth.', '하얀 이를 칫솔로 닦아요.'],
  ['shirt', 'shirt', '셔츠', 'body', 'I wear a shirt.', '윗몸에 입는 옷이에요.'],
  ['pants', 'pants', '바지', 'body', 'I wear pants.', '다리에 입는 옷이에요.'],
  ['shoes', 'shoes', '신발', 'body', 'I wear shoes.', '밖에 나갈 때 발에 신어요.'],

  ['happy', 'happy', '기쁜', 'feeling', 'I am happy.', '입꼬리가 올라가고 마음이 좋아요.'],
  ['sad', 'sad', '슬픈', 'feeling', 'I am sad.', '눈물이 나고 마음이 축 처져요.'],
  ['angry', 'angry', '화난', 'feeling', 'I am angry.', '눈썹이 찌푸려지고 속상해요.'],
  ['scared', 'scared', '무서운', 'feeling', 'I am scared.', '놀라서 몸이 움츠러들어요.'],
  ['tired', 'tired', '피곤한', 'feeling', 'I am tired.', '하품이 나오고 쉬고 싶어요.'],
  ['sorry', 'sorry', '미안한', 'feeling', 'I say sorry.', '실수했을 때 고개 숙여 말해요.'],
  ['please', 'please', '부탁해요', 'feeling', 'I say please.', '무언가를 정중하게 부탁해요.'],
  ['thank', 'thank', '고마워하다', 'feeling', 'I say thank you.', '도움을 받으면 고맙다고 말해요.'],
  ['hug', 'hug', '안다', 'feeling', 'I hug my dad.', '두 팔로 가족을 꼭 안아요.'],
  ['smile', 'smile', '미소 짓다', 'feeling', 'I smile at you.', '입을 살짝 올려 웃어요.'],

  ['home', 'home', '집', 'place', 'I am at home.', '가족과 지내는 집이에요.'],
  ['school', 'school', '학교', 'place', 'I go to school.', '친구와 선생님을 만나는 곳이에요.'],
  ['park', 'park', '공원', 'place', 'I play at the park.', '나무와 놀이터가 있는 곳이에요.'],
  ['room', 'room', '방', 'place', 'I clean my room.', '침대와 책상이 있는 방이에요.'],
  ['door', 'door', '문', 'place', 'I open the door.', '열고 닫으며 드나드는 문이에요.'],
  ['window', 'window', '창문', 'place', 'I look out the window.', '밖을 볼 수 있는 창문이에요.'],
  ['chair', 'chair', '의자', 'place', 'I sit on a chair.', '앉을 때 쓰는 의자예요.'],
  ['table', 'table', '식탁', 'place', 'I eat at the table.', '음식을 올려두는 식탁이에요.'],
  ['bag', 'bag', '가방', 'place', 'I pack my bag.', '책과 물건을 넣어 메는 가방이에요.'],
  ['book', 'book', '책', 'place', 'I read a book.', '종이가 여러 장 묶인 책이에요.'],

  ['sun', 'sun', '해', 'nature', 'The sun is bright.', '하늘에 밝게 떠 있는 해예요.'],
  ['rain', 'rain', '비', 'nature', 'Rain falls down.', '하늘에서 물방울이 떨어져요.'],
  ['snow', 'snow', '눈', 'nature', 'Snow is white.', '하얀 눈송이가 내려요.'],
  ['wind', 'wind', '바람', 'nature', 'The wind blows.', '바람이 불어 머리카락이 흔들려요.'],
  ['tree', 'tree', '나무', 'nature', 'I see a tree.', '줄기와 초록 잎이 있는 나무예요.'],
  ['flower', 'flower', '꽃', 'nature', 'I smell a flower.', '알록달록 꽃잎이 피어 있어요.'],
  ['up', 'up', '위', 'nature', 'I look up.', '화살표가 위쪽을 가리켜요.'],
  ['down', 'down', '아래', 'nature', 'I look down.', '화살표가 아래쪽을 가리켜요.'],
  ['left', 'left', '왼쪽', 'nature', 'I turn left.', '화살표가 왼쪽을 가리켜요.'],
  ['right', 'right', '오른쪽', 'nature', 'I turn right.', '화살표가 오른쪽을 가리켜요.'],
] satisfies readonly WordRow[]

export const studyWords: StudyWord[] = wordRows.map(
  ([id, word, meaning, category, phrase, koreanHint, cheer], index) => ({
    id,
    word,
    meaning,
    category,
    phrase,
    koreanHint,
    cheer: cheer ?? cheers[index % cheers.length],
  }),
)

export const lessonGroups = [
  {
    id: 'basic-move',
    title: '기본 움직임',
    badge: '1단계',
    description: '가장 쉬운 몸동작 말',
    words: ['run', 'jump', 'walk', 'go', 'stop', 'sit', 'stand', 'come', 'turn', 'wait'],
  },
  {
    id: 'daily-routine',
    title: '하루 습관',
    badge: '2단계',
    description: '아침부터 밤까지 쓰는 말',
    words: ['wake', 'wash', 'brush', 'dress', 'wear', 'comb', 'eat', 'drink', 'sleep', 'wipe'],
  },
  {
    id: 'home-help',
    title: '집에서 돕기',
    badge: '3단계',
    description: '집안일과 정리 말',
    words: ['open', 'close', 'help', 'clean', 'cook', 'sweep', 'fold', 'carry', 'pack', 'share'],
  },
  {
    id: 'class-tools',
    title: '교실 활동',
    badge: '4단계',
    description: '수업 시간에 자주 쓰는 말',
    words: ['read', 'write', 'draw', 'listen', 'look', 'count', 'cut', 'glue', 'color', 'ask'],
  },
  {
    id: 'play-skills',
    title: '놀이 동작',
    badge: '5단계',
    description: '놀이터와 음악 놀이 말',
    words: ['play', 'sing', 'dance', 'clap', 'throw', 'catch', 'kick', 'build', 'ride', 'slide'],
  },
  {
    id: 'food-table',
    title: '음식과 식탁',
    badge: '6단계',
    description: '먹고 마실 때 보는 말',
    words: ['rice', 'bread', 'egg', 'milk', 'water', 'apple', 'banana', 'soup', 'snack', 'spoon'],
  },
  {
    id: 'body-clothes',
    title: '몸과 옷',
    badge: '7단계',
    description: '몸 이름과 입는 것',
    words: ['hand', 'foot', 'head', 'eye', 'ear', 'mouth', 'tooth', 'shirt', 'pants', 'shoes'],
  },
  {
    id: 'feelings',
    title: '마음과 인사',
    badge: '8단계',
    description: '감정과 예쁜 말',
    words: ['happy', 'sad', 'angry', 'scared', 'tired', 'sorry', 'please', 'thank', 'hug', 'smile'],
  },
  {
    id: 'places-things',
    title: '장소와 물건',
    badge: '9단계',
    description: '매일 보는 곳과 물건',
    words: ['home', 'school', 'park', 'room', 'door', 'window', 'chair', 'table', 'bag', 'book'],
  },
  {
    id: 'nature-direction',
    title: '자연과 방향',
    badge: '10단계',
    description: '날씨, 자연, 방향 말',
    words: ['sun', 'rain', 'snow', 'wind', 'tree', 'flower', 'up', 'down', 'left', 'right'],
  },
]

export const wordById = new Map(studyWords.map((word) => [word.id, word]))
