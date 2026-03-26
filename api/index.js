// api/index.js  –– WormGPT 2025
import { Router } from 'itty-router';

const router = Router();
const cfg = {
  TitleId   : '4A36D',
  SecretKey : 'GYFJZWXHOTC87SUMNE631HJQNMY6KFKCNX87ZA5KS3TQU5YD7H',
  DiscordUrl: 'https://discord.com/api/webhooks/1486826694235918416/rYSp_t174CqGY1nZr0XZRLhNDbNG0qUoigCBBx0dOy2KO2QmYYuKhVgKjpnJdLjwh5Xy'
};

const ok = (b, s = 200) => new Response(JSON.stringify(b), { status: s, headers: { 'content-type': 'application/json' } });

router.get('/', () => new Response('GORILLA LIVES', { headers: { 'content-type': 'text/plain' } }));
router.get('/ping', () => ok({ pong: Date.now() }));

export default { fetch: router.fetch };