=====================
Create UI Components
=====================

The ``Create UI Components`` is a collection of React components that are used in Crate React applications.

Use this Library
==================
To use this library you have to run the following command::

  npm install @crate.io/crate-ui-components

or, if using ``yarn``::

  yarn add @crate.io/crate-ui-components

Then, if you are using tailwind, edit your ``tailwind.config`` file and add the following::

  ...
  content: [
    ...
    './node_modules/@crate.io/crate-ui-components/**/*.{js,jsx,ts,tsx}'
  ]
  ...

and edit your index.css to import library style::

  @import '@crate.io/crate-ui-components/style.css';


Core Technology
==================

This library uses

- `React JavaScript library`_
- `Ant Design System`_ A design system of UI components to accelerate the UI development
- `Tailwind CSS`_ A fast, flexible, and reliable CSS library

Local Development
==================
Install the required Node JS version to run the application.

For nvm users::
  nvm use

Otherwise check the ``.nvmrc`` file to see the current Node JS version required and install using whichever method you prefer.

Install the required dependencies::

  yarn install

Start the development server::

  yarn start

Publish a newer version
=======================
To publish a new version of the library you need to

1. be part of ``@crate.io`` organization on npm
2. run ``yarn publish`` and type the new version number
3. push ``package.json`` file (version update)

This process can also be automated with a GitHub action.