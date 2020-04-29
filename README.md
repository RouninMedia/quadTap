# quadTap
quadTap extends native DOM events `click` and `dblclick` to enable **multi-click events** which may be customised to:

 - require _any number_ of taps or clicks
 - require the taps to be delivered during a time window of _any duration_
 
 ______
 
## Visual Example of quadTap

To see a working example of **quadTap**, visit:

 - <a href="https://htmlpreview.github.io/?https://htmlpreview.github.io/?https://github.com/RouninMedia/quadTap/blob/master/all-in-one-quadtap.html" title="CSS Inverse Text and Background" target="_blank">CSS Inverse Text and Background</a>
 
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
