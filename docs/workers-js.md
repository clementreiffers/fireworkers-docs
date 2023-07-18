# Manage your first Worker in JavaScript !

## Code Examples

All examples below doesn't related to each other, so you can choose which app you want to create and the next part will 
concerns how to deploy it.

### Hello world Example

create a file named `index.js` and write inside : 
```js
const test = (request, env, ctx) => new Response(JSON.stringify(env));

async function handle(request) {
	return new Response('Hello World\n');
}

export default {fetch: test};
```
you are now ready for the next part!

### API example

you can generate an API example by running:
```bash
wrangler generate api-example worker-router
```
Then you need to install all dependencies referenced in `package.json` so run `npm i` or `yarn` to install them.

Once all dependencies installed, you are now ready for the next part!

## Run your code in dev mode

you can run `wrangler dev -l` to test it in dev mode, so it runs on your machine.

you can now test it by running this command: `curl localhost:8787`

## Deploy the code

:::info
you need to install all the [architecture](/docs/the-architecture.md) before deploying the code.
:::

we can set an environment variable for this CLI, so you just have to run:
```bash
CLOUDFLARE_API_BASE_URL=<endpoint-of-fakeCfApi>/client/v4 wrangler deploy
```



