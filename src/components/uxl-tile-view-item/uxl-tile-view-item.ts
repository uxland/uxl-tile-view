import {html, LitElement} from 'lit-element/lit-element';
import {property, customElement} from "lit-element/lib/decorators";
import * as styles from './styles.scss';
import {template} from './template';

declare type TileStatus = "maximized" | "minimized" | "normal";

@customElement('uxl-tile-view-item')
export class UxlTileViewItem extends LitElement {

    render(): any {
        return html`<custom-style><style>${styles}</style></custom-style> ${template(this)}`;
    }

    @property()
    title: string;

    @property()
    itemId: string;

    @property()
    tileStatus: TileStatus = "normal";

    _maximize(e){
        let div = e.currentTarget.dataArgs || e.currentTarget.dataset.args;
        let tileStatusChanged = new CustomEvent('tileViewItemStatusChanged', {composed: true, detail: {status: "maximized", tile: div}});
        this.dispatchEvent(tileStatusChanged);
    }

    _minimize(e){
        let div = e.currentTarget.dataArgs || e.currentTarget.dataset.args;
        let tileStatusChanged = new CustomEvent('tileViewItemStatusChanged', {composed: true, detail: {status: "minimized", tile: div}});
        this.dispatchEvent(tileStatusChanged);
    }
}
