This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn install
yarn run dev
```

## Run test

```bash
yarn run test
```

## Run Storybook

```bash
yarn storybook
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Routes

## Ruta para buscar productos desde la vista

```bash
http://localhost:3000/items?q=:query
```

## Ruta para ver el detalle del product

```bash
http://localhost:3000/items/id
```

## API routes

## API route para obtener el listado de productos por parametro

```bash
http://localhost:3000/api/items?search=:query
```

## API route para obtener el detalle del producto

```bash
http://localhost:3000/api/items/:id
```

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

## Tecnologías que se emplearon

&nbsp;
||
| ----------------------- |
| Storybook |
| Redux |
| Nextjs |
| Eslint |
| Sass |
| Jest |
| React testing library |
| Axios |
| TypeScript |

## Patrones usados - React

&nbsp;
||
| ---------------------|
| Custom hooks |
| Render props |

# Metodologias

|                             |
| --------------------------- |
| Concepts Clean architecture |
| Atomic design               |
