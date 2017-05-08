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
      if (event.target.closest('.toggle-button')) this.toggle();
    });


    document.addEventListener('keydown', event => {
      if (event.keyCode === 'R'.charCodeAt(0) || event.keyCode === 'B'.charCodeAt(0)) {
        this._elem.remove();

        return false;
      }

      if (event.keyCode === 'A'.charCodeAt(0) || event.keyCode === 'B'.charCodeAt(0)) {
         body.insertBefore(this._elem, body.firstChild);

        return false;
      }
    });
  }

  off() {
    this._elem.setAttribute('data-target', 'off');
    this._elem.textContent = 'rhythm off';
    this._state = 'off';
  }

  single() {
    this._elem.setAttribute('data-target', 'single');
    this._elem.textContent = 'rhythm single';
    this._state = 'single';
  }

  double() {
    this._elem.setAttribute('data-target', 'double');
    this._elem.textContent = 'rhythm double';
    this._state = 'double';
  }

  toggle() {
    if (this._elem.closest('[data-target="off"]')) {
      this.single();

    } else if (this._elem.closest('[data-target="single"]')) {
      this.double();

    } else {
      this.off();
    }
  }
}

export default ToggleButton;