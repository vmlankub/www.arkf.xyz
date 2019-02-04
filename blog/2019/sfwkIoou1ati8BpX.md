# Problem - 1111A - Codeforces
<div class="WordSection1" style="layout-grid:15.6pt">

<p class="MsoNormal" align="center" style="text-align:center;line-height:18.0pt;
mso-pagination:widow-orphan;background:white"><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">A. Superhero Transformation<o:p></o:p></span></p>

<p class="MsoNormal" align="center" style="text-align:center;line-height:18.0pt;
mso-pagination:widow-orphan;background:white"><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">time limit per test<o:p></o:p></span></p>

<p class="MsoNormal" align="center" style="text-align:center;line-height:18.0pt;
mso-pagination:widow-orphan;background:white"><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">1 second<o:p></o:p></span></p>

<p class="MsoNormal" align="center" style="text-align:center;line-height:18.0pt;
mso-pagination:widow-orphan;background:white"><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">memory limit per test<o:p></o:p></span></p>

<p class="MsoNormal" align="center" style="text-align:center;line-height:18.0pt;
mso-pagination:widow-orphan;background:white"><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">256 megabytes<o:p></o:p></span></p>

<p class="MsoNormal" align="center" style="text-align:center;line-height:18.0pt;
mso-pagination:widow-orphan;background:white"><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">input<o:p></o:p></span></p>

<p class="MsoNormal" align="center" style="text-align:center;line-height:18.0pt;
mso-pagination:widow-orphan;background:white"><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">standard input<o:p></o:p></span></p>

<p class="MsoNormal" align="center" style="text-align:center;line-height:18.0pt;
mso-pagination:widow-orphan;background:white"><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">output<o:p></o:p></span></p>

