import {html} from 'lit-element';
import '@polymer/paper-icon-button/paper-icon-button';
import {iconTemplate} from '../../utilities/icons';
import {UxlTileViewItem} from "./uxl-tile-view-item";

export const template = (props: UxlTileViewItem) => html`
    ${iconTemplate()}
    <div id="tile-container" part="tile-container">
        <div id="tile-header" part="tile-header">
        ${props.title
            ? html `<p class="title">${props.title}</p>`
            : props.tileStatus == "normal"
                ? html `<slot name="header"></slot>`
                : props.tileStatus == "maximized"
            ? html `<slot name="maximized-header"></slot>`
            : html ``}
            <div id="tile-actions">
                <paper-icon-button @click="${props._maximize}" id="btn-max" data-args="${props.itemId}" icon="${props.iconMax}"></paper-icon-button>
                <paper-icon-button @click="${props._minimize}" id="btn-min" data-args="${props.itemId}" icon="${props.iconMin}"></paper-icon-button>
            </div>
        </div>
        <div id="tile-content" part="tile-content">
        ${props.tileStatus == "normal"
    ? html `<slot name="content"></slot>`
    : props.tileStatus == "maximized"
        ? html `<slot name="maximized-content"></slot>`
        : html ``} 
        </div>
    </div>
`;
