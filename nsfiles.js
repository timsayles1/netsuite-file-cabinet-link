function fileLink(r) {
	var rl = nlapiLookupField("file",Number(r.innerHTML),"URL");
	navigator.clipboard.writeText(window.location.origin + rl);alert("Link copied to clipboard");}						
	document.querySelectorAll('a[onclick^="showFolderContents"').forEach(folder => {
		let folderId = folder.href.replace(/[\d\w\.\/:-]+\/media\/|\?folder=-*\d+$/g, '');
		let folderText = folder.innerHTML;
		let parent = folder.parentElement;
		parent.removeChild(folder);
		let newLink = document.createElement('a');
		newLink.href = `/app/common/media/mediaitemfolders.nl?folder=${folderId}&whence=`;
		newLink.innerHTML = folderText;
		newLink.classList.add('dottedlink');
		parent.appendChild(newLink);
	});
	document.querySelectorAll('#medialisthdr_t a').forEach(folder => {
		let folderId = folder.href.replace(/javascript:showFolderContents\(|\)/g, '');
		folder.href = `/app/common/media/mediaitemfolders.nl?folder=${folderId}&whence=`;
	});
	function fileFunction(r) {
		var rl = nlapiLookupField('file',Number(r.innerHTML),'URL');
		navigator.clipboard.writeText(window.location.origin + rl);
		alert('Link copied to clipboard');
	};
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
