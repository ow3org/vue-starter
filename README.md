<p align="center"><img src=".github/art/social.png" alt="Social Card of Vue Starter"></p>

[![npm version][npm-version-src]][npm-version-href]
[![GitHub Actions][github-actions-src]][github-actions-href]
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
<!-- [![npm downloads][npm-downloads-src]][npm-downloads-href] -->
<!-- [![Codecov][codecov-src]][codecov-href] -->

# Vue Component Library Starter

Vue Starter helps kick-start & maintain development of your next Vue component library. It is the most simple & comfortable solution for Vue developers to build highly-modular, widely-accepted & scalable component libraries. No matter whether you are a beginner or an expert, Stacks' approachable design allows you to learn more about its capabilities as you develop your library.

> _The clever way to build component libraries._

Develop beautiful reactive composable UIs without learning a new language. HTML, CSS, sprinkled with minimal JavaScript—dive in now!

## ☘️ Features

The ultimate goal of this Starter Kit is to _help you_ create a component library. It is a ah optimized build process that automatically generates `.mjs` & `.cjs` library distributions for you, including its types. Other core features include:

- Automagically builds & distributes Vue 2 & 3 libraries for you
- Zero-config by default, yet highly-configurable—if needed
- Delightful Developer Experience _(DX)_
- Style with ease via UnoCSS _(e.g. Tailwind CSS, Windi CSS, Heroicons, Bootstrap, etc.)_
- Modern git commit conventions
- Automated npm package releases & semver versioning
- Pretty changelog generations _(markdown & GitHub releases)_
- Fully-typed, automatically _(your components & composables)_
- Optimized & automated GitHub PR dependency updates
- Bootstrapped documentation tooling & site to present library _(via VitePress)_

## 💡 Get Started

It's incredibly easy to get started. The only prerequisite is a basic understanding HTML & JavaScript. In other words, there is virtually no learning curve because "HTML with sprinkled JavaScript" will get you _incredibly_ far.

```bash
# you may "Use this template" via the button in top right corner of this page
# or run the following commands:
npx degit openwebstacks/vue-starter hello-world-stack
cd hello-world-stack
npm run setup # WIP
```

To learn more, read more here

## 🤖 Usage

The following is a list of the most common ways to use interact with Stacks

```bash
pnpm install # install all dependencies (for all packages/workspaces)
pnpm fresh # fresh reinstall of all dependencies

pnpm dev # stubs the libraries for local use
pnpm build # builds the library for production-ready use
pnpm example # run one of the examples (follow CLI prompts)

pnpm commit # follow CLI prompts for committing changes
pnpm release # releases the library (packages) to npm

pnpm docs:dev # starts local server for the documentation site
pnpm docs:build # builds the documentation site
pnpm docs:serve # serves the documentation site
```

_The `package.json` may contain additional useful snippets you want to be aware of._

Because we optimize toward the development of easily reusable & composable component libraries, our primary intention is always _keep it simple, yet configurable_:

```vue
<script setup lang="ts">
import HelloWorld from '@ow3/hello-world-vue'
</script>

<template>
  <HelloWorld name="J Doe" />
</template>
```

Read more about the setup & tips in the docs.

### Developer Experience (DX)

This Starter Kit is a Component-First, UI & Build Framework. When developing your own library, this Starter Kit bootstraps the following for you:

- [Powerful Build Engine](https://github.com/openwebstacks/vue-starter/tree/main/.stacks/builds) - Stacks is a optimized [Vite](https://vitejs.dev/) & [unbuild](https://github.com/unjs/unbuild) harmony
- [Modern CSS Engine](https://github.com/unocss/unocss) - pre-configured UnoCSS allows to create & manage your style guide with ease
- [Fully Typed APIs](https://www.typescriptlang.org/) - via TypeScript 4.7
- [Be a Good Commitizen](https://www.npmjs.com/package/git-cz) - pre-configured Commitizen & git-cz setup to simplify semantic git commits, versioning, and changelog generations
- [Built With Testing In Mind](https://github.com/vitest-dev/vitest) - pre-configured unit-testing powered by [Vitest](https://github.com/vitest-dev/vitest) & e2e-testing by [Cypress](https://cypress.io/)
- [Renovate](https://renovatebot.com/) - optimized & automated PR dependency updates
- [GitHub Actions](https://github.com/features/actions) - runs your CI (fixes code style issues, tags releases & creates its changelogs, runs the test suite, etc.

#### Plugins & Extensions

- [Automagically imports components](https://github.com/antfu/unplugin-vue-components)
- [Use framework functionalities without imports](https://github.com/antfu/unplugin-auto-import)
  - [VueUse](https://github.com/antfu/vueuse) - a collection of useful functions
- [Deep VS Code Integration](./.vscode/extensions.json)
  - [IDE Capabilities](https://marketplace.visualstudio.com/items?itemName=vue.volar) - type hints, code completion, code formatting and more via Volar
  - [Spell Checking](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) - no more annoying typos to slip by!
  - [Utility Class Intellisense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - Tailwind CSS (or Windi CSS) class name sorter

#### Coding Style

- [ESLint](https://eslint.org/) - statically analyzes, fixes and formats your code without the need of Prettier

When using this framework, feel free to adjust it to your needs. It is "simply" is a set of rules to help you quickly & efficiently bootstrap & design component libraries, using industry best-practices.

## 🧪 Testing

```bash
pnpm test
```

## 📈 Changelog

Please see our [releases](https://github.com/openwebstacks/vue-starter/releases) page for more information on what has changed recently.

## 💪🏼 Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## 🏝 Community

For help, discussion about best practices, or any other conversation that would benefit from being searchable:

[Discussions on GitHub](https://github.com/openwebstacks/vue-starter/discussions)

For casual chit-chat with others using this package:

[Join the Open Web Discord Server](https://discord.ow3.org)

## 📄 License

The MIT License (MIT). Please see [LICENSE](LICENSE.md) for more information.

Made with ❤️

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@ow3/hello-world-vue?style=flat-square
[npm-version-href]: https://npmjs.com/package/@ow3/hello-world-vue

[npm-downloads-src]: https://img.shields.io/npm/dm/@ow3/hello-world-vue?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@ow3/hello-world-vue

[github-actions-src]: https://img.shields.io/github/workflow/status/openwebstacks/vue-starter/CI/main?style=flat-square
[github-actions-href]: https://github.com/openwebstacks/vue-starter/actions?query=workflow%3Aci

<!-- [codecov-src]: https://img.shields.io/codecov/c/gh/openwebstacks/vue-starter/main?style=flat-square
[codecov-href]: https://codecov.io/gh/openwebstacks/vue-starter -->
