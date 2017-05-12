const MAP = {};

const defaultOptions = {
  className: 'vertical-rhythm',
  dataAttr: 'data-rhythm',
  singleRhythmKey: 's',
  doubleRhythmKey: 'd',
  offRhythmKey: 'o',
  rhythmKey: 'r',
};


class RhythmDegug {
  constructor(options) {
    this._options = this._getOptions(options);
    this._elem;
    this._map = MAP;

    this._keydown = this._keydown.bind(this);
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

  toggleState(state) {
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
    window.addEventListener('keydown', this._keydown);
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

  _keydown(event) {
    this._map[event.key] = event.type === 'keydown';

    // More productive option if (a && b) func();
    if ([
        this._map[this._options.singleRhythmKey],
        this._map[this._options.rhythmKey]
      ].every(Boolean)
    ) this._single();

    if ([
        this._map[this._options.doubleRhythmKey],
        this._map[this._options.rhythmKey]
      ].every(Boolean)
    ) this._double();

    if ([
        this._map[this._options.offRhythmKey],
        this._map[this._options.rhythmKey]
      ].every(Boolean)
    ) this._off();
  }

  _clearMap() {
    this._map = {};
  }
}

export default RhythmDegug;