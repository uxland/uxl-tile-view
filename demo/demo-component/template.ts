import { html } from 'lit-element';
import 'src/components/uxl-tile-view/uxl-tile-view';
import 'src/components/uxl-tile-view-item/uxl-tile-view-item';

export const template = () => html`
  <h3>Demo Flex Display</h3>
  <uxl-tile-view id="flex-tile" attrForSelected="name" iconMax="tile-view-icons:minimize" disableAnimations>
    <uxl-tile-view-item name="view1" id="div0" itemId="div0" iconMax="tile-view-icons:maximize">
      <div slot="header">
        <h3>I'm a header view1</h3>
      </div>
      <div slot="content">
        <p>I'm a normal state content view1</p>
      </div>
      <div slot="maximized-content">
        <p>I'm a maximized content view1</p>
      </div>
      <div slot="minimized-content">
        <p>I'm a minimized content view1</p>
      </div>
    </uxl-tile-view-item>
    <uxl-tile-view-item name="view2" id="div1" itemId="div1">
      <div slot="header">
        <h3>I'm a header view2</h3>
      </div>
      <div slot="content">
        <p>I'm a normal state content view1</p>
      </div>
      <div slot="maximized-content">
        <p>I'm a maximized content view1</p>
      </div>
      <div slot="minimized-content">
        <p>I'm a minimized content view1</p>
      </div>
    </uxl-tile-view-item>
    <uxl-tile-view-item name="view3" id="div2" itemId="div2">
      <div slot="header">
        <h3>I'm a header view3</h3>
      </div>
      <div slot="content">
        <p>I'm a normal state content view1</p>
      </div>
      <div slot="maximized-content">
        <p>I'm a maximized content view1</p>
      </div>
      <div slot="minimized-content">
        <p>I'm a minimized content view1</p>
      </div>
    </uxl-tile-view-item>
  </uxl-tile-view>
  <h3>Demo Grid Display</h3>
  <uxl-tile-view id="grid-tile" attrForSelected="name" iconMax="tile-view-icons:minimize">
    <uxl-tile-view-item name="view1" id="div0" itemId="div0">
      <div slot="header">
        <h3>I'm a header view1</h3>
      </div>
      <div slot="content">
        <p>I'm a normal state content view1</p>
      </div>
      <div slot="maximized-content">
        <p>I'm a maximized content view1</p>
      </div>
      <div slot="minimized-content">
        <p>I'm a minimized content view1</p>
      </div>
    </uxl-tile-view-item>
    <uxl-tile-view-item name="view2" id="div1" itemId="div1">
      <div slot="header">
        <h3>I'm a header view2</h3>
      </div>
      <div slot="content">
        <p>I'm a normal state content view1</p>
      </div>
      <div slot="maximized-content">
        <p>I'm a maximized content view1</p>
      </div>
      <div slot="minimized-content">
        <p>I'm a minimized content view1</p>
      </div>
    </uxl-tile-view-item>
    <uxl-tile-view-item name="view3" id="div2" itemId="div2">
      <div slot="header">
        <h3>I'm a header view3</h3>
      </div>
      <div slot="content">
        <p>I'm a normal state content view1</p>
      </div>
      <div slot="maximized-content">
        <p>I'm a maximized content view1</p>
      </div>
      <div slot="minimized-content">
        <p>I'm a minimized content view1</p>
      </div>
    </uxl-tile-view-item>
  </uxl-tile-view>
`;
