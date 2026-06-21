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

function renderWord(id: string) {
  switch (id) {
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
      return (
        <BaseScene>
          <Kid x={160} y={153} pose="stand" />
        </BaseScene>
      )
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
      {renderWord(word.id)}
    </svg>
  )
}
