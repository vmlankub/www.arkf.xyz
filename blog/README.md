# Blog::Selected
> **[Blog::Category](/blog/category/)**  
> **[Blog::Contents](/blog/contents)**  
> *[Blog::Selected](/blog/)*

> # 每日精选 · 优质内容

## Top.1 [HTTPS中加密算法的密钥是随机生成吗？和用户帐号密码有什么关联？](2019/yV0Mes7HLjnFfZeR)
> 从概念上理一下。你这里说的包含了几个概念：  
> 会话密钥。业务数据实际被加密（别人拿到也解不开）和完整性保护（别人不能伪造、篡改、重放密文，发送端不能抵赖）。这个就是题主问的结果。  
> “会话密钥管理”密钥。会话密钥会定期协商更新的，协商过程的报文也要保护，一般会有一个管理密钥来保护会话密钥的协商更新。  
> 认证凭据。双方认可对方是正确、合法的通信对端需要呈上的ID（我是谁，用户名和网站的URL或服务器组织名称）和需要证实持有凭据的证明（密码和网站证书）。认证过程必须绑定一个管理密钥协商，也就是，认证结束后，要让合法的双方共享一个或一组或一对不能让第三方知晓的秘密。这个秘密一般是第2个密钥或者密钥生成材料。这个共享的获得可以是直接用公钥加密的密钥2，或者用其他密钥生成方法。

![](https://ww2.sinaimg.cn/large/005BYqpggy1g0gaz521j7j30m80dwta1.jpg)

## Top.2 [什么情况下C++需要垃圾处理机制？](2019/95Mu3U9PDrroP0d6)
> 专门产垃圾的语言才需要垃圾回收！！！  
> C++不生产垃圾，除非你不使用RAII，当然，不使用RAII也不能说你是在用C++，很可能你就是在写C，对了，C语言其实是需要垃圾回收的，毕竟用C时清理垃圾的心智包袱很大，既不能忘记，也不能double free，由其是数据结构一旦复杂了，指针到处飞，不是你写的，根本就看不清，反正C就不多说了唉。  
> 你每次都是new一个对象，后面手动delete，请问你这和用C有什么区别？不就是当成malloc/free吗？  
> 现代的C++代码是看不到new（除了一些RAII式容器中的构造），delete的，如果你的代码中很多new/delete，毫不夸张的说，这只能说明你还没迈入C++的大门。  

![](https://ww2.sinaimg.cn/large/005BYqpggy1g0gb1gaxboj30m80k4jv8.jpg)

## Top.3 [一个程序员的成长之路](2019/MgXZH4Scw6Lckg9C)
> 大家好，我是云龙，从2016年3月份开始，我参与到全民直播这个创业项目中，这两年一直在上海。关于我自己的成长历程，一直都很想找个时间跟前端的开发者们分享一下。通过剖析别人，也可以总结自己。我很害怕把这个主题讲的跟成功学一样，其实CTO这个职位现在多少有点“烂大街”，不算是什么成功，仅供参考。

![](https://ww2.sinaimg.cn/large/005BYqpggy1g0gb2kve8sj30m80etjt4.jpg)

### [七年级 · 历史与社会(上册)](2019/dphjWD2ClYM7TOAK)
### [七年级 · 历史与社会(下册)](2019/Q0pYpZeNhOi0Wm5v)
### [甘肃省兰州市 2017 年中考语文真题试题](2019/XHYjKAEFH9w0roF9)

![](https://ww2.sinaimg.cn/large/005BYqpgly1g01dwo3j72j308c01o080.jpg)

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> <script> (adsbygoogle = window.adsbygoogle || []).push({ google_ad_client: "ca-pub-4161171709893056", enable_page_level_ads: true }); </script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-116309064-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-116309064-2');
</script>
