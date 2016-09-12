# mailbox-prototype

## Installation

to install 
```
npm i
```

build app 
```
npm run build
```

start app
```
npm start
```

run watch build
```
npm run watch
```

## Description

Given prototype is implemented using React.js in 3 components: 
- Mail (main component with state and actions)
- List *dumb* component to render list of messages and reflect correct state 
- Item *dumb* component to render single item

No flux used since prototype is so simple and has only 2 actions and 2 values in store,
later on could be easily migrated to any flux implementation e.g. Redux.

For simplification list of messages is bundled with application code. 

## Notes:

- Intl doesn't have polyfill, so Safari and IE10- would fail
- UX note: x button means close but not delete, better to replace icon with trash can icon