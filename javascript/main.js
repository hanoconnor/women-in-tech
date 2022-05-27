// Code for sixth card

function futureHeroine(event) {
  event.preventDefault();
  let name = prompt("What is your first name?");
  let age = prompt("How old are you?");
  let nextHeader = document.querySelector(".next-header");
  if (age >= 18) {
    nextHeader.innerHTML = name;
  } else {
    nextHeader.innerHTML = name + ", " + age;
  }
  if (age <= 21) {
    alert("You could be the next great tech whizz " + name + "! 👩‍💻");
  } else {
    alert(
      "It's never too late for a tech career " +
        name +
        ". Why not learn to code with Code First Girls?"
    );
  }
}

let contactButton = document.querySelector(".next-button");
contactButton.addEventListener("click", futureHeroine);
