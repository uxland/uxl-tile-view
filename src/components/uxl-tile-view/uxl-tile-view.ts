import { html, LitElement, unsafeCSS, css } from "lit-element/lit-element";
import * as styles from "./styles.scss";
import { template } from "./template";
import * as animations from "../../utilities/animations";
import { WidgetStatus, delay } from "../../utilities/common";
import { property, customElement } from "lit-element/lib/decorators";
import { listen } from "@uxland/uxl-utilities/listen";
import { UxlTileViewItem } from "../uxl-tile-view-item/uxl-tile-view-item";
/**
 * `uxl-tile-view`
 * A tile view component
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
@customElement("uxl-tile-view")
export class UxlTileView extends LitElement {
  render() {
    return html`
      ${template()}
    `;
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  @property()
  iconMax: string = "tile-view-icons:maximize";

  @property()
  iconMin: string = "tile-view-icons:minimize";

  @property()
  iconTitle: string = "tile-view-icons:minimize";

  @property()
  animationTime: number = 300;

  @property()
  maximizedItem: any;

  @property()
  isMaximized: boolean = false;

  @listen("tileViewItemStatusChanged", "uxl-tile-view-item")
  onTileViewItemStatusChanged(e) {
    let status: WidgetStatus = e.detail.status;
    let item = this.querySelector(`#${e.detail.tile}`);
    let tileStatusChanged = new CustomEvent("tileItemStatusChanged", {
      composed: true,
      detail: { status: status, item: item }
    });
    this.dispatchEvent(tileStatusChanged);
    return status == "maximized" ? this.expand(item) : this.minimize(item);
  }

  get items(): HTMLCollection {
    return this.children;
  }

  async expand(element: any) {
    Array.from(this.items).forEach(tile => {
      animations.fadeOutAnimation(this.querySelector(`#${tile.id}`), this.animationTime);
    });

    await delay(this.animationTime);

    let items = Array.from(this.items);
    let otherItems = items.filter(item => item.id != element.id);
    items.forEach(i => i.classList.remove("maximized"));
    otherItems.forEach(i => {
      i.classList.add("minimized");
      (<any>i).tileStatus = "minimized";
    });
    element.classList.add("maximized");
    element.tileStatus = "maximized";
    this.setItemMaximized(element.id);
    this.classList.remove("none-maximized");
    this.classList.add("some-maximized");
    this.isMaximized = true;

    setTimeout(() => {
      animations.fadeInAnimation(this.querySelector(`#${element.id}`), this.animationTime * 2);
    }, this.animationTime);
  }

  minimize(element: any) {
    animations.fadeOutAnimation(this.querySelector(`#${element.id}`), this.animationTime);
    element.classList.remove("maximized");
    this.classList.remove("some-maximized");
    this.classList.add("none-maximized");
    Array.from(this.items).forEach(tile => {
      (<any>tile).tileStatus = "normal";
      tile.classList.remove("minimized");
      animations.fadeInAnimation(this.querySelector(`#${tile.id}`), this.animationTime);
    });
    this.setItemMaximized(null);
    this.isMaximized = false;
  }

  setItemMaximized(item: any) {
    this.maximizedItem = item;
  }
}
