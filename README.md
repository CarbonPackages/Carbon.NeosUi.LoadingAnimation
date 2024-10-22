# Carbon.NeosUi.LoadingAnimation

https://github.com/user-attachments/assets/3af20265-5254-4a22-ba53-0e57dc24a36c

It’s important that users understand that things are happening when they have to wait for something. This loading timer
can be used to provide feedback when there is a server response delay.

This is a small package to help create a nice loading animation in the [Neos UI](http://github.com/neos/neos-ui).
You can either use a version with or without a `CSS` file. (Depends on your build stack)

```js
// Styled with inline styles
import { LoadingWithStyles } from "carbon-neos-loadinganimation";

// Styled with css classes
import { LoadingWithClassNames } from "carbon-neos-loadinganimation";
```

You can also directly import the loader:

```js
// Styled with inline styles
import LoadingAnimation from "carbon-neos-loadinganimation/LoadingWithStyles";

// Styled with css classes
import LoadingAnimation from "carbon-neos-loadinganimation/LoadingWithClassNames";
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

## Visual state

After a certain time when the `isLoading` is set to `true`, determined by `delayTime` and `timeoutTime`, the timers
changes his state. If `isLoading` is false, nothing is displayed at all. The states are:

```
                      ┌────────────────────┐
              ┌───────│     isLoading      │───────┐
              │       └────────────────────┘       │

            true                                 false

              │                                    │
              ▼                                    ▼
┌───────────────────────────┐        ┌───────────────────────────┐
│                           │        │       cancel timer        │
│       reserve space       │        │             &             │
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
