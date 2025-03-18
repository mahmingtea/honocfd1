## Cloudflare D1 with hono openapi + scalar

create wrangler.jsonc in your root directory and paste this

> wrangler.jsonc

```
{
    "$schema": "node_modules/wrangler/config-schema.json",
    "name": "honocfd1",
    "main": "src/index.ts",
    "compatibility_date": "2025-03-17",
    "d1_databases": [
     {
       "binding": "DB",
       "database_name": "put your database name here",
       "database_id": "put your database id from cloudflare d1 here"
     }
    ]
}
```

```
npm install

npm run dev

```
