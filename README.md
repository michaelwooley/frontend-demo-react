# [⚛ Frontend app demo (react)](https://michaelwooley.github.io/frontend-demo-react/) <!-- omit in toc -->

![Build and Deploy](https://github.com/michaelwooley/frontend-demo-react/workflows/Build%20and%20Deploy/badge.svg)

- [Why?](#why)
- [Features](#features)
- [Development](#development)
  - [Getting started](#getting-started)
  - [Using icons](#using-icons)
  - [⚠ Warnings](#-warnings)
  - [Deployment](#deployment)

# Why?

fff


# Features

- [x] ⌨ Typescript
- [x] 📘 Storybook
- [ ] 🐋 Automated deployment

# Development

## Getting started

```bash
npm run start # Start development version of the app

npm run storybook # Start storybook
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

## Deployment

I'm hosting the app with github pages. It can be deployed via a manual github
action. Just go to the "actions" tab in GUI, select deploy, then select "Run workflow."

I decided to do a manual trigger rather than an automated trigger because I more
often than not may not desire a re-deploy (despite a push to master, etc.).


---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
