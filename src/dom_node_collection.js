class DOMNodeCollection {
  constructor (array) {
    this.elements = array;
    
  }

  html(arg) {
    let innerHTML;
    if (arg) {
      this.elements.forEach((el) => {
        el.innerHTML = arg;});
    } else {
      return this.elements[0].innerHTML;
    }
  }

  empty () {
    this.elements.forEach( (el) => {
      el.innerHTML = '';
    });
  }

  append (arg) {
    this.elements.forEach((el1) => {
      if (arg instanceof DOMNodeCollection) {
        arg.elements.forEach((el2) => {
          el1.innerHTML += el2.outerHTML;
        });
      } else if(arg instanceof HTMLElement) {
        el1.appendChild(arg);
      } else {
          el1.innerHTML += arg;
      }
    });
  }

  attr (type, arg) {
    this.elements.forEach((el) => {
      el.setAttribute(type, arg);
    });
  }

  addClass (arg) {
    this.elements.forEach((el) => {
      el.classList.add(arg);
    });
  }

  removeClass (arg) {
    this.elements.forEach((el) => {
      el.classList.remove(arg);
    });  
  }

}

module.exports = DOMNodeCollection;