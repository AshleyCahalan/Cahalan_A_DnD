(() => {
	// put variables (connections to the web page / DOM) at the top
	const puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
				dropZoneContainer = document.querySelector(".puzzle-board");

	// functions go in the middle

	// this function runs when the bottom nav buttons are clicked
	// it changes the bg image of the drop zone div using the style property
	function changeBGImage() {
		// get the custom data attribute from the clicked button
		let currentImage = this.dataset.imageref;

		// ` ` is NOT a quote. It's a JS template string

		dropZoneContainer.style.backgroundImage = `url(images/backGround${currentImage}.jpg)`;
		//Intermediate way to do it, remove let statement, 1 step instead of 2
		dropZoneContainer.style.backgroundImage = `url(images/backGround${this.dataset.imageref}.jpg)`;

	}

	// event handling at the bottom
	puzzleSelectors.forEach(button => button.addEventListener("click", changeBGImage));

	// emulate a click on the first button and run the bg image function
	changeBGImage.call(puzzleSelector[0]);

})();
