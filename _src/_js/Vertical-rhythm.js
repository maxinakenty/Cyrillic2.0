class VerticalRhythm {
  constructor(options) {
    this._options = options || {};
    this._options.className = this._options.className || 'vertical-rhythm';
    this._options.zIndex = this._options.zIndex || 1000;
    this._elem;
  }

  // Public
  init() {
    this._render();
  }

  getElem() {
    if (!this._elem) this._render();

    return this._elem;
  }

  toggleState(state) {
    this._toggle(state);
  }

  // Private
  _render() {
    this._elem = document.createElement('div');
    this._elem.className = this._options.className;
    this._elem.style.zIndex = this._options.zIndex;
    this._elem.setAttribute('data-rhythm', 'off');

    const body = document.body;
    body.appendChild(this._elem, body);

    document.addEventListener('keydown', event => {
      if (event.shiftKey && event.keyCode === 'O'.charCodeAt(0)) {
        this._toggle('off');
        return false;
      }

      if (event.shiftKey && event.keyCode === 'S'.charCodeAt(0)) {
        this._toggle('single');
        return false;
      }

      if (event.shiftKey && event.keyCode === 'D'.charCodeAt(0)) {
        this._toggle('double');
        return false;
      }
    });
  }

  _off() {
    this._elem.setAttribute('data-rhythm', 'off');
  }

  _single() {
    this._elem.setAttribute('data-rhythm', 'single');
  }

  _double() {
    this._elem.setAttribute('data-rhythm', 'double');
  }

  _toggle(state) {
      if (state === 'single') {
        this._single();
      } else if (state === 'double') {
        this._double();
      } else {
        this._off();
      }
  }
}

export default VerticalRhythm;