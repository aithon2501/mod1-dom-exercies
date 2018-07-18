// Now that we can append both values onto the dom lets look at 
// Disabeling the submit button unless there is valid content in both input fields.

/// ---- potential answer (previous exercise) ------------------
//var submitButton = document.querySelector('.submit-button');|

//function formatIdea(title, body) {
//  var listItem = document.createElement('li');
//  var ideaText = title.value + '\n' + body.value
//  return listItem.innerHTML = ideaText;
//};
//
//function addToDom(formatedIdea) {
//  document.querySelector('.list-items').append(formatedIdea)
//}
//
//function resetInputs(title, body) {
//  title.value = '';
//  body.value = '';
//}
//
//submitButton.addEventListener('click', function(event) {    
//  var title = document.querySelector('.title');    
//  var body  = document.querySelector('.body');    
//  var formatedIdea = formatIdea(title, body);
//  addToDom(formatedIdea);
//  resetInputs(title, body);
//});
//--------------------------------------------------------------
