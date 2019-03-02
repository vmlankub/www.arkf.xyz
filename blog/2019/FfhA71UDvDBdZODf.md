# A - Odds and Ends 
> Where do odds begin, and where do they end? Where does hope emerge, and will they ever break?

> Given an integer sequence a1, a2, ..., an of length n. Decide whether it is possible to divide it into an odd number of non-empty subsegments, the each of which has an odd length and begins and ends with odd numbers.

> A subsegment is a contiguous slice of the whole sequence. For example, {3, 4, 5} and {1} are subsegments of sequence {1, 2, 3, 4, 5, 6}, while {1, 2, 4} and {7} are not.

## Input
> The first line of input contains a non-negative integer n (1 ≤ n ≤ 100) — the length of the sequence.

> The second line contains n space-separated non-negative integers a1, a2, ..., an (0 ≤ ai ≤ 100) — the elements of the sequence.

## Output
> Output "Yes" if it's possible to fulfill the requirements, and "No" otherwise.

> You can output each letter in any case (upper or lower).

## Examples
`Input`
```
3
1 3 5
```
`Output`
```
Yes
```
`Input`
```
5
1 0 1 5 1
```
`Output`
```
Yes
```
`Input`
```
3
4 3 1
```
`Output`
```
No
```
`Input`
```
4
3 9 9 3
```
`Output`
```
No
```
## Note
In the first example, divide the sequence into 1 subsegment: {1, 3, 5} and the requirements will be met.

In the second example, divide the sequence into 3 subsegments: {1, 0, 1}, {5}, {1}.

In the third example, one of the subsegments must start with 4 which is an even number, thus the requirements cannot be met.

In the fourth example, the sequence can be divided into 2 subsegments: {3, 9, 9}, {3}, but this is not a valid solution because 2 is an even number.

## 题意
给你一堆数，问你能不能分割成奇数个个数为奇数的子串，且所有子串的头尾都为奇数。


## 解题思路
> 乍一看好像很难……一开始我用搜索，枚举区间去做，妥妥的被hack了，超时了。实际上稍微思考就会发现，只要判断几个简单的条件就可以了。

> 奇数个奇数相加肯定是奇数（偶数不可能分解成奇数个奇数相加）（不考虑负数）

> 基于这一点，只要n是偶数，那么肯定输出No

> 那么是奇数的话……直接看头尾是不是奇数就可以了……因为头尾其中一个不是奇数的话，那么肯定输出No……


```cpp
#include "bits/stdc++.h"
#define INF 1<<29
using namespace std;
int main()
{
	int n;
	cin >> n;
	int a[n+2];
	for(int i=0; i<n; i++)
		cin >> a[i];
	if(n%2 && a[0]%2 && a[n-1]%2)
		cout << "Yes" << endl;
	else
		cout << "No" << endl;
}
```