<p class="MsoNormal" align="center" style="text-align:center;line-height:18.0pt;
mso-pagination:widow-orphan;background:white"><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">standard output<o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="mso-margin-top-alt:auto;mso-margin-bottom-alt:
auto;text-align:left;line-height:16.8pt;mso-pagination:widow-orphan;background:
white"><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;
mso-fareast-font-family:宋体;color:#222222;mso-font-kerning:0pt">We all know that
a superhero can transform to certain other superheroes. But not all Superheroes
can transform to any other superhero. A superhero with name&nbsp;</span><span lang="EN-US" style="font-size:12.5pt;font-family:&quot;MathJax_Math-italic&quot;,serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:Helvetica;color:#222222;
mso-font-kerning:0pt">s</span><span lang="EN-US" style="mso-bidi-font-size:10.5pt;
font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:宋体;color:#222222;
mso-font-kerning:0pt">&nbsp;can transform to another superhero with name&nbsp;</span><span lang="EN-US" style="font-size:12.5pt;font-family:&quot;MathJax_Math-italic&quot;,serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:Helvetica;color:#222222;
mso-font-kerning:0pt">t</span><span lang="EN-US" style="mso-bidi-font-size:10.5pt;
font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:宋体;color:#222222;
mso-font-kerning:0pt">&nbsp;if&nbsp;</span><span lang="EN-US" style="font-size:
12.5pt;font-family:&quot;MathJax_Math-italic&quot;,serif;mso-fareast-font-family:宋体;
mso-bidi-font-family:Helvetica;color:#222222;mso-font-kerning:0pt">s</span><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;
mso-fareast-font-family:宋体;color:#222222;mso-font-kerning:0pt">s&nbsp;can be
made equal to&nbsp;</span><span lang="EN-US" style="font-size:12.5pt;font-family:
&quot;MathJax_Math-italic&quot;,serif;mso-fareast-font-family:宋体;mso-bidi-font-family:
Helvetica;color:#222222;mso-font-kerning:0pt">t</span><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">&nbsp;by changing any vowel in&nbsp;</span><span lang="EN-US" style="font-size:12.5pt;font-family:&quot;MathJax_Math-italic&quot;,serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:Helvetica;color:#222222;
mso-font-kerning:0pt">s</span><span lang="EN-US" style="mso-bidi-font-size:10.5pt;
font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:宋体;color:#222222;
mso-font-kerning:0pt">&nbsp;to any other vowel and any consonant in&nbsp;</span><span lang="EN-US" style="font-size:12.5pt;font-family:&quot;MathJax_Math-italic&quot;,serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:Helvetica;color:#222222;
mso-font-kerning:0pt">s</span><span lang="EN-US" style="mso-bidi-font-size:10.5pt;
font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:宋体;color:#222222;
mso-font-kerning:0pt">s&nbsp;to any other consonant. Multiple changes can be
made.<o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="margin-top:18.0pt;text-align:left;
line-height:16.8pt;mso-pagination:widow-orphan;background:white"><b><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;
mso-fareast-font-family:宋体;color:#222222;mso-font-kerning:0pt">In this problem</span></b><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;
mso-fareast-font-family:宋体;color:#222222;mso-font-kerning:0pt">, we consider
the letters '</span><span lang="EN-US" style="font-size:11.5pt;font-family:&quot;Courier New&quot;;
mso-fareast-font-family:宋体;color:#222222;mso-font-kerning:0pt">a</span><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;
mso-fareast-font-family:宋体;color:#222222;mso-font-kerning:0pt">', '</span><span lang="EN-US" style="font-size:11.5pt;font-family:&quot;Courier New&quot;;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">e</span><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">', '</span><span class="SpellE"><span lang="EN-US" style="font-size:11.5pt;font-family:&quot;Courier New&quot;;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">i</span></span><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">', '</span><span lang="EN-US" style="font-size:11.5pt;font-family:&quot;Courier New&quot;;mso-fareast-font-family:宋体;
color:#222222;mso-font-kerning:0pt">o</span><span lang="EN-US" style="mso-bidi-font-size:
10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:宋体;
color:#222222;mso-font-kerning:0pt">' and '</span><span lang="EN-US" style="font-size:11.5pt;font-family:&quot;Courier New&quot;;mso-fareast-font-family:宋体;
color:#222222;mso-font-kerning:0pt">u</span><span lang="EN-US" style="mso-bidi-font-size:
10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:宋体;
color:#222222;mso-font-kerning:0pt">' to be vowels and all the other letters to
be consonants.<o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:16.8pt;
mso-pagination:widow-orphan;background:white"><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">Given the names of two superheroes,
determine if the superhero with name&nbsp;</span><span lang="EN-US" style="font-size:12.5pt;font-family:&quot;MathJax_Math-italic&quot;,serif;mso-fareast-font-family:
宋体;mso-bidi-font-family:Helvetica;color:#222222;mso-font-kerning:0pt">s</span><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;
mso-fareast-font-family:宋体;color:#222222;mso-font-kerning:0pt">s&nbsp;can be
transformed to the Superhero with name&nbsp;</span><span lang="EN-US" style="font-size:12.5pt;font-family:&quot;MathJax_Math-italic&quot;,serif;mso-fareast-font-family:
宋体;mso-bidi-font-family:Helvetica;color:#222222;mso-font-kerning:0pt">t</span><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;
mso-fareast-font-family:宋体;color:#222222;mso-font-kerning:0pt">.<o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:18.0pt;
mso-pagination:widow-orphan;background:white"><b><span lang="EN-US" style="font-size:12.0pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">Input<o:p></o:p></span></b></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:16.8pt;
mso-pagination:widow-orphan;background:white"><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">The first line contains the string&nbsp;</span><span lang="EN-US" style="font-size:12.5pt;font-family:&quot;MathJax_Math-italic&quot;,serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:Helvetica;color:#222222;
mso-font-kerning:0pt">s</span><span lang="EN-US" style="mso-bidi-font-size:10.5pt;
font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:宋体;color:#222222;
mso-font-kerning:0pt">&nbsp;having length between&nbsp;</span><span lang="EN-US" style="font-size:12.5pt;font-family:&quot;MathJax_Main&quot;,serif;mso-fareast-font-family:
宋体;mso-bidi-font-family:Helvetica;color:#222222;mso-font-kerning:0pt">1</span><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;
mso-fareast-font-family:宋体;color:#222222;mso-font-kerning:0pt">&nbsp;and&nbsp;</span><span lang="EN-US" style="font-size:12.5pt;font-family:&quot;MathJax_Main&quot;,serif;mso-fareast-font-family:
宋体;mso-bidi-font-family:Helvetica;color:#222222;mso-font-kerning:0pt">1000</span><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;
mso-fareast-font-family:宋体;color:#222222;mso-font-kerning:0pt">, inclusive.<o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:16.8pt;
mso-pagination:widow-orphan;background:white"><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">The second line contains the
string&nbsp;</span><span lang="EN-US" style="font-size:12.5pt;font-family:&quot;MathJax_Math-italic&quot;,serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:Helvetica;color:#222222;
mso-font-kerning:0pt">t</span><span lang="EN-US" style="mso-bidi-font-size:10.5pt;
font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:宋体;color:#222222;
mso-font-kerning:0pt">&nbsp;having length between&nbsp;</span><span lang="EN-US" style="font-size:12.5pt;font-family:&quot;MathJax_Main&quot;,serif;mso-fareast-font-family:
宋体;mso-bidi-font-family:Helvetica;color:#222222;mso-font-kerning:0pt">1</span><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;
mso-fareast-font-family:宋体;color:#222222;mso-font-kerning:0pt">&nbsp;and&nbsp;</span><span lang="EN-US" style="font-size:12.5pt;font-family:&quot;MathJax_Main&quot;,serif;mso-fareast-font-family:
宋体;mso-bidi-font-family:Helvetica;color:#222222;mso-font-kerning:0pt">1000</span><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;
mso-fareast-font-family:宋体;color:#222222;mso-font-kerning:0pt">, inclusive.<o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:16.8pt;
mso-pagination:widow-orphan;background:white"><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">Both strings&nbsp;</span><span lang="EN-US" style="font-size:12.5pt;font-family:&quot;MathJax_Math-italic&quot;,serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:Helvetica;color:#222222;
mso-font-kerning:0pt">s</span><span lang="EN-US" style="mso-bidi-font-size:10.5pt;
font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:宋体;color:#222222;
mso-font-kerning:0pt">s&nbsp;and&nbsp;</span><span lang="EN-US" style="font-size:
12.5pt;font-family:&quot;MathJax_Math-italic&quot;,serif;mso-fareast-font-family:宋体;
mso-bidi-font-family:Helvetica;color:#222222;mso-font-kerning:0pt">t</span><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;
mso-fareast-font-family:宋体;color:#222222;mso-font-kerning:0pt">&nbsp;are
guaranteed to be different and consist of lowercase English letters only.<o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:18.0pt;
mso-pagination:widow-orphan;background:white"><b><span lang="EN-US" style="font-size:12.0pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">Output<o:p></o:p></span></b></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:16.8pt;
mso-pagination:widow-orphan;background:white"><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">Output "</span><span lang="EN-US" style="font-size:11.5pt;font-family:&quot;Courier New&quot;;mso-fareast-font-family:宋体;
color:#222222;mso-font-kerning:0pt">Yes</span><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">" (without quotes) if the superhero
with name&nbsp;</span><span lang="EN-US" style="font-size:12.5pt;font-family:
&quot;MathJax_Math-italic&quot;,serif;mso-fareast-font-family:宋体;mso-bidi-font-family:
Helvetica;color:#222222;mso-font-kerning:0pt">s</span><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">s&nbsp;can be transformed to the
superhero with name&nbsp;</span><span lang="EN-US" style="font-size:12.5pt;
font-family:&quot;MathJax_Math-italic&quot;,serif;mso-fareast-font-family:宋体;mso-bidi-font-family:
Helvetica;color:#222222;mso-font-kerning:0pt">t</span><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">&nbsp;and "</span><span lang="EN-US" style="font-size:11.5pt;font-family:&quot;Courier New&quot;;mso-fareast-font-family:宋体;
color:#222222;mso-font-kerning:0pt">No</span><span lang="EN-US" style="mso-bidi-font-size:
10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:宋体;
color:#222222;mso-font-kerning:0pt">" (without quotes) otherwise.<o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="margin-top:18.0pt;text-align:left;
line-height:16.8pt;mso-pagination:widow-orphan;background:white"><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;
mso-fareast-font-family:宋体;color:#222222;mso-font-kerning:0pt">You can print
each letter in any case (upper or lower).<o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:18.0pt;
mso-pagination:widow-orphan;background:white"><b><span lang="EN-US" style="font-size:11.0pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">Examples<o:p></o:p></span></b></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:18.0pt;
mso-pagination:widow-orphan;background:white"><b><span lang="EN-US" style="font-size:12.5pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:Helvetica;color:#222222;mso-font-kerning:0pt">input<o:p></o:p></span></b></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:15.0pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:#EFEFEF"><span lang="EN-US" style="font-size:9.5pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#880000;mso-font-kerning:
0pt">a<o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:15.0pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:#EFEFEF"><span lang="EN-US" style="font-size:9.5pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#880000;mso-font-kerning:
0pt">u<o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:18.0pt;
mso-pagination:widow-orphan;background:white"><b><span lang="EN-US" style="font-size:12.5pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:Helvetica;color:#222222;mso-font-kerning:0pt">output<o:p></o:p></span></b></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:15.0pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:#EFEFEF"><span lang="EN-US" style="font-size:9.5pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#880000;mso-font-kerning:
0pt">Yes<o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:18.0pt;
mso-pagination:widow-orphan;background:white"><b><span lang="EN-US" style="font-size:12.5pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:Helvetica;color:#222222;mso-font-kerning:0pt">input<o:p></o:p></span></b></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:15.0pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:#EFEFEF"><span class="SpellE"><span lang="EN-US" style="font-size:9.5pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#880000;mso-font-kerning:0pt">abc</span></span><span lang="EN-US" style="font-size:9.5pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#880000;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:15.0pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:#EFEFEF"><span class="SpellE"><span lang="EN-US" style="font-size:9.5pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#880000;mso-font-kerning:0pt">ukm</span></span><span lang="EN-US" style="font-size:9.5pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#880000;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:18.0pt;
mso-pagination:widow-orphan;background:white"><b><span lang="EN-US" style="font-size:12.5pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:Helvetica;color:#222222;mso-font-kerning:0pt">output<o:p></o:p></span></b></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:15.0pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:#EFEFEF"><span lang="EN-US" style="font-size:9.5pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#880000;mso-font-kerning:
0pt">Yes<o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:18.0pt;
mso-pagination:widow-orphan;background:white"><b><span lang="EN-US" style="font-size:12.5pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:Helvetica;color:#222222;mso-font-kerning:0pt">input<o:p></o:p></span></b></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:15.0pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:#EFEFEF"><span class="SpellE"><span lang="EN-US" style="font-size:9.5pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#880000;mso-font-kerning:0pt">akm</span></span><span lang="EN-US" style="font-size:9.5pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#880000;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:15.0pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:#EFEFEF"><span class="SpellE"><span lang="EN-US" style="font-size:9.5pt;
font-family:Consolas;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#880000;mso-font-kerning:0pt">ua</span></span><span lang="EN-US" style="font-size:9.5pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#880000;mso-font-kerning:0pt"><o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:18.0pt;
mso-pagination:widow-orphan;background:white"><b><span lang="EN-US" style="font-size:12.5pt;font-family:Consolas;mso-fareast-font-family:宋体;
mso-bidi-font-family:Helvetica;color:#222222;mso-font-kerning:0pt">output<o:p></o:p></span></b></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:15.0pt;
mso-pagination:widow-orphan;tab-stops:45.8pt 91.6pt 137.4pt 183.2pt 229.0pt 274.8pt 320.6pt 366.4pt 412.2pt 458.0pt 503.8pt 549.6pt 595.4pt 641.2pt 687.0pt 732.8pt;
background:#EFEFEF"><span lang="EN-US" style="font-size:9.5pt;font-family:Consolas;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#880000;mso-font-kerning:
0pt">No<o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:18.0pt;
mso-pagination:widow-orphan;background:white"><b><span lang="EN-US" style="font-size:12.0pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">Note<o:p></o:p></span></b></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:16.8pt;
mso-pagination:widow-orphan;background:white"><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">In the first sample, since both '</span><span lang="EN-US" style="font-size:11.5pt;font-family:&quot;Courier New&quot;;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">a</span><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">' and '</span><span lang="EN-US" style="font-size:11.5pt;font-family:&quot;Courier New&quot;;mso-fareast-font-family:宋体;
color:#222222;mso-font-kerning:0pt">u</span><span lang="EN-US" style="mso-bidi-font-size:
10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:宋体;
color:#222222;mso-font-kerning:0pt">' are vowels, it is possible to convert
string&nbsp;</span><span lang="EN-US" style="font-size:12.5pt;font-family:&quot;MathJax_Math-italic&quot;,serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:Helvetica;color:#222222;
mso-font-kerning:0pt">s</span><span lang="EN-US" style="mso-bidi-font-size:10.5pt;
font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:宋体;color:#222222;
mso-font-kerning:0pt">s&nbsp;to&nbsp;</span><span class="SpellE"><span lang="EN-US" style="font-size:12.5pt;font-family:&quot;MathJax_Math-italic&quot;,serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:Helvetica;color:#222222;
mso-font-kerning:0pt">t</span><span lang="EN-US" style="mso-bidi-font-size:10.5pt;
font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:宋体;color:#222222;
mso-font-kerning:0pt">t</span></span><span lang="EN-US" style="mso-bidi-font-size:
10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:宋体;
color:#222222;mso-font-kerning:0pt">.<o:p></o:p></span></p>

