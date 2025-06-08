var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
      for(tablink of tablinks){
        tablink.classList.remove("active-link");
      }
      for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");
    }

var sideMenu = document.getElementById("sideMenu");
function openMenu(){
  sideMenu.style.right = '0';
}
function closeMenu(){
  sideMenu.style.right = '-200px';
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzeBW0KcgYF_1EgiABSRM83stjE4NalFAfuADzhVceJ1SYKAynFQwUjACT3Dyy-VI9EoA/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");

    form.addEventListener('submit', e => {
      e.preventDefault();
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          msg.innerHTML = "Message Sent Successfully!";
          setTimeout(() => msg.innerHTML = "", 5000);
          form.reset();
        })
        .catch(error => console.error('Error!', error.message));
    });

// cursor

    const cursor = document.querySelector('.ball-cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});



const typedTextSpan = document.querySelector(".typing");
const textArray = ["Backend Developer", "PHP & Laravel Specialist", "Web Application Developer", "Problem Solver", "Tech Enthusiast"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1500;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 500);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
