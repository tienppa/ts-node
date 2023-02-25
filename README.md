# ts-node
Build project nodejs with typescript
npm init -y

npm i typescript

npm i @types/express @types/node

npx tsc --init
npx tsc

"scripts": {
    "build": "rm -rf dist & npx tsc",
    "start": "node dist/index.js",
    "dev": "npx tsc -w & nodemon dist/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
},