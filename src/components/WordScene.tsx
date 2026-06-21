import type { StudyWord } from '../data/words'
import type { ReactNode } from 'react'

type WordSceneProps = {
  word: StudyWord
  compact?: boolean
}

type KidProps = {
  x: number
  y: number
  pose?: 'stand' | 'run' | 'jump' | 'sit' | 'dance' | 'clap' | 'carry'
  shirt?: string
  scale?: number
}

const skin = '#f6c38f'
const hair = '#3f2d28'
const navy = '#2f455c'
const shoe = '#324052'

function Kid({ x, y, pose = 'stand', shirt = '#2f80ed', scale = 1 }: KidProps) {
  const transform = `translate(${x} ${y}) scale(${scale})`

  if (pose === 'run') {
    return (
      <g transform={`${transform} rotate(-7)`}>
        <circle cx="0" cy="-66" r="17" fill={skin} />
        <path d="M-16 -72c8-16 29-13 34 0-8-5-19-4-34 0Z" fill={hair} />
        <path d="M-9 -49c12-8 25-4 31 9l9 31-43 4-6-27c-2-8 1-14 9-17Z" fill={shirt} />
        <path d="M-16 -42l-25 18M18 -40l26 14" stroke={skin} strokeWidth="10" strokeLinecap="round" />
        <path d="M-2 -11l-33 26M20 -10l27 24" stroke={navy} strokeWidth="11" strokeLinecap="round" />
        <path d="M-39 18l-14 6M51 16l15 1" stroke={shoe} strokeWidth="8" strokeLinecap="round" />
      </g>
    )
  }

  if (pose === 'jump') {
    return (
      <g transform={transform}>
        <circle cx="0" cy="-82" r="17" fill={skin} />
        <path d="M-15 -88c8-16 29-13 33 1-8-4-20-4-33-1Z" fill={hair} />
        <path d="M-17 -63c11-10 27-10 36 0l10 36c-16 8-34 8-49 0l3-36Z" fill={shirt} />
        <path d="M-18 -59l-24-24M18 -59l24-24" stroke={skin} strokeWidth="10" strokeLinecap="round" />
        <path d="M-8 -26l-24 28M12 -26l26 27" stroke={navy} strokeWidth="11" strokeLinecap="round" />
        <path d="M-34 4l-12 4M40 3l13 4" stroke={shoe} strokeWidth="8" strokeLinecap="round" />
      </g>
    )
  }

  if (pose === 'sit') {
    return (
      <g transform={transform}>
        <circle cx="0" cy="-65" r="17" fill={skin} />
        <path d="M-16 -72c7-14 27-14 34 0-8-4-21-4-34 0Z" fill={hair} />
        <path d="M-18 -48c10-9 28-9 36 0l6 34c-15 7-32 7-48 0l6-34Z" fill={shirt} />
        <path d="M-20 -39l-18 20M20 -39l18 20" stroke={skin} strokeWidth="10" strokeLinecap="round" />
        <path d="M-14 -13h-28M14 -13h29" stroke={navy} strokeWidth="12" strokeLinecap="round" />
        <path d="M-44 -13h-13M45 -13h13" stroke={shoe} strokeWidth="8" strokeLinecap="round" />
      </g>
    )
  }

  if (pose === 'dance') {
    return (
      <g transform={`${transform} rotate(7)`}>
        <circle cx="0" cy="-68" r="17" fill={skin} />
        <path d="M-16 -74c8-16 29-13 34 1-8-5-20-5-34-1Z" fill={hair} />
        <path d="M-18 -50c11-9 27-9 38 0l5 42c-16 8-34 8-50 0l7-42Z" fill={shirt} />
        <path d="M-18 -43l-29-25M20 -43l31 19" stroke={skin} strokeWidth="10" strokeLinecap="round" />
        <path d="M-8 -7l-18 32M15 -8l21 31" stroke={navy} strokeWidth="11" strokeLinecap="round" />
        <path d="M-29 28l-12 5M39 25l12 5" stroke={shoe} strokeWidth="8" strokeLinecap="round" />
      </g>
    )
  }

  if (pose === 'clap') {
    return (
      <g transform={transform}>
        <circle cx="0" cy="-66" r="17" fill={skin} />
        <path d="M-16 -72c8-15 29-13 34 0-8-5-20-5-34 0Z" fill={hair} />
        <path d="M-18 -48c11-9 27-9 36 0l6 39c-15 8-33 8-48 0l6-39Z" fill={shirt} />
        <path d="M-17 -40l13-13M17 -40L4 -53" stroke={skin} strokeWidth="10" strokeLinecap="round" />
        <path d="M-5 -55h10" stroke="#fbd5a6" strokeWidth="10" strokeLinecap="round" />
        <path d="M-10 -8l-13 27M12 -8l14 27" stroke={navy} strokeWidth="11" strokeLinecap="round" />
        <path d="M-26 22l-10 3M29 22l10 3" stroke={shoe} strokeWidth="8" strokeLinecap="round" />
      </g>
    )
  }

  if (pose === 'carry') {
    return (
      <g transform={transform}>
        <circle cx="0" cy="-66" r="17" fill={skin} />
        <path d="M-16 -72c8-15 29-13 34 0-8-5-20-5-34 0Z" fill={hair} />
        <path d="M-18 -48c11-9 27-9 36 0l5 38c-15 8-31 8-46 0l5-38Z" fill={shirt} />
        <path d="M-21 -37l-24 14M21 -37l24 14" stroke={skin} strokeWidth="10" strokeLinecap="round" />
        <path d="M-10 -9l-10 29M12 -9l11 29" stroke={navy} strokeWidth="11" strokeLinecap="round" />
        <path d="M-23 23l-11 2M26 23l11 2" stroke={shoe} strokeWidth="8" strokeLinecap="round" />
      </g>
    )
  }

  return (
    <g transform={transform}>
      <circle cx="0" cy="-66" r="17" fill={skin} />
      <path d="M-16 -72c8-15 29-13 34 0-8-5-20-5-34 0Z" fill={hair} />
      <path d="M-18 -48c11-9 27-9 36 0l5 38c-15 8-31 8-46 0l5-38Z" fill={shirt} />
      <path d="M-20 -39l-19 21M20 -39l19 21" stroke={skin} strokeWidth="10" strokeLinecap="round" />
      <path d="M-10 -9l-10 29M12 -9l11 29" stroke={navy} strokeWidth="11" strokeLinecap="round" />
      <path d="M-23 23l-11 2M26 23l11 2" stroke={shoe} strokeWidth="8" strokeLinecap="round" />
    </g>
  )
}

function BaseScene({ children }: { children: ReactNode }) {
  return (
    <>
      <rect x="18" y="18" width="284" height="184" rx="28" fill="#fff8df" />
      <path d="M31 154c35-24 66-10 94-5 36 7 62-21 96-17 27 3 46 20 68 11v35H31v-24Z" fill="#dff4e6" />
      <ellipse cx="160" cy="178" rx="105" ry="13" fill="#b9dfc5" opacity=".75" />
      {children}
    </>
  )
}

function MotionMarks() {
  return (
    <g fill="none" stroke="#5cb2ff" strokeLinecap="round" strokeWidth="7" opacity=".8">
      <path d="M52 82h45" />
      <path d="M37 111h34" />
      <path d="M61 134h31" />
    </g>
  )
}

