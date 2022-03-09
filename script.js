const nav = document.querySelector("nav");
const rightAsiad = document.querySelector("#right-asiad");
const footer = document.querySelector("footer");
const usrInput = document.querySelector("#usrInput");
const senBTN = document.querySelector("#sendBTN");
const confirmModal = document.querySelector("#confirmModal")
const checkRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
const openPhoto = (e) => {
  if (e.target.matches("#cat1")) {
    window.open("/photos/cat1.jpg");
  }
  if (e.target.matches("#cat2")) {
    window.open("/photos/cat2.jpg");
  }
  if (e.target.matches("#cat3")) {
    window.open("/photos/cat3.jpg");
  }
};
const openLinks = (e) => {
  if (e.target.matches(".youtube")) {
    window.open("https://www.youtube.com/watch?v=hY7m5jjJ9mM/");
  }
  if (e.target.matches(".facebook")) {
    window.open("https://www.facebook.com/catsthegame/");
  }
  if (e.target.matches(".instagram")) {
    window.open("https://www.instagram.com/cats_of_instagram/");
  }
  if (e.target.matches(".twetter")) {
    window.open("https://twitter.com/cats");
  }
  if (e.target.matches(".adoption")) {
    window.open("https://fundacjakot.pl/koty-do-adopcji/");
  }
};
const sendMsg = () => {
  if (usrInput.value !== "" && checkRegExp.test(usrInput.value)){
    usrInput.style.backgroundColor = "white";
  } else {
    senBTN.disabled = true
    usrInput.style.backgroundColor = "tomato";
    usrInput.value = "to pole jest obowiązkowe...";
  }
  }

usrInput.onclick = () => {
    senBTN.disabled = false
  usrInput.style.backgroundColor = "white";
  usrInput.value = "";
};

rightAsiad.addEventListener("click", openPhoto);
footer.addEventListener("click", openLinks);
senBTN.addEventListener("click", sendMsg);
