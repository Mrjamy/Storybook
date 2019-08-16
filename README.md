## Installing
-------------
Add Storybook:
```bash
npx -p @storybook/cli sb init
```

Install requirements
```bash
yarn install
```


## Running
----------
Run the test runner (Jest) in a terminal:
```bash
yarn test
```

Start the component explorer on port 9009:
```bash
yarn run storybook
```

Run the frontend app proper on port 3000:
```bash
yarn start
```
> NOTE: If yarn test throws an error, you may need to install watchman