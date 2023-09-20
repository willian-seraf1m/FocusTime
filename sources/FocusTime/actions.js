import state from './states.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.countdown()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
}

export function increaseMinute() {
  state.minutes = state.minutes +5
  timer.updateDisplay()
}

export function decreaseMinute() {
  state.minutes = state.minutes -5
  timer.updateDisplay()
}


/* modes */
export function modes(modeClassName, audioArchiveName) {
  state.isMute = document.documentElement.classList.toggle(modeClassName)

  if(state.isMute) {
  sounds[audioArchiveName].play()
  return
  }

  sounds[audioArchiveName].pause()
}





