import {by, element} from "protractor";

export class View1Page {
    private paragraph = element(by.tagName('p'));

    public getParagraph(){
        return this.paragraph;
    }
}