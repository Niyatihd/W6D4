const DOMNodeCollection = require('./dom_node_collection');

function $l (arg) {
  const nodeList = document.querySelectorAll(arg);
  if (nodeList !== undefined) {
    const nodeArray = Array.from(nodeList);
    const domNode = new DOMNodeCollection(nodeArray);
    return domNode;
  }
};

window.$l = $l;