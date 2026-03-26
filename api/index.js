export default {
  fetch(req) {
    const { pathname } = new URL(req.url);
    if (pathname === '/ping') {
      return new Response(JSON.stringify({ pong: Date.now() }), {
        headers: { 'content-type': 'application/json' }
      });
    }
    return new Response('GORILLA LIVES');
  }
};
