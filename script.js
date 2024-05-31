function toggleMenu() {
  var buttonMenu = document.getElementById("hamburger-menu");
  buttonMenu.classList.toggle("translate-x-full");
}

function toggleMessageAlert() {
  var close = document.getElementById("popup-message");
  close.style.display = "none";
}

function sendMail() {
  var param = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_h2y1hum";
  const templateID = "template_1m6qxhr";

  if (param.name && param.email && param.message) {
    emailjs
      .send(serviceID, templateID, param)
      .then((response) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(response);
        // alert("message sent succesfully");

        var close = document.getElementById("popup-message");
        close.style.display = "flex";
      })
      .catch((error) => console.log(error));
  } else {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    var messagePop = document.getElementById("messageStatus");
    messagePop.textContent = "Please fill in the form";
    var close = document.getElementById("popup-message");
    close.style.display = "flex";
    var name = document.getElementById("name");
  }
}

window.onload = function () {
  setTimeout(function () {
    document.getElementById("header-text").style.opacity = "1"; // Display the text
    document.getElementById("header-text").style.transform = "translateX(0)";
  }, 500);
};

// let observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       entry.target.classList.remove("opacity-0");
//       entry.target.classList.add("opacity-100");
//     } else {
//       entry.target.classList.remove("opacity-100");
//       entry.target.classList.add("opacity-0");
//     }
//   });
// });
// const hiddenElements = [...document.getElementsByTagName("section")];
// hiddenElements.forEach((element) => observer.observe(element));

// slider animation for project

const imageRight = document.getElementById("imagefood");

const options = {
  root: null,
  threshold: 0,
  rootMargin: "0px 0px -100px 0px",
};

const slider = (entries, contentSlide) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("slider-right");
  });
};

const contentSlide = new IntersectionObserver(slider, options);
contentSlide.observe(imageRight);
//const imageSlide = new IntersectionObserver(function (entries, imageSlide) {
//  imageSlide.observe(entries);
//}, options);
