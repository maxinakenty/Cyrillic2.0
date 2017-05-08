const defaultConfig = {
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
    this._elems.forEach( item => {
      item.classList.add(this._options.debugElem);

      this._clearMap();
      event.preventDefault();

      return;
    });
  }

  hideGrid() {
    this._elems.forEach( item => {
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

    if (this._map[this._options.showGridKey] && this._map[this._options.gridKey]) {
      this.showGrid();
    }

    if (this._map[this._options.hideGridKey] && this._map[this._options.gridKey]) {
      this.hideGrid();
    }
  }

  _getOptions(options) {
    return Object.assign({}, defaultConfig, options);
  }

  _clearMap() {
    this._map = {};
  }
}

export default GridDebug;









// class GridDebug {
//   constructor(options) {
//     this._options = options || {};
//     this._elem = this._options.elem || '.container';
//     this._debugClassName = this._options.debugClassName || 'grid-debug';
//   }

//   init() {
//     this._render();
//   }

//   toggle() {
//     document.querySelectorAll(this._elem).forEach(item => {
//       item.classList.toggle(this._debugClassName);
//     });
//   }

//   _render() {
//     const elem = document.querySelectorAll(this._elem);

//     document.addEventListener('keydown', event => {
//       if (event.shiftKey && event.keyCode === 'G'.charCodeAt(0)) {
//         this.toggle();

//         return false;
//       }

//       if (event.shiftKey && event.keyCode === 'H'.charCodeAt(0)) {
//         this.toggle();

//         return false;
//       }
//     });
//   }
// }

// export default GridDebug;