<p class="MsoNormal" align="left" style="text-align:left;line-height:16.8pt;
mso-pagination:widow-orphan;background:white"><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">In the third sample, '</span><span lang="EN-US" style="font-size:11.5pt;font-family:&quot;Courier New&quot;;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">k</span><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">' is a consonant, whereas '</span><span lang="EN-US" style="font-size:11.5pt;font-family:&quot;Courier New&quot;;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">a</span><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">' is a vowel, so it is not possible to
convert string&nbsp;</span><span lang="EN-US" style="font-size:12.5pt;font-family:
&quot;MathJax_Math-italic&quot;,serif;mso-fareast-font-family:宋体;mso-bidi-font-family:
Helvetica;color:#222222;mso-font-kerning:0pt">s</span><span lang="EN-US" style="mso-bidi-font-size:10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:
宋体;color:#222222;mso-font-kerning:0pt">s&nbsp;to&nbsp;</span><span class="SpellE"><span lang="EN-US" style="font-size:12.5pt;font-family:&quot;MathJax_Math-italic&quot;,serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:Helvetica;color:#222222;
mso-font-kerning:0pt">t</span><span lang="EN-US" style="mso-bidi-font-size:10.5pt;
font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:宋体;color:#222222;
mso-font-kerning:0pt">t</span></span><span lang="EN-US" style="mso-bidi-font-size:
10.5pt;font-family:&quot;Helvetica&quot;,sans-serif;mso-fareast-font-family:宋体;
color:#222222;mso-font-kerning:0pt">.<o:p></o:p></span></p>

