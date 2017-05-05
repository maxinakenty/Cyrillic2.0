class ToggleGrid {
  constructor(options) {
    this._options = options || {};
    this._elem = this._options.elem || '.container';
    this._gridClassName = this._options.gridClassName || 'grid-debug';
  }

  init() {
    this._render();
  }

  _render() {
    const elem = document.querySelectorAll(this._elem);

    document.addEventListener('keydown', event => {
      if (event.shiftKey && event.keyCode === 'G'.charCodeAt(0)) {
        this._toggle();

        return false;
      }

      if (event.shiftKey && event.keyCode === 'H'.charCodeAt(0)) {
        this._toggle();

        return false;
      }
    });
  }

  _toggle() {
    document.querySelectorAll(this._elem).forEach(item => {
      item.classList.toggle(this._gridClassName);
    });
  }
}

export default ToggleGrid;