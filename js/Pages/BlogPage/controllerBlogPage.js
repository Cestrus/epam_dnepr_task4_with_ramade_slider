import { ModelBlogPage } from './modelBlogPage.js';
import { ViewBlogPage } from './viewBlogPage.js';
import { Post } from '../../components/post.js';
import { postList } from '../../components/postList.js';
import { ControllerPostPage } from "../PostPage/controllerPostPage.js";

export class ControllerBlogPage{
    constructor(){
        this.view = new ViewBlogPage(Post, postList, ControllerPostPage);
        this.model = new ModelBlogPage();
    }
}