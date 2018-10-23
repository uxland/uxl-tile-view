import {html} from '@polymer/lit-element/lit-element';
import '@polymer/paper-icon-button/paper-icon-button';
import {TemplateResult} from 'lit-html';
import {iconTemplate} from '../../utilities/icons';

const innerTemplate = (props) => html`
    ${iconTemplate()}
    <div id="tile-container">
        <div id="tile-header">
        ${props.title 
            ? html `<p class="title">${props.title}</p>`
            : html `<slot name="header"></slot>`}
            <div id="tile-actions">
                <paper-icon-button id="btn-max" data-args="${props.itemId}" icon="tile-view-icons:maximize">MAXIMIZE</paper-icon-button>
                <paper-icon-button id="btn-min" data-args="${props.itemId}" icon="tile-view-icons:minimize">MINIMIZE</paper-icon-button>
            </div>
        </div>
        <div id="tile-content">
        ${props.tileStatus == "normal" 
            ? html `<slot name="content"></slot>` 
        : props.tileStatus == "maximized" 
            ? html `<slot name="maximized-content"></slot>` 
            : html ``} 
        </div>
    </div>
`;
export const template: (props: any) => TemplateResult = innerTemplate;