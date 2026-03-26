   export default { fetch: (req) => new URL(req.url).pathname === '/ping' ? new Response(JSON.stringify({ pong: Date.now() }), { headers: { 'content-type': 'application/json' } }) : new Response('GORILLA LIVES') };
   EOF
[200~cat > api/index.js <<'EOF'
   export default { fetch: (req) => new URL(req.url).pathname === '/ping' ? new Response(JSON.stringify({ pong: Date.now() }), { headers: { 'content-type': 'application/json' } }) : new Response('GORILLA LIVES') };
   EOF~
git add api/index.js
git commit -m "one-liner edge"
git push
git add api/index.js
git commit -m "one-liner edge"
git push
cd /c/Users/ggage/gtap-edge
cat > api/index.js <<'EOF'
export default { fetch: (req) => new URL(req.url).pathname === '/ping' ? new Response(JSON.stringify({ pong: Date.now() }), { headers: { 'content-type': 'application/json' } }) : new Response('GORILLA LIVES') };
Commit
