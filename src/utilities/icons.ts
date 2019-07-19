import "@polymer/iron-icons/iron-icons";
import { html, TemplateResult } from "lit-html";

const icons = () => html`
  <iron-iconset-svg name="tile-view-icons" size="24">
    <svg>
      <defs>
        <g id="maximize">
          <path
            d="M14.87,5V6.38h1.78L13,10l1,1,3.65-3.65V9.13H19V5ZM6.38,16.65V14.86H5V19H9.14V17.62H7.35L11,14l-1-1ZM5,5V9.13H6.38V7.35L10,11l1-1L7.35,6.38H9.13V5Zm8,9,3.65,3.65H14.87V19H19V14.86H17.62v1.78L14,13Z"
          />
        </g>
        <g id="minimize">
          <path
            d="M6.77 13.31v1.31h1.69L5 18.08l.92.92 3.46-3.46v1.69h1.31v-3.92zM18.08 5l-3.47 3.46V6.77h-1.3v3.92h3.92V9.38h-1.69L19 5.92zm-4.77 8.31v3.92h1.31v-1.69L18.08 19l.92-.92-3.46-3.46h1.69v-1.31zM5.92 5L5 5.92l3.46 3.46H6.77v1.31h3.92V6.77H9.38v1.69z"
          />
        </g>
      </defs>
    </svg>
  </iron-iconset-svg>
`;

export const iconTemplate: () => TemplateResult = icons;
