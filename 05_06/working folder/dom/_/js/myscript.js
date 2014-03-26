(function() {
	// variables
	var myNode = document.querySelector('article#artlist div.pixgrid.group ul');
	
	// utilities
	function centerImage(theImage) {
		var DifY = (window.innerHeight - theImage.height)/2;
		var DifX = (window.innerWidth - theImage.width)/2;
		
		theImage.style.top = DifY + 'px';
		theImage.style.left = DifX + 'px';
		
		return theImage;
	}
	
	// init
	function init_enlargeThmbImg(e) {
		if (e.target.tagName === 'IMG') {
			
			// div --- create a div tag for the background
			var myOverlay = document.createElement('div');
			myOverlay.id = 'overlayl';
			myOverlay.style.position = 'absolute';
			myOverlay.style.zIndex = 1;
			myOverlay.style.display = 'block';
			myOverlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
			
			myOverlay.style.width = window.innerWidth + 'px';
			myOverlay.style.height = window.innerHeight + 'px';
			myOverlay.style.top = window.pageYOffset + 'px';
			myOverlay.style.left = window.pageXOffset + 'px';
			
			document.body.appendChild(myOverlay);
			
			// img --- create an image tag for the background
			var largeImage = document.createElement('img');
			var imageSrc = e.target.src;
			largeImage.src = imageSrc.substr(0,imageSrc.length - 7) + '.jpg';
			largeImage.id = 'largeImage';
			largeImage.style.position = 'absolute';
			largeImage.style.zIndex = 1;
			largeImage.style.display = 'block';
					
			var resizeLargeImage = function() {
				// if image is wider than browser 
				if (this.width > window.innerWidth) {
					this.ratio = window.innerWidth / this.width;
					this.width = this.width * this.ratio;
					this.height = this.height * this.ratio;
				}
				
				// if image is taller than browser
				if (this.height > window.innerHeight) {
					this.ratio = window.innerHeight / this.height;
					this.height = this.height * this.ratio;
					this.width = this.width * this.ratio;
				}
				centerImage(this);
				myOverlay.appendChild(this);
			};
			
			largeImage.addEventListener('load', resizeLargeImage, false);
		}
	}
	
	myNode.addEventListener('click', init_enlargeThmbImg, false);
})();