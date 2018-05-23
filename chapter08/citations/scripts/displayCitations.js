function displayCitations() {
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
// 获取所有的 blockquote 的元素节点
  var quotes = document.getElementsByTagName("blockquote");
// 遍历blockquote
  for (var i=0; i<quotes.length; i++) {
// 浏览器不支持cite属性，则继续；
    if (!quotes[i].hasAttribute("cite")) continue;
// store the cite attribute
    var url = quotes[i].getAttribute("cite");
// 获取 blockquote元素的所有节点
    var quoteChildren = quotes[i].getElementsByTagName('*');
// 浏览器不支持的话，则继续；
    if (quoteChildren.length < 1) continue;
// 获取blockquote元素的最后一个节点
    var elem = quoteChildren[quoteChildren.length - 1];
// 创建一个连接
    var link = document.createElement("a");
    var link_text = document.createTextNode("source");
    link.appendChild(link_text);
    link.setAttribute("href",url);
    var superscript = document.createElement("sup");
    superscript.appendChild(link);
// 把标记 superscript 添加到 blockquote元素的最后一个子节点
    elem.appendChild(superscript);
  }
}
addLoadEvent(displayCitations);