import ToggleButton from '../../_js/Toggle-button';
import VerticalRhythm from '../../_js/Vertical-rhythm';

const toggleButton = new ToggleButton();
const verticalRhythm = new VerticalRhythm();


toggleButton.init();
verticalRhythm.init();

toggleButton.getElem().addEventListener('click', () => {
  verticalRhythm.toggleState(toggleButton.getState());
});