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
    this._debugElem = this._options.debugElem;
    this._map = {};
    this._elems = document.querySelectorAll(this._options.elem);

    this._keyDown = this._keyDown.bind(this);
  }

  init() {
    this._render();
  }

  _render() {
    window.addEventListener('keydown', this._keyDown);
  }

  _keyDown(event) {
    this._map[event.key] = event.type === 'keydown';
    console.log(this._map);
  }



  _getOptions(options) {
    return Object.assign({}, defaultConfig, options);
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