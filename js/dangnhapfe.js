function xemmk() {
  let pass = document.getElementById("pass");
  if (pass.type == "password") {
    document.getElementById("viewhide").src =
      "https://res.cloudinary.com/dfnssx2gm/image/upload/v1776936967/hide_i4yoic.png";
    pass.type = "text";
  } else {
    document.getElementById("viewhide").src =
      "https://res.cloudinary.com/dfnssx2gm/image/upload/v1776936967/visible_cwxwyh.png";
    pass.type = "password";
  }
}
