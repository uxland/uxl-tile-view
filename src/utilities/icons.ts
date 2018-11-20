import '@polymer/iron-icons/iron-icons';
import {html, TemplateResult} from 'lit-html';

const icons = () => html`
<iron-iconset-svg name="tile-view-icons" size="24">
 <svg>
   <defs>
     <g id="maximize"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></g>
     <g id="minimize"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></g>
   </defs>
 </svg>
</iron-iconset-svg>`;

export const iconTemplate: () => TemplateResult = icons;
