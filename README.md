# ⚛ Frontend app demo (react) <!-- omit in toc -->

- [Features](#features)
- [Development](#development)
  - [Getting started](#getting-started)
  - [Using icons](#using-icons)
  - [⚠ Warnings](#-warnings)

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

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
