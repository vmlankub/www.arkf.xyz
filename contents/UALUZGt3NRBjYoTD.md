# [OI Wiki](https://oiwiki.arkf.xyz)

```cpp
#include "bits/stdc++.h"
using namespace std;
const int maxg = 1e5;
int head[maxg + 5], pnt[2 * maxg + 5], nxt[2 * maxg + 5], E;
int deep[maxg + 5], tmp[maxg + 5], k;
int lg[18] = {1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072};
int st[maxg + 5][18];
void add_edge(int x, int y)
{
    pnt[E] = y;
    nxt[E] = head[x];
    head[x] = E++;
}
void dfs(int u, int pre)
{
    st[u][0] = pre;
    deep[u] = deep[pre] + 1;
    for (int i = head[u]; i != -1; i = nxt[i])
    {
        int v = pnt[i];
        if (v == pre)
            continue;
        dfs(v, u);
    }
}
void dfs2(int u, int pre)
{
    for (int i = head[u]; i != -1; i = nxt[i])
    {
        int v = pnt[i];
        if (v == pre)
            continue;
        dfs2(v, u);
        tmp[u] += tmp[v];
    }
}
int main()
{
    int n, q;
    memset(head, -1, sizeof(head));
    scanf("%d%d", &n, &q);
    for (int i = 1; i < n; i++)
    {
        int t1, t2;
        scanf("%d%d", &t1, &t2);
        add_edge(t1, t2);
        add_edge(t2, t1);
    }
    dfs(1, 0);
    for (int j = 1; j <= 17; j++)
    {
        for (int i = 1; i <= n; i++)
        {
            if (deep[i] - lg[j] <= 0)
                continue;
            st[i][j] = st[st[i][j - 1]][j - 1];
        }
    }
    for (int i = 1; i <= q; i++)
    {
        int id, b;
        scanf("%d%d", &id, &b);
        int keep = id;
        for (int i = 17; i >= 0; i--)
        {
            if (b >= lg[i])
            {
                b -= lg[i];
                id = st[id][i];
            }
        }
        tmp[keep]++;
        tmp[st[id][0]]--;
    }
    dfs2(1, 0);
    for (int i = 1; i <= n; i++)
        printf("%d\n", tmp[i]);
    return 0;
}
```

# [OI Wiki](https://oiwiki.arkf.xyz)

```cpp
#include <bits/stdc++.h>
using namespace std;
int n, q;
int head[100005], pnt[200005], nxt[200005], E = 0;
int deep[100005], tmp[100005], k = 0;
int lg[18] = {1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072};
int st[100005][18];
void add_edge(int a, int b)
{
    pnt[E] = b;
    nxt[E] = head[a];
    head[a] = E++;
}
void dfs(int u, int pre)
{
    st[u][0] = pre;
    deep[u] = deep[pre] + 1;
    for (int i = head[u]; i != -1; i = nxt[i])
    {
        int v = pnt[i];
        if (v == pre)
            continue;
        dfs(v, u);
    }
}
void dfs2(int u, int pre)
{
    for (int i = head[u]; i != -1; i = nxt[i])
    {
        int v = pnt[i];
        if (v == pre)
            continue;
        dfs2(v, u);
        tmp[u] += tmp[v];
    }
}
int main()
{
    memset(head, -1, sizeof(head));
    scanf("%d%d", &n, &q);
    for (int i = 1; i < n; ++i)
    {
        int xx, yy;
        scanf("%d%d", &xx, &yy);
        add_edge(xx, yy);
        add_edge(yy, xx);
    }
    dfs(1, 0);
    for (int j = 1; j <= 17; ++j)
    {
        for (int i = 1; i <= n; ++i)
        {
            if (deep[i] - lg[j] <= 0)
                continue;
            st[i][j] = st[st[i][j - 1]][j - 1];
        }
    }
    for (int i = 1; i <= q; ++i)
    {
        int id, b;
        scanf("%d%d", &id, &b);
        int mark = id;
        for (int i = 17; i >= 0; --i)
        {
            if (b >= lg[i])
            {
                b -= lg[i];
                mark = st[mark][i];
            }
        }
        ++tmp[id];
        --tmp[st[mark][0]];
    }
    dfs2(1, 0);
    for (int i = 1; i <= n; ++i)
        printf("%d\n", tmp[i]);
    return 0;
}
```

# [OI Wiki](https://oiwiki.arkf.xyz)

```cpp
int deletemin(int o) {
  if (!lc[o])
    int ret = val[o], o = rc[o], return ret;
  else
    return deletemin(lc[o]);
}
void delete (int& o, int v) {
  siz[o]--;
  if (val[o] == v) {
    if (lc[o] && rc[o])
      o = deletemin(rc[o]);
    else
      o = lc[o] + rc[o];
    return;
  }
  if (val[o] > v) delete (lc[o], v);
  if (val[o] < v) delete (rc[o], v);
}
```

# [OI Wiki](https://oiwiki.arkf.xyz)

```cpp
int queryrnk(int o, int v) {
  if (val[o] == v) return siz[lc[o]] + 1;
  if (val[o] > v) return queryrnk(lc[o], v);
  if (val[o] < v) return queryrnk(rc[o], v) + siz[lc[o]] + cnt[o];
}
```

# [OI Wiki](https://oiwiki.arkf.xyz)

```cpp
int querykth(int o, int k) {
  if (siz[lc[o]] >= k) return querykth(lc[o], k);
  if (siz[lc[o]] < k + cnt - 1)
    return querykth(rc[o], k - siz[lc[o]] - cnt[o] + 1);
  return o;
}
```
