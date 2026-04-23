function kiemtradangnhap() {
  let id = sessionStorage.get("id") ?? false;
  let ten = sessionStorage.get("ten") ?? false;
  let avt = sessionStorage.get("avt") ?? false;
  if (!id || !ten || !avt) {
    window.location.href =
      "https://nkhiem05.github.io/Spenwise/page/dangnhap.html";
  }
  console.log(id + " " + ten + " " + avt);
}

kiemtradangnhap();
setInterval(kiemtradangnhap, 30000);
