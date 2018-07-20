// Now that we can append both values onto the dom lets step it up a little
// The submit button should be disabled if there is no valid content in both input fields
// And the second input field should be disabled until there is valid content in the first input field

/// ---- potential answer (previous exercise) ------------------
//var submitButton = document.querySelector('.submit-button');
//
//function formatIdea(title, body) {
//  var listItem = document.createElement('li');
//  var ideaText = title.value + '\n' + body.value
//  listItem.innerHTML = ideaText;
//
//  return listItem;
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
