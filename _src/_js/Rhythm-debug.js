const defaultOptions = {
  className: 'vertical-rhythm',
  dataAttr: 'data-rhythm',
  singleRhythmKey: 's',
  doubleRhythmKey: 'd',
  offRhythmKey: 'o',
  rhythmKey: 'r',
};


export default class RhythmDegug {
  constructor(options) {
    this.state = 'off';
    this._options = this._getOptions(options);
    this._elem;
    this._map = {};
    this._handleKeyDown = this._handleKeyDown.bind(this);
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

  setState(state) {
    switch (state) {
      case 'single':
        this._single();
        break;
      case 'double':
        this._double();
        break;
      default:
        this._off();
        break;
    }
  }

  // Private
  _render() {
    this._elem = document.createElement('div');
    this._elem.className = this._options.className;

    this._elem.setAttribute(this._options.dataAttr, 'off');

    document.body.appendChild(this._elem);
    window.addEventListener('keydown', this._handleKeyDown);
  }

  _getOptions(options) {
    return Object.assign({}, defaultOptions, options);
  }

  _off() {
    this._elem.setAttribute(this._options.dataAttr, 'off');

    this._clearMap();
    event.preventDefault();

    return;
  }

  _single() {
    this._elem.setAttribute(this._options.dataAttr, 'single');

    this._clearMap();
    event.preventDefault();

    return;
  }

  _double() {
    this._elem.setAttribute(this._options.dataAttr, 'double');

    this._clearMap();
    event.preventDefault();

    return;
  }

  _handleKeyDown(event) {
    this._map[event.key] = event.type === 'keydown';
    const singleRhythmKey = this._map[this._options.singleRhythmKey];
    const doubleRhythmKey = this._map[this._options.doubleRhythmKey];
    const offRhythmKey = this._map[this._options.offRhythmKey];
    const rhythmKey = this._map[this._options.rhythmKey];

    if (singleRhythmKey && rhythmKey) this._single();
    if (doubleRhythmKey && rhythmKey) this._double();
    if (offRhythmKey && rhythmKey) this._off();
  }

  _clearMap() {
    this._map = {};
  }
}