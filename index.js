// You made it to the last exercise! 
// All you have to do now is make sure you can actually save ideas into localStorage. 
// Even better if you can have it so that the ideas persist after a refresh. 

// ---- potential answer (previous exercise) ------------------
//var submitButton = document.querySelector('.submit-button');
//var titleInput = document.querySelector('.title');
//var bodyInput = document.querySelector('.body');
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
//  document.querySelector('.list-items').append(formatedIdea);
//};
//
//function resetInputs(title, body) {
//  title.value = '';
//  body.value = '';
//}
//
//function toggleInputs() {
//  bodyInput.disabled = !titleInput.value || false
//  submitButton.disabled = !bodyInput.value || false
//};
//
//
//titleInput.addEventListener('keyup', toggleInputs);
//bodyInput.addEventListener('keyup', toggleInputs);
//
//submitButton.addEventListener('click', function(event) {    
//  var title = document.querySelector('.title');    
//  var body  = document.querySelector('.body');    
//  var formatedIdea = formatIdea(title, body);
//  addToDom(formatedIdea);
//  resetInputs(title, body);
//  toggleInputs();
//});