<p class="MsoNormal"><span lang="EN-US"><o:p>&nbsp;</o:p></span></p>

</div>

```cpp
#include<bits/stdc++.h>
#define ll long long 
#define vi vector<int>
#define vs vector<string>
#define vvl vector<vector<ll>>
#define vl vector<ll>
#define pll pair<ll,ll>
#define vp vector<pair<int,vector<int>>>
#define umss unordered_map<string,string>
#define mp make_pair
#define pb push_back
#define f first
#define fo(i,a,n) for(int i=a;i<n;i++)
#define sc second
#define mst(a,b) memset(a,b,sizeof(a))
#define test(t)  while(t--)
#define time() cerr << "Time : " << (double)clock() / (double)CLOCKS_PER_SEC << "s\n"
using namespace std;
 //ll const N=1000001;
// ll sievePrimes[N];
// void sieve(){   
//     sievePrimes[0]=sievePrimes[1]=0;sievePrimes[2]=1;
//     for(ll i=3;i<N;i+=2) sievePrimes[i]=1;
//     // for(ll i=2;i<N;i++) {
//     //     if(sievePrimes[i]) cout<<i<<" ";
//     // }
//     ll sqrtN=sqrt(N);
//     for(ll i=3;i<(sqrtN);i+=2){
//         for(ll j=i*i;j<N;j+=2*i){
//             if(sievePrimes[j]) sievePrimes[j]=0;
//         }
//     }
// }
// bool comp(string a,string b){ return a>b;}
//bool compC(char a,char b){return a>b;}
// bool compI(int a,int b) {return a>b;}
int main() {
  string s,t;
  cin>>s>>t;
  ll sizeS=s.size(); ll sizeT=t.size();
  if(sizeS!=sizeT){cout<<"No"<<endl; return 0;}
  fo(i,0,sizeS){
  	if(s[i]=='a'||s[i]=='e'||s[i]=='i'||s[i]=='o'||s[i]=='u'|| s[i]=='A'||s[i]=='E'||s[i]=='I'||s[i]=='O'||s[i]=='U'){
     if(t[i]=='a'||t[i]=='e'||t[i]=='i'||t[i]=='o'||t[i]=='u'|| t[i]=='A'||t[i]=='E'||t[i]=='I'||t[i]=='O'||t[i]=='U'){
     	continue;
     }else{
     	cout<<"No"<<endl; return 0;
     }
  	}else{
      //cout<<"HERE";
  		if(t[i]!='a'&&t[i]!='e'&&t[i]!='i'&&t[i]!='o'&&t[i]!='u'&&t[i]!='A'&&t[i]!='E'&&t[i]!='I'&&t[i]!='O'&&t[i]!='U'){
  			continue;
  		}else{
  			cout<<"No"<<endl; return 0;
  		}
  	}
  }
  cout<<"Yes"<<endl;

  }
  ```
