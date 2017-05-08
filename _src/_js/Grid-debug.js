const Default = {
  elem: '.container',
  debugElem: 'grid-debug',
  showGridKeys: ['s', 'g'],
  hideGridKeys: ['h', 'g'],
};


class GridDebug {
  constructor(options) {
    this._options = this._getOptions(options);
    this._elem = this._options.elem;
    this._debugElem = this._options.debugElem;
    this._showGridKeys = this._options.showGridKeys;
    this._hideGridKeys = this._options.hideGridKeys;
    this._elems = document.querySelectorAll(this._options.elem);
    this._map = {};
    this._intervals = {};
  }

  init() {
    this._render();
  }

  getElem() {
    return this._elem;
  }

  getDebugElem() {
    return this._debugElem;
  }

  addClass() {
    this._elems.forEach(item => {
      item.classList.add(this._options.debugElem);
    });
  }

  removeClass() {
    this._elems.forEach(item => {
      item.classList.remove(this._options.debugElem);
    });
  }

  _render() {
    window.addEventListener('keydown', (event) => {
      this._map[event.key] = (event.type === 'keydown');

      if (this._map[this._showGridKeys[0]] && this._map[this._showGridKeys[1]]) {
        this.addClass();

        this._map  = {};
        event.preventDefault();
        return;
      }
    });


    window.addEventListener('keydown', (event) => {
      this._map[event.key] = (event.type === 'keydown');

      if (this._map['h'] && this._map['g']) {
        this.removeClass();

        this._map  = {};
        event.preventDefault();
        return;
      }
    });
  }

  _show() {
    console.log(this);
  }

  _getOptions(options) {
    options = Object.assign({}, Default, options);

    return options;
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