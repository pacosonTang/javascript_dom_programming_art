function displayAccesskeys() {
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
// 获取所有链接元素
  var links = document.getElementsByTagName("a");
// 创建一个数组存储快捷键
  var akeys = new Array();
// 遍历链接
  for (var i=0; i<links.length; i++) {
    var current_link = links[i];
// 如果浏览器不支持快捷键属性，则继续
    if (current_link.getAttribute("accesskey") == null) continue;
// 获取 accesskey 属性值；
    var key = current_link.getAttribute("accesskey");
// 获取链接元素 <a> 的节点值；
    var text = current_link.lastChild.nodeValue;
// add them to the array
    akeys[key] = text;
  }
// 创建一个无序列表
  var list = document.createElement("ul");
// 遍历快捷键
  for (key in akeys) {
    var text = akeys[key];
//  创建一个字符串用于存储 快捷键 和 对应的链接
    var str = key + " : "+text;
// 创建一个列表项 <li>
    var item = document.createElement("li");
    var item_text = document.createTextNode(str);
    item.appendChild(item_text);
// 加入到列表
    list.appendChild(item);
  }
// 创建标题
  var header = document.createElement("h3");
  var header_text = document.createTextNode("Accesskeys");
  header.appendChild(header_text);
// 添加标题到 <body> 元素
  document.body.appendChild(header);
// 添加列表到 <body> 元素
  document.body.appendChild(list);
}
addLoadEvent(displayAccesskeys);