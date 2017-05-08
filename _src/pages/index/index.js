import ToggleButton from '../../_js/Toggle-button';
import VerticalRhythm from '../../_js/Vertical-rhythm';
import GridDebug from '../../_js/Grid-debug';

const toggleButton = new ToggleButton();
const verticalRhythm = new VerticalRhythm();
const gridDebug = new GridDebug();


toggleButton.init();
verticalRhythm.init();
gridDebug.init();

toggleButton.getElem().addEventListener('click', () => {
  verticalRhythm.toggleState(toggleButton.getState());
});