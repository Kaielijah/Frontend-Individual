$(function(){
  $name = $('.name');
  $email = $('.email');

  api_url = "https://stormy-fortress-58342.herokuapp.com/kayden";

  $.ajax({
    method: "GET",
    url: api_url,
    dataType: 'json',
    async: true,
    crossDomain: true

  }).success(successFunction)
    .fail(failFunction);

  function successFunction(data){
    $name.text("Name: " + data.name);
    $email.text("Email: " + data.email);
  }

  function failFunction(qXHR, textStatus, errorThrown) {
    console.log(errorThrown);
  }

});
