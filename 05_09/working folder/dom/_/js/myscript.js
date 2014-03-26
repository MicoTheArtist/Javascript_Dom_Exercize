(function(){
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
	function init_enlargeThmgImg(e) {
		if (e.target.tagName === 'IMG') {
			
			// div --- create a div tag background
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
			
			// img --- create an img tag and append inside the div tag
			var largeImage = document.createElement('img');
			var imageSrc = e.target.src;
			largeImage.src = imageSrc.substr(0,imageSrc.length - 7) + '.jpg';
			largeImage.id = 'largeImage';
			largeImage.style.display = 'block';
			largeImage.style.position = 'absolute';
			largeImage.style.zIndex = 1;
			largeImage.style.cursor = 'pointer';
						
			var resizeLargeImage = function() {
				// if image is taller than browser
				if (this.height > window.innerHeight) {
					this.ratio = window.innerHeight / this.height;
					this.height = this.height * this.ratio;
					this.width = this.width * this.ratio;
				}
				
				// if image is wider than browser
				if (this.width > window.innerWidth) {
					this.ratio = window.innerWidth / this.width;
					this.width = this.width * this.ratio;
					this.width = this.height * this.ratio;
				}
				centerImage(this);
				myOverlay.appendChild(this);
			};
			
			var closeLargeImage = function() {
				if (myOverlay) {
					myOverlay.parentNode.removeChild(myOverlay);
				}
			};
			
			var preventBackScrolling = function() {
				if (myOverlay) {
					myOverlay.style.top = window.pageYOffset + 'px';
					myOverlay.style.left = window.pageXOffset + 'px';
				}
			};
			
			var resizeBackground = function() {
				if (myOverlay) {
					
					myOverlay.style.width = window.innerWidth + 'px';
					myOverlay.style.height = window.innerHeight + 'px';
					
					// if image is taller than browser
					if (largeImage.height > window.innerHeight) {
						largeImage.ratio = window.innerHeight / largeImage.height;
						largeImage.height = largeImage.height * largeImage.ratio;
						largeImage.width = largeImage.width * largeImage.ratio;
					}
					
					// if image is wider than browser
					if (largeImage.width > window.innerWidth) {
						largeImage.ratio = window.innerWidth / this.width;
						largeImage.width = largeImage.width * largeImage.ratio;
						largeImage.width = largeImage.height * largeImage.ratio;
					}

					
					centerImage(largeImage);
				}
			};
			
			largeImage.addEventListener('load', resizeLargeImage, false);
			largeImage.addEventListener('click', closeLargeImage, false);
			window.addEventListener('scroll', preventBackScrolling, false);
			window.addEventListener('resize', resizeBackground, false);
		}
	}
	
	myNode.addEventListener('click', init_enlargeThmgImg, false);
})();