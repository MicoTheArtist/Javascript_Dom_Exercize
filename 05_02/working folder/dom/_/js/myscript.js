(function() {
	// variables
	var myNode = document.querySelector('article#artlist div.pixgrid.group ul');
	
	// utilities
	
	// listeners, main
	function init_enlargeThmbImage(e) {
		if (e.target.tagName === 'IMG') {
			console.log(e);
		}
	}
	
	// init
	myNode.addEventListener('click', init_enlargeThmbImage, false);
	
})();