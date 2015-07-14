function loadOptions() {
	 var currentFormat = localStorage.currentFormat;

	  var select = document.getElementById("format");
    for (var i = 0; i < select.children.length; i++) {
		     var child = select.children[i];
			if (child.value == currentFormat) {
			child.selected = "true";
			break;
		}
	}
}

function saveOptions() {
  var select = document.getElementById("format");
	var format = select.children[select.selectedIndex].value;
	localStorage.currentFormat = format;
}

addEventListener("load", loadOptions);
addEventListener("click", saveOptions);