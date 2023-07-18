---
sidebar_position: 2
---
# Required Tools

## Wrangler CLI

To begin, you will need to have [Node.js](https://nodejs.dev) installed on your machine.
Once Node.js is successfully installed, you can proceed by installing the [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/) 
using the following command:

```bash
npm i -g wrangler # or `yarn global add wrangler` if you prefer yarn
```

Wrangler is a command-line interface (CLI) developed by Cloudflare to facilitate the management of your project on their
servers. It ensures compatibility through an API that was reverse-engineered based on the Cloudflare API. The objective
is to provide a consistent set of tools for developing Workers across all platforms.

Once Wrangler installed, you need to login to Cloudflare Workers, so run `wrangler login` and then run `wrangler whoami` 
and keep the Account ID provided by cloudflare.

With the Account ID provided by cloudflare, use it to create a `WorkerAccount` in the kubernetes cluster.
