// gets a new object (the architecture allows us to not have to use the 'new' keyword here)
var g = G$('<urname>', '<surname>');

// use our chainable methods
g.greet().setLang('es').greet(true);

// let's use our object on the click of the login button
$('#login').click(function(){

  var firstname = $('#firstname').val();
  var lastname  = $('#lastname').val();
  var formality = $('#formality').is(':checked');

  // create a new 'Greetr' object ('et's pretend we know the name from the login)
  var loginGrtr = G$(firstname, lastname);
  

  // hide the login on the screen
  $('#logindiv').hide();

  // fire off an HTML greeting, passing the '#greeting' as the selector and 
  // the chosen language, and log the welcome as well
  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', formality).log();
})