# SB Admin Pro Angular

See full documentation at <https://docs.startbootstrap.com/sb-admin-pro-angular>

## TLDR; Quick Start

We recommend you read the documentation above, but if that's not your thing,
here's the super condensed version:

```bash
tar -xzvf sb-admin-pro-angular-2.x.x.tar.gz
mv sb-admin-pro-angular my-new-project
cd my-new-project
npm install
npm start
```

`npm start` should open a browser window to <http://localhost:4200>

By default angular runs on port 4200. To change this port you can run:

```bash
# This starts the development server on port 4205,
# but you can use any port you'd like
export PORT=4205 && npm start
```

### Troubleshooting npm start

If you receive memory issues adjust
`max_old_space_size` in the `ng` command of the `package.json`:

```json
"ng": "cross-env NODE_OPTIONS=--max_old_space_size=2048 ./node_modules/.bin/ng",
```

You can adjust 2048 to any number you need.

For more information about why you may need `--max_old_space_size`
see [this article](https://medium.com/@ashleydavis75/node-js-memory-limitations-30d3fe2664c0).

Keep in mind that this project only uses node to build the angular application.
There is no production dependency on node.

## Git

Part of the license agreement for sb-admin-pro-angular is to not distribute the source code,
therefore please be careful to not push any of the sb-admin-pro-angular code to a public repo,
or to any location where non-licensed people can access the code.

For more information please see the LICENSE file in the root of the sb-admin-pro-angular directory.

## Customize

Edit the file `scripts/initialize-project.js`, then:

```bash
cd my-new-project
node scripts/initialize-project.js
```

## Generate Code

```bash
npm run generate:module -- --path src/modules --name Test
npm run generate:component -- --path src/modules/test/containers --name Test
npm run generate:component -- --path src/modules/test/components --name Test
npm run generate:directive -- --path src/modules/test/directives --name Test
npm run generate:service -- --path src/modules/test/services --name Test
```

_Note: Creating a Component and a Container use the same command,
the difference is just the paths and how they are used._

### MVCC

Containers and Components are both Angular Components, but used in different ways.

Containers should arrange Components.

Obviously this can become subjective, but MVCC is the paradigm that we subscribe to.
