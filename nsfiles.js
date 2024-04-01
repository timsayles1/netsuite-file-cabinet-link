var mainTableHeader = document.getElementById('div__labtab');
var mainTableContents = document.getElementById('div__bodytab');
mainTableHeader.rows[0].cells[1].innerText =  'Internal ID/LINK'
var tableRows = mainTableContents.rows;
for (var r = 0; tableRows && r < tableRows.length; r++) {
	var row = 'row'+r;
	if (tableRows[row]) {
		if (tableRows[row].cells[5].innerText != 'Folder') {
			tableRows[row].cells[1].setAttribute('onclick','var rl = nlapiLookupField("file",Number(this.innerHTML),"URL");navigator.clipboard.writeText(window.location.origin + rl);alert("Link copied to clipboard");');
		}
	}
}
