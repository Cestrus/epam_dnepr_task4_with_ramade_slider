export class Post{
    constructor(objPost, postPage){
        this.postPage = postPage;
        this.objPost = objPost;
    }

    renderPost() {
        let post = document.createElement('div');
        post.classList.add('row', 'row--blog-top');
        post.appendChild(this.renderAngleSign(this.objPost.postType));
        if (this.objPost.postType !== 'text') {
            post.appendChild(this.renderLeftHalf(this.objPost.imgLink));
            post.appendChild(this.renderRightHalf(this.objPost));
        } else {
            post.appendChild(this.renderFull(this.objPost));
        }
        return post;
    }

    renderAngleSign(postType){
        let angleSign = document.createElement('div');
        angleSign.classList.add('blog-top__angle-sign');
        switch (postType){
            case 'video': {
                angleSign.classList.add('blog-top__angle-sign--video');
                break;
            }
            case 'melody':{
                angleSign.classList.add('blog-top__angle-sign--melody');
                break;
            }
            case 'picture':{
                angleSign.classList.add('blog-top__angle-sign--picture');
                break;
            }
            default: {
                angleSign.classList.add('blog-top__angle-sign--text');
            }
        }
        return angleSign;
    }

    // render left side
    renderLeftHalf(imgLink){
        let leftSide = document.createElement('div');
        leftSide.classList.add('column-blog-half', 'column-blog-half--left');
        leftSide.innerHTML = `
            <div class="blog-top__img-video ">
                <img src="${imgLink}" alt="img">
                <div class="btnPlay"></div>
            </div>`;
        return leftSide;
    }

    //render right side
    renderRightHalf(objPost){
        let rightSide = document.createElement('div');
        rightSide.classList.add('column-blog-half', 'column-blog-half--right');

        let rightSideInner = document.createElement('div');
        rightSideInner.classList.add('blog-top__post', 'blog-top__post--half');
        rightSideInner.append(this.renderAuthorInfo(objPost));
        rightSideInner.innerHTML += this.renderPostTitle(objPost.postTitle) +
                                    this.renderPostDescription(objPost.audioTrack, objPost.postDescription, objPost.postType);
        rightSideInner.append(this.renderBtnReadMore());
        rightSide.appendChild(rightSideInner);
        return rightSide;
    }

    renderAuthorInfo(objPost){
        let authorInfo = document.createElement('div');
        authorInfo.classList.add('author-info', 'author-info--blog-top');
        authorInfo.innerHTML = this.renderAuthorImg(objPost.authorImg) +
                               this.renderAuthorName(objPost.authorName) +
                               this.renderAuthorStatistic(objPost.statistic);
        authorInfo.append(this.renderAuthorStarLine(objPost.quantityStar));
        return authorInfo;
    }

    renderAuthorImg(authorImg){
        return `<img src="${authorImg}" alt="author img">`;
    }

    renderAuthorName(authorName){
        return `<div class="author-info__name"><p>${authorName}</p></div>`;
    }

    renderAuthorStatistic(statistic){
        return `
        <div class="author-info__statistic statistic">
            <div class="statistic__date"><p>${statistic.date}</p></div>
            <div class="statistic__point"></div>
            <div class="statistic__time-read"><p>${statistic.timeRead}</p></div>
            <div class="statistic__point"></div>
            <div class="statistic__quantity-view"><p>${statistic.quantityView}</p></div>
        </div>`;
    }

    renderAuthorStarLine(quantityStar){
        let quantity = quantityStar;
        let starline = document.createElement('div');
        starline.classList.add('author-info__star-line', 'star-line');
        for(let i = 0; i < 5; i++){
            if (quantity  === 0.5){
                starline.innerHTML += '<div class="star-line__star star-line__star--half"></div>';
            } else if (quantity > 0 && quantity !== -0.5) {
                starline.innerHTML += '<div class="star-line__star"></div>';
            } else {
                starline.innerHTML += '<div class="star-line__star star-line__star--empty"></div>';
            }
            quantity--;
        }
        return starline;
    }

    renderPostTitle(postTitle){
        return `
        <div class="blog-top__post-title">
            <p>${postTitle}</p>
        </div>`
    }

    renderPostDescription(audioTrack, description, type){
        if (type === 'text'){
            return `
                <div class="blog-top__post-description blog-top__post-description--full">
                    <p>${description}</p>
                </div>`
        } else {
            if(audioTrack){
                return `
            <div class="blog-top__post-description">
                <audio controls></audio>
                <p>${description}</p>
            </div>`
            } else {
                return `
            <div class="blog-top__post-description">
                <p>${description}</p>
            </div>`
            }
        }
    }

    renderBtnReadMore() {
        let div = document.createElement('div');
        div.classList.add('blog-top__button');

        let btn = document.createElement('input');
        btn.classList.add('btn', 'btn--blog-top-light');
        btn.type = 'button';
        btn.value = 'Read more';
        btn.addEventListener('click', () => { 
            document.querySelector('.content').innerHTML = '';
            new this.postPage(this.objPost);  // рендер страницы Post 
        });
        div.append(btn);
        return div;
    }

    //render full size post
    renderFull(objPost){
        let fullSide = document.createElement('div');
        fullSide.classList.add('column-blog');

        let fullSideInner = document.createElement('div');
        fullSideInner.classList.add('blog-top__post');
        fullSideInner.append(this.renderAuthorInfo(objPost));
        fullSideInner.innerHTML += this.renderPostTitle(objPost.postTitle) +
                                   this.renderPostDescription(objPost.audioTrack, objPost.postDescription);
        fullSideInner.append(this.renderBtnReadMore());
        fullSide.appendChild(fullSideInner);
        return fullSide;
    }
} 