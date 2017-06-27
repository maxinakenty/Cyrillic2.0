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
    this.state;
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
    return this.state;
  }

  setState(newState) {
    switch (newState) {
      case 'single':
        this._setSingleRhythm();
        break;
      case 'double':
        this._setDoubleRhythm();
        break;
      default:
        this._turnOffRhythm();
        break;
    }
  }

  // Private
  _render() {
    this._elem = document.createElement('div');
    this._elem.className = this._options.className;
    this._elem.setAttribute(this._options.dataAttr, 'off');

    window.addEventListener('keydown', this._handleKeyDown);
    document.body.appendChild(this._elem);
  }

  _getOptions(options) {
    return Object.assign({}, defaultOptions, options);
  }

  _turnOffRhythm() {
    this._elem.setAttribute(this._options.dataAttr, 'off');
    this._clearMap();
    event.preventDefault();

    return;
  }

  _setSingleRhythm() {
    this._elem.setAttribute(this._options.dataAttr, 'single');
    this._clearMap();
    event.preventDefault();

    return;
  }

  _setDoubleRhythm() {
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

    if (singleRhythmKey && rhythmKey) this._setSingleRhythm();
    if (doubleRhythmKey && rhythmKey) this._setDoubleRhythm();
    if (offRhythmKey && rhythmKey) this._turnOffRhythm();
  }

  _clearMap() {
    this._map = {};
  }
}