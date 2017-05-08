class BreakpointsDebug {
  constructor(options) {
    this._options = options || {};
    this._elem = options.elem || document.body;
    this._debugClassName = this._options.debugClassName || 'breakpoints-debug';
  }

  toggle() {
    if (this.elem.contains(this._debugClassName)) this.remove();
    else this.add();
  }

  add() {
    this._elem.classList.add(this._debugClassName);
  }

  remove() {
    this._elem.classList.remove(this._debugClassName);
  }

  _render() {
    document.addEventListener('keyup', (event) => {
      if (event.shiftKey && event.keyCode === ) {

        return false;
      }

      if (event.shiftKey && event.keyCode === ) {

        return false;
      }
    });
  }
}

export default BreakpointsDebug;