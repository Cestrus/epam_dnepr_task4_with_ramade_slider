export class ModelPostForm{

    constructor(renderSendMessegeWindow){
        this.renderSendMessegeWindow = renderSendMessegeWindow;
        this.validSigns = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz .,!?:-';
        this.upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        this.objPost = {
            "id": "",
            "postType": "vieo",
            "imgLink": "",
            "authorImg": "", 
            "authorName": "", 
            "quantityStar" : "",
            "audioTrack": false,
            "postTitle": "",
            "postDescription": "",
            "postText":"",
            "postQuote": "",
    
            statistic: {
                "date": "",
                "timeRead": "",
                "quantityView": ""
            },
        }
    }

    isFirstUpper(title){
        let firstLetter = title[0];
        for(let i=0; i<this.upperLetters.length; i++){
            if(firstLetter === this.upperLetters[i]){
                return true;
            }
        }
        return false;        
    }   

    isValidSigns(str){
        let title = str.trim();
        if(!this.isFirstUpper(title)){
            return false;
        }
        for(let i=0; i <title.length ; i++){
            for(let j=0; j < this.validSigns.length; j++){
                if(title[i] === this.validSigns[j]){
                    break;
                }
                if(j === this.validSigns.length - 1 && title[i] !== this.validSigns[j]){
                    return false;
                }
            }
        }
        return true;
    }

    createPOSTBody(event){
        this.objPost.id = + new Date();;
        this.objPost.postType = event.target.selectPostForm.value;
        this.objPost.imgLink = event.target.imgLinkPostForm.value;
        this.objPost.authorImg = '';
        this.objPost.authorName = event.target.authorPostForm.value;
        this.objPost.quantityStar = '';
        this.objPost.audioTrack = '';
        this.objPost.postTitle = event.target.titlePostForm.value;
        this.objPost.postDescription = event.target.postDescriptionPostForm.value;
        this.objPost.postText = '';
        this.objPost.postQuote = event.target.postQuotePostForm.value;
        this.objPost.statistic.date = event.target.datePostForm.value;
        this.objPost.statistic.timeRead = '';
        this.objPost.statistic.quantityView = '';      
        
        return JSON.stringify(this.objPost);
    }

    sendPOST(requestBody){
        const URL = 'http://127.0.0.1:3000/api/create-article';

        fetch(URL, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: requestBody
        })
            .then(response => {
                if(response.ok){
                    this.renderSendMessegeWindow('Form submitted successfully!');
                }              
            })
            .catch(error => {
                this.renderSendMessegeWindow(`Error while fetching ${error}`);
            });
    }

    sendObjPost(){
        return this.objPost;
    }

    sendForm(event){
        this.sendPOST(this.createPOSTBody(event));        
    }    
}
