// 
function prepareSlideshow() {
// 浏览器是否支持以下方法；
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
// 确保元素存在
  if (!document.getElementById("linklist")) return false;
  if (!document.getElementById("preview")) return false;
// 为元素 preview添加style 样式
  var preview = document.getElementById("preview");
  preview.style.position = "absolute";
  preview.style.left = "0px";
  preview.style.top = "0px";
// 获取元素 <ol>
  var list = document.getElementById("linklist");
  // 获取所有链接 <a>
  var links = list.getElementsByTagName("a");
// 绑定动画效果到链接
  links[0].onmouseover = function() {
    moveElement("preview",-100,0,10);
  }
  links[1].onmouseover = function() {
    moveElement("preview",-200,0,10);
  }
  links[2].onmouseover = function() {
    moveElement("preview",-300,0,10);
  }
}

addLoadEvent(prepareSlideshow);