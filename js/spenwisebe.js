function kiemtradangnhap() {
  let id = sessionStorage.getItem("id") ?? false;
  let ten = sessionStorage.getItem("ten") ?? false;
  let avt = sessionStorage.getItem("avt") ?? false;
  if (!id || !ten || !avt) {
    window.location.href =
      "https://nkhiem05.github.io/Spenwise/page/dangnhap.html";
  }
  console.log(id + " " + ten + " " + avt);
}

// kiemtradangnhap();
// setInterval(kiemtradangnhap, 30000);

document.addEventListener("DOMContentLoaded", async () => {
  const { data, error } = await supabaseClient
    .from("taikhoan")
    .select("*")
    .eq("id", sessionStorage.getItem("id"))
    .single();
  if (error) {
    window.location.href =
      "https://nkhiem05.github.io/Spenwise/page/dangnhap.html";
  } else {
    document.getElementById("avt").src = data.avatar;
    document.getElementById("name").src = data.ten;
  }
});
