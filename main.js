window.onscroll = function() {myFunction()};

let navbar = document.getElementById('bar');
let names = document.getElementById('names');
let piang = document.getElementById('piang');
let go = document.getElementById('go');
let cont_piang = document.getElementById('content-piang');
let cont_go = document.getElementById('content-go');
let cont_both = document.getElementById('content-both');

function myFunction() {
    if (window.scrollY > 0) {
        navbar.classList.add("sticky")
        names.style.visibility = 'visible';
      } else {
        navbar.classList.remove("sticky");
        names.style.visibility = 'hidden';
      }
}

cont_piang.addEventListener("mouseover", function(event) {
    piang.style.color = 'orange';
});

cont_piang.addEventListener("mouseleave", function(event) {
    piang.style.color = '#fff';
});

cont_go.addEventListener("mouseover", function(event) {
    go.style.color = 'orange';
});

cont_go.addEventListener("mouseleave", function(event) {
    go.style.color = '#fff';
});

cont_both.addEventListener("mouseover", function(event) {
    piang.style.color = 'orange';
    go.style.color = 'orange';
});

cont_both.addEventListener("mouseleave", function(event) {
    piang.style.color = '#fff';
    go.style.color = '#fff';
});