export async function GET(request) {
  const ua = request.headers.get("user-agent") || "";

  if (/iPhone|iPad|iPod/i.test(ua)) {
    return Response.redirect("https://apps.apple.com/app/id6740790261", 302);
  } else if (/Android/i.test(ua)) {
    return Response.redirect("https://play.google.com/store/apps/details?id=com.poptato.app", 302);
  } else {
    return Response.redirect("https://apps.apple.com/app/id6740790261", 302);
  }
}
