function ExportarGrilla(nombreArchivo, esJSON, data) {
	var CSV;
	if (esJSON) {
		CSV = CreaTabla(data);
	} else {
		CSV = data
	}
	var ua = window.navigator.userAgent.toLowerCase();
	if (ua.indexOf('firefox') !== -1) {
		ua = 'firefox';
	} else {
		if (ua.indexOf('chrome') !== -1) {
			ua = 'chrome';
		} else {// ie
			ua = 'ie';
		}
	}
	if (ua !== 'ie') {
		if (CSV === '') {
			console.debug("datos invalidos");
			return;
		}
		var uri = 'data:application/vnd.ms-excel,' + escape(CSV);
		var link = document.createElement("a");
		link.href = uri;
		link.style = "visibility:hidden";
		link.download = nombreArchivo + ".xls";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	} else {
		var blobObject = new Blob([ CSV ]);
		window.navigator.msSaveBlob(blobObject, nombreArchivo + '.xls');
	}

}

function CreaTabla(json) {
	var arrData =json;// typeof JSONData !== 'object' ? JSON.parse(json) : JSONData;
	var CSV = '';
	var row = "<table border='1'><tr>";
	for ( var index in arrData[0]) {
		row += '<td>' + index + '</td>';
	}
	row += '</tr>';
	//CSV += row + '\r\n';
	for (var i = 0; i < arrData.length; i++) {
		 row += "<tr>";
		for ( var index in arrData[i]) {
			row += '<td>' + arrData[i][index] + '</td>';
		}
		row += '</tr>';

		//CSV += row + '\r\n';
	}
	row += '</table>';
	CSV += row + '\r\n';
	return CSV;
}