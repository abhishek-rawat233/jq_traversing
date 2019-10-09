//TRAVERSING
//1. select img elements and logging their alt
$('img').each(function() {
    console.log(this.alt);
  });

//2. select search input text box's form and add class to interval
$('input[name="q"]').closest('form').addClass('klass');

//3. Select the list item inside #myList that has a class of "current" and remove that class from it; add a class of "current" to the next list item.
$('#myList')
  .find('li.current')
    .removeClass()
  .next().
    addClass('current');

//4. Select the select element inside #specials; traverse your way to the submit button.
$('#specials select').parent().next().find('.input_submit');

//5. Select the first list item in the #slideshow element; add the class "current" to it, and then add a class of "disabled" to its sibling elements.
$('#slideshow li:first')
  .addClass('current')
  .siblings()
    .addClass('disabled');
