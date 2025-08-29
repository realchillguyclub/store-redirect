export default function handler(req, res) {
  const ua = req.headers['user-agent'] || '';
  const url = new URL(req.url, 'http://x'); 
  const osOverride = (url.searchParams.get('os') || '').toLowerCase();

  const isIOS =
    osOverride === 'ios' ||
    /(iPhone|iPad|iPod|iOS|Macintosh;.*Mobile)/i.test(ua);

  const isAndroid =
    osOverride === 'android' ||
    /Android|Adr/i.test(ua);

  const IOS_URL = 'https://apps.apple.com/app/id6740790261';
  const ANDROID_URL = 'https://play.google.com/store/apps/details?id=com.poptato.app';
  const FALLBACK_URL = 'https://apps.apple.com/app/id6740790261';

  const destination = isIOS ? IOS_URL : isAndroid ? ANDROID_URL : FALLBACK_URL;

  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Vary', 'User-Agent');

  res.writeHead(302, { Location: destination });
  res.end();
}
