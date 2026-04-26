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
    .eq("id", sessionStorage.getItem("id"))
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

document.getElementById("luu").addEventListener("click", async () => {
  document.getElementById("luu").innerHTML = `<div class="hieuung"></div>`;
  let file = document.getElementById("inpavt").files[0];
  if (file) {
    const cloudename = "dfnssx2gm";
    const cloudpreset = "ml_default";
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", cloudpreset);
    form.append("folder", "Spenwise");
    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudename}/image/upload`,
        {
          method: "POST",
          body: form,
        },
      );
      let dataimg = await res.json();
      console.log(dataimg.secure_url);

      if (dataimg.secure_url) {
        const { data, error } = await supabaseClient
          .from("taikhoan")
          .update({
            avatar: dataimg.secure_url,
          })
          .eq("id", sessionStorage.getItem("id"))
          .select();

        if (error) {
          console.error("Lỗi cập nhật Supabase:", error.message);
          alert("Không thể cập nhật hồ sơ!");
          closemenu("thayimgtam");
          document.getElementById("inpavt").value = "";
          closemenu("ovdoiavt");
        } else {
          document.getElementById("avt").src = data[0].avatar;
          document.getElementById("inpavt").value = "";
          closemenu("thayimgtam");
          closemenu("ovdoiavt");
        }
      }

      console.log(data);
    } catch (error) {
      console.log("có lỗi xảy ra vui lòng thử lại");
    }
  }
  document.getElementById("luu").innerHTML = "";
  document.getElementById("luu").textContent = "Lưu";
});
