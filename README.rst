=====================
Create UI Components
=====================

The ``Create UI Components`` is a collection of React components that are used in Crate React applications.

Core Technology
==================

This library uses

- `React JavaScript library`_
- `Ant Design System`_ A design system of UI components to accelerate the UI development
- `Tailwind CSS`_ A fast, flexible, and reliable CSS library


Local Installation
==================
Install the required Node JS version to run the application.

For nvm users::
  nvm use

Otherwise check the ``.nvmrc`` file to see the current Node JS version required
and install using whichever method you prefer.

Install the required dependencies::

  yarn install

Start the development server::

  yarn start

Publish a newer version
=======================
To publish a new version of the library you need to:

1. configure the `.npmrc` file
2. run `yarn build` to properly build the library
3. run `yarn publish` and type the new version number

This process can also be automated with a GitHub action.

Configuring `.npmrc` file
=========================
Create a `.npmrc` file in the root of the project with the following content and just update the GITHUB_TOKEN::

  @GITHUB_USERNAME:registry=https://npm.pkg.github.com/crate
  //npm.pkg.github.com/:_authToken=GITHUB_TOKEN
