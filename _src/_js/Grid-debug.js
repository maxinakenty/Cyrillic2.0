const defaultOptions = {
  elem: '.container',
  debugElem: 'grid-debug',
  showGridKey: 's',
  gridKey: 'g',
  hideGridKey: 'h',
};


class GridDebug {
  constructor(options) {
    this._options = this._getOptions(options);
    this._elem = this._options.elem;
    this._elems = document.querySelectorAll(this._options.elem);

    this._map = {};
    this._keyDown = this._keyDown.bind(this);
  }

  // Public
  init() {
    this._render();
  }

  getElem() {
    return this._elem;
  }

  showGrid() {
    this._elems.forEach(item => {
      item.classList.add(this._options.debugElem);

      this._clearMap();
      event.preventDefault();

      return;
    });
  }

  hideGrid() {
    this._elems.forEach(item => {
      item.classList.remove(this._options.debugElem);

      this._clearMap();
      event.preventDefault();

      return;
    });
  }

  // Private
  _render() {
    window.addEventListener('keydown', this._keyDown);
  }

  _keyDown(event) {
    this._map[event.key] = event.type === 'keydown';

    // More productive option if (a && b) func();

    if ([
        this._map[this._options.showGridKey],
        this._map[this._options.gridKey]
      ].every(Boolean)
    ) this.showGrid();

    if (
      [this._map[this._options.hideGridKey],
        this._map[this._options.gridKey]
      ].every(Boolean)
    ) this.hideGrid();
  }

  _getOptions(options) {
    return Object.assign({}, defaultOptions, options);
  }

  _clearMap() {
    this._map = {};
  }
}

export default GridDebug;