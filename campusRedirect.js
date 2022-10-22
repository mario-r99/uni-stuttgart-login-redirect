(function(){

  function checkIfLoaded(counter) {
    if (counter > 0) {
      setTimeout(function() {
        var login = document.querySelector('a[href*="app/desktop/#/login"]');
        if (login) {
          login.click();
        }
        else {
          checkIfLoaded(counter-1);
        }
      })
    }
  }

  checkIfLoaded(50);
  
}())
