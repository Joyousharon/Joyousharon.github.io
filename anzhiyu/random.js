var posts=["2024/11/20/hello-world/","2024/11/20/我的sxm博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };