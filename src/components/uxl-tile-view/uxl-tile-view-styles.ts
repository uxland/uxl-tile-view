import {html} from '@polymer/lit-element/lit-element';
import {TemplateResult} from 'lit-html';
const innerStyle = html`<style>

        :host > ::slotted(:not(slot)) {
            display: flex;
            flex-direction: column;
            flex: 1;
        } 
    
        :host > ::slotted(:not(slot).minimized) {
            display: none !important;
        } 
        
        :host > ::slotted(:not(slot).maximized) {
            display: flex;
            flex-direction: column;
            flex: 1;
        }
        
        :host{
            --uxl-tile-view-background-color: #fff;
            --uxl-tile-view-title-color: #fff;
        }
        </style> 
    `;
export const style: TemplateResult = innerStyle;