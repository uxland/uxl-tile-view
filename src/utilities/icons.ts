import '@polymer/iron-icons/iron-icons';
import {html, TemplateResult} from 'lit-html';

const icons = () => html`
<iron-iconset-svg name="tile-view-icons" size="24">
 <svg>
   <defs>
     <g id="maximize"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
     <g id="minimize"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></g>
   </defs>
 </svg>
</iron-iconset-svg>`;

export const iconTemplate: () => TemplateResult = icons;
