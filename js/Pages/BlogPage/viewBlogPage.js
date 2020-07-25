export class ViewBlogPage{
    constructor(Post, postList, ControllerPostPage){
        this.Post = Post;
        this.postList = postList;
        this.ControllerPostPage = ControllerPostPage;
        this.content = document.querySelector('.content');

        this.renderPage();
    }

    renderPage(){
        this.renderBlogHead();
        this.renderPostsContainer();
    }

    renderBlogHead(){
        this.content.innerHTML = `
        <section class="blog-head">
            <div class="container">
                <div class="row row--blog-title">
                    <div class="column-title column-title--blog">
                        <div class="my-title my-title--blog">
                            <p class="my-title__name">Blog</p>
                            <div class="my-title__line-wrapper">
                                <div class="my-title__underline"></div>
                            </div>								
                            <div class="my-title__descriptor-wrapper">
                                <p class="my-title__description"></p>
                            </div>								
                        </div>
                    </div>
                </div>
                <div class="row row--blog-search">
                    <div class="column-blog-search">						
                        <input type="text" class="search search--blog" placeholder="Search by author"><div class="after-search"></div>							
                    </div>
                </div>
            </div>                
        </section>`
    }

    renderPostsContainer(){
        let section = document.createElement('section');
        section.classList.add('blog-top');
        
        let container = document.createElement('div');
        container.classList.add('container');

        this.renderPostList(container);
        container.append(this.renderBtnReadMore());
        section.append(container);
        this.content.append(section);
    }

    renderPostList(container){
        for(let i=0; i<this.postList.length; i++){
            let post = new this.Post(this.postList[i], this.ControllerPostPage); // have used class Post
            container.appendChild(post.renderPost());
        }
    }

    renderBtnReadMore(){
        let div = document.createElement('div');
        div.classList.add('row', 'row--blog-btn');
        div.innerHTML = `<button class="btn btn--blog-top-dark">Read more</button>`;
        return div;
    }
}