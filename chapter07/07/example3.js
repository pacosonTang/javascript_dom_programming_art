window.onload = function() {
	// 利用js生成<p>元素，
	// 且元素内容为 this is my content.
	var para = document.createElement("p");
	var t1 = document.createTextNode("this is");
	var em = document.createElement("em");
	var t2 = document.createTextNode("my");
	var t3 = document.createTextNode("content. ");
	
	para.appendChild(t1);
	em.appendChild(t2);
	para.appendChild(em);
	para.appendChild(t3);
	var testdiv = document.getElementById("testdiv");
	testdiv.appendChild(para);
}