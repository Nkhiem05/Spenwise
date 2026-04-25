function back() {
  window.history.back();
}

function dangxuat() {
  let dangxuat = confirm("Bạn có chắc chắn muốn đăng xuất");
  if (dangxuat) {
    sessionStorage.clear();
    kiemtradangnhap();
  } else {
    return;
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const { data, error } = await supabaseClient
    .from("taikhoan")
    .select("*")
    .eq("id", sessionStorage.getItem("id") ?? 1)
    .single();
  if (error) {
    window.location.href =
      "https://nkhiem05.github.io/Spenwise/page/dangnhap.html";
  } else {
    console.log(data);
    document.getElementById("bia").src =
      data.anhbia ??
      "https://res.cloudinary.com/dfnssx2gm/image/upload/v1777105136/download_3_m149fh.jpg";
    document.getElementById("avt").src = data.avatar;
    document.getElementById("name").textContent = data.ten;
    document.getElementById("emailname").textContent = data.email;
    document.getElementById("sodu").textContent =
      data.sodu.toLocaleString("vi-VN");
    document.getElementById("thu").textContent =
      data.dathu.toLocaleString("vi-VN");
    document.getElementById("chi").textContent =
      data.dachi.toLocaleString("vi-VN");
    document.getElementById("email").textContent = data.email;
    document.getElementById("namsinh").textContent = data.namsinh;
    document.getElementById("ngaythamgia").textContent = data.ngaytao;
  }
});
