window.onload = function() {
  var para = document.createElement("p");
  var testdiv = document.getElementById("testdiv");
  alert(testdiv.innerHTML);
  // appendChild方法添加para为testdiv的子元素；
  testdiv.appendChild(para);
  // createTextNode方法：创建文本节点
  var txt = document.createTextNode("Hello world");
  para.appendChild(txt);
}

function f1(){
	var para = document.createElement("p");
	var info = "nodeName: ";
	info += para.nodeName;
	info += ", nodeType:";
	info += para.nodeType;
	alert(info);
}