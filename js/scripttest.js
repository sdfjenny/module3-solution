// Event Handing
document.addEventListener('DOMContentLoaded',
  function(event) {

    // Unobstrusive event binding
    document.querySelector('button')
      .addEventListener('click', function(){


          // Call server to get the name
          $ajaxUtils
            .sendGetRequest('data/name.txt',
                function(request) {
              var name = request.responseText;
              document.querySelector('#content')
                .innerHTML = '<h2>Hello ' + name + '!</h2>';
              console.log(name)
            });






      });







  }
);
