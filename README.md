# \<uxl-tile-view\>



##### What is?

It is a UI component that allows you to create a panel of widgets and be able to maximize one of them, hiding the rest.

##### How to use?
Just use ```uxl-tile-view``` and fill it with ```uxl-tile-view-item``` components to display a dashboard. Each of this items will be a widget with a maximize button. When you maximize one, tile view automatically expand the desired tile with animation and hide other tiles.

When you minimize the maximized tile, automatically reverse the situation, being the same UI as first.

```
<uxl-tile-view id="tile" attrForSelected="name" selected="view1">
    <uxl-tile-view-item name="view1"></uxl-tile-view-item>
    <uxl-tile-view-item name="view2"></uxl-tile-view-item>
    <uxl-tile-view-item name="view3"></uxl-tile-view-item>
</uxl-tile-view>
```
##### What features are available?

```uxl-tile-view-item``` provides 4 slots to fill the content as you want:
- header
- maximized-header
- maximized-content
- maximized-content

The component switch into maximized and normal slots automatically when the item is maximized.
