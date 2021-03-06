function displayAbbreviations() {
// 检查浏览器兼容性问题
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
// 获取所有缩略语
  var abbreviations = document.getElementsByTagName("abbr");
  if (abbreviations.length < 1) return false;
  var defs = new Array();
// 遍历缩略语
  for (var i=0; i<abbreviations.length; i++) {
    var current_abbr = abbreviations[i];
	// 浏览器是否支持 abbr元素， 不支持就continue；
    if (current_abbr.childNodes.length < 1) continue;
    var definition = current_abbr.getAttribute("title");
    var key = current_abbr.lastChild.nodeValue;
    defs[key] = definition; // 用于存储缩略语标题的数组
  }
// 创建定义列表
  var dlist = document.createElement("dl");
// 遍历数组
  for (key in defs) {
    var definition = defs[key];
// 创建定义标题
    var dtitle = document.createElement("dt");
    var dtitle_text = document.createTextNode(key);
    dtitle.appendChild(dtitle_text);
// 创建定义描述
    var ddesc = document.createElement("dd");
    var ddesc_text = document.createTextNode(definition);
    ddesc.appendChild(ddesc_text);
// 添加主题到定义列表
    dlist.appendChild(dtitle); // 定义标题
    dlist.appendChild(ddesc); // 定义描述
  }
  if (dlist.childNodes.length < 1) return false;
// 创建元素节点
  var header = document.createElement("h2");
  // 创建文本节点
  var header_text = document.createTextNode("Abbreviations");
  header.appendChild(header_text);
// 添加元素节点到body
  document.body.appendChild(header);
// 添加定义列表到body
  document.body.appendChild(dlist);
}
// 使得displayAbbreviations函数在document加载完毕后就立即加载
addLoadEvent(displayAbbreviations);