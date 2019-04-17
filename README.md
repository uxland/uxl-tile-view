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

### Content attributes

Attribute | Description         | Default
----------|---------------------|----------------------------------------
`iconMin` | Icon element when the tiles is minimized | minimize ( from MD SVG icon 'add_circle_outline') | 
`iconMax` | Icon element when the tile is maximized | maximize ( from MD SVG icon 'clear') | 

```
<uxl-tile-view iconMin="icon-name" iconMax="icon-name">
    <uxl-tile-view-item name="view1"></uxl-tile-view-item>
    <uxl-tile-view-item name="view2"></uxl-tile-view-item>
    <uxl-tile-view-item name="view3"></uxl-tile-view-item>
</uxl-tile-view>
```

### Styling

The following custom properties and mixins are available for styling:

| Custom property | Description | Default |
| --- | --- | --- |
| `--uxl-tile-view-background-color` | The background color of the tile view minimized | `white` |
| `--uxl-tile-view-max-background-color` | The background color of the tile view maximized | `white` |
| `--uxl-tile-view-padding` | The padding of the tile view minimized | `0` |
| `--uxl-tile-view-max-padding` | The padding of the tile view maximized | `0` |
| `--uxl-tile-view-item-title-color` | The color of the title tile item | `black` |
| `--uxl-tile-view-item-header-background-color` | The background color of the header tile view item | `white` |
| `--uxl-tile-view-item-background-color` | The background color of the tile view item | `white` |
| `--uxl-tile-view-item-padding` | The padding of the tile view item | `16px` |
| `--uxl-tile-view-item-border-radius` | The border radius of the tile view item | `0px` |
| `--uxl-tile-view-item-box-shadow` | The box shadow of the tile view item | `none` |
| `--uxl-tile-view-item-border` | The border of the tile view item | `'1px solid black'` |
| `--uxl-tile-view-item-icon-color` | The icon color | `'#000000'` |
| `--uxl-tile-view-item-icon-size` | The icon height and width size | `'35px'` |
| `--uxl-tile-view-item-icon-padding` | The icon padding | `'8px'` |
| `--uxl-tile-view-item-max-background-color` | The background color of maximized the tile view item | `white` |
