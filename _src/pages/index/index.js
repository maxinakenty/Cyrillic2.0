import ToggleButton from 'Toggle-button';
import VerticalRhythm from 'Rhythm-debug';
import GridDebug from 'Grid-debug';
import BreakpointsDebug from 'Breakpoints-debug';

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

