# E - Y2K Accounting Bug 
> Accounting for Computer Machinists (ACM) has sufferred from the Y2K bug and lost some vital data for preparing annual report for MS Inc. 
All what they remember is that MS Inc. posted a surplus or a deficit each month of 1999 and each month when MS Inc. posted surplus, the amount of surplus was s and each month when MS Inc. posted deficit, the deficit was d. They do not remember which or how many months posted surplus or deficit. MS Inc., unlike other companies, posts their earnings for each consecutive 5 months during a year. ACM knows that each of these 8 postings reported a deficit but they do not know how much. The chief accountant is almost sure that MS Inc. was about to post surplus for the entire year of 1999. Almost but not quite. 

> Write a program, which decides whether MS Inc. suffered a deficit during 1999, or if a surplus for 1999 was possible, what is the maximum amount of surplus that they can post.

## Input
Input is a sequence of lines, each containing two positive integers s and d.
## Output
For each line of input, output one line containing either a single integer giving the amount of surplus for the entire year, or output Deficit if it is impossible.
## Sample Input
```
59 237
375 743
200000 849694
2500000 8000000
```
## Sample Output
```
116
28
300612
Deficit
```

```cpp
#include "iostream"
//E - Y2K Accounting Bug
//Ark: github.com/MinecraftFuns
using namespace std;
int main()
{
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);
	int s,d;
	int res;
	while(cin>>s && cin>>d)
	{
		if(d>4*s)res=10*s-2*d;
		else if(2*d>3*s)res=8*s-4*d;
		else if(3*d>2*s)res=6*(s-d);
		else if(4*d>s)res=3*(s-3*d);
		else res=-1;
		if(res<0)cout<<"Deficit"<<endl;
		else cout<<res<<endl;
	}
	return 0;
}
```
