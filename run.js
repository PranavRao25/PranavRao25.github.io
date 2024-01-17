var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
	for(tablink of tablinks) {
		tablink.classList.remove("active-link");
	}

	for(tabcon of tabcontents) {
		tabcon.classList.remove("active-tab");
	}

	event.currentTarget.classList.add("active-link");
	document.getElementById(tabname).classList.add("active-tab");
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0;
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwOP2ionM1s5oRIDDyMXq_6ogks1amrYMx-GXTCkn6WEEhyESwcrfWE3Mxlz7pIBPO9/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
	e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      	msg.innerHTML = "Message Sent Successfully";
      	setTimeout(function(){
      		msg.innerHTML = ""
    },5000)
	form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})