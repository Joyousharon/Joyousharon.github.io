var posts=["undefined/时代巨变中的跨境电商：如何抓住新机遇？/","undefined/跨境电商的3.0时代：从运营到认知，如何赚钱更智慧？/","undefined/halo搭建脚本-2/","undefined/halo搭建脚本-1/","undefined/按摩/","undefined/她的梦/","undefined/何以缘灭凰归离/","undefined/你走以后/","undefined/小萝莉/","undefined/何以缘起凤相思/","undefined/小诺和小雨/","undefined/我是谁/","undefined/她的梦里/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };