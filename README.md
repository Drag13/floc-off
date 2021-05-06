# FLOC-OFF - One more way to turn off Federated Learning of Cohorts (FLoC)

![https://img.shields.io/travis/com/drag13/floc-off](https://img.shields.io/travis/com/drag13/floc-off)
![https://img.shields.io/bundlephobia/minzip/floc-off](https://img.shields.io/bundlephobia/minzip/floc-off)
![https://img.shields.io/npm/dm/floc-off](https://img.shields.io/npm/dm/floc-off)

A radical way to turn [Google FLoC](https://github.com/WICG/floc) off using substitution technique of `interest Cohort` function for those who unable to use `Permissions-Policy` header.

## Install

Install floc-off as usual

```cmd
npm i floc-off
```

And import on top of your entry file

```javascript
import "floc-off";
```

## Use cases

I found two cases when using this technic might be useful.

- You are not able to add HTTP headers. GitHub Pages for a custom domain is a perfect example for now. This will change, I believe, but now you can disable FLoC only using JavaScript.
- You don't trust that putting the Permissions-Policy HTTP header will prevent getting user's data (as it was with the Do Not Track header).
- You simply dislike Google 😈

## Explanations

Federated Learning of Cohorts (FLoC) - is the new way proposed by Google that allows Chrome to collect and share customer's personal information without the need for cookies. It uses the browser's history (which had never opened) and some other methods to group people into cohorts based on their interests and show them some ads which raise some questions about privacy. This tiny package (278 bytes only) is a try to eliminate these concerns in a radical way via substituting the `interestCohort` function with dummy [realization](https://github.com/Drag13/floc-off/blob/master/src/index.js). It's small, fast, and safe to use with other browsers (mostly because it will not work there).

Here is my [article with more details about the FLoC and disabling it](https://drag13.io/posts/how-turn-off-floc-javascript/index.html)
