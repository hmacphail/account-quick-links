$(document).ready(function(){
  var theme = getCookie();
  $("#select-theme").val(theme);
  setTheme(theme);
});

function changeTheme(obj) {
  setTheme(obj.value);
  setCookie(obj.value);
}

function setTheme(theme) {
  $(document.body).removeClass().addClass(theme);
}

function setCookie(theme) {
  document.cookie = "theme=" + theme;
}

function getCookie() {
  var theme = document.cookie.split('=')[1];
  return theme;
}