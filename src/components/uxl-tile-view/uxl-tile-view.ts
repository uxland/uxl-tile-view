import {html, LitElement} from 'lit-element/lit-element';
import CSS from './uxl-tile-view-styles.js';
import {template as TEMPLATE} from './uxl-tile-view-template.js';
import * as animations from '../../utilities/animations';
import { WidgetStatus} from "../../utilities/common";
import {property, customElement} from 'lit-element/lib/decorators';
import {listen} from '@uxland/uxl-polymer2-ts';
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

    connectedCallback(){
        super.connectedCallback();
        this.select();
    }

    @property()
    selected: string;

    @property()
    attrForSelected: string;

    @property()
    animationTime : number = 300;

    @listen('tileViewItemStatusChanged', 'uxl-tile-view-item')
    onTileViewItemStatusChanged(e){
        let status : WidgetStatus = e.detail.status;
        let item = this.querySelector(`#${e.detail.tile}`);
        return status == "maximized" ? this.expand(item) : this.minimize(item);
    }

    render(): any{
        return html`${CSS} ${TEMPLATE(this)}`;
    }

    get items(): HTMLCollection {
        return this.children;
    }

    selectIndex(){
        return this.selected
            ? this.attrForSelected
                ? Array.from(this.items).findIndex(i => Array.from(i.attributes).findIndex(attr=>attr.name == this.attrForSelected && attr.value == this.selected) != -1)
                : this.selected
            : -1;
    }

    select(){
        if(this.items){
            let index = this.selectIndex();
            if(index != -1){
                let items = Array.from(this.items);
                this.expand(items[index]);
                items[index].tileStatus = "maximized";
            }
        }
    }

    async expand(element: any){
        Array.from(this.items).forEach(tile=>{
            animations.fadeOutAnimation(this.querySelector(`#${tile.id}`),this.animationTime);
        });

        await this.delay(this.animationTime);

        let items = Array.from(this.items);
        let otherItems = items.filter(item=> item.id != element.id);
        items.forEach(i=>i.classList.remove('maximized'));
        otherItems.forEach(i=>{
            i.classList.add('minimized');
            (<any>i).tileStatus = "minimized";
        });
        element.classList.add('maximized');
        element.tileStatus = "maximized";

        if(this.attrForSelected)
            this.selected = element.getAttribute("name");
        else
            this.selected = Array.from(this.items).findIndex(i=>i.id == element.id).toString();

        this.classList.remove("none-maximized");
        this.classList.add("some-maximized");

        setTimeout(()=>{
            animations.fadeInAnimation(this.querySelector(`#${element.id}`), this.animationTime * 2);
        }, this.animationTime);
    }

    async delay(amount){
        return new Promise(resolve => setTimeout(resolve, amount));
    }

    minimize(element: any){
        animations.fadeOutAnimation(this.querySelector(`#${element.id}`), this.animationTime);
        element.classList.remove('maximized');
        this.classList.remove("some-maximized");
        this.classList.add("none-maximized");
        Array.from(this.items).forEach(tile=>{
            (<any>tile).tileStatus = "normal";
            tile.classList.remove('minimized');
            animations.fadeInAnimation(this.querySelector(`#${tile.id}`),this.animationTime * 2);
        });
        this.selected = null;
        this.select();
    }
}
