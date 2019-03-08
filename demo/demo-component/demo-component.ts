import {html, LitElement} from 'lit-element/lit-element';
import * as styles from './styles.scss';
import {template} from './template';
import {property, customElement} from 'lit-element/lib/decorators';
/**
 * `uxl-tile-view`
 * A tile view component
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
@customElement('demo-component')
export class DemoComponent extends LitElement {
    render(){
        return html`<custom-style><style>${styles}</style></custom-style> ${template()}`;
    }
}
