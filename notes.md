1. Install `npm i bcrypt jsonwebtoken nodemon express helmet cors knex pg dotenv`
2. Added start & test, jest to package.json
3. Start server `npm run server` running... ✅
4. `server.js`: add simple get request to test server. Working? ✅
5. Are we adding the function ~checkRole~? If so, we need to add checkRole("user") to jokes
6. Add MAC stuff to .gitignore
7. Import jokes-routers to auth-server, and JWTSecrets - don't forget ⛔
8. Testing database ✅
9. users-model, 
... lost track 

11. POST register ✅ | POST login ✅
    "message": "Welcome jess!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6Implc3MiLCJyb2xlIjoidXNlciIsImlhdCI6MTU4MjkxMzc3OCwiZXhwIjoxNTgyOTE3Mzc4fQ.hVjLlbgkn3BThlszUV1cPGneugaW-hY2XfZ3IE-MXvM"

12. Added `jest supertest cross-env`