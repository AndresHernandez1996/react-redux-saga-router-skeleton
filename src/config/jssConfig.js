import { create } from 'jss'
import { jssPreset, createGenerateClassName } from '@material-ui/core/styles'

const generateClassName = createGenerateClassName()
const jss = create({
  ...jssPreset(),
  // Define a custom insertion point that JSS will look for when injecting the styles into the DOM.
  insertionPoint: 'jss-insertion-point'
})

export { generateClassName, jss }
