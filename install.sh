#!/bin/bash

# TypeScript 설치
npm install --save-dev -D typescript
npx tsc --init

npm install --save-dev @types/node
npm install --save-dev babel-plugin-module-resolver
npm install --save-dev @babel/cli
npm install concurrently --save-dev

# debub watch
npm install --save-dev nodemon@latest

# fs-extra 설치
npm install --save-dev fs-extra

# Tailwind CSS 설치
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
npm install -D @tailwindcss/typography
npm install -D @tailwindcss/forms --save-dev
npm install -D @tailwindcss/aspect-ratio --save-dev
npm install -D postcss --save-dev
npm install -D prettier --save-dev
npm install -D prettier-plugin-tailwindcss --save-dev

# ui insatll
npm i -D daisyui@latest --save
npm install uglify-js --save-dev
