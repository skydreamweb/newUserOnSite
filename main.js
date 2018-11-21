

let button = document.querySelectorAll('jumbotron');

let msg = `
Unesite zeljenu temu
primary * info * danger * warning
ili Ctrl+G za promenu tem`;

window.addEventListener('keypress', function() {
  console.log();
  if (event.keyCode == 7) {
    let theme = prompt(msg);
    localStorage.theme = theme;
    askUser(;)

  }
})

askUser();

function askUser() {
  if (localStorage.theme) {
    for (var i = 0; i < btns.length; i++) {
      btns[i].className = "btn btn-"+localStorage.theme;
    }

  }else {
    let theme = prompt(msg);
    localStorage.theme = theme;
    for (var i = 0; i < btns.length; i++) {
      btns[i].className = "btn btn-"+theme;
    }
  }
}
