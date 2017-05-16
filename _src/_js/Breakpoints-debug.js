const MAP = {};

const defaultOptions = {
  elem: document.body,
  debugElem: 'breakpoints-debug',
  showBreakKey: 's',
  breakKey: 'b',
  hideBreakKey: 'h',
};


export default class BreakpointsDebug {
  constructor(options) {
    this._options = this._getElem(options);
    this._elem;
    this._map = MAP;
    this._keydown = this._keydown.bind(this);
  }

  // Public
  init() {
    this._render();
  }

  getElem() {
    if(!this._elem) this._render();

    return this._elem;
  }

  showBreak() {
   this._elem.classList.add(this._options.debugElem);
   this._clearMap();
   event.preventDefault();

   console.log('yep');

   return;
  }

  hideBreak() {
   this._elem.classList.remove(this._options.debugElem);
   this._clearMap();
   event.preventDefault();

   return;
  }

  // Private
  _render() {
    this._elem = this._options.elem;
    this._elem.addEventListener('keydown', this._keydown);
  }

  _keydown(event) {
    this._map[event.key] = event.type === 'keydown';

    // More productive option if (a && b) func();
    if ([
        this._map[this._options.showBreakKey],
        this._map[this._options.breakKey]
      ].every(Boolean)
    ) this.showBreak();

    if ([
        this._map[this._options.hideBreakKey],
        this._map[this._options.breakKey]
      ].every(Boolean)
    ) this.hideBreak();
  }

  _getElem(options) {
    return Object.assign({}, defaultOptions, options);
  }

  _clearMap() {
    this._map = {};
  }
}