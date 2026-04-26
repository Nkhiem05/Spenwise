function openmenu(id) {
  document.getElementById(id).style.display = "flex";
}
function closemenu(id) {
  document.getElementById(id).style.display = "none";
}

document.getElementById("doiavt").addEventListener("click", () => {
  document.getElementById("inpavt").click();
});
document.getElementById("inpavt").addEventListener("change", async (e) => {
  let file = e.target.files[0];
  if (file) {
    let urltam = URL.createObjectURL(file);
    document.getElementById("imgtam").src = urltam;
    openmenu("thayimgtam");
  }
});

function showavt() {
  document.getElementById("showimgavt").src =
    document.getElementById("avt").src;
  openmenu("showavt");
}
