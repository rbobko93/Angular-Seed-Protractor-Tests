import {element, by} from "protractor";

export class Navbar {
    private view1 = element(by.linkText('view1'));
    private view2 = element(by.linkText('view2'));

    public getView1() {
        return this.view1;
    }

    public getView2(){
        return this.view2;
    }

    public clickView1() {
        this.view1.click();
    }

    public clickView2() {
        this.view2.click();
    }
}