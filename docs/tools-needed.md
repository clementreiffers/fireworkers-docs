---
sidebar_position: 2
---
# Required Tools

## Wrangler CLI

To get started with Cloudflare Workers using the Wrangler CLI, follow these steps:

1. Ensure you have [Node.js](https://nodejs.dev) installed on your computer, and Kubernetes client installed like 
[colima](https://github.com/abiosoft/colima), [kind](https://github.com/kubernetes-sigs/kind) 

2. Install the Wrangler CLI by executing either of the following commands, depending on your package manager preference:

    Using npm:
    ```bash
    npm i -g wrangler
    ```
    
    Using yarn:
    ```bash
    yarn global add wrangler
    ```

    Wrangler is a powerful command-line interface (CLI) developed by Cloudflare for managing your projects on their servers.
    It provides a consistent set of tools for developing Workers across all platforms. It ensures compatibility by 
    reverse-engineering the Cloudflare API.

3. After installing Wrangler, you need to log in to Cloudflare Workers by running the following command and following the 
instructions given:
   ```bash
   wrangler login
   ```

4. Once you are logged in, retrieve your Account ID by running the command:
   ```bash
   wrangler whoami
   ```

5. Copy and paste the Account ID into [this WorkerAccount configuration file](https://github.com/clementreiffers/cf-workers-kubernetes-arch/blob/main/config/samples/api_v1_workeraccount.yaml).

6. Apply the Kubernetes resource to your cluster using the following command:
   ```bash
   kubectl apply -f api_v1_workeraccount.yaml
   ```

With these steps completed, you are now ready to develop and deploy Cloudflare Workers using the Wrangler CLI. Happy 
coding!
