# Create UI Components

The `Create UI Components` is a collection of React components that are
used in Crate React applications.

## Install

To install this UI library you have to run the following command:

    yarn add @crate.io/crate-ui-components

Then, if you are using tailwind, edit your `tailwind.config` file and
add the following:

    ...
    content: [
      ...
      './node_modules/@crate.io/crate-ui-components/**/*.{js,jsx,ts,tsx}'
    ]
    ...

and edit your index.css to import library style:

    @import '@crate.io/crate-ui-components/style.css';

You need also to add this to your `react-intl` provider configuration:

    import { rootMessages as crateUiComponentsMessages } from '@crate.io/crate-ui-components';

    const enMessages = {
        ...crateUiComponentsMessages.en,
        ...yourMessages.en,
    };

    ...
    <IntlProvider ... messages={enMessages}>
    ...

## Using @crate.io/crate-ui-components locally

Sometimes you need to be able to develop using the local version instead
of using a version published on npm. For this example we will use
`crate-gc-admin` as an example project that needs to use this library
locally.

To be able to do this you need to have cloned the repositories in a
structure like this:

    your-work-directory/
    ├── ...
    ├── crate-gc-admin/          # Crate GC Admin
    ├── crate-ui-components/     # Crate UI Components Library
    ├── ...

Then you need to follow these steps:

1.  In the `crate-ui-components` run `yarn link-local`
2.  In `crate-gc-admin` run `yarn link-local-lib`

In the `crate-gc-admin` `package.json` you should see this under
dependencies:

    ...
    "dependencies": {
        ...,
        "@crate.io/crate-ui-components": "link:../crate-ui-components",
        ...
    },
    ...

This means that `crate-gc-admin` is using the local build of the
`crate-ui-components` library, instead of the one on NPM registry.

Everytime you are updating some components in `crate-ui-components`
library, you have to:

1.  Run `yarn build` of the `crate-ui-components` library
2.  Hit a refresh in `crate-gc-admin` browser page (there is no
    hot-reload)

When you have finished local development you have to:

1.  Run `yarn unlink-local-lib` in `crate-gc-admin`. Pay attention that
    this is installing the latest version of the `crate-ui-components`
    published on NPM, so check the version.
2.  Run `yarn unlink-local` in `crate-ui-components`.

## Core Technology

This library uses

- [React JavaScript library]()
- [Ant Design System]() A design system of UI components to accelerate
  the UI development
- [Tailwind CSS]() A fast, flexible, and reliable CSS library

## Local Development

Install the required Node JS version to run the application.

For nvm users:

    nvm use

Otherwise check the `.nvmrc` file to see the current Node JS version
required and install using whichever method you prefer.

Install the required dependencies:

    yarn install

Start the development server:

    yarn start

## Publish a newer version

To publish a new version of the library you need to

1.  be part of `@crate.io` organization on npm
2.  run `yarn publish` and type the new version number
3.  push `package.json` file (version update)

This process can also be automated with a GitHub action.
