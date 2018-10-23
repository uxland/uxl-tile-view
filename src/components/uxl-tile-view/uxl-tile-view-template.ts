import {html} from '@polymer/lit-element/lit-element';
import {TemplateResult} from 'lit-html';
const innerTemplate = (props) => html`<slot id="slot"></slot>`;
export const template: (props: any) =>TemplateResult = innerTemplate;