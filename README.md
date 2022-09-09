# TheGraph subgraph boilerplate

Subgraph boilerplate mostly inspired by [Perpetual Protocol subgraphs](https://github.com/perpetual-protocol/perp-curie-subgraph).

## Features

- Auto complete configs and constants with [mustache](https://github.com/janl/mustache.js)
- Clean deploy and codegen
- Example on ERC20 Transfer event
- Release it with [semantic-release](https://github.com/semantic-release/semantic-release)
- Format code with [prettier](https://github.com/prettier/prettier)

## Deployment

Move to LTS nodejs version

```bash
nvm use
```

Install dependencies

```bash
npm i
```

Set authorization token

```bash
npx graph auth --product hosted-service <YOUR_THE_GRAPH_ACCESS_TOKEN>
```

Deploy your subgraph

```bash
npm run deploy:mainnet
```

## License


[MIT](/LICENSE)