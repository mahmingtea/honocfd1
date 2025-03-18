## Cloudflare D1 with hono openapi + scalar

Create a wrangler.jsonc file in the root directory and add the following configuration:

```
{
    "$schema": "node_modules/wrangler/config-schema.json",
    "name": "honocfd1",
    "main": "src/index.ts",
    "compatibility_date": "2025-03-17",
    "d1_databases": [
     {
       "binding": "DB",
       "database_name": "<YOUR_DATABASE_NAME>",
       "database_id": "<YOUR_DATABASE_ID>"
     }
    ]
}
```

Install the required packages using npm:

```
npm install
```

Run the app locally:

```
npm run dev

```

**OpenAPI Documentation** is available at:  
**`/doc`**

**Api Reference** is available at:  
**`/reference`**

Deploy to Cloudflare Workers

```
npm run deploy

```
