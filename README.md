# \<uxl-tile-view\>

##### What is?

It is a UI component that allows you to create a panel of widgets and be able to maximize one of them, hiding the rest.

##### How to use?

Just use `uxl-tile-view` and fill it with `uxl-tile-view-item` components to display a dashboard. Each of this items will be a widget with a maximize button. When you maximize one, tile view automatically expand the desired tile with animation and hide other tiles.

When you minimize the maximized tile, automatically reverse the situation, being the same UI as first.

```
<uxl-tile-view id="tile" attrForSelected="name" selected="view1">
    <uxl-tile-view-item name="view1"></uxl-tile-view-item>
    <uxl-tile-view-item name="view2"></uxl-tile-view-item>
    <uxl-tile-view-item name="view3"></uxl-tile-view-item>
</uxl-tile-view>
```

##### What features are available?

`uxl-tile-view-item` provides 4 slots to fill the content as you want:

- header
- maximized-header
- maximized-content
- maximized-content

The component switch into maximized and normal slots automatically when the item is maximized.

We have 2 scenarios: passing a `title` or `maximizedTitle`, or passing `header` or `maximizedHeader`

##### Disable animations

If want to disable animations for all component, just pass `disableAnimations` attribute when you invoke them


#### Properties

| Attribute       | Description | Default                                                                             |
| --------------- | ----------- | ----------------------------------------------------------------------------------- |
| `iconMin`       | string      | Tile item icon when the tiles is minimized ( from MD SVG icon 'add_circle_outline') |
| `iconMax`       | string      | Tile item icon when the tile is maximized ( from MD SVG icon 'clear')               |
| `animationTime` | number      | Duration of animation ( 500ms)                                                      |
| `maximizedItem` | string      | The id of maximized item (null by default or when tile-view is not maximized)       |
| `isMaximized`   | boolean     | Indicate if tile view has some item maximized (false for default)                   |

```
<uxl-tile-view iconMin="icon-name" iconMax="icon-name">
    <uxl-tile-view-item name="view1"></uxl-tile-view-item>
    <uxl-tile-view-item name="view2"></uxl-tile-view-item>
    <uxl-tile-view-item name="view3"></uxl-tile-view-item>
</uxl-tile-view>
```

####Styling

#####Stylable Shadow Parts
The following styleable part's of the element `confirm-component` are available for styling:

| Shadow tree part                                     | Description                         | Style outside of shadow tree                     |
| ---------------------------------------------------- | ----------------------------------- | ------------------------------------------------ |
| `<div id="tile-container" part="tile-container">...` | The container of the tile view item | `uxl-tile-view-item::part(tile-container) {...}` |
| `<div id="tile-header" part="tile-header">...`       | The header of the tile view item    | `uxl-tile-view-item::part(tile-header) {...}`    |
| `div id="tile-content" part="tile-content">...`      | The content of the tile view item   | `uxl-tile-view-item::part(tile-content) {...}`   |

#####Mixins
The following custom properties and mixins are available for styling:

| Custom property                                | Description                                          | Default             |
| ---------------------------------------------- | ---------------------------------------------------- | ------------------- |
| `--uxl-tile-view-display`                      | The display of the tile view minimized               | `flex`              |
| `--uxl-tile-view-max-display`                  | The display of the tile view maximized               | `flex`              |
| `--uxl-tile-view-background-color`             | The background color of the tile view minimized      | `white`             |
| `--uxl-tile-view-max-background-color`         | The background color of the tile view maximized      | `white`             |
| `--uxl-tile-view-padding`                      | The padding of the tile view minimized               | `0`                 |
| `--uxl-tile-view-max-padding`                  | The padding of the tile view maximized               | `0`                 |
| `--uxl-tile-view-item-title-color`             | The color of the title tile item                     | `black`             |
| `--uxl-tile-view-item-header-background-color` | The background color of the header tile view item    | `white`             |
| `--uxl-tile-view-item-background-color`        | The background color of the tile view item           | `white`             |
| `--uxl-tile-view-item-padding`                 | The padding of the tile view item                    | `16px`              |
| `--uxl-tile-view-item-border-radius`           | The border radius of the tile view item              | `0px`               |
| `--uxl-tile-view-item-box-shadow`              | The box shadow of the tile view item                 | `none`              |
| `--uxl-tile-view-item-border`                  | The border of the tile view item                     | `'1px solid black'` |
| `--uxl-tile-view-item-icon-color`              | The icon color                                       | `'#000000'`         |
| `--uxl-tile-view-item-icon-size`               | The icon height and width size                       | `'35px'`            |
| `--uxl-tile-view-item-icon-padding`            | The icon padding                                     | `'8px'`             |
| `--uxl-tile-view-item-max-background-color`    | The background color of maximized the tile view item | `white`             |
| `--uxl-tile-view-item-header-padding`          | The padding of tile header                           | `8px 6px 8px 16px`  |
| `---uxl-tile-view-item-header-border-bottom,`  | The border bottom of tile header                     | `none`              |