const categoryPalette: Record<StudyWord['category'], string> = {
  morning: '#2f80ed',
  play: '#f2994a',
  home: '#27ae60',
  class: '#eb5757',
  food: '#9b51e0',
  body: '#00a6a6',
  feeling: '#d84f7a',
  place: '#6d5dfc',
  nature: '#7a8b20',
}

type IconSceneProps = {
  word: StudyWord
  children: ReactNode
  pose?: KidProps['pose']
  kidX?: number
  kidY?: number
  kidScale?: number
  showKid?: boolean
}

function IconScene({
  word,
  children,
  pose = 'stand',
  kidX = 83,
  kidY = 153,
  kidScale = 0.82,
  showKid = true,
}: IconSceneProps) {
  const color = categoryPalette[word.category]

  return (
    <BaseScene>
      {showKid && <Kid x={kidX} y={kidY} pose={pose} shirt={color} scale={kidScale} />}
      <g>{children}</g>
    </BaseScene>
  )
}

function FaceScene({ word, mood }: { word: StudyWord; mood: 'happy' | 'sad' | 'angry' | 'scared' | 'tired' }) {
  const brow =
    mood === 'angry' ? (
      <path d="M117 92l29 12M203 92l-29 12" stroke="#6a3d2e" strokeWidth="8" strokeLinecap="round" />
    ) : mood === 'scared' ? (
      <path d="M116 96c12-13 28-13 40 0M164 96c12-13 28-13 40 0" stroke="#6a3d2e" strokeWidth="7" strokeLinecap="round" fill="none" />
    ) : null
  const mouth =
    mood === 'happy' ? (
      <path d="M125 127c19 22 51 22 70 0" stroke="#9b3d3d" strokeWidth="8" strokeLinecap="round" fill="none" />
    ) : mood === 'sad' ? (
      <path d="M126 148c20-20 50-20 69 0" stroke="#9b3d3d" strokeWidth="8" strokeLinecap="round" fill="none" />
    ) : mood === 'tired' ? (
      <path d="M132 138h57" stroke="#9b3d3d" strokeWidth="8" strokeLinecap="round" />
    ) : mood === 'scared' ? (
      <ellipse cx="160" cy="138" rx="14" ry="18" fill="#9b3d3d" />
    ) : (
      <path d="M132 139c16 10 39 10 56 0" stroke="#9b3d3d" strokeWidth="8" strokeLinecap="round" fill="none" />
    )

  return (
    <IconScene word={word} showKid={false}>
      <circle cx="160" cy="113" r="64" fill="#ffd78a" stroke="#d84f7a" strokeWidth="7" />
      {brow}
      <circle cx="134" cy="111" r="8" fill="#3f2d28" />
      <circle cx="186" cy="111" r="8" fill="#3f2d28" />
      {mood === 'sad' && <path d="M112 125c-8 16-5 28 8 36" stroke="#5cb2ff" strokeWidth="7" strokeLinecap="round" fill="none" />}
      {mood === 'tired' && (
        <path d="M204 64h21M225 64l-21 25h24M233 39h16M249 39l-16 20h18" stroke="#7d8fa1" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      )}
      {mouth}
    </IconScene>
  )
}

function DirectionScene({ word, direction }: { word: StudyWord; direction: 'up' | 'down' | 'left' | 'right' }) {
  const transforms = {
    up: 'translate(160 111) rotate(-90)',
    down: 'translate(160 111) rotate(90)',
    left: 'translate(160 111) rotate(180)',
    right: 'translate(160 111)',
  }

  return (
    <IconScene word={word} showKid={false}>
      <g transform={transforms[direction]}>
        <path d="M-62 0H40" stroke="#2f80ed" strokeWidth="24" strokeLinecap="round" />
        <path d="M34-42l58 42-58 42Z" fill="#2f80ed" />
      </g>
    </IconScene>
  )
}

