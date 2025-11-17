This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Como começar

Instalar dependências

```bash
npm install
# ou
yarn
# ou
pnpm install
# ou
bun install
```

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Versão do Node

Use a versão 20.x do Node.js

```bash
(verifique com node -v)
```

## Banco de dados

O projeto utiliza o PostgreSQL como banco de dados, hospedado na plataforma Render, e o Prisma ORM para gerenciar o acesso aos dados.

Adicione essa URL no seu arquivo .env.local: DATABASE_URL

# Prisma ORM

O Prisma já está configurado neste projeto.
Você só precisa garantir que o cliente está instalado e que as migrações estão atualizadas.

- Instalar dependências

```bash
npm install @prisma/client
```

(O pacote prisma já é usado para desenvolvimento, e o @prisma/client é necessário em produção.)

- Atualizar o banco

Para aplicar as migrações existentes no banco:

```bash
npx prisma migrate deploy
```

- Visualizar os dados

Para abrir o painel do Prisma e visualizar o banco:

```bash
npx prisma studio
```

Isso abrirá uma interface no navegador em http://localhost:5555

## Autenticação

Este projeto utiliza NextAuth.js para autenticação de usuários, com suporte a login via Google.

🔧 Instalação

Instale o NextAuth com o seguinte comando:

```bash
npm install next-auth
```
ou
```bash
yarn add next-auth
```

Em seguida gerar a chave secret rode o comando:

```bash
npx auth secret
```

## Criptografia de Senhas

O projeto utiliza o pacote bcrypt-ts
para criptografia de senhas.

Instalação:

```bash
npm install bcrypt-ts
```

# =========================================

# VARIÁVEIS DE AMBIENTE - EXEMPLO

# =========================================

# Conexão com o banco de dados (PostgreSQL)

# Formato: postgresql://usuario:senha@host:porta/nome_do_banco?schema=public

DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DBNAME?schema=public"

# Chave secreta usada pelo NextAuth para criptografar tokens/sessões

# Gere uma chave segura com: npx auth secret

AUTH_SECRET="your_secret_key_here"

# Credenciais do login com Google (OAuth)

# Crie no Google Cloud Console > APIs & Services > Credentials

AUTH_GOOGLE_ID="your_google_client_id_here"
AUTH_GOOGLE_SECRET="your_google_client_secret_here"

## Executar o servidor de desenvolvimento

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) no seu navegador e veja o resultado.
