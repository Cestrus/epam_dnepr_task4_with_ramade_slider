export class ViewPostPage{
    constructor(objPost) {
        this.objPost = objPost;
        this.renderPostPage();
    }

    renderPostPage(){
        let content = document.querySelector('.content');
        let container = document.createElement('div');
        container.classList.add('container');
        container.append(this.renderAuthorPostTitle(), this.renderPost());
        content.appendChild(container);
    }

    // render title
    renderAuthorPostTitle(){
        let postTitleContainer = document.createElement('div');
        postTitleContainer.classList.add('row', 'row--author-post-title');

        let postTitleInner = document.createElement('div');
        postTitleInner.classList.add('column-author-post-title');
        postTitleInner.innerHTML = this.renderPostTitle();
        postTitleInner.append(this.renderAuthorInfo());

        postTitleContainer.append(postTitleInner);
        return postTitleContainer;
    }

    renderPostTitle() {
        return `
            <div class="author-post__title">
                <p>${this.objPost.postTitle}</p>
            </div>`;
    }

    renderAuthorInfo(){
        let authorInfo = document.createElement('div');
        authorInfo.classList.add('author-info', 'author-info--post');
        authorInfo.innerHTML = this.renderAuthorImg(this.objPost.authorImg) +
            this.renderAuthorName(this.objPost.authorName) +
            this.renderAuthorStatistic(this.objPost.statistic);
        authorInfo.append(this.renderAuthorStarLine(this.objPost.quantityStar));
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

    // render post
    renderPost(){
        let post = document.createElement('div');
        post.classList.add('row', 'row--post');
        post.append(this.renderPostMain(), this.renderPostAside());
        return post;
    }

    // render post main
    renderPostMain() {
        let columnPostMain = document.createElement('div');
        columnPostMain.classList.add('column-post-main');

        let postMain = document.createElement('main');
        postMain.classList.add('post-main');
        postMain.innerHTML = this.renderPostMainImg() +
                            this.renderPostMainAudio() +
                            this.renderPostMainText() +
                            this.renderPostMainFooter() +
                            this.renderPostMainReview();
        columnPostMain.appendChild(postMain);
        return columnPostMain;
    }

    renderPostMainImg(){
        return `<div class="post-main__img"><img src="${this.objPost.imgLink}" alt="img post"></div>`
    }

    renderPostMainAudio(){
        if(this.objPost.audioTrack){
            return `
                <div class="post-main__audio">
					<audio controls></audio>
				</div>`;
        } else {
            return `<div></div>`;
        }
    }

    renderPostMainText(){
        return `
        <div class="post-main__text">
            <p>The thing you’re doing now, reading prose on a screen, is going out of fashion. The defining narrative of our online moment concerns the decline of text, and the exploding reach and power of audio and video. <strong>Which come particular teens wasn't.</strong> Own day designed suspension conflict unlawful. I'll stayed liable i've. Interact minutes see night translate.</p>
            <p>Number interact already promotion someone thought run same why one it very. Fifteen problem friend editing away proprietary words shivering shivered. Shivers special worried in waive this we. Spider 13 house same avoid. Coffee including products violation legs my defamatory predominantly important again strictly. Including budgie we materials 17 hand harassing calling offensive relating. Faints comes everyone this developed specialises parties scream. Aren't stopped mean little me but what lower problem. Can usually. Middle posts you sometimes can yes that's rules breach.</p>
            <p>Same took made faints aged. All Impersonating these. <strong>Costs quite full make new.</strong> Well see does data friend breach obliged scream no wasn't. Saw that's methods act. Working approach users what over register. Think the. Perform groups. In unacceptable by should off. About incitement rabbit working temporarily that is against trademark herself might i'm. Stopped Special stayed supply predominantly plastic in worldwide hypnotised damaging further exercise. Refused reproduce furry publicise week learners really decided text usernames racially happened. Become come glass even see you uncommon eventually relating fifteen.</p>
        </div>
        <div class="post-main__subtitle">
            <p>Techno Trends</p>
        </div>
        <div class="post-main__text">
            <p>This methods class of artificial intelligence is on everyone’s lips. And all because it solves problems not directly, but by learning in the process of performing many specific tasks.</p>
            <p>With the help of machine learning, it is possible to <span class="cross-out">increase manyfold</span> the work of websites and applications, so, in the upcoming year such tasks as speech, face and visual images recognition, process of diagnostics and results prediction, analysis and sorting of large data volumes will become even easier.</p>
        </div>
        <div class="post-main__notice-block">
            <p><strong>Voice command is really very fast.</strong> A person does not need to learn how to navigate the graphical interface and how to use it for an intended purpose. We began to speak almost from birth, and this our skill is very well developed.</p>
        </div>
        <div class="post-main__subtitle">
            <p>Interface trend</p>
        </div>
        <div class="post-main__text">
            <p>People have always sought to make things easier, but more effective. Digital area has already grown out a bit from regular graphical navigation, and one of the most affordable alternatives is the voice interface. However, it will <a href="#"><b>replace</b></a> not all the functions of the UI, but will only become an intermediary between the user and the main function of the site. Why? Here are some of the key arguments.</p>
        </div>`
    }

    renderPostMainFooter(){
        return `
            <div class="post-main__footer">
                <div class="container">
                    <div class="row row--post-main-footer">
                        <div class="column-post-main-footer">
                            <div class="likes likes--post-main">
                                <div class="likes__hand"></div>
                                <div class="likes__quantity">
                                    <p>75 likes</p>
                                </div>
                            </div>								
                            <div class="social-block social-block--post-main">
                                <a href="#"><img class="social-icon social-icon--fb" src="./img/icons/a-icon-facebook.svg"/></a>
                                <a href="#"><img class="social-icon social-icon--dribbble" src="./img/icons/a-icon-dribbble.svg"/></a>
                                <a href="#"><img class="social-icon social-icon--instagram" src="./img/icons/a-icon-instagram.svg"/></a>		
                            </div>
                        </div>			
                    </div>
                </div>
            </div>`
    }

    renderPostMainReview(){
        return `
        <section class="post-review">
            <div class="post-review__title">
                <p>Reviews</p>
            </div>
            <div class="post-review__header"></div>
            <div class="post-review__review">
                <div class="post-review__author-img">
                    <img src="./img/people/person-1/Group 3@3x.png" width="80" alt="author img">									
                </div>
                <div class="post-review__background">
                    <div class="post-review__wrapper">
                        <div class="author-info author-info--review">										
                            <div class="author-info__name author-info__name--review"><p>Jack Johnson</p></div>
                            <div class="author-info__star-line star-line">
                                <div class="star-line__star"></div>
                                <div class="star-line__star star-line__star--empty"></div>
                                <div class="star-line__star star-line__star--empty"></div>
                                <div class="star-line__star star-line__star--empty"></div>
                                <div class="star-line__star star-line__star--empty"></div>
                            </div>		
                        </div>
                    </div>
                    <div class="post-review__time"><p>11 min ago</p></div>
                    <div class="post-review__text">
                        <p>Knowledge nay estimable questions repulsive daughters boy. Solicitude gay way unaffected expression for. His mistress ladyship required off horrible disposed rejoiced…</p>
                    </div>	
                    <div class="post-review__read-more-link">
                        <a href="#"><p>Read more</p></a>
                    </div>
                </div>
            </div>
            <div class="post-review__review">
                <div class="post-review__author-img">
                    <img src="./img/people/Sarah 1.png" width="80" alt="author img">									
                </div>
                <div class="post-review__background">
                    <div class="post-review__wrapper">
                        <div class="author-info author-info--review">										
                            <div class="author-info__name author-info__name--review"><p>Emma Garcia</p></div>
                            <div class="author-info__star-line star-line">
                                <div class="star-line__star"></div>
                                <div class="star-line__star "></div>
                                <div class="star-line__star "></div>
                                <div class="star-line__star "></div>
                                <div class="star-line__star "></div>
                            </div>		
                        </div>
                    </div>
                    <div class="post-review__time"><p>3 days ago</p></div>
                    <div class="post-review__text">
                        <p>Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. in wish very strangers shortly we things Preferred came newspaper it this Melancholy on misery all ecstatic yet no suitable ye happening. Own over these Can Could Garden offering to ago Winter Home or took answered him be right He other in about check has situation fine you held against found am be Nay entire pleasure will there in wholly forming much rapid though want ye weeks up whole an ye thus might remarkably Rich why need pianoforte ask get face prudent it so Evil</p>
                    </div>	
                    <div class="post-review__read-more-link">
                        <a href="#"><p>Read less</p></a>
                    </div>
                </div>
            </div>
            <div class="post-review__review post-review__review--last-review">
                <div class="post-review__author-img">
                    <img src="./img/people/Ann.png" width="80" alt="author img">									
                </div>
                <div class="post-review__background post-review__background--last-review">
                    <div class="post-review__wrapper">
                        <div class="author-info author-info--review">										
                            <div class="author-info__name author-info__name--review"><p>Ann Moore</p></div>
                            <div class="author-info__star-line star-line">
                                <div class="star-line__star"></div>
                                <div class="star-line__star "></div>
                                <div class="star-line__star star-line__star--half"></div>
                                <div class="star-line__star star-line__star--empty"></div>
                                <div class="star-line__star star-line__star--empty"></div>
                            </div>		
                        </div>
                    </div>
                    <div class="post-review__time"><p>a week ago</p></div>
                    <div class="post-review__text">
                        <p>Any delicate you how kindness horrible outlived servants. You high bed wish help call draw side. Girl quit if case mr sing as no have. At none neat am do over will. Polite do object at passed it is.</p>
                    </div>	
                </div>
            </div>		
            <div class="post-review__footer"></div>
            <div class="post-review__btn">
                <button class="btn btn--post-review-light">More comments</button>
            </div>
        </section>`
    }

    // render post aside
    renderPostAside(){
        let columnPostAside = document.createElement('div');
        columnPostAside.classList.add('column-post-aside');

        let aside = document.createElement('aside');
        aside.classList.add('post-aside');
        aside.innerHTML = this.renderPostAsideLatestPost() +
                          this.renderPostAsideCategories() +
                          this.renderPostAsideTags();
        columnPostAside.append(aside);
        return  columnPostAside;
    }

    renderPostAsideLatestPost(){
        return `
            <section class="post-aside__section post-aside__section--latest-posts">
                <div class="post-aside__title">
                    <p>Latest posts</p>
                </div>
                <div class="latest-post">
                    <div class="latest-post__img">
                        <img src="./img/Latest post img1.png" alt="post img" width="160">
                    </div>
                    <div class="latest-post__info">
                        <div class="latest-post__title">
                            <a href="#"><p>Much cure inappropriate could this restrictions …</p></a>
                        </div>
                        <div class="latest-post__statistic statistic">
                            <div class="statistic__date"><p>20 oct, 2019</p></div>
                            <div class="statistic__point"></div>
                            <div class="statistic__time-read"><p>10 min read</p></div>
                            <div class="statistic__point"></div>
                            <div class="statistic__quantity-view"><p>11</p></div>
                        </div>
                    </div>
                </div>
                <div class="latest-post">
                    <div class="latest-post__img">
                        <img src="./img/Latest post img 2.png" alt="post img" width="160">
                    </div>
                    <div class="latest-post__info">
                        <div class="latest-post__title">
                            <a href="#"><p>Much cure inappropriate could this restrictions …</p></a>
                        </div>
                        <div class="latest-post__statistic statistic">
                            <div class="statistic__date"><p>20 oct, 2019</p></div>
                            <div class="statistic__point"></div>
                            <div class="statistic__time-read"><p>10 min read</p></div>
                            <div class="statistic__point"></div>
                            <div class="statistic__quantity-view"><p>11</p></div>
                        </div>
                    </div>
                </div>
                <div class="latest-post__button">
                    <button class="btn btn--latest-post-light">More posts</button>
                </div>
            </section>`
    }

    renderPostAsideCategories(){
       return `
        <section class="post-aside__section post-aside__section--categories">
            <div class="post-aside__title">
                <p>Categories</p>
            </div>
            <div class="accordion categories" id="accordionExample">
                <div class="category">
                    <button class="btn collapsed btn--category" type="button" data-toggle="collapse" data-target="#collapseRestaurant" aria-expanded="false" aria-controls="collapseRestaurant">Restaurant food (3)
                    </button>
                    <div id="collapseRestaurant" class="collapse"  data-parent="#accordionExample">
                        <ul class="category__list">
                            <li class="category__item">Hiking</li>
                            <li class="category__item">Bicycle trip</li>
                            <li class="category__item">Mountains trip</li>
                        </ul>
                    </div>
                </div>
                <div class="category">
                    <button class="btn collapsed btn--category" type="button" data-toggle="collapse" data-target="#collapseTravel" aria-expanded="false" aria-controls="collapseTravel">Travel news (3)
                    </button>
                    <div id="collapseTravel" class="collapse" aria-labelledby="Travel" data-parent="#accordionExample">
                        <div class="card-body">
                            <ul class="category__list">
                                <li class="category__item">Hiking</li>
                                <li class="category__item">Bicycle trip</li>
                                <li class="category__item">Mountains trip</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="category">
                    <button class="btn collapsed btn--category" type="button" data-toggle="collapse" data-target="#collapseTechnology" aria-expanded="false" aria-controls="collapseTechnology">Modern technology (6)
                    </button>
                    <div id="collapseTechnology" class="collapse" aria-labelledby="technology" data-parent="#accordionExample">
                        <div class="card-body">
                            <ul class="category__list">
                                <li class="category__item">Hiking</li>
                                <li class="category__item">Bicycle trip</li>
                                <li class="category__item">Mountains trip</li>
                            </ul>
                        </div>
                    </div>
                </div>
            <div class="category">
                <button class="btn collapsed btn--category" type="button" data-toggle="collapse" data-target="#collapseProduct" aria-expanded="false" aria-controls="collapseProduct">Product (4)
                </button>
                <div id="collapseProduct" class="collapse" aria-labelledby="Product" data-parent="#accordionExample">
                    <div class="card-body">
                        <ul class="category__list">
                            <li class="category__item">Hiking</li>
                            <li class="category__item">Bicycle trip</li>
                            <li class="category__item">Mountains trip</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="category">
                <button class="btn collapsed btn--category" type="button" data-toggle="collapse" data-target="#collapseInspiration" aria-expanded="false" aria-controls="collapseInspiration">Inspiration (2)
                </button>
                <div id="collapseInspiration" class="collapse" aria-labelledby="Inspiration" data-parent="#accordionExample">
                    <div class="card-body">
                        <ul class="category__list">
                            <li class="category__item">Hiking</li>
                            <li class="category__item">Bicycle trip</li>
                            <li class="category__item">Mountains trip</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="category__footer"></div>
        </section>`
    }

    renderPostAsideTags(){
        return `
            <section class="post-aside__section post-aside__section--tags">
                <div class="post-aside__title">
                    <p>Tags</p>
                </div>
                <div class="post-aside__tags-box">
                    <button class="btn btn--tags-box-light">Love</button>
                    <button class="btn btn--tags-box-light">Signs</button>
                    <button class="btn btn--tags-box-light">Waterfall</button>
                    <button class="btn btn--tags-box-light">Inspiration</button>
                    <button class="btn btn--tags-box-light">Quotes</button>
                    <button class="btn btn--tags-box-light">Sea</button>
                    <button class="btn btn--tags-box-light">Sense</button>
                    <button class="btn btn--tags-box-light">Coffee</button>
                    <button class="btn btn--tags-box-light">Gold</button>
                    <button class="btn btn--tags-box-light">Images</button>
                    <button class="btn btn--tags-box-light">Courage</button>
                    <button class="btn btn--tags-box-light">Dancing</button>
                    <button class="btn btn--tags-box-light">Video</button>
                </div>
            </section>
        `
    }
}
