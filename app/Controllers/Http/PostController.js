'use strict'

const Post = use('App/Models/Post');

class PostController {

  async index({ view }){
    let posts = await Post.all()
    let title = "Will Fetch All posts from DB"
    return view.render("posts.index", {title : title , posts : posts.toJSON()})
  }

  async getPostById({ params, view }){
    let post = await Post.find
  }
}

module.exports = PostController
