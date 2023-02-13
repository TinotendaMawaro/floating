const floatingButton = document.querySelector(".floating-button");
const subButtons = document.querySelector(".sub-buttons");
const subButtonElements = document.querySelectorAll(".sub-button");


//floatingButton.addEventListener("click", () => {
  //  console.log(subButtons.style.display)
  //  if (subButtons.style.display === "block") {
 //    subButtons.style.display = "flex";
  //  } else {
 //    subButtons.style.display = "block";
 //   }
//  });


floatingButton.addEventListener("click", () => {
    if (subButtons.style.display === "none") {
      subButtons.style.display = "block";
    } else {
      subButtons.style.display = "none";
    }
  });

subButtonElements.forEach((subButton) => {
  subButton.addEventListener("mouseover", () => {
    subButton.setAttribute("title", subButton.classList[1]);
  });
});
