// console commands section 1
	// var myNode = document.querySelector('.artistlist img')
	// myNode.src
	// myNode.src = 'images/artists/Xhou_Ta_tn.jpg'
	// myNode.id = "selected"
	// myNode.className = "myClass"
	
	// go to "Register" form page
		// var myNode = document.querySelector('label')
		// myNode
		// myNode.htmlFor = "companyname"
		// myNode
		// var myNode = document.querySelector("input[type=radio]")
		// myNode
		// myNode.checked = 0

// console commands section 2 -- "form" page
	// var myNode = document.querySelector('#register label')
	// myNode
	// myNode.htmlFor
	// myNode.getAttribute('for')
	// myNode.setAttribute('for', 'somethingelse')
	// myNode.hasAttribute('id') -- NOTE: this returns false
	// myNode.hasAttribute('for')
	// myNode.removeAttribute('for')
	// myNode
	
// console commands section 3 -- go to "Home" page
	// var myNode = document.querySelectorAll('#featuredartists img')
	// myNode
	// myNode[1]
	// myNode[1].dataset.task
	// myNode[1].dataset.task = "presenter"
	// myNode[1].dataset.task = "speaker"
	
// console commands section 4 -- ( Can use classList.js polyfill to use it right now )
	// var myNode = document.querySelector('.artistlist img')
	// myNode
	// myNode.classList.add('faded')
	// myNode
	// myNode.classList.add('pulse')
	// myNode
	// myNode.classList.remove('pulse')
	// myNode
	// myNode.classList.remove('faded')
	// myNode
	// myNode.classList.toggle('hidden') -- true
	// myNode.classList.toggle('hidden') -- false
	// myNode.classList.contains('hidden')
	
// console commands section 5
	// var myNode = document.querySelector('#featuredartists img')
	// myNode
	// myNode.attributes -- NOTE: gives a really cool node map
	// myNode.attributes[0]
	// myNode.attributes['src']
	// myNode.attributes.src

// console commands section 6 
	// var myNode = document.querySelector('#abouttheevent')
	// myNode
	// myNode.innerHTML
	// myNode.innerHTML = 'The quick brown fox'

	// refresh the page before starting this section		
		// var myNode = document.querySelector('#abouttheevent')
		// myNode
		// myNode.outerHTML
		// myNode.insertAdjacentHTML('afterend', '<p>this is another paragraph</p>')
		// myNode.insertAdjacentHTML('beforebegin', '<p>This is another pargraph</p>')
		// myNode.insertAdjacentHTML('afterbegin', '<p>This is another pargraph man</p>')
		// myNode.insertAdjacentHTML('beforeend','<p>This is another paragraph man</p>')

// console commands section 7
	// var myNode = document.querySelector('#abouttheevent')
	// myNode
	// dir(myNode)
	// myNode.innerText  						 	-- good idea to stay away from for now
	// myNode.innerText = "The quick brown fox" 	-- good idea to stay away from for now
	// myNode.innerText 							-- good idea to stay away from for now