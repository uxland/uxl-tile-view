import {html} from 'lit-element';
import {TemplateResult} from 'lit-html';
const innerTemplate = (props) => html`<slot id="slot"></slot>`;
export const template: (props: any) =>TemplateResult = innerTemplate;
