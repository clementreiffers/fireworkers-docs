---
sidebar_position: 4
---
# Manage your first Worker in Rust !

:::info
You need to install [Rust](https://www.rust-lang.org/) on your machine,
Follow [these instructions](https://www.rust-lang.org/tools/install) to set up.
:::

## Hello World Template

To get started with this project, follow these steps:

1. Clone the repository by executing the following command in your terminal:
```bash
git clone https://github.com/clementreiffers/rustwasm-worker-template
```

Once you have cloned the repository, you'll find the following components:

- A directory named `src` which contains all the Rust code for the project.
- A `wrangler.toml` file that holds all the setup information for the Worker.
- A `Cargo.toml` file that contains all the Rust configuration for the project.

If you wish to modify the project name, you can do so in the `wrangler.toml` file. Additionally, you have the flexibility
to add dependencies to your project using [Cargo](https://doc.rust-lang.org/cargo/).

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


