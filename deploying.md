# Deploying Your React Parcel App

This app is frontend (serverless) so you can deploy on surge, github pages or netlify.

If you're making an SPA with client-side routing you need to setup your hosting correctly. This will ensure that all routes point to your html, allowing your js to render the correct view. Without this your host may return a 404 when trying to directly access endpoint e.g. `www.mysite/endpoint`.

## Parcel Build Script
Add the following build script to your `package.json`:

`"build": parcel build index.html --public-url ./parcel build `
## Surge Instuctions
- [surge deploying](https://surge.sh/)
- [surge setup for client side routing](https://surge.sh/help/adding-a-200-page-for-client-side-routing)
## Netlify Instuctions
- [netlify steps for continuous deployment](https://www.netlify.com/docs/continuous-deployment/)
- [netlify setup for client side routing](https://www.netlify.com/docs/redirects/#history-pushstate-and-single-page-apps)