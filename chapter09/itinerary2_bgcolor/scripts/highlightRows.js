// 鼠标停留在某行，则某行高亮s
function highlightRows() {
  if(!document.getElementsByTagName) return false;
  var rows = document.getElementsByTagName("tr");
  for (var i=0; i<rows.length; i++) {
	  //鼠标进入的表格行效果
    rows[i].onmouseover = function() {
      this.style.fontWeight = "bold";
    }
	//鼠标退出的表格行效果
    rows[i].onmouseout = function() {
      this.style.fontWeight = "normal";
    }
  }
}
addLoadEvent(highlightRows);