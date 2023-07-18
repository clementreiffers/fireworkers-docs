# your first worker


## Quickstart

you can create your own worker!

create a file named `index.js` and write inside : 
```js
const test = (request, env, ctx) => new Response(JSON.stringify(env));

async function handle(request) {
	return new Response('Hello World\n');
}

export default {fetch: test};
```

you can test it by running `wrangler dev` or you can push it and test it using the tool you want

## API example
you can generate an API example by running:
```bash
wrangler generate my-app worker-router
```

