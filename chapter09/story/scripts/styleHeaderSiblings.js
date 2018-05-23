// 为 <h1> 元素的下一个元素节点添加样式类
function styleHeaderSiblings() {
  if (!document.getElementsByTagName) return false;
  var headers = document.getElementsByTagName("h1");
  for (var i=0; i<headers.length; i++) {
    var elem = getNextElement(headers[i].nextSibling);
	// 为elem元素添加样式类
    addClass(elem,"intro");
  }
}
// 添加元素 element 添加样式类 value
function addClass(element,value) {
  if (!element.className) {
    element.className = value;
  } else {
    element.className+= " ";
    element.className+= value;
  }
}

// 获取 node节点的下一个元素
function getNextElement(node) {
  if(node.nodeType == 1) {
	return node;
  }
  if (node.nextSibling) {
    return getNextElement(node.nextSibling);
  }
  return null;
}
addLoadEvent(styleHeaderSiblings);