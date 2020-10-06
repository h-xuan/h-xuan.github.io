window.onload = function () {
  //   alert(localStorage.getItem("storetoggle") == "true");
  toggleDark();
};

function toggleDark() {
  toggle = localStorage.getItem("storetoggle") == "true";
  setTimeout(function () {
    document.body.style.color = toggle ? "#ccc" : "#303030";
    proj_list = document.getElementsByClassName("proj");
    for (let i = 0; i < proj_list.length; i++) {
      proj_list[i].style.background = toggle ? "#222" : "#eee";
    }
    document.getElementsByTagName("h1")[0].style.color = toggle
      ? "rgb(217, 193, 132)"
      : "rgb(211, 181, 156)";
  }, 100);
}
