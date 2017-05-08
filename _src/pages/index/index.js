import ToggleButton from '../../_js/Toggle-button';
import VerticalRhythm from '../../_js/Rhythm-debug';
import GridDebug from '../../_js/Grid-debug';
import BreakpointsDebug from '../../_js/Breakpoints-debug';

const toggleButton = new ToggleButton();
const verticalRhythm = new VerticalRhythm();
const gridDebug = new GridDebug();
const breakpointsDebug = new BreakpointsDebug();

toggleButton.init();
verticalRhythm.init();
gridDebug.init();
breakpointsDebug.init();


toggleButton.getElem().addEventListener('click', () => {
  verticalRhythm.toggleState(toggleButton.getState());
});