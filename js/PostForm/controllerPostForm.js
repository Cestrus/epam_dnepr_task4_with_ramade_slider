import { ModelPostForm } from './modelPostForm.js';
import { ViewPostForm } from './viewPostForm.js';

export class ControllerPostForm{
    constructor() {
        this.model = new ModelPostForm(this.renderSendMessegeWindow.bind(this));
        
        this.view = new ViewPostForm(this.sendForm.bind(this),
                                     this.isValidSigns.bind(this));
    }

    sendForm(event){
        return this.model.sendForm(event);
    }

    isValidSigns(str){
        return this.model.isValidSigns(str);
    }

    renderSendMessegeWindow(message){
        return this.view.renderSendMessegeWindow(message);
    }

    
}