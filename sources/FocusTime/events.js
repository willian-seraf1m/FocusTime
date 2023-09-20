import { controls } from "./elements.js";
import { controlsMode } from "./elements.js";
import * as actions from './actions.js'

export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != "function") {
      return
    }
    
    actions[action]()
  })

  controlsMode.addEventListener('click', (event) => {
    const classMode = event.target.dataset.action
    const audioArchive = event.target.dataset.action + "Audio"
    if(classMode === undefined || audioArchive === undefined) {
      return
    }

    actions.modes(classMode, audioArchive)
  })
}
