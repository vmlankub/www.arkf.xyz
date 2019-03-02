# B - Tell Your World 
> Connect the countless points with lines, till we reach the faraway yonder.

> There are n points on a coordinate plane, the i-th of which being (i, yi).

> Determine whether it's possible to draw two parallel and non-overlapping lines, such that every point in the set lies on exactly one of them, and each of them passes through at least one point in the set.

## Input
> The first line of input contains a positive integer n (3 ≤ n ≤ 1 000) — the number of points.

> The second line contains n space-separated integers y1, y2, ..., yn ( - 10^9 ≤ yi ≤ 10^9) — the vertical coordinates of each point.

## Output
> Output "Yes" (without quotes) if it's possible to fulfill the requirements, and "No" otherwise.

> You can print each letter in any case (upper or lower).

## Examples
> Input
```
5
7 5 8 6 9
```

> Output
```
Yes
```

> Input
```
5
-1 -2 0 0 -5
```

> Output
```
No
```

> Input
```
5
5 4 3 2 1
```

> Output
```
No
```

> Input
```
5
1000000000 0 0 0 0
```

> Output
```
Yes
```

## Note
> In the first example, there are five points: (1, 7), (2, 5), (3, 8), (4, 6) and (5, 9). It's possible to draw a line that passes through points 1, 3, 5, and another one that passes through points 2, 4 and is parallel to the first one.

> In the second example, while it's possible to draw two lines that cover all points, they cannot be made parallel.

> In the third example, it's impossible to satisfy both requirements at the same time.

## 【题解】

>  大致题意：给定n个点，下标代表x值，值代表y值，现在要判断是否存在两条平行且不重合的直线可以穿过所有的点。

>  分析：首先注意到，n<=1000；数据不是很大，可以接受O(n2)复杂度，这就有了保底的算法思路（即最笨的办法--枚举），然后就是分析具体做法：

>  应该知道：一条直线上的任意两点的斜率都是一样的，不论前后；

>  所以我们可以这样做：

>  以第一个点为起点，再以第i个点（2<=i<=n）为第二个点确定一条直线，斜率为k，然后遍历从第二个点到第i个点，如果K（1，i）=k 就把该点i标记，第一次遍历完注意，如果标记的点的数目m=n-1，即只剩下一个点未标记，那就说明可以满足题意（经过一个点的直线有无数条，自然存在一条与已知直线平行的线）；

>  如果m=n说明一条直线经过了所有的点，这不满足题中两条平行且不重合的直线的条件，直接pass；

>  剩下的情况就继续判断：

>  再扫一遍，在未标记的点中找到前两个点的斜率KK，如果KK！=k ，直接pass，如果相等，继续寻找未标记的点，将其与第一个未标记的点组成的斜率算出来，与KK比较，如果不同，就说明出现了第二种斜率，直接pass；如果找到最后都是相同的，标记了，那么再扫一遍确认所有点都被标记了，说明满足题意了，标记tag=1；

>  普遍情况就处理完了，注意！
！！还有特殊情况：

>  如果从第二个点到第n个点都在同一条直线上，但是第一个点在直线外，那上面的判断方法就实效了，所以要单独判断，把从第二个点到第n个点的斜率扫一遍，如果相同，并且第一个点的斜率与其不同，则满足题意，标记tag=1；

>  到这里所有情况就处理完了，做这个题还是很有收获的，QAQ;

```cpp
#include "bits/stdc++.h"
#define cin_speedup ios_base::sync_with_stdio(0); \
	cin.tie(0); \
	cout.tie(0);
using namespace std;
const int N=1005;
int m,n;
double a[N][N];
double s[N];
int vis[N];

int main()
{
	cin_speedup
	while(cin>>m)
	{
		int tag=0;
		for(int i=1; i<=m; ++i)
			cin>>s[i];
		for(int i=2; i<=m; ++i)
		{
			memset(vis,0,sizeof(vis));
			vis[1]=1;
			double k=(double)(s[i]-s[1])/(i-1);
			for(int j=2; j<=m; ++j)
			{
				if((s[j]-s[1])/(double)(j-1) == k ) vis[j]=1;
			}
			int cnt=0;
			for(int j=1; j<=m; ++j)
				if(vis[j])
					cnt++;
			if(cnt==m-1) tag=1;
			else if(cnt!=m)
			{
				int j=1;
				while(vis[j]) j++;
				vis[j]=1;
				int h=j+1;
				while(vis[h]) h++;
				vis[h]=1;
				double kk=(s[h]-s[j])/(double)(h-j);
				if(kk!=k) continue;
				for(int l=h+1; l<=m; ++l)
				{
					if(vis[l]==0)
					{
						if((s[l]-s[h])/(double)(l-h)==kk)
							vis[l]=1;
					}
				}
				int p=0;
				for(int j=1; j<=m; ++j)
					if(!vis[j])
					{
						p=1;
						break;
					}
				if(!p) tag=1;
			}
			if(tag) break;
		}
		double k=(s[3]-s[2])/1.0;
		int i;
		for(i=4; i<=m; ++i)
			if((s[i]-s[2])/(double)(i-2)!=k)
				break;
		if((s[2]-s[1])/1.0!=k && i>m) tag=1;
		if(tag)
			cout<<"Yes"<<endl;
		else
			cout<<"No"<<endl;
	}
	return 0;
}
```
