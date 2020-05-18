This is a template for a [FarCry](https://github.com/farcry-ts/farcry)-based monorepo project (with a [React](https://reactjs.org/) frontend.) It requires [yarn](https://yarnpkg.com/).

For demonstration purposes, there's already a simple `add` method that sums two numbers. The App component in the frontend makes a call to this method.

## Instructions

Clone the repository and install dependencies:

```bash
git clone https://github.com/farcry-ts/monorepo-template.git
cd monorepo-template
yarn
```

Add your own method handlers to `backend/src/rpc.ts`.

## Scripts

Run the services with:

```bash
yarn start:frontend
yarn start:backend
```

Whenever you have modified the method handlers, run the following command to refresh the generated client code:

```bash
yarn codegen
```

Note that the backend service needs to be restarted to pick up changes.
