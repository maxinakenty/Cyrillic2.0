const MAP = {};

const defaultOptions = {
  elem: document.body,
  debugElem: 'font-size-debug',
  showFontSizeKey: 's',
  fontSizeKey: 'f',
  hideFontSizeKye: 'h'
};

class FontSizeDebug {
  constructor(options) {
    this._options = this._getOptions(options);
    this._elem;
    this._map = MAP;

    this._keydown = this._keydown.bind(this);
  }

  init() {
    this._render();
  }

  getElem() {
    if (!this._elem) this._render();

    return this._elem;
  }

  showFontSize() {
    this.classList.add(this._options.debugElem);
    this._clearMap();
    event.preventDefault();

    return;
  }

  hideFontSize() {
    this.classList.remove(this._options.debugElem);
    this._clearMap();
    event.preventDefault();

    return;
  }

  _keydown(event) {
    this._map[event.key] = event.type === 'keydown';

    // More productive option if (a && b) func();
    if ([
        this._map[this._options.showFontSizeKey],
        this._map[this._options.fontSizeKey]
      ].every(Boolean)
    ) this.showBreak();

    if ([
        this._map[this._options.hideFontSizeKye],
        this._map[this._options.fontSizeKey]
      ].every(Boolean)
    ) this.hideBreak();
  }

  _clearMap() {
    this._map = {};
  }

  _getOptions(options) {
    return Object.assign({}, defaultOptions, options);
  }
}

export default FontSizeDebug;