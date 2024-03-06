function toggleMenu() {
  var buttonMenu = document.getElementById("hamburger-menu");
  buttonMenu.classList.toggle("hidden");
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
}
