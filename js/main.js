// Define Variables
var display; // Menu
var contactButton, contact, contactText;
var aboutButton, about, aboutText;
var skillsButton, skills, skillsText, skillsList;
var email1,email2,emailString,emailElement; // Spam Protection
var count, frameCount; //Animation

// ----------------------
// Menu Controller
// ----------------------

display = 'skills';

contactButton = document.getElementById('contact-button');
contact = document.getElementById('contact');
contactText = document.getElementById('contactText');

aboutButton = document.getElementById('about-button');
about = document.getElementById('about');
aboutText = document.getElementById('aboutText');

skillsButton = document.getElementById('skills-button');
skills = document.getElementById('skills');
skillsText = document.getElementById('skillsText');
skillsList = skills.children;

count = 0;
frameCount = 0;

// Handle Input
contactButton.addEventListener("click",function(){
    toggle("contact");
});
aboutButton.addEventListener('click',function(){
    toggle("about");
});

// Transform / Output
function toggle(option){

    if (option === display){
        option = "skills";
    }

    switch(option){
        case "about":
            display = "about";
            // Set Question Card
            skillsText.classList.add('hide');
            aboutText.classList.remove('hide');
            contactText.classList.add('hide');
            // Set Response Card
            contact.classList.add('hide');
            skills.classList.add('hide');
            about.classList.remove('hide');
            break;
        case "contact":
            display = "contact";
            // Set Question Card
            skillsText.classList.add('hide');
            aboutText.classList.add('hide');
            contactText.classList.remove('hide');
            // Set Response Card
            contact.classList.remove('hide');
            skills.classList.add('hide');
            about.classList.add('hide');
            break;
        case "skills":
            display = "skills";
            // Set Question Card
            skillsText.classList.remove('hide');
            aboutText.classList.add('hide');
            contactText.classList.add('hide');
            // Set Response Card
            contact.classList.add('hide');
            skills.classList.remove('hide');
            about.classList.add('hide');
            break;
    }

}

// ----------------------
// Spam Prevention
// ----------------------
emailElement = document.getElementById('email');
email1= 'jefflombard';
email2= 'jr@gmail.com';
emailString = email1 + email2;
emailElement.href='mailto:'+emailString;


// ----------------------
// Card Animation
// ----------------------
function change(){
  skillsList[count].classList.add('hide');
  if(count === 4){
    count = -1;
  }
  count += 1;
  skillsList[count].classList.remove('hide');
}

function textAnimate(frame) {
    if (frame - frameCount >= 1500){
      change();
      frameCount = frame;
    }
    window.requestAnimationFrame(textAnimate)
  }


window.requestAnimationFrame(textAnimate);

// ----------------------
// Smooth Scroll
// ----------------------
$('a').smoothScroll();

// ----------------------
// Link to Blog
// ----------------------
$('#blog').click(function(){
    event.preventDefault();
    $('body').children().fadeOut(1000,function(){
        window.setTimeout(function(){
            window.location.href = "http://blog.jefflombard.com";
        },500);
    });

});


 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

 ga('create', 'UA-82875261-1', 'auto');
 ga('send', 'pageview');
