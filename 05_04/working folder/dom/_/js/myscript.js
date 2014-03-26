(function() {
	// variables
	var myNode = document.querySelector('article#artlist div.pixgrid.group ul');
	
	// utilities
	
	// listeners, main
	
	// init
	function init_enlargeThmbImg(e) {
		if (e.target.tagName === 'IMG') {
			console.log(e);
			
			// div --- create background div overlay
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
			
			// img --- create img tag and append to the background overlay
			var largeImage = document.createElement('img');
			var imageSrc = e.target.src;
			largeImage.src = imageSrc.substr(0,imageSrc.length - 7) + '.jpg';
			largeImage.id = 'largeImage';
			largeImage.style.position = 'absolute';
			largeImage.style.zIndex = 1;
			largeImage.style.display = 'block';
						
			var resizeLargeImage = function() {
				// if image is taller than browser window
				if (this.height > window.innerHeight) {
					this.ratio = window.innerHeight / this.height;
					this.height = this.height * this.ratio;
					this.width = this.width * this.ratio;
				}
				
				// if image is wider than browser window
				if (this.width > window.innerWidth) {
					this.ratio = window.innerWidth / this.width;
					this.height = this.height * this.ratio;
					this.width = this.width * this.ratio;
				}
				
				myOverlay.appendChild(this);
			};
			
			largeImage.addEventListener('load', resizeLargeImage, false);
		}
	}
	
	myNode.addEventListener('click', init_enlargeThmbImg, false);
})();