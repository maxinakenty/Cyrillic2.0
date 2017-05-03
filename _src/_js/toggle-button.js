class ToggleButton {
  constructor(options) {
    this._options = options || {};
    this._options.className = this._options.className || 'toggle-button';
    this._options.id = this._options.id || 'toggle-button';
    this._elem;
    this._state;
  }

  // Public
  init() {
    this._render();
  }

  getElem() {
    if (!this._elem) this._render();

    return this._elem;
  }

  getState() {
    return this._state;
  }

  // Private
  _render() {
    this._elem = document.createElement('button');
    this._elem.className = this._options.className;
    this._elem.id = this._options.id;
    this._elem.setAttribute('data-target', 'off');
    this._elem.textContent = 'rhythm off';

    const body = document.body;
    body.insertBefore(this._elem, body.firstChild);

    this._elem.onmousedown = () => {
      return false;
    };

    this._elem.addEventListener('click', event => {
      if (event.target.closest('.toggle-button')) this._toggle();
    });

    // document.addEventListener('keydown', event => {
    //   if (event.keyCode === 'A'.charCodeAt(0) || event.keyCode === 'B'.charCodeAt(0)) {
    //     body.removeChild(this._elem);
    //   }
    // });
  }

  _off() {
    this._elem.setAttribute('data-target', 'off');
    this._elem.textContent = 'rhythm off';
    this._state = 'off';
  }

  _single() {
    this._elem.setAttribute('data-target', 'single');
    this._elem.textContent = 'rhythm single';
    this._state = 'single';
  }

  _double() {
    this._elem.setAttribute('data-target', 'double');
    this._elem.textContent = 'rhythm double';
    this._state = 'double';
  }

  _toggle() {
    if (this._elem.closest('[data-target="off"]')) {
      this._single();

    } else if (this._elem.closest('[data-target="single"]')) {
      this._double();

    } else {
      this._off();
    }
  }
}

export default ToggleButton;