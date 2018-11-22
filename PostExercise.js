function Post(title,body,author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.viewCount = 0;
    this.comments = [];
    this.isLive = false;
}

Post.prototype = {
    constructor : Post,
    addComment : function(newComment){
        this.comments.push(newComment);
    },
    getComments : function(){
        return this.comments;
    },
    updateViewCount : function(){
        this.viewCount ++;
    }
}

var post1 = new Post("abc","askdjl asjldk","tomm");
console.log(post1);

console.log(post1.getComments());
post1.addComment("hey, this post.....")
console.log(post1.getComments());

console.log("view count: "+ post1.viewCount);
post1.updateViewCount();
console.log("view count: "+ post1.viewCount);
post1.updateViewCount();post1.updateViewCount();post1.updateViewCount();post1.updateViewCount();
console.log("view count: "+ post1.viewCount);