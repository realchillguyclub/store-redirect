export default function handler(req, res) {
  const ua = req.headers['user-agent'] || '';

  if (/iPhone|iPad|iPod/i.test(ua)) {
    res.writeHead(302, { Location: 'https://apps.apple.com/app/id6740790261' });
  } else if (/Android/i.test(ua)) {
    res.writeHead(302, { Location: 'https://play.google.com/store/apps/details?id=com.poptato.app' });
  } else {
    res.writeHead(302, { Location: 'https://apps.apple.com/app/id6740790261' });
  }
  res.end();
}
