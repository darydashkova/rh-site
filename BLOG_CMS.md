# Blog CMS integration

The editor and API live in the separate `tilda-backend` repository. This Nuxt app renders CMS posts at `/blog/{slug}` and adds them to `/blog`. Existing blog links remain available.

For local development, run Laravel on `http://127.0.0.1:8000` and Nuxt on `http://127.0.0.1:3000`. Nuxt uses the local API automatically in development.

For another environment, set `NUXT_PUBLIC_CMS_API_BASE` to the public API root, such as `https://cms.example.com/api`. The API returns only posts marked published whose publication date has passed.

The current GitHub Pages deployment is static. It needs an automated Nuxt rebuild whenever an article is published; otherwise new article URLs will not exist in the generated output. A Nuxt server deployment can render them on request. The backend must run on a PHP host; GitHub Pages cannot run it.
