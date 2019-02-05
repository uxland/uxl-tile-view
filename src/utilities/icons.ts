import '@polymer/iron-icons/iron-icons';
import {html, TemplateResult} from 'lit-html';

const icons = () => html`
<iron-iconset-svg name="tile-view-icons" size="24">
 <svg>
   <defs>
     <g id="maximize"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
     <g id="minimize"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
   </defs>
 </svg>
</iron-iconset-svg>`;

export const iconTemplate: () => TemplateResult = icons;
