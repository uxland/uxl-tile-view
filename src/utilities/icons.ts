import '@polymer/iron-icons/iron-icons';
import {html, TemplateResult} from 'lit-html';

const icons = () => html`
<iron-iconset-svg name="tile-view-icons" size="24">
 <svg>
   <defs>
     <g id="maximize"><path d="M14.87,5V6.38h1.78L13,10l1,1,3.65-3.65V9.13H19V5ZM6.38,16.65V14.86H5V19H9.14V17.62H7.35L11,14l-1-1ZM5,5V9.13H6.38V7.35L10,11l1-1L7.35,6.38H9.13V5Zm8,9,3.65,3.65H14.87V19H19V14.86H17.62v1.78L14,13Z"/></g>
     <g id="minimize"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
   </defs>
 </svg>
</iron-iconset-svg>`;

export const iconTemplate: () => TemplateResult = icons;
