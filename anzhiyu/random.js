var posts=["undefined/halo搭建脚本/","undefined/她的梦里/","undefined/唯有清风笑/","undefined/我的sxm博客/","undefined/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };