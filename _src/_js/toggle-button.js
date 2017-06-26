const defaultOptions = {
  className: 'toggle-button',
  dataAttr: 'data-target',
};


export default class ToggleButton {
  constructor(options) {
    this.state;
    this._options = this._getOptions(options);
    this._mouseDown = this._mouseDown.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  // Public
  init() {
    this._render();
  }

  getElem() {
    if (!this._elem) this._render();

    return this._elem;
  }

  getState() {
    return this._state;
  }

  toggle() {
    if (this._elem.closest(`[${this._options.dataAttr}="off"]`)) {
      this._single();

    } else if (this._elem.closest(`[${this._options.dataAttr}="single"]`)) {
      this._double();

    } else {
      this._off();
    }
  }


  // Private
  _off() {
    this._elem.setAttribute(this._options.dataAttr, 'off');
    this._elem.textContent = 'rhythm off';
    this._state = 'off';
  }

  _single() {
    this._elem.setAttribute(this._options.dataAttr, 'single');
    this._elem.textContent = 'rhythm single';
    this._state = 'single';
  }

  _double() {
    this._elem.setAttribute(this._options.dataAttr, 'double');
    this._elem.textContent = 'rhythm double';
    this._state = 'double';
  }

  _render() {
    this._elem = document.createElement('button');
    this._elem.className = this._options.className;
    this._elem.setAttribute(this._options.dataAttr, 'off');
    this._elem.textContent = 'rhythm off';

    const body = document.body;
    body.insertBefore(this._elem, body.firstChild);

    this._elem.addEventListener('click', this._handleClick);
    this._elem.addEventListener('mousedown', this._mouseDown);
  }

  _handleClick(event) {
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