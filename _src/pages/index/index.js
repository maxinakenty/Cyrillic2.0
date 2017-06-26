import ToggleButton from 'Toggle-button';
import VerticalRhythm from 'Rhythm-debug';
import GridDebug from 'Grid-debug';
import BreakpointsDebug from 'Breakpoints-debug';
import FontSizeDebug from 'Font-size-debug';
import FixHeight from 'Fix-height';

const toggleButton = new ToggleButton();
const verticalRhythm = new VerticalRhythm();
const gridDebug = new GridDebug();
const breakpointsDebug = new BreakpointsDebug();
const fontSizeDebug = new FontSizeDebug();
const fixHeight = new FixHeight();

toggleButton.init();
verticalRhythm.init();
gridDebug.init();
breakpointsDebug.init();
fixHeight.init();

toggleButton.getElem().addEventListener('click', () => {
  verticalRhythm.setState(toggleButton.getState());
});