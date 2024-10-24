# Carbon.NeosUi.LoadingAnimation

It’s important that users understand that things are happening when they have to wait for something. This loading timer
can be used to provide feedback when there is a server response delay.

This is a small package to help create a nice loading animation in the [Neos UI](http://github.com/neos/neos-ui).
There are three variants of the loading animation: One with a CSS file, one with [StyleX](https://stylexjs.com),
and one with pure inline style attributes. Use the one that best suits your stack.

## How it looks

![Visualization of animation](https://github.com/user-attachments/assets/afecd1bf-d1de-4cb7-a1c7-813bd1ea2a5b)

## How to install

Based on your package manager run:

```bash
# npm
npm install carbon-neos-loadinganimation --save-dev
# pnpm
pnpm add carbon-neos-loadinganimation -D
# Yarn
yarn add carbon-neos-loadinganimation --dev
```

## How to use

```js
// Styled with inline styles
import { LoadingWithStyles } from "carbon-neos-loadinganimation";

// Styled with css classes
import { LoadingWithClassNames } from "carbon-neos-loadinganimation";

// Styled with styleX classes
import { LoadingWithStyleX } from "carbon-neos-loadinganimation";
```

You can also directly import the loader:

```js
// Styled with inline styles
import LoadingAnimation from "carbon-neos-loadinganimation/LoadingWithStyles";

// Styled with css classes
import LoadingAnimation from "carbon-neos-loadinganimation/LoadingWithClassNames";

// Styled with styleX classes
import LoadingAnimation from "carbon-neos-loadinganimation/LoadingWithStyleX";
```

You can use the component inside react like this

```jsx
import React, { useState, useEffect } from "react";
import LoadingAnimation from "carbon-neos-loadinganimation/LoadingWithStyles";

function Editor({ id, isLoading }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Do your calls
    // ...
    setLoading(false);
  }, []);

  return <LoadingAnimation id={id} isLoading={isLoading} delayTime={2000} timeoutTime={7000} heightMultiplier={2} />;
}
```

Every component receives following props:

| Property name | Default value              | Description                                                          |
| ------------- | -------------------------- | -------------------------------------------------------------------- |
| `isLoading`   | `false`                    | The main property. True will start the animation process.            |
| `delayTime`   | `500`                      | The time in ms after the circle animations starts.                   |
| `timeoutTime` | `5000`                     | The time in ms after the dots animations starts.                     |
| `id`          | `null`                     | The id of the container                                              |
| `title`       | `'Neos.Neos:Main:loading'` | The title of the container. Will shown a tooltip. Will be translated |

> `delayTime` and `timeoutTime` should be positive. `timeoutTime` is the time after `delayTime` is finished.

## How it works

After a certain time when the `isLoading` is set to `true`, determined by `delayTime` and `timeoutTime`, the timers
changes his state. If `isLoading` is false, nothing is displayed at all.

```
                      ┌────────────────────┐
              ┌───────│     isLoading      │───────┐
              │       └────────────────────┘       │

            true                                 false

              │                                    │
              ▼                                    ▼
┌───────────────────────────┐        ┌───────────────────────────┐
│                           │        │       cancel timer        │
│       reserve space       │        │             +             │
│                           │        │        return null        │
└───────────────────────────┘        └───────────────────────────┘
              │

    after delayTime in ms

              │
              ▼
┌───────────────────────────┐
│                           │
│   show circle animation   │
│                           │
└───────────────────────────┘
              │

   after timeoutTime in ms

              │
              ▼
┌───────────────────────────┐
│                           │
│    show dots animation    │
│                           │
└───────────────────────────┘
```
