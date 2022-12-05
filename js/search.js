//Get elements from the DOM
const search = document.querySelector('.search');
const panels = document.querySelectorAll('.panel');

//Add an input event
/*This event fires whenever you 
type something in the input field*/
search.addEventListener('input', () => {
  //If the search bar isn't empty
  if(search.value !== "") {
    //Loop through all panels
    panels.forEach(panel => {
      //Get the panel heading
			const panelHeading = panel.querySelector('h2');
      //Convert heading text to lower case letters
      const panelHeadingText = panelHeading.innerHTML.toLowerCase();
      //Convert input value to lowercase letters
      //This will make the search case UNsensitive
      const inputText = search.value.toLowerCase();
      /*If the heading text DOESN't (!) 
      contain what is in the search bar*/ 
      if(!panelHeadingText.includes(inputText)) {
        //Hide that panel
				panelHeading.parentElement.style.display = "none";
      //But if it does
			} else {
        //Make sure to show that panel
				panelHeading.parentElement.style.display = "block";
			}
    });
  //If the search bar IS empty
  } else {
    //Show all of the panels
    panels.forEach(panel => {
      panel.style.display = "block";
    });
  }
});