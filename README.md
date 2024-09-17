# solid-lenis

## Introduction
`solid-lenis` provides a `<SolidLenis>` component that creates a [Lenis](https://github.com/darkroomengineering/lenis) instance and provides it to its children via context. This allows you to use Lenis in your SolidJS app without manually passing the instance through props. It also includes a `useLenis` hook that lets you access the Lenis instance from any component in your application.

> [!NOTE]
> Functions not fully tested.

## Usage

### Basic

```tsx
import { SolidLenis, useLenis } from 'solid-lenis';

function Layout() {
  const lenis = useLenis(({ scroll }) => {
    // called on every scroll
  });

  return (
    <SolidLenis root autoRaf={true}> 
      {/* content */}
    </SolidLenis>
  );
}
```

## Props
- `options`: [Lenis options](https://github.com/darkroomengineering/lenis#instance-settings).
- `root`: Lenis will be instantiated using `<html>` scroll. Default: `false`.
- `autoRaf`: if `false`, `lenis.raf` needs to be called manually. Default: `true`.
- `rafPriority`: [Tempus](https://github.com/studio-freight/tempus#readme) execution priority. Default: `0`.
- `className`: Class name for the wrapper div. Default: `''`.

## Hooks
Once the Lenis context is set (with components mounted inside `<SolidLenis>`), you can use the following hook:

### `useLenis`
This hook returns the Lenis instance. It accepts three arguments:
- `callback`: The function to be called on scroll events.
- `deps`: Trigger callback on dependency change.
- `priority`: Manage callback execution order.

## Examples

### GSAP integration (Not fully tested)

```tsx
import { createEffect, onCleanup } from 'solid-js';
import gsap from 'gsap';

function Component() {
  let lenisRef;

  createEffect(() => {
    function update(time) {
      lenisRef?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    onCleanup(() => {
      gsap.ticker.remove(update);
    });
  });

  return (
    <SolidLenis ref={lenisRef} autoRaf={false}>
      {/* content */}
    </SolidLenis>
  );
}
```

Thanks to `lenis-react` and `GPT4o`, referenced and learnt a lot from them.

## License

[The MIT License.](https://opensource.org/licenses/MIT)
