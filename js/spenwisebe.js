document.addEventListener("DOMContentLoaded", async () => {
  kiemtradangnhap();
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

    document.getElementById("avt").src = data.avatar;
    document.getElementById("name").textContent = data.ten;
  }
});
