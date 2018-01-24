# Tamagotchi Project!

The goal is to build a Tamagotchi.

It should:

* Let you submit a name
* Query the [Github API](https://developer.github.com/v3/) (or any other [fun one](https://www.potterapi.com/) you like
* Populate a UI with the user details
* Have some form of persistent state and interactivity, e.g.
  * A hunger bar that decreases over time and is topped up when you feed them stars
  * A button to add more users to your collection

Try to:

* Write modular code: one component per file
* Separate your container logic from presentational components

### Stretch goals

* Save your state to localstorage so you can leave the page and come back later
* Make it look like a real Tamagotchi!

## Deployment

You can deploy your app to any static host ([Netlify](https://netlify.com), Github Pages, [surge.sh](https://surge.sh)).

You'll need a build script to tell Parcel to build a production `dist` directory that you can deploy: `parcel build index.html --public-url ./`
