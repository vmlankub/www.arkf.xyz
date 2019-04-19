# 请问我有一个后端，还有it部门的一个经理带五个软工帮我，开发机器学习的api，有没有前辈能给我些指导？
我这边是做图像算法的，自己训练好一个模型后写一个web服务，能接收其他人的请求然后把请求预处理，送进模型推理，再后处理结果后返回结果给调用者。调用者不一定就是用户，可以是后端的其它服务，所以你大概要做的是：

1. 你作为Tech leader先根据业务需求整理出一个技术栈，比如先处理什么，再调用什么服务，最后再做什么样的处理再返回给用户，明确整个技术流程。

2. 确定每个流程的输入输出数据格式（接口信息）、返回时间要求、最低支持并发数、通信方式（httprestful or RPC or MQ），这些要和产品经理去商量确定，反复商量修正，确保这是所有技术人员都同意的，然后就不要改了！尤其是接口，尽量做到无论你算法怎么修改都好，接口绝对不要变更，否则你改一次你的客户要跟着改，或者你的同事要跟着改，这样会被打的。（狗头保命

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- il7YNvMMUbbbz7q8 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4161171709893056"
     data-ad-slot="9948532008"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

3. 确定好接口后，制定开发计划，几号完成开发，几号提测，几号上线，如果临近deadline前有风险要延期的话，要让组员及时提出并寻找资源解决。

4. 各部分开始开发，这里说说算法的工作，无非就是建模然后部署，你可以写成一个python包让别人调用，或者写成web服务让别人调用，看你们怎么商量。

5. 开发完毕后，在提测前进行全链路联通，确保服务能正常调用。

6. 交给测试同事进行功能测试，看能否正确处理各种异常，然后压力测试，看服务能否满足并发要求。

7. 上线，统计用户调用情况，根据用户反馈继续迭代优化。

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- il7YNvMMUbbbz7q8 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4161171709893056"
     data-ad-slot="9948532008"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

这是我们一般的开发流程，我作为算法工程师也得做一些后台的工作，因为一些机器学习深度学习的部署方式，普通后台工程师不一定懂，可以参考一下我的文章，感受下部署流程：

[Justin ho：TensorFlow Serving + Docker + Tornado机器学习模型生产级快速部署](https://zhuanlan.zhihu.com/p/52096200)

-----------------------

[知乎](https://www.zhihu.com/question/316427210/answer/626060446)

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "ca-pub-4161171709893056",
          enable_page_level_ads: true
     });
</script>
