FROM node:23-alpine3.19

WORKDIR /web-app-next

# Download packages
COPY web-app-next/package.json web-app-next/package-lock.json ./
RUN npm install

# Copy source
COPY web-app-next/src ./src
COPY web-app-next/.eslintrc.json web-app-next/next.config.ts web-app-next/postcss.config.mjs web-app-next/tailwind.config.ts web-app-next/tsconfig.json ./

ENTRYPOINT ["npm", "run", "dev"]