function renderGenericWord(word: StudyWord) {
  switch (word.id) {
    case 'go':
      return (
        <IconScene word={word} pose="run">
          <path d="M142 142h95" stroke="#2f80ed" strokeWidth="16" strokeLinecap="round" />
          <path d="M226 116l42 26-42 26Z" fill="#2f80ed" />
          <rect x="210" y="74" width="52" height="46" rx="7" fill="#ffffff" stroke="#6d5dfc" strokeWidth="5" />
          <path d="M224 120V92h24v28M210 90l26-20 26 20" stroke="#6d5dfc" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </IconScene>
      )
    case 'stop':
      return (
        <IconScene word={word} pose="stand">
          <path d="M178 65h61l31 31v61l-31 31h-61l-31-31V96Z" fill="#eb5757" stroke="#9b2f2f" strokeWidth="6" />
          <path d="M176 126h67" stroke="#ffffff" strokeWidth="13" strokeLinecap="round" />
        </IconScene>
      )
    case 'sit':
      return (
        <IconScene word={word} pose="sit" kidX={154}>
          <rect x="191" y="116" width="68" height="14" rx="7" fill="#8d5d45" />
          <path d="M205 130v43M246 130v43M250 78v94" stroke="#8d5d45" strokeWidth="9" strokeLinecap="round" />
        </IconScene>
      )
    case 'stand':
      return (
        <IconScene word={word} kidX={160}>
          <path d="M87 168h146" stroke="#94c99d" strokeWidth="13" strokeLinecap="round" />
          <path d="M215 75l28 24-28 24" stroke="#2f80ed" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </IconScene>
      )
    case 'come':
      return (
        <IconScene word={word} kidX={203}>
          <path d="M210 140H93" stroke="#27ae60" strokeWidth="16" strokeLinecap="round" />
          <path d="M104 109l-45 31 45 31Z" fill="#27ae60" />
          <circle cx="73" cy="83" r="19" fill="#ffcf33" />
          <path d="M66 84c5 6 12 6 17 0" stroke="#8d5d45" strokeWidth="4" strokeLinecap="round" fill="none" />
        </IconScene>
      )
    case 'turn':
      return (
        <IconScene word={word} pose="dance" kidX={152}>
          <path d="M208 88c34 14 37 61 7 80-27 17-68 5-78-27" stroke="#f2994a" strokeWidth="11" strokeLinecap="round" fill="none" />
          <path d="M199 67l34 26-39 17" fill="#f2994a" />
        </IconScene>
      )
    case 'wait':
      return (
        <IconScene word={word} pose="stand" kidX={88}>
          <circle cx="218" cy="113" r="48" fill="#ffffff" stroke="#2f80ed" strokeWidth="7" />
          <path d="M218 82v35l25 17" stroke="#2f80ed" strokeWidth="8" strokeLinecap="round" />
          <path d="M53 171h107" stroke="#94c99d" strokeWidth="10" strokeLinecap="round" strokeDasharray="14 13" />
        </IconScene>
      )
    case 'dress':
    case 'wear':
    case 'shirt':
      return (
        <IconScene word={word} kidX={82}>
          <path d="M180 77l31-22 31 22 26 21-23 26-10-11v63h-49v-63l-10 11-23-26Z" fill="#8ec9ff" stroke="#2f80ed" strokeWidth="6" strokeLinejoin="round" />
          {word.id === 'wear' && (
            <>
              <path d="M73 76c11-16 32-16 43 0l-6 14H79Z" fill="#ffcf33" stroke="#f2994a" strokeWidth="4" />
              <path d="M74 90h44" stroke="#f2994a" strokeWidth="5" strokeLinecap="round" />
            </>
          )}
        </IconScene>
      )
    case 'comb':
      return (
        <IconScene word={word} kidX={105}>
          <path d="M184 83l76 23-11 35-76-23Z" fill="#ffcf33" stroke="#f2994a" strokeWidth="5" />
          <path d="M183 118l-8 26M200 123l-8 27M217 128l-8 26M234 133l-8 24M251 138l-8 20" stroke="#f2994a" strokeWidth="5" strokeLinecap="round" />
          <path d="M124 72c13-25 48-19 54 7" stroke="#3f2d28" strokeWidth="9" strokeLinecap="round" fill="none" />
        </IconScene>
      )
    case 'wipe':
      return (
        <IconScene word={word} kidX={104}>
          <path d="M178 91c33-16 66-5 80 23-24 29-57 39-95 28 13-14 18-31 15-51Z" fill="#ffffff" stroke="#00a6a6" strokeWidth="6" strokeLinejoin="round" />
          <path d="M185 116h58M176 136h43" stroke="#b8dfe8" strokeWidth="6" strokeLinecap="round" />
        </IconScene>
      )
    case 'sweep':
      return (
        <IconScene word={word} kidX={84}>
          <path d="M150 84l89 89" stroke="#8d5d45" strokeWidth="8" strokeLinecap="round" />
          <path d="M228 151l38 26M237 143l39 18M247 135l40 11" stroke="#27ae60" strokeWidth="8" strokeLinecap="round" />
          <path d="M177 177h94" stroke="#b9dfc5" strokeWidth="10" strokeLinecap="round" />
        </IconScene>
      )
    case 'fold':
      return (
        <IconScene word={word} kidX={78}>
          <path d="M162 85h90v80h-90Z" fill="#8ec9ff" stroke="#2f80ed" strokeWidth="6" />
          <path d="M162 85l45 39 45-39M207 124v41M174 151h66" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </IconScene>
      )
    case 'carry':
      return (
        <IconScene word={word} pose="carry" kidX={115}>
          <rect x="170" y="98" width="80" height="56" rx="9" fill="#ffd78a" stroke="#8d5d45" strokeWidth="6" />
          <path d="M210 98v56M171 126h78" stroke="#c7905d" strokeWidth="5" />
        </IconScene>
      )
    case 'pack':
    case 'bag':
      return (
        <IconScene word={word} kidX={87}>
          <path d="M174 91h70c13 0 23 10 23 23v53H151v-53c0-13 10-23 23-23Z" fill="#8ec9ff" stroke="#2f80ed" strokeWidth="6" />
          <path d="M184 91v-15h50v15M151 130h116M184 146h49" stroke="#2f80ed" strokeWidth="6" strokeLinecap="round" fill="none" />
          <circle cx="174" cy="158" r="5" fill="#ffffff" />
          <circle cx="244" cy="158" r="5" fill="#ffffff" />
        </IconScene>
      )
    case 'count':
      return (
        <IconScene word={word} kidX={82}>
          {[0, 1, 2, 3, 4].map((index) => (
            <circle key={index} cx={162 + index * 22} cy={118 + (index % 2) * 30} r="13" fill={index % 2 ? '#ffcf33' : '#2f80ed'} />
          ))}
          <path d="M151 172h113" stroke="#a0b7c4" strokeWidth="8" strokeLinecap="round" />
        </IconScene>
      )
    case 'cut':
      return (
        <IconScene word={word} kidX={81}>
          <circle cx="176" cy="143" r="18" fill="none" stroke="#eb5757" strokeWidth="7" />
          <circle cx="221" cy="143" r="18" fill="none" stroke="#eb5757" strokeWidth="7" />
          <path d="M190 131l65-55M206 131l48 36M190 155l64 24" stroke="#657786" strokeWidth="7" strokeLinecap="round" />
          <rect x="164" y="75" width="88" height="45" rx="7" fill="#ffffff" stroke="#a0b7c4" strokeWidth="5" />
        </IconScene>
      )
    case 'glue':
      return (
        <IconScene word={word} kidX={80}>
          <path d="M191 71h42l10 36v65h-62v-65Z" fill="#ffffff" stroke="#2f80ed" strokeWidth="6" strokeLinejoin="round" />
          <path d="M192 103h50M189 130h56" stroke="#8ec9ff" strokeWidth="7" strokeLinecap="round" />
          <rect x="197" y="52" width="30" height="22" rx="6" fill="#ffcf33" stroke="#f2994a" strokeWidth="4" />
        </IconScene>
      )
    case 'color':
      return (
        <IconScene word={word} kidX={78}>
          <path d="M158 91l22-31 22 31v86h-44Z" fill="#eb5757" stroke="#9b2f2f" strokeWidth="5" strokeLinejoin="round" />
          <path d="M211 91l22-31 22 31v86h-44Z" fill="#ffcf33" stroke="#f2994a" strokeWidth="5" strokeLinejoin="round" />
          <path d="M169 86h22M222 86h22" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
        </IconScene>
      )
    case 'ask':
      return (
        <IconScene word={word} kidX={82}>
          <path d="M169 72h82c14 0 25 11 25 25v35c0 14-11 25-25 25h-39l-32 25 8-25h-19c-14 0-25-11-25-25V97c0-14 11-25 25-25Z" fill="#ffffff" stroke="#2f80ed" strokeWidth="6" />
          <text x="210" y="135" fill="#2f80ed" fontSize="66" fontWeight="900" textAnchor="middle">
            ?
          </text>
        </IconScene>
      )
    case 'throw':
      return (
        <IconScene word={word} pose="run" kidX={94}>
          <path d="M137 88c36-31 70-38 102-20" stroke="#5cb2ff" strokeWidth="7" strokeLinecap="round" strokeDasharray="14 12" fill="none" />
          <circle cx="253" cy="76" r="19" fill="#ffcf33" stroke="#f2994a" strokeWidth="5" />
        </IconScene>
      )
    case 'catch':
      return (
        <IconScene word={word} kidX={195}>
          <circle cx="95" cy="94" r="20" fill="#ffcf33" stroke="#f2994a" strokeWidth="5" />
          <path d="M119 105c34 6 53 18 68 41" stroke="#5cb2ff" strokeWidth="7" strokeLinecap="round" strokeDasharray="14 12" fill="none" />
          <path d="M173 115l-30 17M219 115l-30 17" stroke={skin} strokeWidth="10" strokeLinecap="round" />
        </IconScene>
      )
    case 'kick':
      return (
        <IconScene word={word} pose="run" kidX={130}>
          <circle cx="234" cy="154" r="21" fill="#ffffff" stroke="#324052" strokeWidth="5" />
          <path d="M222 143l12 23M247 144l-27 13M225 168l23-20" stroke="#324052" strokeWidth="4" strokeLinecap="round" />
        </IconScene>
      )
    case 'build':
      return (
        <IconScene word={word} pose="sit" kidX={83}>
          <rect x="158" y="132" width="38" height="38" rx="8" fill="#2f80ed" />
          <rect x="201" y="101" width="38" height="69" rx="8" fill="#ffcf33" />
          <rect x="244" y="72" width="38" height="98" rx="8" fill="#27ae60" />
          <rect x="159" y="92" width="38" height="35" rx="8" fill="#eb5757" />
        </IconScene>
      )
    case 'ride':
      return (
        <IconScene word={word} pose="sit" kidX={147} kidY={133}>
          <circle cx="105" cy="164" r="25" fill="none" stroke="#324052" strokeWidth="7" />
          <circle cx="225" cy="164" r="25" fill="none" stroke="#324052" strokeWidth="7" />
          <path d="M105 164l49-45 31 45H105l36-2 48-42h32" stroke="#2f80ed" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </IconScene>
      )
    case 'slide':
      return (
        <IconScene word={word} pose="sit" kidX={184} kidY={126}>
          <path d="M88 70h83v28H88z" fill="#ffcf33" stroke="#f2994a" strokeWidth="6" />
          <path d="M171 98l80 73H104" stroke="#2f80ed" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M103 70v102" stroke="#8d5d45" strokeWidth="8" strokeLinecap="round" />
        </IconScene>
      )
    case 'rice':
      return (
        <IconScene word={word} showKid={false}>
          <ellipse cx="160" cy="121" rx="77" ry="33" fill="#ffffff" stroke="#9b51e0" strokeWidth="6" />
          <path d="M94 120c18 50 114 50 132 0" fill="#d8c4ff" stroke="#9b51e0" strokeWidth="6" />
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <ellipse key={index} cx={113 + index * 19} cy={105 + (index % 2) * 8} rx="10" ry="6" fill="#ffffff" stroke="#d9d9d9" strokeWidth="3" />
          ))}
        </IconScene>
      )
    case 'bread':
      return (
        <IconScene word={word} showKid={false}>
          <path d="M100 95c0-30 120-30 120 0v74H100Z" fill="#e6a85c" stroke="#8d5d45" strokeWidth="7" />
          <path d="M130 118c15 10 44 10 59 0M126 145h68" stroke="#ffd78a" strokeWidth="8" strokeLinecap="round" />
        </IconScene>
      )
    case 'egg':
      return (
        <IconScene word={word} showKid={false}>
          <ellipse cx="160" cy="122" rx="78" ry="46" fill="#ffffff" stroke="#a0b7c4" strokeWidth="6" />
          <circle cx="160" cy="122" r="25" fill="#ffcf33" stroke="#f2994a" strokeWidth="5" />
        </IconScene>
      )
    case 'milk':
      return (
        <IconScene word={word} showKid={false}>
          <path d="M119 73h82l21 33v76H98v-76Z" fill="#ffffff" stroke="#2f80ed" strokeWidth="7" strokeLinejoin="round" />
          <path d="M119 73l20 34h83M139 107v75" stroke="#8ec9ff" strokeWidth="7" strokeLinecap="round" />
          <path d="M114 139h90" stroke="#2f80ed" strokeWidth="11" strokeLinecap="round" />
        </IconScene>
      )
    case 'water':
      return (
        <IconScene word={word} showKid={false}>
          <path d="M119 75h82l-14 100h-54Z" fill="#b6e3ff" stroke="#2f80ed" strokeWidth="7" />
          <path d="M127 125h66" stroke="#ffffff" strokeWidth="9" strokeLinecap="round" opacity=".85" />
          <path d="M213 89c27 9 24 57-6 69" fill="none" stroke="#2f80ed" strokeWidth="7" strokeLinecap="round" />
        </IconScene>
      )
    case 'apple':
      return (
        <IconScene word={word} showKid={false}>
          <path d="M160 84c39-28 84 6 72 52-12 49-53 58-72 35-19 23-60 14-72-35-12-46 33-80 72-52Z" fill="#eb5757" stroke="#9b2f2f" strokeWidth="7" />
          <path d="M160 83c-4-26 11-39 31-43" stroke="#8d5d45" strokeWidth="8" strokeLinecap="round" fill="none" />
          <path d="M182 51c21-3 34 8 36 24-20 1-33-8-36-24Z" fill="#27ae60" />
        </IconScene>
      )
    case 'banana':
      return (
        <IconScene word={word} showKid={false}>
          <path d="M85 113c54 58 129 69 168-14-17 97-127 113-184 34Z" fill="#ffcf33" stroke="#f2994a" strokeWidth="7" strokeLinejoin="round" />
          <path d="M83 111l-19-11M253 99l19-13" stroke="#8d5d45" strokeWidth="8" strokeLinecap="round" />
        </IconScene>
      )
    case 'soup':
      return (
        <IconScene word={word} showKid={false}>
          <ellipse cx="160" cy="116" rx="82" ry="34" fill="#ffcf33" stroke="#f2994a" strokeWidth="7" />
          <path d="M87 116c21 65 125 65 146 0" fill="#ffd78a" stroke="#f2994a" strokeWidth="7" />
          <path d="M124 74c-12-22 20-25 8-47M161 74c-12-22 20-25 8-47M198 74c-12-22 20-25 8-47" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" opacity=".9" fill="none" />
        </IconScene>
      )
    case 'snack':
      return (
        <IconScene word={word} showKid={false}>
          <path d="M102 86h116l22 87H80Z" fill="#f9e7ff" stroke="#9b51e0" strokeWidth="7" strokeLinejoin="round" />
          <circle cx="126" cy="120" r="15" fill="#ffcf33" />
          <circle cx="161" cy="142" r="14" fill="#eb5757" />
          <circle cx="198" cy="118" r="15" fill="#27ae60" />
        </IconScene>
      )
    case 'spoon':
      return (
        <IconScene word={word} showKid={false}>
          <ellipse cx="131" cy="86" rx="29" ry="45" fill="#d9ecf3" stroke="#657786" strokeWidth="7" />
          <path d="M146 124l60 68" stroke="#657786" strokeWidth="13" strokeLinecap="round" />
          <path d="M196 88h45M208 88v88M230 88v88" stroke="#a0b7c4" strokeWidth="8" strokeLinecap="round" />
        </IconScene>
      )
    case 'hand':
      return (
        <IconScene word={word} showKid={false}>
          <path d="M112 150V93c0-9 14-9 14 0v38-50c0-10 16-10 16 0v47-55c0-10 17-10 17 0v57-45c0-10 16-10 16 0v57l16-21c8-10 22 0 15 12l-35 60c-12 20-59 18-59-23Z" fill={skin} stroke="#b77a50" strokeWidth="6" strokeLinejoin="round" />
        </IconScene>
      )
    case 'foot':
      return (
        <IconScene word={word} showKid={false}>
          <path d="M103 145c34 23 97 23 122 2 18-15 3-38-29-34-32 4-52-5-66-30-11-20-39-11-38 14 1 18-8 31 11 48Z" fill={skin} stroke="#b77a50" strokeWidth="7" />
          <circle cx="202" cy="111" r="7" fill="#fbd5a6" />
          <circle cx="220" cy="119" r="6" fill="#fbd5a6" />
        </IconScene>
      )
    case 'head':
      return (
        <IconScene word={word} showKid={false}>
          <circle cx="160" cy="117" r="62" fill={skin} stroke="#b77a50" strokeWidth="7" />
          <path d="M102 96c21-50 94-54 117 0-29-18-66-20-117 0Z" fill={hair} />
          <circle cx="137" cy="120" r="7" fill="#3f2d28" />
          <circle cx="183" cy="120" r="7" fill="#3f2d28" />
          <path d="M140 146c13 10 27 10 40 0" stroke="#9b3d3d" strokeWidth="7" strokeLinecap="round" fill="none" />
        </IconScene>
      )
    case 'eye':
      return (
        <IconScene word={word} showKid={false}>
          <path d="M74 116c45-50 127-50 172 0-45 50-127 50-172 0Z" fill="#ffffff" stroke="#2f80ed" strokeWidth="7" />
          <circle cx="160" cy="116" r="33" fill="#8ec9ff" stroke="#2f80ed" strokeWidth="6" />
          <circle cx="160" cy="116" r="14" fill="#324052" />
        </IconScene>
      )
    case 'ear':
      return (
        <IconScene word={word} showKid={false}>
          <path d="M160 63c41 0 65 31 65 67 0 43-27 62-58 62-22 0-39-12-39-31 0-24 30-24 30-49 0-14-13-17-24-8" fill={skin} stroke="#b77a50" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M158 98c24 2 31 31 8 47" stroke="#b77a50" strokeWidth="7" strokeLinecap="round" fill="none" />
        </IconScene>
      )
    case 'mouth':
      return (
        <IconScene word={word} showKid={false}>
          <path d="M92 119c45 37 91 37 136 0-12 54-124 54-136 0Z" fill="#ffffff" stroke="#d84f7a" strokeWidth="7" strokeLinejoin="round" />
          <path d="M103 119c35 14 79 14 114 0" stroke="#d84f7a" strokeWidth="7" strokeLinecap="round" />
        </IconScene>
      )
    case 'tooth':
      return (
        <IconScene word={word} showKid={false}>
          <path d="M118 76c18-19 36-7 42 2 6-9 24-21 42-2 24 25 3 104-24 104-12 0-11-33-18-33s-6 33-18 33c-27 0-48-79-24-104Z" fill="#ffffff" stroke="#a0b7c4" strokeWidth="7" strokeLinejoin="round" />
          <path d="M207 83l50-13M214 99l49 14" stroke="#2f80ed" strokeWidth="7" strokeLinecap="round" />
        </IconScene>
      )
    case 'pants':
      return (
        <IconScene word={word} kidX={80}>
          <path d="M167 71h81l-1 108h-34l-7-61-18 61h-35Z" fill="#2f80ed" stroke="#324052" strokeWidth="6" strokeLinejoin="round" />
          <path d="M167 101h76M206 101v17" stroke="#8ec9ff" strokeWidth="6" strokeLinecap="round" />
        </IconScene>
      )
    case 'shoes':
      return (
        <IconScene word={word} kidX={78}>
          <path d="M151 132c26 21 58 19 89 4l26 19c-23 24-91 25-131 3Z" fill="#324052" stroke="#1f2733" strokeWidth="6" strokeLinejoin="round" />
          <path d="M143 89c26 21 58 19 89 4l26 19c-23 24-91 25-131 3Z" fill="#8ec9ff" stroke="#2f80ed" strokeWidth="6" strokeLinejoin="round" />
          <path d="M175 111h41M184 154h41" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
        </IconScene>
      )
    case 'happy':
      return <FaceScene word={word} mood="happy" />
    case 'sad':
      return <FaceScene word={word} mood="sad" />
    case 'angry':
      return <FaceScene word={word} mood="angry" />
    case 'scared':
      return <FaceScene word={word} mood="scared" />
    case 'tired':
      return <FaceScene word={word} mood="tired" />
    case 'sorry':
      return (
        <IconScene word={word} pose="stand" kidX={160}>
          <path d="M111 74c22-23 77-23 99 0" stroke="#d84f7a" strokeWidth="8" strokeLinecap="round" fill="none" />
          <path d="M145 115c10 9 21 9 31 0" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
          <path d="M124 160c21 12 51 12 72 0" stroke="#6a3d2e" strokeWidth="7" strokeLinecap="round" fill="none" />
        </IconScene>
      )
    case 'please':
      return (
        <IconScene word={word} showKid={false}>
          <path d="M129 159l-35-36c-9-9 3-22 13-14l33 27-13-56c-3-13 15-17 20-5l14 50 14-50c5-12 23-8 20 5l-13 56 33-27c10-8 22 5 13 14l-35 36c-19 19-45 19-64 0Z" fill={skin} stroke="#b77a50" strokeWidth="6" strokeLinejoin="round" />
          <circle cx="160" cy="74" r="16" fill="#ffcf33" />
        </IconScene>
      )
    case 'thank':
      return (
        <IconScene word={word} showKid={false}>
          <Kid x={102} y={154} pose="stand" shirt="#2f80ed" scale={0.78} />
          <Kid x={222} y={154} pose="stand" shirt="#27ae60" scale={0.78} />
          <path d="M160 83c11-23 49-16 49 13 0 31-49 58-49 58s-49-27-49-58c0-29 38-36 49-13Z" fill="#eb5757" stroke="#9b2f2f" strokeWidth="5" />
        </IconScene>
      )
    case 'hug':
      return (
        <IconScene word={word} showKid={false}>
          <Kid x={132} y={154} pose="stand" shirt="#2f80ed" scale={0.86} />
          <Kid x={188} y={154} pose="stand" shirt="#f2994a" scale={0.86} />
          <path d="M98 111c27 25 96 25 124 0" stroke={skin} strokeWidth="13" strokeLinecap="round" fill="none" />
        </IconScene>
      )
    case 'smile':
      return (
        <IconScene word={word} showKid={false}>
          <circle cx="160" cy="113" r="64" fill="#ffd78a" stroke="#d84f7a" strokeWidth="7" />
          <circle cx="134" cy="108" r="8" fill="#3f2d28" />
          <circle cx="186" cy="108" r="8" fill="#3f2d28" />
          <path d="M119 131c25 36 57 36 82 0" stroke="#9b3d3d" strokeWidth="9" strokeLinecap="round" fill="none" />
          <path d="M128 134h64" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
        </IconScene>
      )
    case 'home':
      return (
        <IconScene word={word} showKid={false}>
          <path d="M79 117l81-61 81 61v64H98v-64Z" fill="#ffd78a" stroke="#8d5d45" strokeWidth="7" strokeLinejoin="round" />
          <rect x="142" y="131" width="36" height="50" rx="6" fill="#8ec9ff" stroke="#2f80ed" strokeWidth="5" />
          <path d="M66 121l94-73 94 73" stroke="#eb5757" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </IconScene>
      )
    case 'school':
      return (
        <IconScene word={word} showKid={false}>
          <rect x="82" y="83" width="156" height="95" rx="9" fill="#ffffff" stroke="#6d5dfc" strokeWidth="7" />
          <path d="M82 83l78-35 78 35M160 56v122" stroke="#6d5dfc" strokeWidth="7" strokeLinecap="round" fill="none" />
          <rect x="115" y="116" width="28" height="28" fill="#8ec9ff" />
          <rect x="177" y="116" width="28" height="28" fill="#8ec9ff" />
        </IconScene>
      )
    case 'park':
      return (
        <IconScene word={word} showKid={false}>
          <circle cx="99" cy="89" r="31" fill="#27ae60" />
          <path d="M99 111v61" stroke="#8d5d45" strokeWidth="11" strokeLinecap="round" />
          <path d="M167 75h74v26h-74z" fill="#ffcf33" stroke="#f2994a" strokeWidth="6" />
          <path d="M241 101l-81 73h105M182 101v73" stroke="#2f80ed" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </IconScene>
      )
    case 'room':
      return (
        <IconScene word={word} showKid={false}>
          <rect x="77" y="119" width="166" height="52" rx="13" fill="#8ec9ff" stroke="#2f80ed" strokeWidth="7" />
          <rect x="83" y="93" width="58" height="36" rx="12" fill="#fff4c7" stroke="#f2994a" strokeWidth="5" />
          <rect x="194" y="68" width="56" height="77" rx="7" fill="#ffd78a" stroke="#8d5d45" strokeWidth="6" />
        </IconScene>
      )
    case 'door':
      return (
        <IconScene word={word} showKid={false}>
          <path d="M121 56h94v130h-94z" fill="#ffd78a" stroke="#8d5d45" strokeWidth="7" />
          <circle cx="192" cy="122" r="7" fill="#8d5d45" />
          <path d="M104 186h128" stroke="#94c99d" strokeWidth="10" strokeLinecap="round" />
        </IconScene>
      )
    case 'window':
      return (
        <IconScene word={word} showKid={false}>
          <rect x="86" y="67" width="148" height="106" rx="12" fill="#b6e3ff" stroke="#2f80ed" strokeWidth="7" />
          <path d="M160 68v104M86 120h148" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />
          <circle cx="218" cy="90" r="13" fill="#ffcf33" />
        </IconScene>
      )
    case 'chair':
      return (
        <IconScene word={word} showKid={false}>
          <rect x="119" y="76" width="89" height="69" rx="13" fill="#ffd78a" stroke="#8d5d45" strokeWidth="7" />
          <rect x="102" y="136" width="124" height="24" rx="12" fill="#8d5d45" />
          <path d="M122 160v30M205 160v30" stroke="#8d5d45" strokeWidth="10" strokeLinecap="round" />
        </IconScene>
      )
    case 'table':
      return (
        <IconScene word={word} showKid={false}>
          <rect x="75" y="112" width="170" height="24" rx="12" fill="#b97a56" />
          <path d="M101 136v46M219 136v46" stroke="#8d5d45" strokeWidth="12" strokeLinecap="round" />
          <ellipse cx="160" cy="102" rx="42" ry="14" fill="#ffffff" stroke="#a0b7c4" strokeWidth="5" />
        </IconScene>
      )
    case 'book':
      return (
        <IconScene word={word} showKid={false}>
          <path d="M83 82c29-18 57-11 77 12 20-23 48-30 77-12v89c-29-18-57-11-77 12-20-23-48-30-77-12Z" fill="#ffffff" stroke="#eb5757" strokeWidth="7" strokeLinejoin="round" />
          <path d="M160 94v89M105 112h34M181 112h34M105 136h34M181 136h34" stroke="#a0b7c4" strokeWidth="5" strokeLinecap="round" />
        </IconScene>
      )
    case 'sun':
      return (
        <IconScene word={word} showKid={false}>
          <circle cx="160" cy="112" r="45" fill="#ffcf33" stroke="#f2994a" strokeWidth="7" />
          <path d="M160 37v25M160 162v25M85 112h25M210 112h25M107 59l18 18M195 147l18 18M213 59l-18 18M125 147l-18 18" stroke="#f2994a" strokeWidth="8" strokeLinecap="round" />
        </IconScene>
      )
    case 'rain':
      return (
        <IconScene word={word} showKid={false}>
          <path d="M100 95c6-31 47-38 66-15 20-24 66-14 72 17 29 6 35 49 0 58H101c-36-8-30-50-1-60Z" fill="#d9ecf3" stroke="#657786" strokeWidth="7" />
          <path d="M112 169l-12 24M154 169l-12 24M196 169l-12 24M238 169l-12 24" stroke="#2f80ed" strokeWidth="8" strokeLinecap="round" />
        </IconScene>
      )
    case 'snow':
      return (
        <IconScene word={word} showKid={false}>
          {[0, 1, 2].map((index) => (
            <g key={index} transform={`translate(${105 + index * 55} ${88 + (index % 2) * 46})`}>
              <path d="M0-24v48M-21-12l42 24M-21 12l42-24" stroke="#8ec9ff" strokeWidth="7" strokeLinecap="round" />
            </g>
          ))}
          <path d="M78 178h164" stroke="#ffffff" strokeWidth="17" strokeLinecap="round" />
        </IconScene>
      )
    case 'wind':
      return (
        <IconScene word={word} showKid={false}>
          <path d="M70 88h121c32 0 32-43 0-43-17 0-27 9-31 23M82 127h147c38 0 38-48 0-48-20 0-32 10-36 26M101 166h92c27 0 27 35 0 35-13 0-22-7-26-18" stroke="#7d8fa1" strokeWidth="9" strokeLinecap="round" fill="none" />
        </IconScene>
      )
    case 'tree':
      return (
        <IconScene word={word} showKid={false}>
          <path d="M160 91v94" stroke="#8d5d45" strokeWidth="17" strokeLinecap="round" />
          <circle cx="130" cy="86" r="38" fill="#27ae60" />
          <circle cx="173" cy="72" r="45" fill="#2fb86f" />
          <circle cx="199" cy="106" r="39" fill="#27ae60" />
        </IconScene>
      )
    case 'flower':
      return (
        <IconScene word={word} showKid={false}>
          <path d="M160 122v62" stroke="#27ae60" strokeWidth="9" strokeLinecap="round" />
          <path d="M160 154c-22-25-48-21-57 8 25 11 46 4 57-8ZM160 154c22-25 48-21 57 8-25 11-46 4-57-8Z" fill="#b9dfc5" stroke="#27ae60" strokeWidth="5" />
          {[0, 72, 144, 216, 288].map((angle) => (
            <ellipse key={angle} cx="160" cy="94" rx="19" ry="36" fill="#d84f7a" transform={`rotate(${angle} 160 122)`} />
          ))}
          <circle cx="160" cy="122" r="20" fill="#ffcf33" />
        </IconScene>
      )
    case 'up':
      return <DirectionScene word={word} direction="up" />
    case 'down':
      return <DirectionScene word={word} direction="down" />
    case 'left':
      return <DirectionScene word={word} direction="left" />
    case 'right':
      return <DirectionScene word={word} direction="right" />
    default:
      return (
        <IconScene word={word}>
          <circle cx="218" cy="112" r="45" fill="#ffffff" stroke={categoryPalette[word.category]} strokeWidth="7" />
          <path d="M200 113h36M218 95v36" stroke={categoryPalette[word.category]} strokeWidth="9" strokeLinecap="round" />
        </IconScene>
      )
  }
}

