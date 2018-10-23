import {expect} from 'chai';
import {assert} from 'chai';
describe('uxl-tile-view', ()=>{
    describe('Given we want a tile view component', ()=>{
        describe('When we use component with a tile-view-items', ()=> {
            before(() => {
                browser.url('');
                browser.waitForExist('#test1', 4000);
            });
            describe('And when we set selected as a index and attrForSelected', ()=>{
                before(()=>{
                    browser.url('');
                    browser.waitForExist('#test1', 4000);
                });
                it(`Then the component should display the tile-view-items`, ()=>{
                    let div0 = browser.isVisible('#test1 #div0');
                    let div1 = browser.isVisible('#test1 #div1');
                    let div2 = browser.isVisible('#test1 #div2');
                    expect(div0).to.be.true;
                    expect(div1).to.be.true;
                    expect(div2).to.be.true;
                });
                it(`And selected tile-view-item should have "selected" classifier`, ()=>{
                    let div = browser.getAttribute('#test1 #div0', 'class');
                    expect(div).to.be.equal('maximized');
                });
                it(`And the rest of tile-view-items should have "minimized" classifier`, ()=>{
                    let div1 = browser.getAttribute('#test1 #div1', 'class');
                    let div2 = browser.getAttribute('#test1 #div2', 'class');
                    expect(div1).to.be.equal('minimized');
                    expect(div2).to.be.equal('minimized');
                });
            });
            /*describe('And when we set selected as a index, without attrForSelected', ()=>{
                it('Then the component should show de child according the selected attribute', ()=>{
                    let div = browser.isVisible('#test1 #div1');
                    expect(div).to.be.true;
                });
                it(`And the rest of childs shouldn't display`, ()=>{
                    let div2Visible = browser.isVisible('#test1 #div2');
                    let div3Visible = browser.isVisible('#test1 #div3');
                    expect(div2Visible).to.be.false;
                    expect(div3Visible).to.be.false;
                });
                it(`And selected children should have "selected" classifier`, ()=>{
                    let div = browser.getAttribute('#test1 #div1', 'class');
                    expect(div).to.be.equal('selected');
                });
                it(`And the rest of childs shouldn't have "selected" classifier`, ()=>{
                    let div1 = browser.getAttribute('#test1 #div2', 'class');
                    let div2 = browser.getAttribute('#test1 #div3', 'class');
                    expect(div1).to.be.equal('');
                    expect(div2).to.be.equal('');
                });
            });*/
        });
    });
});