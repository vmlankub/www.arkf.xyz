# 什么情况下C++需要垃圾处理机制？
> 专门产垃圾的语言才需要垃圾回收！！！

> 专门产垃圾的语言才需要垃圾回收！！！

> 专门产垃圾的语言才需要垃圾回收！！！

重要的话要说三遍。

C++不生产垃圾，除非你不使用RAII，当然，不使用RAII也不能说你是在用C++，很可能你就是在写C，对了，C语言其实是需要垃圾回收的，毕竟用C时清理垃圾的心智包袱很大，既不能忘记，也不能double free，由其是数据结构一旦复杂了，指针到处飞，不是你写的，根本就看不清，反正C就不多说了唉。

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-4161171709893056"
     data-ad-slot="5334499576"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

你每次都是new一个对象，后面手动delete，请问你这和用C有什么区别？不就是当成malloc/free吗？

> 现代的C++代码是看不到new（除了一些RAII式容器中的构造），delete的，如果你的代码中很多new/delete，毫不夸张的说，这只能说明你还没迈入C++的大门。

RAII管理的是资源，资源资源，什么是资源？不光是内存，还有文件句柄，socket等等，而且RAII是等你用完，立即回收资源，不存在垃圾，也就是说不会占着资源不放，扔在那里成为一堆垃圾，等每天早上清洁工来回收。

GC不配给RAII提鞋，你不能说把socket或者文件句柄放到GC里，等GC有空了，再给我回收，这肯定不行的，文件句柄是能随便独占着不放的吗？所以只有内存可以用GC，其它资源还是手工模式。

------------------------------

下面有人问了一些问题，如何避免new之类的，我把回答附加上来，也许对一些人有用。

> 在C++中，尽可能stack而不是heap，stack有heap无法比拟的效率，并且安全，从不泄露。

> 实在要用到heap的情况下，可以通过C++11之后提供的各种具有RAII能力的容器来做。

> heap上的东西，是属于全局的，分配操作全局同步的，开销也很大，你可以粗暴的认为，不同线程上的new会导致，线程之间变成串行化，严重的话会非常明显的降低并行效率。

[知乎](https://www.zhihu.com/question/308638046/answer/610183013)
