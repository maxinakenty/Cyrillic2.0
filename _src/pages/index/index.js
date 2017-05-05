import ToggleButton from '../../_js/Toggle-button';
import VerticalRhythm from '../../_js/Vertical-rhythm';
import ToggleGrid from '../../_js/Toggle-grid';

const toggleButton = new ToggleButton();
const verticalRhythm = new VerticalRhythm();
const toggleGrid = new ToggleGrid();


toggleButton.init();
verticalRhythm.init();
toggleGrid.init();

toggleButton.getElem().addEventListener('click', () => {
  verticalRhythm.toggleState(toggleButton.getState());
});


