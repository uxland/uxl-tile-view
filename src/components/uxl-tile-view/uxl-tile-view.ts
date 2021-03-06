import { html, LitElement, unsafeCSS, css, property, customElement } from 'lit-element';
import styles from './styles.scss';
import { template } from './template';
// import * as animations from '../../utilities/animations';
import { WidgetStatus, delay } from '../../utilities/common';
import { listen } from '@uxland/uxl-utilities';
import { UxlTileViewItem } from '../uxl-tile-view-item/uxl-tile-view-item';
/**
 * `uxl-tile-view`
 * A tile view component
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
@customElement('uxl-tile-view')
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

  connectedCallback() {
    super.connectedCallback();
    if (this.hasAttribute('disableAnimations')) {
      this.disableAnimations = true;
    }
  }

  @property()
  iconMax: string = 'tile-view-icons:maximize';

  @property()
  iconMin: string = 'tile-view-icons:minimize';

  @property()
  iconTitle: string = 'tile-view-icons:minimize';

  @property()
  animationTime: number = 300;

  @property()
  maximizedItem: any;

  @property()
  isMaximized: boolean = false;

  @property()
  disableAnimations = false;

  @listen('tileViewItemStatusChanged', 'uxl-tile-view-item')
  onTileViewItemStatusChanged(e) {
    let status: WidgetStatus = e.detail.status;
    let item = this.querySelector(`#${e.detail.tile}`);
    let tileStatusChanged = new CustomEvent('tileItemStatusChanged', {
      composed: true,
      detail: { status: status, item: item }
    });
    this.dispatchEvent(tileStatusChanged);
    return status == 'maximized' ? this.expand(item) : this.minimize(item);
  }

  get items(): HTMLCollection {
    return this.children;
  }

  async expand(element: any) {
    if (!this.disableAnimations) {
      Array.from(this.items).forEach(tile => {
        (this as any).querySelector(`#${tile.id}`).classList.remove('fade-in');
        (this as any).querySelector(`#${tile.id}`).classList.add('fade-out');
        // (this as any).querySelector(`#${tile.id}`).style.animation = `fadeOut ${this.animationTime}ms ease-in-out`;
        // animations.fadeOutAnimation(this.querySelector(`#${tile.id}`), this.animationTime / 3);
      });

      await delay(this.animationTime);
    }

    let items = Array.from(this.items);
    let otherItems = items.filter(item => item.id != element.id);
    items.forEach(i => i.classList.remove('maximized'));
    otherItems.forEach(i => {
      i.classList.add('minimized');
      (<any>i).tileStatus = 'minimized';
    });
    element.classList.add('maximized');
    element.tileStatus = 'maximized';
    this.setItemMaximized(element.id);
    this.classList.remove('none-maximized');
    this.classList.add('some-maximized');
    this.isMaximized = true;

    if (!this.disableAnimations) {
      setTimeout(() => {
        (this as any).querySelector(`#${element.id}`).classList.remove('fade-out');
        (this as any).querySelector(`#${element.id}`).classList.add('fade-in');
        // (this as any).querySelector(`#${element.id}`).style.animation = `fadeIn ${this.animationTime * 2}ms ease-in-out;`;
        // animations.fadeInAnimation(this.querySelector(`#${element.id}`), this.animationTime * 2);
      }, this.animationTime);
    }
  }

  minimize(element: any) {
    if (!this.disableAnimations) {
      (this as any).querySelector(`#${element.id}`).classList.remove('fade-in');
      (this as any).querySelector(`#${element.id}`).classList.add('fade-out');
      // (this as any).querySelector(`#${element.id}`).style.animation = `fadeOut ${this.animationTime}ms ease`;
      // animations.fadeOutAnimation(this.querySelector(`#${element.id}`), this.animationTime);
    }
    element.classList.remove('maximized');
    this.classList.remove('some-maximized');
    this.classList.add('none-maximized');
    Array.from(this.items).forEach(tile => {
      (<any>tile).tileStatus = 'normal';
      tile.classList.remove('minimized');
      if (!this.disableAnimations) {
        (this as any).querySelector(`#${tile.id}`).classList.remove('fade-out');
        (this as any).querySelector(`#${tile.id}`).classList.add('fade-in');
        // animations.fadeInAnimation(this.querySelector(`#${tile.id}`), this.animationTime);
        // (this as any).querySelector(`#${tile.id}`).style.animation = `fadeIn ${this.animationTime}ms ease-in-out;`;
      }
    });
    this.setItemMaximized(null);
    this.isMaximized = false;
  }

  setItemMaximized(item: any) {
    this.maximizedItem = item;
  }
}
