document.addEventListener("DOMContentLoaded", () => {
  const addThreeMoreButton = document.getElementById("add_three_more");
  const removeFirstThreeButton = document.getElementById("remove_first_three");

  addThreeMoreButton.addEventListener("click", () => {
    
  });

  removeFirstThreeButton.addEventListener("click", () => {
    const images = document.querySelector(".images");
    images.removeChild(images.firstChild);
  });
});