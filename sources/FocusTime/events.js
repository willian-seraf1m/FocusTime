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
    const modeClassName = event.target.dataset.action
    const audioArchiveName = event.target.dataset.action + "Audio"

    if(!modeClassName || !audioArchiveName) {
      return
    }

    actions.modes(modeClassName, audioArchiveName)
  })
}
