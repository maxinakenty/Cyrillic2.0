const defaultOptions = {
  elem: '.container',
  debugElem: 'grid-debug',
  showGridKey: 's',
  gridKey: 'g',
  hideGridKey: 'h',
};


export default class GridDebug {
  constructor(options) {
    this._options = this._getOptions(options);
    this._elem = this._options.elem;
    this._elems = document.querySelectorAll(this._options.elem);

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
    window.addEventListener('keydown', this._handleKeyDown);
  }

  _handleKeyDown(event) {
    this._map[event.key] = event.type === 'keydown';
    const showGridKey = this._map[this._options.showGridKey];
    const hideGridKey = this._map[this._options.hideGridKey];
    const gridKey = this._map[this._options.gridKey];

    if (showGridKey && gridKey) this.showGrid();
    if (hideGridKey && gridKey) this.hideGrid();
  }

  _getOptions(options) {
    return Object.assign({}, defaultOptions, options);
  }

  _clearMap() {
    this._map = {};
  }
}