function renderWord(word: StudyWord) {
  switch (word.id) {
    case 'run':
      return (
        <BaseScene>
          <MotionMarks />
          <circle cx="245" cy="132" r="18" fill="#ffcf33" />
          <path d="M231 132h28M245 118v28" stroke="#f2994a" strokeWidth="4" strokeLinecap="round" />
          <Kid x={165} y={151} pose="run" shirt="#2f80ed" />
        </BaseScene>
      )
    case 'jump':
      return (
        <BaseScene>
          <ellipse cx="162" cy="168" rx="50" ry="8" fill="#9fc4ad" opacity=".7" />
          <path d="M83 154h152" stroke="#eb5757" strokeWidth="8" strokeLinecap="round" strokeDasharray="18 15" />
          <Kid x={160} y={146} pose="jump" shirt="#f2994a" />
          <path d="M113 69c9-11 23-13 34-4M210 69c-9-11-23-13-34-4" stroke="#f2c94c" strokeWidth="7" strokeLinecap="round" />
        </BaseScene>
      )
    case 'walk':
      return (
        <BaseScene>
          <path d="M61 165c57-35 140-36 207 1" stroke="#94c99d" strokeWidth="13" strokeLinecap="round" />
          <path d="M213 75h38v55h-38z" fill="#ffcf33" stroke="#f2994a" strokeWidth="5" />
          <path d="M222 75v-13h19v13" stroke="#f2994a" strokeWidth="5" fill="none" strokeLinecap="round" />
          <Kid x={150} y={151} pose="stand" shirt="#27ae60" />
          <path d="M185 109l38 10" stroke="#7a5b34" strokeWidth="6" strokeLinecap="round" />
        </BaseScene>
      )
    case 'eat':
      return (
        <BaseScene>
          <rect x="72" y="126" width="176" height="18" rx="9" fill="#b97a56" />
          <rect x="91" y="142" width="12" height="40" rx="5" fill="#8d5d45" />
          <rect x="218" y="142" width="12" height="40" rx="5" fill="#8d5d45" />
          <ellipse cx="160" cy="119" rx="41" ry="15" fill="#f2f2f2" stroke="#a0b7c4" strokeWidth="4" />
          <ellipse cx="160" cy="114" rx="27" ry="9" fill="#ffffff" />
          <path d="M210 92v37M222 92v37M210 107h12" stroke="#8596a6" strokeWidth="4" strokeLinecap="round" />
          <Kid x={92} y={132} pose="sit" shirt="#eb5757" scale={0.88} />
        </BaseScene>
      )
    case 'drink':
      return (
        <BaseScene>
          <Kid x={118} y={153} pose="stand" shirt="#2f80ed" />
          <path d="M181 90h46l-8 67h-30l-8-67Z" fill="#a7d8ff" stroke="#2f80ed" strokeWidth="5" />
          <path d="M187 119h34" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" opacity=".8" />
          <path d="M138 114l50 10" stroke={skin} strokeWidth="10" strokeLinecap="round" />
          <path d="M225 97c19 7 17 33-2 40" fill="none" stroke="#2f80ed" strokeWidth="5" strokeLinecap="round" />
        </BaseScene>
      )
    case 'wash':
      return (
        <BaseScene>
          <rect x="165" y="94" width="91" height="55" rx="16" fill="#d9ecf3" stroke="#85b6cb" strokeWidth="5" />
          <path d="M171 122h80" stroke="#7fc8e8" strokeWidth="9" strokeLinecap="round" />
          <path d="M206 72h47v15h-47z" fill="#a0b7c4" />
          <path d="M229 87v19" stroke="#a0b7c4" strokeWidth="7" strokeLinecap="round" />
          <path d="M197 119c17 9 38 9 55-1" stroke={skin} strokeWidth="10" strokeLinecap="round" />
          <circle cx="191" cy="100" r="7" fill="#ffffff" opacity=".9" />
          <circle cx="242" cy="102" r="5" fill="#ffffff" opacity=".9" />
          <Kid x={94} y={153} pose="stand" shirt="#27ae60" />
        </BaseScene>
      )
    case 'brush':
      return (
        <BaseScene>
          <Kid x={130} y={153} pose="stand" shirt="#f2994a" />
          <path d="M148 103l63-16" stroke="#2f80ed" strokeWidth="7" strokeLinecap="round" />
          <rect x="207" y="79" width="34" height="18" rx="6" fill="#ffffff" stroke="#2f80ed" strokeWidth="4" />
          <path d="M218 80v17M229 80v17" stroke="#5cb2ff" strokeWidth="3" />
          <path d="M137 92c6 7 15 7 21 0" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
          <g fill="#b6e3ff">
            <circle cx="222" cy="116" r="4" />
            <circle cx="239" cy="126" r="6" />
            <circle cx="205" cy="130" r="5" />
          </g>
        </BaseScene>
      )
    case 'sleep':
      return (
        <BaseScene>
          <rect x="67" y="111" width="190" height="54" rx="18" fill="#8ec9ff" />
          <rect x="63" y="140" width="200" height="42" rx="16" fill="#2f80ed" />
          <rect x="76" y="101" width="55" height="34" rx="13" fill="#fff4c7" />
          <circle cx="123" cy="118" r="17" fill={skin} />
          <path d="M107 112c7-14 27-13 34 0-8-4-19-4-34 0Z" fill={hair} />
          <path d="M146 123h77" stroke="#f6c38f" strokeWidth="18" strokeLinecap="round" />
          <path d="M181 82h22M201 82l-22 30h25" stroke="#7d8fa1" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M222 65h18M239 65l-18 24h21" stroke="#7d8fa1" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </BaseScene>
      )
    case 'wake':
      return (
        <BaseScene>
          <circle cx="231" cy="72" r="31" fill="#ffcf33" />
          <path d="M231 26v15M231 103v15M185 72h15M262 72h15M199 40l10 10M253 94l10 10M263 40l-10 10M209 94l-10 10" stroke="#f2994a" strokeWidth="6" strokeLinecap="round" />
          <rect x="66" y="135" width="129" height="31" rx="14" fill="#8ec9ff" />
          <Kid x={134} y={138} pose="jump" shirt="#eb5757" scale={0.86} />
          <path d="M84 91h37v37H84z" fill="#fff4c7" stroke="#f2994a" strokeWidth="5" />
        </BaseScene>
      )
    case 'read':
      return (
        <BaseScene>
          <Kid x={139} y={150} pose="sit" shirt="#2f80ed" />
          <path d="M96 100c23-14 48-8 64 11 16-19 41-25 64-11v58c-23-14-48-8-64 11-16-19-41-25-64-11v-58Z" fill="#ffffff" stroke="#eb5757" strokeWidth="5" strokeLinejoin="round" />
          <path d="M160 111v58M113 120h31M176 120h31M113 138h31M176 138h31" stroke="#a0b7c4" strokeWidth="4" strokeLinecap="round" />
        </BaseScene>
      )
    case 'write':
      return (
        <BaseScene>
          <rect x="82" y="118" width="156" height="54" rx="11" fill="#ffffff" stroke="#a0b7c4" strokeWidth="5" />
          <path d="M106 137h58M106 153h41" stroke="#b7c7d4" strokeWidth="5" strokeLinecap="round" />
          <path d="M183 83l43 43-17 17-43-43 17-17Z" fill="#ffcf33" stroke="#f2994a" strokeWidth="5" />
          <path d="M166 100l-10 27 27-10" fill="#b97a56" stroke="#8d5d45" strokeWidth="4" strokeLinejoin="round" />
          <Kid x={82} y={151} pose="sit" shirt="#27ae60" scale={0.82} />
        </BaseScene>
      )
    case 'draw':
      return (
        <BaseScene>
          <rect x="88" y="81" width="144" height="93" rx="16" fill="#ffffff" stroke="#a0b7c4" strokeWidth="5" />
          <circle cx="136" cy="118" r="20" fill="#ffcf33" />
          <path d="M136 86v12M136 138v12M104 118h12M156 118h12M114 96l8 8M158 140l8 8M158 96l-8 8M114 140l8-8" stroke="#f2994a" strokeWidth="5" strokeLinecap="round" />
          <path d="M190 139l36-19" stroke="#eb5757" strokeWidth="8" strokeLinecap="round" />
          <Kid x={70} y={154} pose="sit" shirt="#2f80ed" scale={0.82} />
        </BaseScene>
      )
    case 'play':
      return (
        <BaseScene>
          <rect x="188" y="129" width="38" height="38" rx="8" fill="#2f80ed" />
          <rect x="230" y="106" width="38" height="61" rx="8" fill="#ffcf33" />
          <rect x="146" y="100" width="38" height="67" rx="8" fill="#27ae60" />
          <circle cx="248" cy="82" r="17" fill="#eb5757" />
          <Kid x={105} y={153} pose="jump" shirt="#f2994a" scale={0.86} />
        </BaseScene>
      )
    case 'sing':
      return (
        <BaseScene>
          <Kid x={141} y={153} pose="stand" shirt="#eb5757" />
          <path d="M182 100c18-8 38 6 38 27v30" stroke="#2f80ed" strokeWidth="9" strokeLinecap="round" fill="none" />
          <circle cx="218" cy="157" r="13" fill="#2f80ed" />
          <path d="M214 86v-34l43-10v34" stroke="#27ae60" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="213" cy="92" r="12" fill="#27ae60" />
          <circle cx="258" cy="81" r="12" fill="#27ae60" />
          <path d="M126 92c10 7 21 7 31 0" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
        </BaseScene>
      )
    case 'dance':
      return (
        <BaseScene>
          <circle cx="84" cy="71" r="16" fill="#ffcf33" />
          <circle cx="237" cy="73" r="16" fill="#2f80ed" />
          <path d="M79 105c17-16 35-16 52 0M190 105c17-16 35-16 52 0" stroke="#eb5757" strokeWidth="7" strokeLinecap="round" fill="none" />
          <Kid x={160} y={153} pose="dance" shirt="#27ae60" />
          <path d="M234 124v-31l35-8v31" stroke="#f2994a" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="234" cy="128" r="10" fill="#f2994a" />
          <circle cx="269" cy="119" r="10" fill="#f2994a" />
        </BaseScene>
      )
    case 'open':
      return (
        <BaseScene>
          <path d="M153 62h78v111h-78z" fill="#ffd78a" stroke="#8d5d45" strokeWidth="6" />
          <path d="M153 62l-54 18v111l54-18V62Z" fill="#f2994a" stroke="#8d5d45" strokeWidth="6" strokeLinejoin="round" />
          <circle cx="119" cy="130" r="5" fill="#8d5d45" />
          <Kid x={78} y={153} pose="stand" shirt="#2f80ed" scale={0.84} />
          <path d="M100 110l30 13" stroke={skin} strokeWidth="9" strokeLinecap="round" />
        </BaseScene>
      )
    case 'close':
      return (
        <BaseScene>
          <rect x="82" y="104" width="156" height="61" rx="12" fill="#ffd78a" stroke="#8d5d45" strokeWidth="6" />
          <path d="M93 95h134l11 32H82l11-32Z" fill="#f2994a" stroke="#8d5d45" strokeWidth="6" strokeLinejoin="round" />
          <path d="M127 127h66" stroke="#8d5d45" strokeWidth="7" strokeLinecap="round" />
          <Kid x={248} y={153} pose="stand" shirt="#27ae60" scale={0.82} />
          <path d="M226 120l-33 9" stroke={skin} strokeWidth="9" strokeLinecap="round" />
        </BaseScene>
      )
    case 'help':
      return (
        <BaseScene>
          <rect x="118" y="104" width="83" height="48" rx="10" fill="#ffd78a" stroke="#8d5d45" strokeWidth="6" />
          <path d="M160 105v47M119 128h82" stroke="#c7905d" strokeWidth="5" />
          <Kid x={86} y={154} pose="carry" shirt="#2f80ed" scale={0.82} />
          <Kid x={232} y={154} pose="carry" shirt="#eb5757" scale={0.82} />
        </BaseScene>
      )
    case 'clean':
      return (
        <BaseScene>
          <rect x="88" y="128" width="147" height="22" rx="10" fill="#b97a56" />
          <path d="M107 150v30M215 150v30" stroke="#8d5d45" strokeWidth="9" strokeLinecap="round" />
          <path d="M154 103l89 58" stroke="#27ae60" strokeWidth="8" strokeLinecap="round" />
          <path d="M235 153l30 20M242 146l31 14M249 139l31 9" stroke="#2f80ed" strokeWidth="7" strokeLinecap="round" />
          <Kid x={86} y={151} pose="stand" shirt="#f2994a" scale={0.86} />
        </BaseScene>
      )
    case 'cook':
      return (
        <BaseScene>
          <rect x="96" y="136" width="128" height="36" rx="12" fill="#8d5d45" />
          <path d="M115 103h90l-8 55h-74l-8-55Z" fill="#a0b7c4" stroke="#657786" strokeWidth="6" strokeLinejoin="round" />
          <path d="M123 115h75" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" opacity=".7" />
          <path d="M132 82c-12-22 20-25 8-47M164 82c-12-22 20-25 8-47M196 82c-12-22 20-25 8-47" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" opacity=".9" fill="none" />
          <Kid x={247} y={153} pose="stand" shirt="#eb5757" scale={0.82} />
        </BaseScene>
      )
    case 'listen':
      return (
        <BaseScene>
          <Kid x={151} y={154} pose="stand" shirt="#2f80ed" />
          <path d="M132 85c7-30 49-30 57 0" stroke="#324052" strokeWidth="8" strokeLinecap="round" fill="none" />
          <rect x="118" y="84" width="21" height="35" rx="9" fill="#ffcf33" stroke="#324052" strokeWidth="5" />
          <rect x="181" y="84" width="21" height="35" rx="9" fill="#ffcf33" stroke="#324052" strokeWidth="5" />
          <path d="M221 91v-31l38-9v31" stroke="#27ae60" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="221" cy="96" r="12" fill="#27ae60" />
          <circle cx="260" cy="87" r="12" fill="#27ae60" />
        </BaseScene>
      )
    case 'look':
      return (
        <BaseScene>
          <rect x="188" y="80" width="63" height="49" rx="9" fill="#ffffff" stroke="#a0b7c4" strokeWidth="5" />
          <circle cx="212" cy="103" r="12" fill="#ffcf33" />
          <path d="M199 120l18-15 13 12 8-8 13 11" stroke="#27ae60" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="147" cy="107" r="34" fill="none" stroke="#2f80ed" strokeWidth="9" />
          <path d="M173 132l37 35" stroke="#2f80ed" strokeWidth="10" strokeLinecap="round" />
          <Kid x={82} y={153} pose="stand" shirt="#f2994a" scale={0.84} />
        </BaseScene>
      )
    case 'clap':
      return (
        <BaseScene>
          <Kid x={160} y={153} pose="clap" shirt="#eb5757" />
          <path d="M111 83l-20-15M121 61l-8-24M209 83l20-15M199 61l8-24" stroke="#ffcf33" strokeWidth="8" strokeLinecap="round" />
          <path d="M76 122c12 16 29 21 49 14M244 122c-12 16-29 21-49 14" stroke="#2f80ed" strokeWidth="7" strokeLinecap="round" fill="none" />
        </BaseScene>
      )
    case 'share':
      return (
        <BaseScene>
          <Kid x={93} y={153} pose="stand" shirt="#2f80ed" scale={0.82} />
          <Kid x={231} y={153} pose="stand" shirt="#f2994a" scale={0.82} />
          <rect x="131" y="116" width="58" height="32" rx="8" fill="#ffffff" stroke="#a0b7c4" strokeWidth="5" />
          <path d="M141 127h39M141 137h32" stroke="#eb5757" strokeWidth="5" strokeLinecap="round" />
          <path d="M116 115l27 15M204 130l27-15" stroke={skin} strokeWidth="9" strokeLinecap="round" />
          <path d="M150 89l18-30M172 91l31-21M136 95l-26-22" stroke="#27ae60" strokeWidth="7" strokeLinecap="round" />
        </BaseScene>
      )
    default:
      return renderGenericWord(word)
  }
}

export function WordScene({ word, compact = false }: WordSceneProps) {
  return (
    <svg
      className={compact ? 'word-scene word-scene--compact' : 'word-scene'}
      viewBox="0 0 320 220"
      role="img"
      aria-label={`${word.meaning} 그림`}
    >
      {renderWord(word)}
    </svg>
  )
}
