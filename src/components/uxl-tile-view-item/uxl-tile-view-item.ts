import {html, LitElement} from '@polymer/lit-element/lit-element';
import {property, customElement, listen} from "@uxland/uxl-polymer2-ts";
import {style as styleTemplate} from './uxl-tile-view-item-styles.js';
import {template as htmlTemplate} from './uxl-tile-view-item-template.js';

declare type TileStatus = "maximized" | "minimized" | "normal";

@customElement('uxl-tile-view-item')
export class UxlTileViewItem extends LitElement {

    render(): any {
        return html`${styleTemplate} ${htmlTemplate(this)}`;
    }

    @property()
    title: string;

    @property()
    itemId: string;

    @property()
    tileStatus: TileStatus = "normal";

    @listen('click', '#btn-max')
    onMaximizeClick(e){
        let div = e.currentTarget.dataArgs || e.currentTarget.dataset.args;
        let tileStatusChanged = new CustomEvent('tileViewItemStatusChanged', {composed: true, detail: {status: "maximized", tile: div}});
        this.dispatchEvent(tileStatusChanged);
    }

    @listen('click', '#btn-min')
    onMinimizeClick(e){
        let div = e.currentTarget.dataArgs || e.currentTarget.dataset.args;
        let tileStatusChanged = new CustomEvent('tileViewItemStatusChanged', {composed: true, detail: {status: "minimized", tile: div}});
        this.dispatchEvent(tileStatusChanged);
    }
}