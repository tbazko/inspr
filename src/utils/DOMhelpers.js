const DOMhelpers = {
  closest: function (el, selector) {
    var closest;
    while (el) {
      closest = el;
      if (closest && this.selectorMatches(closest, selector)) {
        return closest;
      }
      el = closest.parentElement;
    }

    return null;
  },
  selectorMatches: function (el, selector) {
    var p = Element.prototype;
    var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function (s) {
      return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
    };
    return f.call(el, selector);
  },

  addClass: function (element, className) {
    if (this.selectorMatches(element, '.' + className)) return;

    if (element.className != '') {
      element.className += ' ' + className;
    } else {
      element.className = className;
    }
  },

  removeClass: function (element, className) {
    var regex = new RegExp('(?:^|\\s)' + className + '(?!\\S)', 'gi');
    element.className = element.className.replace(regex, '');
  },

  insertAfter: function (newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
}

export default DOMhelpers;