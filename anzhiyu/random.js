var posts=["undefined/按摩/","undefined/她的梦/","undefined/halo搭建脚本/","undefined/她的梦里/","undefined/何以缘灭凰归离/","undefined/何以缘起凤相思/","undefined/你走以后/","undefined/小萝莉/","undefined/小诺和小雨/","undefined/我是谁/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };