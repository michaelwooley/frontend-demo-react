# [⚛ Frontend app demo (react)](https://michaelwooley.github.io/frontend-demo-react/) <!-- omit in toc -->

[**👀 View demo app 👀**](https://michaelwooley.github.io/frontend-demo-react/)

![Build and
Deploy](https://github.com/michaelwooley/frontend-demo-react/workflows/Build%20and%20Deploy/badge.svg)

- [What and why?](#what-and-why)
  - [Features/buzzwords in this app](#featuresbuzzwords-in-this-app)
- [Development](#development)
  - [Getting started](#getting-started)
  - [Organization](#organization)
    - [Components and containers](#components-and-containers)
    - [Relative imports](#relative-imports)
  - [Using icons](#using-icons)
  - [⚠ Warnings](#-warnings)
  - [Deployment](#deployment)
- [Contact](#contact)
- [License](#license)

# What and why?

This repository contains a demo react app. It is a simple weather app. It
fetches up-to-date weather data from the [weather.gov API](api.weather.gov) and
displays it for the user.

I threw this together because recruiter types often ask me if I'm okay with
react. This app was designed to include many of the key elements one needs to
construct a frontend app (e.g. API calls, interfacing with a UI library, custom
hooks, container/component distinctions) and nothing more.

_This is by no means a well-polished project._ It is just meant to outline how I
approach this sort of thing. See the [issues](/issues) for notes on elements
that could use some work.

## Features/buzzwords in this app

- [x] ⌨ Typescript
- [x] 📘 Storybook
- [x] 📈 Time series charting
- [x] 🖌 sass styling
- [x] 🚀 (Very, very simple) automated deployment to github pages

# Development

## Getting started

```bash
npm run start # Start development version of the app

npm run storybook # Start storybook
```

## Organization

The most important items are contained in the `src` directory:

```
.github/           # CI workflow(s)
.storybook/        # Storybook configuration files
src/
  common/          # Constants and functions used throughout
  components/      # Display/"dumb" components
  containers/      # Stateful/"Smart" components
  hooks/           # Custom hooks used in project
  services/        # API services (exported as hooks)
  styles/          # Global style definitions and imports
  test/            # Test utilities. Mostly demo data for use in stories right now.
  types/           # Common type definitions
  App.tsx          # Top-level App component
  index.tsx        # Connects app to DOM
  ...
...
```

### Components and containers

I try to keep a pretty strict division between components and containers.

One hard rule concerning dependencies/imports: 

- Components may only import other components. Never containers.
- Containers can import components and other containers.

Ideally a container should have a super-simple render (i.e. one component with props). That isn't true for
a few containers at present but that can be fixed via a refactor.

### Relative imports

Any file in source can be imported directly. For example: 

```tsx
import {APP_NAME} from "common/constants"; // THIS WORKS
// INSTEAD OF
import {APP_NAME} from "../../common/constants"; // Also works but way uglier, etc.
```

## Using icons

Icons are from [fontawesome](https://fontawesome.com/) via the
[fortawesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome) package.

In order to minimize the bundle size, we add each new icon manually in
[`/src/common/fontawesome.ts`](/src/common/fontawesome.ts).

Then we call them in the usual bulma style:

```tsx
<span class="icon">
  <i className="fas fa-code" />
</span>
```

## ⚠ Warnings

- _Do not store secrets in_ `.env`! It is in version control in order to enable
  the `SKIP_PREFLIGHT_CHECK` option.
- If you fork this file you will likely want to change `PUBLIC_URL` in `.env` to
  the correct path before deploying.

## Deployment

I'm hosting the app with github pages. It can be deployed via a manual github
action. Just go to the "actions" tab in GUI, select deploy, then select "Run workflow."

I decided to do a manual trigger rather than an automated trigger because I more
often than not may not desire a re-deploy (despite a push to master, etc.).


# Contact

Michael Wooley (wm[dot]wooley[at]gmail[dot]com)

# License

MIT. See the [LICENSE](/LICENSE) file.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
