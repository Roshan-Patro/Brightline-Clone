//accesing data
var work = document.getElementById("work");
var employ = document.getElementById("employ");
var family = document.getElementById("family");
var career = document.getElementById("career");

var workdrop = document.getElementById("workdrop");
var employdrop = document.getElementById("employdrop");
var familydrop = document.getElementById("familydrop");
var careerdrop = document.getElementById("careerdrop");

var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;

function showhideWorkdrop() {
  if (count1 % 2 === 0) {
    workdrop.style.visibility = "visible";
  } else {
    workdrop.style.visibility = "hidden";
  }
  count1++;
}
function showhideEmploydrop() {
  if (count2 % 2 === 0) {
    employdrop.style.visibility = "visible";
  } else {
    employdrop.style.visibility = "hidden";
  }
  count2++;
}
function showhideFamilydrop() {
  if (count3 % 2 === 0) {
    familydrop.style.visibility = "visible";
  } else {
    familydrop.style.visibility = "hidden";
  }
  count3++;
}
function showhideCareerdrop() {
  if (count4 % 2 === 0) {
    careerdrop.style.visibility = "visible";
  } else {
    careerdrop.style.visibility = "hidden";
  }
  count4++;
}

work.addEventListener("click", showhideWorkdrop);
employ.addEventListener("click", showhideEmploydrop);
family.addEventListener("click", showhideFamilydrop);
career.addEventListener("click", showhideCareerdrop);

var optional = document.getElementById("optional");
var cross = document.getElementById("cross");
var mediaSnavdrop = document.getElementById("mediaSnavdrop");

count = 2;

function Crossfunction() {
  if (count % 2 === 0) {
    optional.style.display = "none";
    cross.style.display = "flex";
    mediaSnavdrop.style.visibility = "visible";
  } else if (count % 2 != 0) {
    optional.style.display = "flex";
    cross.style.display = "none";
    mediaSnavdrop.style.visibility = "hidden";
  }
  count++;
}

document.getElementById("optional").addEventListener("click", Crossfunction);
document.getElementById("cross").addEventListener("click", Crossfunction);

var mediaSdropwork = document.getElementById("mediaSdropwork");
var mediaSdropemploye = document.getElementById("mediaSdropemploye");
var mediaSdropfamily = document.getElementById("mediaSdropfamily");
var mediaSdropcareer = document.getElementById("mediaSdropcareer");

var msnavdropworksub = document.getElementById("msnavdropworksub");
var msnavdropemploysub = document.getElementById("msnavdropemploysub");
var msnavdropfamilysub = document.getElementById("msnavdropfamilysub");
var msnavdropcareersub = document.getElementById("msnavdropcareersub");

var countws = 2;
var countes = 2;
var countfs = 2;
var countcs = 2;

function worksub() {
  if (countws % 2 === 0) {
    mediaSdropwork.appendChild(msnavdropworksub);
  } else {
    mediaSdropwork.removeChild(msnavdropwork.childNodes[1]);
  }
  countws++;
}

function employsub() {
  if (countes % 2 === 0) {
    mediaSdropemploye.appendChild(msnavdropemploysub);
  } else {
    mediaSdropemploye.removeChild(msnavdropemploy.childNodes[1]);
  }
  countes++;
}

function familysub() {
  if (countfs % 2 === 0) {
    mediaSdropfamily.appendChild(msnavdropfamilysub);
  } else {
    mediaSdropfamily.removeChild(msnavdropfamily.childNodes[1]);
  }
  countfs++;
}

function careersub() {
  if (countcs % 2 === 0) {
    mediaSdropcareer.appendChild(msnavdropcareersub);
  } else {
    mediaSdropcareer.removeChild(msnavdropcareer.childNodes[1]);
  }
  countcs++;
}

// mediaSdropwork.addEventListener("click", worksub);
// mediaSdropemploye.addEventListener("click", employsub);
// mediaSdropfamily.addEventListener("click", familysub);
// mediaSdropcareer.addEventListener("click", careersub);
