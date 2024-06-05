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
  //setTimeout(function () {
  // document.getElementById("header-text").style.opacity = "1"; // Display the text
  // document.getElementById("header-text").style.transform = "translateX(0)";
  // }, 100);

  document.getElementById("header-text").style.opacity = "1"; // Display the text
  document.getElementById("header-text").style.transform = "translateX(0)";

  // button click navigation

  const projectsButton = document.getElementById("web-projects-button");
  const uxButton = document.getElementById("ux-design-button");
  const web = document.getElementById("web-project");
  const ux = document.getElementById("ux");

  projectsButton.addEventListener("click", function () {
    web.classList.remove("hidden");
    web.classList.add("content");

    uxButton.classList.remove("border-b-4");
    projectsButton.classList.add("border-b-4");

    // Ensure ux transition completes before removing it from layout
    setTimeout(() => {
      ux.classList.add("hidden");
      web.classList.remove("hideProjectRight");
    }, 1000);

    ux.classList.add("hideProject");
  });

  uxButton.addEventListener("click", function () {
    web.classList.add("hideProjectRight");

    uxButton.classList.add("border-b-4");
    projectsButton.classList.remove("border-b-4");

    // Ensure web transition completes before removing it from layout
    setTimeout(() => {
      ux.classList.remove("hideProject");
      ux.classList.add("content");
      web.classList.add("hidden");
    }, 1000);
    setTimeout(() => {
      ux.classList.remove("hidden");
    }, 800);
  });
};

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
