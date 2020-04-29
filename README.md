# quadTap
quadTap extends native DOM events `click` and `dblclick` to enable **multi-click events** which require:

 - any number of taps or clicks
 - during a time window of any duration
 
 ______
 
## Visual Example of quadTap

______

## Configuring quadTap

**quadTap** can be customised in three ways:

 1. the number of taps required can be configured by setting the `requiredTaps` variable
 2. the duration of the time window can be configured by setting the `timeWindow` variable
 3. the callback function can be configured by rewriting the `requiredTapsCompleted()` function
