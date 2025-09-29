let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`header nav a[href*='${id}]`)
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};



(function(){
  emailjs.init("QzFSFwRb3jmSuyRam"); // public key بتاعك
})();

const form = document.getElementById("contactForm");

if(form) {
  form.addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.sendForm("service_24k9mgr", "template_r049ajp", this)
      .then(() => {
        alert("✅ Message sent successfully!");
        form.reset();
      }, (error) => {
        alert("❌ Failed to send message.");
        console.log(error);
      });
  });
} else {
  console.log("⚠️ form with id='contactForm' not found!");
}