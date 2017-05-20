const defaultOptions = {
  wait: 10,
  elem: 'img',
  wrap: '',
};


export default class FixHeight {
  constructor(options) {
    this._options = this._getOptions(options);
    this._fixHeight = this._fixHeight.bind(this);
  }

  // Public
  init() {
    this._fixHeight();
    this._render();
  }

  // Private
  _render() {
    window.addEventListener('resize', this._debounce(
      this._fixHeight,
      this._options.wait
    ), true);
  }

  _fixHeight() {
    const body = document.body;
    const computedStyle = getComputedStyle(body);
    const lineHeight = parseInt(computedStyle.lineHeight, 10);
    let elems = document.querySelectorAll(this._options.elem);

    elems.forEach((elem) => {
      elem.style.height = 'auto';

      let block = Math.floor(elem.offsetHeight / lineHeight);
      let newHeight = lineHeight * block;

      elem.style.height = `${newHeight}px`;
    });
  }

  _debounce(func, wait, immediate) {

    return function() {
      let timeout;
      const later = () => {
        timeout = null;
        if (!immediate) func(...arguments);
      };

      let callNow = immediate && !timeout;
      clearTimeout(timeout);

      timeout = setTimeout(later, wait);
      if (callNow) func(...arguments);
    };
  }

  _getOptions(options) {
    return Object.assign({}, defaultOptions, options);
  }
}