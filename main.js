window.onscroll = function() {myFunction()};

let navbar = document.getElementById('bar');
let names = document.getElementById('names');
let piang = document.getElementById('piang');
let go = document.getElementById('go');
let cont_piang1 = document.getElementById('content-piang1');
let cont_piang2 = document.getElementById('content-piang2');
let cont_piang3 = document.getElementById('content-piang3');
let cont_go1 = document.getElementById('content-go1');
let cont_go2 = document.getElementById('content-go2');
let cont_both1 = document.getElementById('content-both1');
let cont_both2 = document.getElementById('content-both2');
let cont_both3 = document.getElementById('content-both3');
let cont_both4 = document.getElementById('content-both4');

function myFunction() {
    if (window.scrollY > 0) {
        navbar.classList.add("sticky")
        names.style.visibility = 'visible';
      } else {
        navbar.classList.remove("sticky");
        names.style.visibility = 'hidden';
      }
}

//PIANG
cont_piang1.addEventListener("mouseover", function(event) {
    piang.style.color = 'orange';
});

cont_piang1.addEventListener("mouseleave", function(event) {
    piang.style.color = '#fff';
});

cont_piang2.addEventListener("mouseover", function(event) {
    piang.style.color = 'orange';
});

cont_piang2.addEventListener("mouseleave", function(event) {
    piang.style.color = '#fff';
});

cont_piang3.addEventListener("mouseover", function(event) {
    piang.style.color = 'orange';
});

cont_piang3.addEventListener("mouseleave", function(event) {
    piang.style.color = '#fff';
});

//GO
cont_go1.addEventListener("mouseover", function(event) {
    go.style.color = 'orange';
});

cont_go1.addEventListener("mouseleave", function(event) {
    go.style.color = '#fff';
});

cont_go2.addEventListener("mouseover", function(event) {
    go.style.color = 'orange';
});

cont_go2.addEventListener("mouseleave", function(event) {
    go.style.color = '#fff';
});

//BOTH
cont_both1.addEventListener("mouseover", function(event) {
    piang.style.color = 'orange';
    go.style.color = 'orange';
});

cont_both1.addEventListener("mouseleave", function(event) {
    piang.style.color = '#fff';
    go.style.color = '#fff';
});

cont_both2.addEventListener("mouseover", function(event) {
    piang.style.color = 'orange';
    go.style.color = 'orange';
});

cont_both2.addEventListener("mouseleave", function(event) {
    piang.style.color = '#fff';
    go.style.color = '#fff';
});

cont_both3.addEventListener("mouseover", function(event) {
    piang.style.color = 'orange';
    go.style.color = 'orange';
});

cont_both3.addEventListener("mouseleave", function(event) {
    piang.style.color = '#fff';
    go.style.color = '#fff';
});

cont_both4.addEventListener("mouseover", function(event) {
    piang.style.color = 'orange';
    go.style.color = 'orange';
});

cont_both4.addEventListener("mouseleave", function(event) {
    piang.style.color = '#fff';
    go.style.color = '#fff';
});