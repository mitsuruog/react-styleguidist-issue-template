Basic usage:

```jsx
<Button>Click me</Button>
```

Button color examples:

```jsx padded
<Button>Default Button</Button>
<Button color="primary">Primary Button</Button>
<Button color="secondary">Secondary Button</Button>
```

Button size examples:

```jsx padded
<Button size="small">Small Button</Button>
<Button size="normal">Normal Button</Button>
<Button size="large">Large Button</Button>
```

Disable Button example:

```jsx padded
<Button disable={true}>Default Button</Button>
<Button color="primary" disable={true}>Primary Button</Button>
<Button color="secondary" disable={true}>Secondary Button</Button>
```

`onClick` handler example.
The count will be count up when you click the button.

```
const [count, setCount] = React.useState(0);
<>
  <Button onClick={() => setCount(count + 1)}>Click me</Button>
  <p>You have clicked {count} times.</p>
</>
```
