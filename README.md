## Projeto Next.js — Plataforma de Assinatura de E-books

Este projeto foi criado com Next.js utilizando o comando:

npx create-next-app

# Funcionalidades

- Autenticação com NextAuth (Google OAuth)

- Sistema de assinaturas com Stripe

- Banco de dados PostgreSQL via Prisma ORM

- Criptografia de senhas com bcrypt-ts

- Dashboard autenticado

- Checkout integrado usando Stripe Embedded Checkout

# Como começar

Instalar dependências
npm install
# ou
yarn
# ou
pnpm install
# ou
bun install

Executar o servidor de desenvolvimento
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev


Acesse no navegador:

http://localhost:3000

# Requisitos
- Versão do Node

Use a versão 20.x do Node.js

Verifique com:

node -v

- Banco de dados — PostgreSQL + Prisma ORM

O projeto utiliza PostgreSQL e Prisma ORM para gerenciar o acesso aos dados.

Adicione no arquivo .env.local a variável:

DATABASE_URL="sua_url_do_postgres_aqui"

- Instalar Prisma Client
npm install @prisma/client

Aplicar migrações existentes
npx prisma migrate deploy

Visualizar dados com Prisma Studio
npx prisma studio


A interface abrirá em:

http://localhost:5555

- Autenticação — NextAuth

Este projeto utiliza NextAuth.js para autenticação, com suporte a login via Google.

Instalação do NextAuth
npm install next-auth


ou

yarn add next-auth

Gerar chave secreta para o NextAuth
npx auth secret

- Criptografia de Senhas — bcrypt-ts

 Instalação:

npm install bcrypt-ts


## Stripe — Pagamentos e Assinaturas

O projeto utiliza a API do Stripe para gerenciamento de assinaturas usando o Embedded Checkout.

Instalação do Stripe SDK

Instale o pacote oficial do Stripe para Node.js:

npm install stripe

yarn add stripe


# Variáveis de Ambiente — Exemplo

Adicione no arquivo .env.local:

# Conexão com o banco de dados PostgreSQL
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DBNAME?schema=public"

# NextAuth Secret (gerado com npx auth secret)
AUTH_SECRET="your_secret_key_here"

# Credenciais Google OAuth
AUTH_GOOGLE_ID="your_google_client_id_here"
AUTH_GOOGLE_SECRET="your_google_client_secret_here"

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_PRICE_BASIC=
NEXT_PUBLIC_PRICE_PREMIUM=
STRIPE_LINK_COSTUMER=

Iniciar o servidor novamente
npm run dev
