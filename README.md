# quadTap
quadTap extends native DOM events `click` and `dblclick` to enable **multi-click events** which may be customised to:

 - require _any number_ of taps or clicks
 - require the taps to be delivered during a time window of _any duration_
 
 ______
 
## Visual Example of quadTap

To see a working example of **quadTap**, visit:

 - <a href="https://htmlpreview.github.io/?https://github.com/RouninMedia/quadTap/blob/master/all-in-one-quadtap.html" title="quadTap" target="_blank">quadTap</a>
 
In the example setup you have **1.5 seconds** to tap on the `tapTarget` **4 times**.

Each time you click, the script checks to see if you have delivered any other clicks within the last 1.5 seconds.

Then:

 - if you have delivered no other clicks in the last 1.5 seconds, the counter is reset and your click is counted as a _"first click"_
 - if you have delivered other clicks, but fewer than 3, the counter is incremented by one click
 - if you have delivered three other clicks (to make a total of four clicks), the callback function is fired and the counter is set to 0

______

## Configuring quadTap

**quadTap** can be customised in three ways:

 1. the number of taps required can be configured by setting the `requiredTaps` variable
 2. the duration of the time window can be configured by setting the `timeWindow` variable
 3. the callback function can be configured by rewriting the `requiredTapsCompleted()` function
 
 _____

## HTML

```
<h1>Tap the Target <span class="required-taps"></span> times<br />in <span class="time-window"></span> seconds</h1>

<button type="button" class="tapTarget"></button>
```

____

## CSS

```
:root {
  --fade-tap-count: none 0 linear none;
}


h1 {
  margin: 100px 0;
  font-family: sans-serif;
  text-align: center;
  font-size: 24px;
  line-height: 36px;
  text-transform: uppercase;
  text-shadow: 1px 1px 1px rgb(255, 255, 255), 1px -1px 1px rgb(255, 255, 255), -1px -1px 1px rgb(255, 255, 255), -1px 1px 1px rgb(255, 255, 255);
}

.tapTarget {
  position: relative;
  display: block;
  width: 100px;
  height: 100px;
  margin: 100px auto;
  font-size: 100px;
  color: rgb(255, 255, 255);
  font-weight: 900;
  background-color: rgb(191, 0, 0);
  border: 2px solid rgb(127, 0, 0);
  box-shadow: 0 0 6px rgb(63, 0, 0);
  cursor: pointer;
}

.tapTarget::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 90px;
  opacity: 1;
}

.tapTarget[data-tap-count]::after {
  content: attr(data-tap-count);
}

.tapTarget.fadeTapCount::after {
  animation: var(--fade-tap-count);
}

@keyframes fadeTapCount {

    100% {opacity: 0;}
}
```

____

## Javascript

```

```
