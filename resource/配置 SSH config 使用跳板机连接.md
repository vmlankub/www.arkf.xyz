# 配置 SSH config 使用跳板机连接


之前利用 aliyun 的学生机作为跳板机连几台在学校的机子，可是每次输入长长的一串命令总感觉比较麻烦，加上最近再写一个小工具来方便自己维护服务器，如果考虑跳板的命令又会比较麻烦，就去简单学习了一下如何通过配置 ssh config 来达到目的。

#### config 文件

config 文件一般有两个，用户配置文件 `~/.ssh/config` 和系统配置文件 `/etc/ssh/ssh_config`。一般来说编辑用户配置文件就好了

#### 配置

以下称本机为 A，跳板机为 B，需要通过跳板机连接的为 C。

首先要把 A 的 public key 放到 B 的 authorized keys 中，把 B 的 public key 放到 X 的 authorized keys 中，将 C 的 SSH 服务端口（默认为 22）映射到 B 的某个端口（这个端口只在内部访问，用 SSH 就可做到）。

然后将以下内容加入配置文件中

```
Host <name>
    HostName 127.0.0.1
    User <user>
    Port <port>
    ProxyCommand ssh <cloud-user>@<cloud-host> -W %h:%p
```

| 代称 | 解释 |
| --- | --- |
| name | 在 A 连接 C 所用的名字，可以任意取 |
| user | 登录 C 使用的用户名 |
| port | C 的 SSH 端口映射到 B 的端口号 |
| cloud-user | 登录 B 使用的用户名 |
| cloud-host | B 的 hostname 或是 ip |

#### 使用方式

如我将 C 的 22 端口映射到 B 的 `<port>` 端口，这个端口只能在内网访问，我在 A 登录 C 只需要

```
ssh <name>
```

上文的 `<user>` 和 `<port>` 也可以不设置，在连接时使用

```
ssh <user>@<host> -p<port>
```

#### 拓展

Host 也可以使用通配符，如这样的配置

```
Host 192.168.41.*
    User <user>
    Port <port>
    ProxyCommand ssh <cloud-user>@<cloud-host> -W %h:%p
```

可以使所有 `192.168.41.*` 的连接从跳板机走。

#### 后记

感觉最近自己很咕啊，就更了这一篇比较奇怪的文章。

运维方面本就是 memset0 的业余爱好，所以讲的内容也比较简单，请多包涵。

以及细心的你是否发现博客的样式更新呢？麻烦在评论里告诉我下啦 qaq ...
