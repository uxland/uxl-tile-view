import { html, LitElement, css, unsafeCSS, property, customElement } from 'lit-element';
import styles from './styles.scss';
import { template } from './template';

declare type TileStatus = 'maximized' | 'minimized' | 'normal';

@customElement('uxl-tile-view-item')
export class UxlTileViewItem extends LitElement {
  render(): any {
    return html`
      ${template(this)}
    `;
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  @property()
  title: string;

  @property()
  maximizedTitle: string;

  @property()
  itemId: string;

  @property()
  tileStatus: TileStatus = 'normal';

  _maximize(e) {
    let div = e.currentTarget.dataArgs || e.currentTarget.dataset.args;
    let tileStatusChanged = new CustomEvent('tileViewItemStatusChanged', {
      composed: true,
      detail: { status: 'maximized', tile: div }
    });
    this.dispatchEvent(tileStatusChanged);
  }

  _minimize(e) {
    let div = e.currentTarget.dataArgs || e.currentTarget.dataset.args;
    let tileStatusChanged = new CustomEvent('tileViewItemStatusChanged', {
      composed: true,
      detail: { status: 'minimized', tile: div }
    });
    this.dispatchEvent(tileStatusChanged);
  }
}
