# Carbon.NeosUi.LoadingAnimation

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

Every component receives following props:

| Property name | Default value              | Description                                                          |
| ------------- | -------------------------- | -------------------------------------------------------------------- |
| `isLoading`   | `false`                    | The main property. True will start the animation process.            |
| `delayTime`   | `500`                      | The main property. True will start the animation process.            |
| `timeoutTime` | `500`                      | The main property. True will start the animation process.            |
| `id`          | `null`                     | The id of the container                                              |
| `title`       | `'Neos.Neos:Main:loading'` | The title of the container. Will shown a tooltip. Will be translated |

> `delayTime` should be positive and always smaller than or equal to `timeoutTime`.

## Visual state

After a certain time when the `isLoading` is set to `true`, determined by `delayTime` and `timeoutTime`, the timers
changes his state. If `isLoading` is false, nothing is displayed at all. The states are:

```
┌───────────────────┐
│       Idle        │
└─────────┬─────────┘
          │
┌─────────▼─────────┐
│  Empty container  │ after 0ms
└─────────┬─────────┘
          │
┌─────────▼─────────┐
│ Circle animation  │ after delayTime in ms
└─────────┬─────────┘
          │
┌─────────▼─────────┐
│  Dots animation   │ after timeoutTime in ms
└───────────────────┘
```
