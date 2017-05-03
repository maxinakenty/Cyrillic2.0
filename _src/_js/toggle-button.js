class ToggleButton {
  constructor(options) {
    this._elem;
    this._getElem = this.getElem;
  }

  getElem() {
    if(!this._elem) this._render();
    return this._elem;
  }

  _render() {
    this._elem = document.createElement('button');
    this._elem.className = 'toggle-button';

    this._elem.onmousedown = () => {
      return false;
    };

    this._elem.addEventListener('click', function(event) {
      if (event.target.closest('.toggle-button')) this._toggle();
    });
  }

  _toggle() {
    
  }
}

export default ToggleButton;