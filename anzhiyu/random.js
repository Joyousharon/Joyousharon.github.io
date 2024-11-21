var posts=["2024/11/21/唯有清风笑/","2024/11/20/我的sxm博客/","2024/11/20/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };