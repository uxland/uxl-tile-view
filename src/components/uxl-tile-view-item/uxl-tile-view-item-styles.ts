import {html} from '@polymer/lit-element/lit-element';
import {TemplateResult} from 'lit-html';
const innerStyle = html`
    <style>        
        :host(.maximized){
            max-height: initial;
            margin: 0!important;
            flex: 1;
        }
    
        :host #btn-min{
            display: none;
            width: 30px;
            height: 30px;
            padding: 6px;
        }
        
        :host #btn-max{
            display: flex;
            width: 30px;
            height: 30px;
            padding: 6px;
        }
    
         :host(.maximized) #btn-max{
            display: none;
         }
         
         :host(.maximized) #btn-min{
            display: flex;
         }
         
         :host(.minimized) #btn-min{
            display: none;
         }
         
         :host(.minimized) #btn-max{
            display: flex;
         }
         
         #tile-container{
            display: flex;
            flex-direction: column;
            flex: 1;
         }
         
         #tile-header{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 10px 16px;
            align-items: center;
            border-bottom: 1px solid #cfd8dc;
         }
         
         p.title{
            color: #37464D;
            margin: 0;
            font-weight: 600;
            text-transform: uppercase;
            font-size: 12px;
         }
         
         #tile-actions{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
         }
         
         paper-icon-button{
            --iron-icon-fill-color: #0288d1;
         }

         paper-icon-button:hover{
            background-color: rgba(0,0,0,.07);
            border-radius: 50%;
         }
         
         #tile-content{
            display: flex;
            overflow-y: hidden;
            min-height: 1px;
            height: 100%;
            box-sizing: border-box;
         }
         
         
        #tile-content::-webkit-scrollbar-track {
            background-color: #fff;
        }

        #tile-content::-webkit-scrollbar{
            width: 4px;
            background-color: #fff;
        }

        #tile-content::-webkit-scrollbar-thumb {
            background-color: rgba(0,0,0,.07);
        }
         
    </style>
     `;
export const style: TemplateResult = innerStyle;