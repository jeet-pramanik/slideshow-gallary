const images = [
  "Assets/img_5terre.jpg",
  "Assets/img_lights.jpg",
  "Assets/img_mountains.jpg",
  "Assets/img_nature.jpg",
  "Assets/img_snow.jpg",
  "Assets/img_woods.jpg",
];

let currentImgIndex = 1;

let imgContainer = document.getElementById("imgContainer");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

imgContainer.setAttribute("src", images[currentImgIndex]);

prev.addEventListener("click", () => {
  currentImgIndex--;

  if (currentImgIndex < 0) {
    currentImgIndex = images.length - 1;
  }

  imgContainer.setAttribute("src", images[currentImgIndex]);
  console.log("Current Image Index:", currentImgIndex);
});

next.addEventListener("click", () => {
  currentImgIndex++;

  if (currentImgIndex >= images.length) {
    currentImgIndex = 0;
  }

  imgContainer.setAttribute("src", images[currentImgIndex]);
  console.log("Current Image Index:", currentImgIndex);
});

console.log(currentImgIndex);
