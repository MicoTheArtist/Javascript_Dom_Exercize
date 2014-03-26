// console commands section 1
	// document.getElementById('page_home')
	// document.body
	// document.getElementById('comingtoevent')
	
	// these go together
		// var myNode = document.getElementById('comingtoevent')
		// myNode
		// dir(myNode)
		// myNode.firstChild
		// myNode.childNodes
		
// console commands section 2
	// document.getElementsByTagName('li')
	// document.getElementById('featuredartists').getElementsByTagName('li')
		
	// This goes together
		// var myNode = document.getElementById('featuredartists').getElementsByTagName('li')
		// myNode
		// myNode[2]
		// document.getElementById('featuredartists').getElementsByTagName('li')[2]
		// myNode[2].firstChild
		
// console commands section 3 (go to "Artists" Page)
	// document.getElementsByClassName('artist group')
	// document.getElementById('artistlist').getElementsByClassName('artist group')

// console command section 4 (back to "Home" page
	// NOTE: querySelector() & querySelectorAll() -- probably the best way to select elements in html
	// document.querySelector('article')
	// document.querySelectorAll('article')
	// document.querySelector('article').childNodes
	// document.querySelectorAll('article')[1].childNodes
	
	// Go to the "Artist" page and run the following in the console
		// document.querySelectorAll('.artist')
		
	// Go to the "Register" page  and run the command in the console
		// document.querySelectorAll('input[type=radio]');
		// document.querySelectorAll('#artistlist li')
		// document.querySelectorAll('#artistlist li>img')
		// document.querySelectorAll('#artistlist li>img, #comingtoevent img')
		
// console command section 5 (start on the "Register" page)
	// document.forms
	// document.forms[0]
	// document.register -- ".register" is refering to the elements name
	// document.register.myname
	// document.register.myname.value = 'Ray Vans'
	// document.getElementsByName('subscribe')[0]
	// document.getElementsByName('subscribe')[1].checked = "checked"
	// document.register.reference
	// document.register.reference.value = 'facebook'
	// document.register.reference.selectedIndex -- "selectedIndex" is important here

// console command section 6 (start on the "Home" page)
	// var myNode = document.querySelectorAll('nav li a')[4]
	// myNode
	// myNode.nodeType
	// myNode.nodeName
	// myNode.attributes
	// myNode.attributes[0]
	// myNode.attributes[0].nodeType
	// myNode.attributes[0].nodeName
	// myNode.firstChild.nodeType
	// myNode.firstChild = "registration" -- note: this does not work because this is of type text node
	// myNode.firstChild.nodeValue = "registration"

// console command section 7 (start on the "Home" page)
	// var myNode = document.querySelector('.artistlist li')
	// myNode
	// dir(myNode)
	// myNode.parentNode
	// myNode.parentNode.childNodes
	// myNode.parentNode.firstChild
	// myNode.parentNode.lastChild
	// myNode.parentNode.firstChild.nextSibling

	// var myNode = document.querySelectorAll('.artistlist li')
	// myNode
		
// console command section 8 (start on the "Home" page)
	// NOTE: the following elements only return actual node elements and not text node elements, however, this has lowsy browser support.
	// var myNode = document.querySelector('.artistlist li')
	// myNode
	// myNode.parentNode
	// myNode.parentNode.childNodes -- NOTE: "ChildNodes" this returns text nodes
	// myNode.parentNode.children
	// myNode.parentNode.firstChild -- NOTE: "firstChild" returns text node
	// myNode.parentNode.firstElementChild
	// myNode.parentNode.lastElementChild