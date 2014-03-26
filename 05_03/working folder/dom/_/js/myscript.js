(function() {
	// variables
	var myNode = document.querySelector('article#artlist div.pixgrid.group ul');
	
	// utilities
	
	// listeners, main
	
	// init
	function init_enlargeThmbImg(e) {
		if (e.target.tagName === 'IMG') {

			// div --- create the opacity background image div
			var myOverlay = document.createElement('div');
			myOverlay.id = 'overlay';
			myOverlay.style.position = 'absolute';
			myOverlay.style.zIndex = 1;
			myOverlay.style.display = 'block';
			myOverlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
			
			myOverlay.style.width = window.innerWidth + 'px';
			myOverlay.style.height = window.innerHeight + 'px';
			myOverlay.style.top = window.pageYOffset + 'px';
			myOverlay.style.left = window.pageXOffset + 'px';

			document.body.appendChild(myOverlay);
		}
	}
	
	// init EventTarget object
	myNode.addEventListener('click', init_enlargeThmbImg, false);
})();