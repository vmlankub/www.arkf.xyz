# A - Tree and Permutation 
* [资源：FSCapture下载](/epic/ldP6xPtp2zdmXWDY/d6GIYytCJVL3puki.zip)

![](https://ww2.sinaimg.cn/large/005BYqpggy1g0o95g52fxj30mi06a75w.jpg)

## Input
![](https://ww2.sinaimg.cn/large/005BYqpggy1g0o96ybuvrj30mj04awf9.jpg)

## Output
![](https://ww2.sinaimg.cn/large/005BYqpggy1g0o978z441j30m501qjre.jpg)

## Sample Input
![](https://ww2.sinaimg.cn/large/005BYqpggy1g0o97r6mvvj30ma05l74j.jpg)

## Sample Output
![](https://ww2.sinaimg.cn/large/005BYqpgly1g0o980cwn0j30m402zq2x.jpg)

```cpp
#pragma comment(linker, "/STACK:102400000,102400000")
#include<bits/stdc++.h>
using namespace std;

#define debug puts("YES");
#define rep(x,y,z) for(int (x)=(y);(x)<(z);(x)++)

#define lrt int l,int r,int rt
#define lson l,mid,rt<<1
#define rson mid+1,r,rt<<1|1
#define ll long long
const int  maxn =1e5+5;
const int mod=1e9+7;

ll gcd(ll x,ll y)
{
	return y==0?x:gcd(y,x%y);
}
ll powmod(ll x,ll y)
{
	ll t;
	for(t=1; y; y>>=1,x=x*x%mod) if(y&1) t=t*x%mod;
	return t;
}

struct node
{
	int nxt;
	int e;
	ll w;
	node(int x=0,int y=0,ll z=0)
	{
		e=x;
		nxt=y;
		w=z;
	}
};

node edge[maxn<<1];
int head[maxn],tot=0;
void init()
{
	memset(head,-1,sizeof(head));
	tot=0;
}
void add(int a,int b,ll c)
{
	edge[tot]=node(b,head[a],c);
	head[a]=tot++;
}

ll n,dp[maxn][3];
void dfs(int u,int p)
{
	if(head[u]==-1)
	{
		dp[u][0]=1;
		return ;
	}
	for(int i=head[u]; ~i; i=edge[i].nxt)
	{
		int v=edge[i].e;
		if(v==p) continue;
		dfs(v,u);
		(dp[u][2]+=dp[v][2]+dp[v][1]*dp[u][0]%mod+dp[v][0]*dp[u][1]%mod+dp[u][0]*dp[v][0]%mod*edge[i].w%mod)%=mod;///又是一个线性的动态规划
		(dp[u][1]+=dp[v][1]%mod+dp[v][0]*edge[i].w%mod)%=mod;
		(dp[u][0]+=dp[v][0])%=mod;
	}
	dp[u][0]++;
	(dp[u][2]+=dp[u][1])%=mod;
}

int x,y;
ll fac[maxn],z;

int main()
{
	fac[0]=1;
	for(int i=1; i<maxn; i++) fac[i]=fac[i-1]*i%mod;

	while(~scanf("%lld",&n))
	{
		init();
		for(int i=1; i<n; i++)
		{
			scanf("%d%d%lld",&x,&y,&z);
			add(x,y,z);
			add(y,x,z);
		}
		memset(dp,0,sizeof(dp));
		dfs(1,-1);
		ll ans=dp[1][2]*fac[n-1]%mod*2%mod;
		printf("%lld\n",ans);
	}
	return 0;
}
```
