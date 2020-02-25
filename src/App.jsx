import * as React from "react";
import * as classnames from "classnames";

import "./App.css";

import { Button } from "./components/button/Button";

export const App = () => {
  const rootStyle = classnames("example-app");
  const [count, setCount] = React.useState(0);
  return (
    <div className={rootStyle}>
      <h1>
        This is a minimum template project for reporting issue for
        react-styleguidist.
      </h1>
      <Button color="primary" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
      <p>You have clicked {count} times.</p>
    </div>
  );
};
