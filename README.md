# FLOC-OFF - One more way to turn off Federated Learning of Cohorts (FLoC)

![https://img.shields.io/travis/drag13/floc-off](https://img.shields.io/travis/drag13/floc-off)
![https://img.shields.io/bundlephobia/minzip/floc-off](https://img.shields.io/bundlephobia/minzip/floc-off)
![https://img.shields.io/npm/dm/floc-off](https://img.shields.io/npm/dm/floc-off)

## TLDR;

A radical way to turn Google FLoC off using substitution technique of `interest Cohort` function

### Install

```cmd
npm i floc-off
```

### Use

```javascript
import "floc-off";
```

## Why?

Federated Learning of Cohorts (FLoC) - is the [new way proposed by Google](https://github.com/WICG/floc) that allows Chrome to collect and share customer's personal information without the need for cookies. It uses the browser's history (which had never opened) and some other methods to group people into cohorts based on their interests and show them some ads which rise [some questions about privacy](https://www.eff.org/ru/deeplinks/2021/03/googles-floc-terrible-idea).

Introducing this technology Google states, that [FLoC will keep your privacy](https://github.com/WICG/floc#privacy-and-security-considerations), however some [concerns](https://brave.com/why-brave-disables-floc/) still exists. To give an option to fix this, Google provides the way to opt-out the FLoC by using HTTP Header `Permissions-Policy` with value `interest-cohort=()`.

Unfortunately, this solution has few issues:

- Sometimes you are not able to manipulate HTTP headers at all. As an example - using GitHub Pages you are not able to set any custom HTTP header. Recently, GitHub added `Permissions-Policy` but only for the github.com domain. Disabling FLoC for GitHub pages with custom domains is still impossible.
- The second issue is much more controversial, however, it's still not null. The fact is that mechanism turning FLoC on/off belongs to the organization whose one of the biggest [income](https://abc.xyz/investor/static/pdf/2019Q4_alphabet_earnings_release.pdf?cache=79552b8) comes from the ad. This is not bad, but this simply means that at some point Google may decide to change the mechanism turning FLoC off, ignore it or even remove it. I am not stating this will happen, but this seems possible.

This tiny package (278 bytes only) is a try to eliminate this concerns in a radical way via substitution the `interestCohort` function with dummy [realization](https://github.com/Drag13/floc-off/blob/master/src/index.js). It's small, fast and safe to use with other browsers (mostly because it will not work there).

## Install

Install [floc-off](https://www.npmjs.com/package/floc-off) using npm or yarn:

```cmd
npm i floc-off
```

```cmd
yarn add floc-off
```

And then simply import the package from on top of the code, like here

```javascript
import "floc-off";
```

## How it works

The idea is simple:

- Check if `interestCohort` API supported
- If yes and rewriting is possible
- - Create a proxy that will return rejected promise
- - Substitute the original function with a newly created proxy
- - Disable reconfiguring of the interestCohort property to disable returning it back
- If no - do nothing

That's it, no magic here

## Another opinion

I also couldn't omit to mention another opinion about how to turn off the FLoC, described [in this article](https://seirdy.one/2021/04/16/permissions-policy-floc-misinfo.html) by Rohan Kumar. This article propose better option to turn off the FLoC:

- Don’t load untrusted third-party content that might get classified as an ad (only applies during the origin trial)
- Don’t call document.interestCohort(), and don’t load third-party scripts that might call it either.

Which is basically fair and will work in an ideal world. However, in the real world, you may have the Google Tag Manager script, some scripts from partners, or anything else that is out of your control. And yes, having all of this you may still want to turn off the FLoC, why not? Using ads doesn't automatically means that you allow them to show this ugly popup jumping right into the user's face, right? This case is similar - I still want to show ads, but I don't want to breach user's privacy. For this case, this package can also help.

