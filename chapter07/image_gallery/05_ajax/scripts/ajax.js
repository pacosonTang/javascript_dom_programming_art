function getHttpObject() {
	if (typeof XMLHttpRequest == "undefined") {
		 // 定义XMLHttpRequest函数 ，返回 ActiveXObject对象
		XMLHttpRequest = function() {
			try {return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
			catch(e){}
			try {return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
			catch(e){}
			try {return new ActiveXObject("Msxml2.XMLHTTP");}
			catch(e){}
			return false;
		}
	}
	// 返回XMLHttpRequest实例
	return new XMLHttpRequest();
}

// 在 document加载完毕后，执行addLoadEvent函数，
// 以绑定 func函数作为document加载完毕后，浏览器加载的函数；
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}
//
function getNewContent() {
	var request = getHttpObject();
	if (request) {
		request.opne("GET", "example.txt", true);
		request.onreadystatechange = function() {
			if (request.readyState == 4) {
				var para = document.createElement("p");
				var text = document.createTextNode(request.responseText);
				para.appendChild(text);
				document.getElementById("new").appendChild(para);
			}
		};
		request.send(null);
	} else {
		alert("sorry, your browser does not support XMLHttpRequest.");
	}
}

addLoadEvent(getNewContent);
