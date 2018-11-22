function Post(title,body,author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.viewCount = 0;
    this.comments = [];
    this.isLive = false;
}


var post1 = new Post("abc","askdjl asjldk","tomm");
console.log(post1);