# A - Plate Game 
> You've got a rectangular table with length a and width b and the infinite number of plates of radius r. Two players play the following game: they take turns to put the plates on the table so that the plates don't lie on each other (but they can touch each other), and so that any point on any plate is located within the table's border. During the game one cannot move the plates that already lie on the table. The player who cannot make another move loses. Determine which player wins, the one who moves first or the one who moves second, provided that both players play optimally well.

## Input
A single line contains three space-separated integers a, b, r (1 ≤ a, b, r ≤ 100) — the table sides and the plates' radius, correspondingly.

## Output
If wins the player who moves first, print "First" (without the quotes). Otherwise print "Second" (without the quotes).

## Examples
* Input
``5 5 2``
* Output
``First``
* Input
``6 7 4``
* Output
``Second``

## Note
In the first sample the table has place for only one plate. The first player puts a plate on the table, the second player can't do that and loses.

![](https://cdn.jsdelivr.net/gh/lkpo0v/d1n3/ww2.sinaimg.cn/large/005BYqpggy1g0g35p2g02j305s05rjr7.jpg)

In the second sample the table is so small that it doesn't have enough place even for one plate. So the first player loses without making a single move.

![](https://cdn.jsdelivr.net/gh/lkpo0v/d1n3/ww2.sinaimg.cn/large/005BYqpggy1g0g36f0qdqj307w0803ye.jpg)


```cpp
#include <stdio.h>
#include <string.h>
#include <math.h>
//A - Plate Game 
//Ark: github.com/MinecraftFuns
using namespace std;
int main()
{
	int a, b, r, x, y;
	scanf("%d%d%d", &a, &b, &r);
	x = a / (2 * r);
	y = b / (2 * r);
	if (x == 0 || y == 0)
		printf("Second\n");
	else
	{
		printf("First\n");
	}
	return 0;
}
```
