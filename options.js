function loadOptions() {
	var format = document.getElementById('format');
	for (var i = 0; i < format.children.length; i++) {
		var child = format.children[i];
		if (child.value == localStorage.format) {
			child.selected = 'true';
			break;
		}
	}
}

function saveOptions() {
	var format = document.getElementById('format');
	localStorage.format = format.children[format.selectedIndex].value;
}

addEventListener('load', loadOptions);
addEventListener('click', saveOptions);