import { html } from "lit-element";
import "@polymer/paper-icon-button/paper-icon-button";
import { iconTemplate } from "../../utilities/icons";
import { UxlTileViewItem } from "./uxl-tile-view-item";

export const template = (props: UxlTileViewItem) => html`
  ${iconTemplate()}
  <div id="tile-container">
    <div id="tile-header">
      ${getHeaderTemplate(props)}
      <div id="tile-actions">
        <paper-icon-button
          @click="${props._maximize}"
          id="btn-max"
          data-args="${props.itemId}"
          icon="${props.iconMax}"
        ></paper-icon-button>
        <paper-icon-button
          @click="${props._minimize}"
          id="btn-min"
          data-args="${props.itemId}"
          icon="${props.iconMin}"
        ></paper-icon-button>
      </div>
    </div>
    <div id="tile-content">
      ${getContentTemplate(props)}
    </div>
  </div>
`;

const getHeaderTemplate = (props: UxlTileViewItem) => html`
  ${props.tileStatus === "normal"
    ? props.title
      ? html`
          <p class="title">${props.title}</p>
        `
      : html`
          <slot name="header"></slot>
        `
    : props.maximizedTitle
    ? html`
        <p class="title">${props.maximizedTitle}</p>
      `
    : html`
        <slot name="maximized-header"></slot>
      `}
`;

const getContentTemplate = (props: UxlTileViewItem) =>
  html`
    ${props.tileStatus == "normal"
      ? html`
          <slot name="content"></slot>
        `
      : props.tileStatus == "maximized"
      ? html`
          <slot name="maximized-content"></slot>
        `
      : html``}
  `;
