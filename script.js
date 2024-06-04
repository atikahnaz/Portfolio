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
  }, 100);

  // button click navigation

  const projectsButton = document.getElementById("web-projects-button");
  const uxButton = document.getElementById("ux-design-button");

  projectsButton.addEventListener("click", function () {
    document.getElementById("web-project").classList.remove("hidden");
    document.getElementById("ux").classList.add("hidden");
    uxButton.classList.remove("border-b-4");
    projectsButton.classList.add("border-b-4");
  });

  uxButton.addEventListener("click", function () {
    document.getElementById("web-project").classList.add("hidden");
    document.getElementById("ux").classList.remove("hidden");
    uxButton.classList.add("border-b-4");
    projectsButton.classList.remove("border-b-4");
  });
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

// slider animation for project image right side

const imageRight = document.querySelectorAll(".image-right");
const textContent = document.querySelectorAll(".textContent-left");

const options = {
  root: null,
  threshold: 0.3,
  rootMargin: "0px 0px 0px 0px",
};

// callback for image slider
const slider = (entries, contentSlide) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("slider-right");
    contentSlide.unobserve(entry.target);
  });
};

// callback for text slider
const slideFromLeft = (entries, text) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("textContent-slider-left");
    text.unobserve(entry.target);
  });
};

const contentSlide = new IntersectionObserver(slider, options);
const textSlide = new IntersectionObserver(slideFromLeft, options);

imageRight.forEach((imageSingle) => {
  contentSlide.observe(imageSingle);
});

textContent.forEach((text) => {
  textSlide.observe(text);
});
