# `@bedrock-layout/grid`

Layout helper that creates Grid of items

## When to Use

Used to create a stacked layouts

## How to install

`npm install @bedrock-layout/stack`

## Usage

```javascript
import Stack from '@bedrock-layout/stack';

<Grid minItemWidth={300}>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</Grid>;
```

## API

| Property     | Description                       | Type                                                       | Default                               |
| ------------ | --------------------------------- | ---------------------------------------------------------- | ------------------------------------- |
| gutter       | sets space inbetween each element | `"none" | "xs" | "sm" | "md" | "lg" | "lg" | "xl" | "xxl"` | `md`                                  |
| minItemWidth | min width in px of each grid item | number                                                     | breakPoints.smallOnly or '39.9375rem' |