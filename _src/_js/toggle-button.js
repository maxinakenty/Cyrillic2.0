const defaultOptions = {
  className: 'toggle-button',
  attribute: 'data-target',
};


class ToggleButton {
  constructor(options) {
    this._options = this._getOptions(options);
    this._state;

    this._mouseDown = this._mouseDown.bind(this);
    this._click = this._click.bind(this);
  }

  // Public
  init() {
    this._render();
  }

  getElem() {
    return this._elem;
  }

  off() {
    this._elem.setAttribute(this._options.attribute, 'off');
    this._elem.textContent = 'rhythm off';
    this._state = 'off';
  }

  single() {
    this._elem.setAttribute(this._options.attribute, 'single');
    this._elem.textContent = 'rhythm single';
    this._state = 'single';
  }

  double() {
    this._elem.setAttribute(this._options.attribute, 'double');
    this._elem.textContent = 'rhythm double';
    this._state = 'double';
  }

  toggle() {
    if (this._elem.closest(`[${this._options.attribute}="off"]`)) {
      this.single();

    } else if (this._elem.closest(`[${this._options.attribute}="single"]`)) {
      this.double();

    } else {
      this.off();
    }
  }

  getState() {
    return this._state;
  }

  // Private
  _render() {
    this._elem = document.createElement('button');
    this._elem.className = this._options.className;
    this._elem.setAttribute(this._options.attribute, 'off');
    this._elem.textContent = 'rhythm off';

    const body = document.body;
    body.insertBefore(this._elem, body.firstChild);

    this._elem.addEventListener('click', this._click);
    this._elem.addEventListener('mousedown', this._mouseDown);
  }

  _click(event) {
    if (!event.target.closest(`.${this._options.className}`)) return;

    this.toggle();
  }

  _mouseDown(event) {
    event.preventDefault();
  }

  _getOptions(options) {
    return Object.assign({}, defaultOptions, options);
  }
}

export default ToggleButton;