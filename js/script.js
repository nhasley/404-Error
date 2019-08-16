var random_images_array = [
  "https://giphy.com/embed/E2gJ9kNjCgL6g",
  "https://giphy.com/embed/mL7L2ww940xm8",
  "https://giphy.com/embed/q1vGcNdfvyynC"
];

var bStr = ["Get out...right now!", "Queen B wants you to leave.", "Just go!"];

function randImg(imgArr) {
  var num = Math.floor(Math.random() * imgArr.length);
  var img = imgArr[num];
  var str = bStr[num];
  var imgStr = `<iframe id="imageid" src="${img}" width="480" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> <h1>${str}</h1>`;
  document.write(imgStr);
  document.close();
}
