(function(){
  var login = document.querySelector('a[href^="https://ilias3.uni-stuttgart.de/login.php"]');
  
  if (!login) return;
  
  login.click();
}())
