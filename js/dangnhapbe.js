function dangnhap() {
  const clientid =
    "427841697794-g1t56d2mvk47iqgntj2d6t6sdhc9oj0u.apps.googleusercontent.com";
  let link = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile&response_type=token&redirect_uri=https://nkhiem05.github.io/Spenwise/page/dkdngg.html&client_id=${clientid}`;
  window.location.href = link;
}
