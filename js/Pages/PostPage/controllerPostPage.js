import { ModelPostPage } from './modelPostPage.js';
import { ViewPostPage } from './viewPostPage.js';

export class ControllerPostPage{
    constructor(objPost) {
        this.view = new ViewPostPage(objPost);
        this.model = new ModelPostPage();
    }
}