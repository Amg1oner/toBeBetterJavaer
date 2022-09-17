import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as c,c as l,a as n,b as t,e as p,d as s}from"./app.14d8ac59.js";const i={},u=p(`<p>\u6211\u6B63\u5750\u5728\u6C99\u53D1\u4E0A\u6D25\u6D25\u6709\u5473\u5730\u8BFB\u5218\u6B23\u5927\u4F6C\u7684\u300A\u7801\u519C\u7FFB\u8EAB\u300B\u2014\u2014Java \u5E1D\u56FD\u8FD9\u4E00\u7AE0\uFF0C\u95E8\u94C3\u54CD\u4E86\u3002\u8D77\u8EAB\u6253\u5F00\u95E8\u4E00\u770B\uFF0C\u662F\u4E09\u59B9\uFF0C\u5979\u4ECE\u5B66\u6821\u56DE\u6765\u4E86\u3002</p><p>\u201C\u4E09\u59B9\uFF0C\u4F60\u56DE\u6765\u7684\u771F\u53CA\u65F6\uFF0C\u4ECA\u5929\u6211\u4EEC\u6253\u7B97\u8BB2 Java \u4E2D\u7684\u5B57\u7B26\u4E32\u5462\u3002\u201D\u7B49\u4E09\u59B9\u6362\u978B\u7684\u65F6\u5019\u6211\u8BF4\u3002</p><p>\u201C\u54E6\uFF0C\u53EF\u4EE5\u5440\uFF0C\u54E5\u3002\u542C\u8BF4\u5B57\u7B26\u4E32\u7684\u7EC6\u8282\u7279\u522B\u591A\uFF0C\u4EC0\u4E48\u5B57\u7B26\u4E32\u5E38\u91CF\u6C60\u4E86\u3001\u5B57\u7B26\u4E32\u4E0D\u53EF\u53D8\u6027\u4E86\u3001\u5B57\u7B26\u4E32\u62FC\u63A5\u4E86\u3001\u5B57\u7B26\u4E32\u957F\u5EA6\u9650\u5236\u4E86\u7B49\u7B49\uFF0C\u4F60\u6700\u597D\u6162\u6162\u8BB2\uFF0C\u5426\u5219\u6211\u53EF\u80FD\u4E00\u65F6\u534A\u4F1A\u6D88\u5316\u4E0D\u4E86\u3002\u201D\u4E09\u59B9\u7684\u6001\u5EA6\u663E\u5F97\u5F88\u8BDA\u6073\u3002</p><p>\u201C\u55EF\uFF0C\u6211\u5DF2\u7ECF\u60F3\u597D\u4E86\uFF0C\u4ECA\u5929\u5C31\u53EA\u5E26\u4F60\u5927\u6982\u8BA4\u8BC6\u4E00\u4E0B\u5B57\u7B26\u4E32\uFF0C\u518D\u8BF4\u8BF4\u4E3A\u4EC0\u4E48 String \u662F\u4E0D\u53EF\u53D8\u7684\uFF0C\u5176\u4ED6\u7684\u7EC6\u8282\u54B1\u4EEC\u540E\u9762\u518D\u6162\u6162\u8BB2\uFF0C\u4FDD\u8BC1\u4F60\u80FD\u53CA\u65F6\u6D88\u5316\u3002\u201D</p><p>\u201C\u597D\uFF0C\u90A3\u5C31\u5F00\u59CB\u5427\u3002\u201D\u4E09\u59B9\u5DF2\u7ECF\u51C6\u5907\u597D\u5750\u5728\u4E86\u7535\u8111\u684C\u7684\u8FB9\u4E0A\u3002</p><p>\u6211\u5E94\u4E86\u4E00\u58F0\u540E\u8D70\u5230\u7535\u8111\u684C\u524D\u5750\u4E0B\u6765\uFF0C\u987A\u624B\u6253\u5F00 Intellij IDEA\uFF0C\u5E76\u627E\u5230\u4E86 String \u7684\u6E90\u7801\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">String</span>
    <span class="token keyword">implements</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span><span class="token punctuation">,</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">CharSequence</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Stable</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> value<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">byte</span> coder<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> hash<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u201C\u7B2C\u4E00\uFF0CString \u7C7B\u662F final \u7684\uFF0C\u610F\u5473\u7740\u5B83\u4E0D\u80FD\u88AB\u5B50\u7C7B\u7EE7\u627F\u3002\u201D</p><p>\u201C\u7B2C\u4E8C\uFF0CString \u7C7B\u5B9E\u73B0\u4E86 Serializable \u63A5\u53E3\uFF0C\u610F\u5473\u7740\u5B83\u53EF\u4EE5\u5E8F\u5217\u5316\u3002\u201D</p><p>\u201C\u7B2C\u4E09\uFF0CString \u7C7B\u5B9E\u73B0\u4E86 Comparable \u63A5\u53E3\uFF0C\u610F\u5473\u7740\u6700\u597D\u4E0D\u8981\u7528\u2018==\u2019\u6765\u6BD4\u8F83\u4E24\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u76F8\u7B49\uFF0C\u800C\u5E94\u8BE5\u7528 <code>compareTo()</code> \u65B9\u6CD5\u53BB\u6BD4\u8F83\u3002\u201D</p><p>\u201C\u7B2C\u56DB\uFF0CStringBuffer\u3001StringBuilder \u548C String \u4E00\u6837\uFF0C\u90FD\u5B9E\u73B0\u4E86 CharSequence \u63A5\u53E3\uFF0C\u6240\u4EE5\u5B83\u4EEC\u4EE8\u5C5E\u4E8E\u8FD1\u4EB2\u3002\u7531\u4E8E String \u662F\u4E0D\u53EF\u53D8\u7684\uFF0C\u6240\u4EE5\u9047\u5230\u5B57\u7B26\u4E32\u62FC\u63A5\u7684\u65F6\u5019\u5C31\u53EF\u4EE5\u8003\u8651\u4E00\u4E0B String \u7684\u53E6\u5916\u4E24\u4E2A\u597D\u5144\u5F1F\uFF0CStringBuffer \u548C StringBuilder\uFF0C\u5B83\u4FE9\u662F\u53EF\u53D8\u7684\u3002\u201D</p>`,11),k=s("\u201C\u7B2C\u4E94\uFF0CJava 9 \u4EE5\u524D\uFF0C"),r={href:"https://tobebetterjavaer.com/basic-extra-meal/jdk9-char-byte-string.html",target:"_blank",rel:"noopener noreferrer"},d=s("String \u662F\u7528 char \u578B\u6570\u7EC4\u5B9E\u73B0\u7684\uFF0C\u4E4B\u540E\u6539\u6210\u4E86 byte \u578B\u6570\u7EC4\u5B9E\u73B0\uFF0C\u5E76\u589E\u52A0\u4E86 coder \u6765\u8868\u793A\u7F16\u7801"),v=s("\u3002\u5728 Latin1 \u5B57\u7B26\u4E3A\u4E3B\u7684\u7A0B\u5E8F\u91CC\uFF0C\u53EF\u4EE5\u628A String \u5360\u7528\u7684\u5185\u5B58\u51CF\u5C11\u4E00\u534A\u3002\u5F53\u7136\uFF0C\u5929\u4E0B\u6CA1\u6709\u514D\u8D39\u7684\u5348\u9910\uFF0C\u8FD9\u4E2A\u6539\u8FDB\u5728\u8282\u7701\u5185\u5B58\u7684\u540C\u65F6\u5F15\u5165\u4E86\u7F16\u7801\u68C0\u6D4B\u7684\u5F00\u9500\u3002\u201D"),b=p(`<p>\u201C\u7B2C\u516D\uFF0C\u6BCF\u4E00\u4E2A\u5B57\u7B26\u4E32\u90FD\u4F1A\u6709\u4E00\u4E2A hash \u503C\uFF0C\u8FD9\u4E2A\u54C8\u5E0C\u503C\u5728\u5F88\u5927\u6982\u7387\u662F\u4E0D\u4F1A\u91CD\u590D\u7684\uFF0C\u56E0\u6B64 String \u5F88\u9002\u5408\u6765\u4F5C\u4E3A HashMap \u7684\u952E\u503C\u3002\u201D</p><p>\u201CString \u53EF\u80FD\u662F Java \u4E2D\u4F7F\u7528\u9891\u7387\u6700\u9AD8\u7684\u5F15\u7528\u7C7B\u578B\u4E86\uFF0C\u56E0\u6B64 String \u7C7B\u7684\u8BBE\u8BA1\u8005\u53EF\u4EE5\u8BF4\u662F\u7528\u5FC3\u826F\u82E6\u3002\u201D</p><p>\u6BD4\u5982\u8BF4 String \u7684\u4E0D\u53EF\u53D8\u6027\u3002</p><ul><li>String \u7C7B\u88AB final \u5173\u952E\u5B57\u4FEE\u9970\uFF0C\u6240\u4EE5\u5B83\u4E0D\u4F1A\u6709\u5B50\u7C7B\uFF0C\u8FD9\u5C31\u610F\u5473\u7740\u6CA1\u6709\u5B50\u7C7B\u53EF\u4EE5\u91CD\u5199\u5B83\u7684\u65B9\u6CD5\uFF0C\u6539\u53D8\u5B83\u7684\u884C\u4E3A\u3002</li><li>String \u7C7B\u7684\u6570\u636E\u5B58\u50A8\u5728 <code>byte[]</code> \u6570\u7EC4\u4E2D\uFF0C\u800C\u8FD9\u4E2A\u6570\u7EC4\u4E5F\u88AB final \u5173\u952E\u5B57\u4FEE\u9970\u4E86\uFF0C\u8FD9\u5C31\u8868\u793A String \u5BF9\u8C61\u662F\u6CA1\u6CD5\u88AB\u4FEE\u6539\u7684\uFF0C\u53EA\u8981\u521D\u59CB\u5316\u4E00\u6B21\uFF0C\u503C\u5C31\u786E\u5B9A\u4E86\u3002</li></ul><p>\u201C\u54E5\uFF0C\u4E3A\u4EC0\u4E48\u8981\u8FD9\u6837\u8BBE\u8BA1\u5462\uFF1F\u201D\u4E09\u59B9\u6709\u4E9B\u4E0D\u89E3\u3002</p><p>\u201C\u6211\u5148\u7B80\u5355\u6765\u8BF4\u4E0B\uFF0C\u4E09\u59B9\uFF0C\u80FD\u61C2\u6700\u597D\uFF0C\u4E0D\u80FD\u61C2\u540E\u9762\u518D\u7EC6\u8BF4\u3002\u201D</p><p>\u7B2C\u4E00\uFF0C\u53EF\u4EE5\u4FDD\u8BC1 String \u5BF9\u8C61\u7684\u5B89\u5168\u6027\uFF0C\u907F\u514D\u88AB\u7BE1\u6539\uFF0C\u6BD5\u7ADF\u50CF\u5BC6\u7801\u8FD9\u79CD\u9690\u79C1\u4FE1\u606F\u4E00\u822C\u5C31\u662F\u7528\u5B57\u7B26\u4E32\u5B58\u50A8\u7684\u3002</p><p>\u7B2C\u4E8C\uFF0C\u4FDD\u8BC1\u54C8\u5E0C\u503C\u4E0D\u4F1A\u9891\u7E41\u53D8\u66F4\u3002\u6BD5\u7ADF\u8981\u7ECF\u5E38\u4F5C\u4E3A\u54C8\u5E0C\u8868\u7684\u952E\u503C\uFF0C\u7ECF\u5E38\u53D8\u66F4\u7684\u8BDD\uFF0C\u54C8\u5E0C\u8868\u7684\u6027\u80FD\u5C31\u4F1A\u5F88\u5DEE\u52B2\u3002</p><p>\u7B2C\u4E09\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5B57\u7B26\u4E32\u5E38\u91CF\u6C60\u3002</p><p>\u201C\u7531\u4E8E\u5B57\u7B26\u4E32\u7684\u4E0D\u53EF\u53D8\u6027\uFF0CString \u7C7B\u7684\u4E00\u4E9B\u65B9\u6CD5\u5B9E\u73B0\u6700\u7EC8\u90FD\u8FD4\u56DE\u4E86\u65B0\u7684\u5B57\u7B26\u4E32\u5BF9\u8C61\u3002\u201D\u7B49\u4E09\u59B9\u7A0D\u5FAE\u7F13\u4E86\u4E00\u4F1A\u540E\uFF0C\u6211\u7EE7\u7EED\u8BF4\u5230\u3002</p><p>\u201C\u5C31\u62FF <code>substring()</code> \u65B9\u6CD5\u6765\u8BF4\u3002\u201D</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">substring</span><span class="token punctuation">(</span><span class="token keyword">int</span> beginIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>beginIndex <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">StringIndexOutOfBoundsException</span><span class="token punctuation">(</span>beginIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">int</span> subLen <span class="token operator">=</span> <span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> beginIndex<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>subLen <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">StringIndexOutOfBoundsException</span><span class="token punctuation">(</span>subLen<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>beginIndex <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">isLatin1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token class-name">StringLatin1</span><span class="token punctuation">.</span><span class="token function">newString</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> beginIndex<span class="token punctuation">,</span> subLen<span class="token punctuation">)</span>
            <span class="token operator">:</span> <span class="token class-name">StringUTF16</span><span class="token punctuation">.</span><span class="token function">newString</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> beginIndex<span class="token punctuation">,</span> subLen<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// StringLatin1.newString </span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">newString</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> val<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token keyword">int</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOfRange</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> index<span class="token punctuation">,</span> index <span class="token operator">+</span> len<span class="token punctuation">)</span><span class="token punctuation">,</span>
            LATIN1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// UTF16.newString</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">newString</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> val<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token keyword">int</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span>COMPACT_STRINGS<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buf <span class="token operator">=</span> <span class="token function">compress</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> index<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>buf <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> LATIN1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">int</span> last <span class="token operator">=</span> index <span class="token operator">+</span> len<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOfRange</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> index <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">,</span> last <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> UTF16<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>substring()</code> \u65B9\u6CD5\u7528\u4E8E\u622A\u53D6\u5B57\u7B26\u4E32\uFF0C\u4E0D\u7BA1\u662F Latin1 \u5B57\u7B26\u8FD8\u662F UTF16 \u5B57\u7B26\uFF0C\u6700\u7EC8\u8FD4\u56DE\u7684\u90FD\u662F new \u51FA\u6765\u7684\u65B0\u5B57\u7B26\u4E32\u5BF9\u8C61\u3002</p><p>\u201C\u8FD8\u6709 <code>concat()</code> \u65B9\u6CD5\u3002\u201D</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">concat</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> olen <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>olen <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">coder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> str<span class="token punctuation">.</span><span class="token function">coder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> val <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> oval <span class="token operator">=</span> str<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> val<span class="token punctuation">.</span>length <span class="token operator">+</span> oval<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buf <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>oval<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> buf<span class="token punctuation">,</span> val<span class="token punctuation">.</span>length<span class="token punctuation">,</span> oval<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> coder<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buf <span class="token operator">=</span> <span class="token class-name">StringUTF16</span><span class="token punctuation">.</span><span class="token function">newBytesFor</span><span class="token punctuation">(</span>len <span class="token operator">+</span> olen<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">getBytes</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> UTF16<span class="token punctuation">)</span><span class="token punctuation">;</span>
    str<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> len<span class="token punctuation">,</span> UTF16<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> UTF16<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>concat()</code> \u65B9\u6CD5\u7528\u4E8E\u62FC\u63A5\u5B57\u7B26\u4E32\uFF0C\u4E0D\u7BA1\u7F16\u7801\u662F\u5426\u4E00\u81F4\uFF0C\u6700\u7EC8\u4E5F\u8FD4\u56DE\u7684\u662F\u65B0\u7684\u5B57\u7B26\u4E32\u5BF9\u8C61\u3002</p><p>\u201C<code>replace()</code> \u66FF\u6362\u65B9\u6CD5\u5176\u5B9E\u4E5F\u4E00\u6837\uFF0C\u4E09\u59B9\uFF0C\u4F60\u53EF\u4EE5\u81EA\u5DF1\u4E00\u4F1A\u770B\u4E00\u4E0B\u6E90\u7801\uFF0C\u4E5F\u662F\u8FD4\u56DE\u65B0\u7684\u5B57\u7B26\u4E32\u5BF9\u8C61\u3002\u201D</p><p>\u201C\u8FD9\u5C31\u610F\u5473\u7740\uFF0C\u4E0D\u7BA1\u662F\u622A\u53D6\u3001\u62FC\u63A5\uFF0C\u8FD8\u662F\u66FF\u6362\uFF0C\u90FD\u4E0D\u662F\u5728\u539F\u6709\u7684\u5B57\u7B26\u4E32\u4E0A\u8FDB\u884C\u7684\uFF0C\u800C\u662F\u91CD\u65B0\u751F\u6210\u4E86\u65B0\u7684\u5B57\u7B26\u4E32\u5BF9\u8C61\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u8FD9\u4E9B\u64CD\u4F5C\u6267\u884C\u8FC7\u540E\uFF0C<strong>\u539F\u6765\u7684\u5B57\u7B26\u4E32\u5BF9\u8C61\u5E76\u6CA1\u6709\u53D1\u751F\u6539\u53D8</strong>\u3002\u201D</p><p>\u201C\u4E09\u59B9\uFF0C\u4F60\u8BB0\u4F4F\uFF0CString \u5BF9\u8C61\u4E00\u65E6\u88AB\u521B\u5EFA\u540E\u5C31\u56FA\u5B9A\u4E0D\u53D8\u4E86\uFF0C\u5BF9 String \u5BF9\u8C61\u7684\u4EFB\u4F55\u4FEE\u6539\u90FD\u4E0D\u4F1A\u5F71\u54CD\u5230\u539F\u6765\u7684\u5B57\u7B26\u4E32\u5BF9\u8C61\uFF0C\u90FD\u4F1A\u751F\u6210\u65B0\u7684\u5B57\u7B26\u4E32\u5BF9\u8C61\u3002\u201D</p><p>\u201C\u55EF\u55EF\uFF0C\u8BB0\u4F4F\u4E86\uFF0C\u54E5\u3002\u201D\u4E09\u59B9\u5F88\u4E56\u3002</p><p>\u201C\u90A3\u4ECA\u5929\u5C31\u5148\u8BB2\u5230\u8FD9\u5427\uFF0C\u540E\u9762\u6211\u4EEC\u518D\u5BF9\u6BCF\u4E00\u4E2A\u7EC6\u5206\u9886\u57DF\u6DF1\u5165\u5730\u5C55\u5F00\u4E00\u4E0B\u3002\u4F60\u53EF\u4EE5\u627E\u4E00\u4E9B\u8D44\u6599\u5148\u9884\u4E60\u4E0B\uFF0C\u6211\u51FA\u53BB\u6563\u4F1A\u5FC3\u3002\u3002\u3002\u3002\u3002\u201D</p><hr>`,22),m=s("\u6700\u8FD1\u6574\u7406\u4E86\u4E00\u4EFD\u725B\u903C\u7684\u5B66\u4E60\u8D44\u6599\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8EJava\u57FA\u7840\u90E8\u5206\uFF08JVM\u3001Java\u96C6\u5408\u6846\u67B6\u3001\u591A\u7EBF\u7A0B\uFF09\uFF0C\u8FD8\u56CA\u62EC\u4E86 "),g=n("strong",null,"\u6570\u636E\u5E93\u3001\u8BA1\u7B97\u673A\u7F51\u7EDC\u3001\u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784\u3001\u8BBE\u8BA1\u6A21\u5F0F\u3001\u6846\u67B6\u7C7BSpring\u3001Netty\u3001\u5FAE\u670D\u52A1\uFF08Dubbo\uFF0C\u6D88\u606F\u961F\u5217\uFF09 \u7F51\u5173",-1),y=s(" \u7B49\u7B49\u7B49\u7B49\u2026\u2026\u8BE6\u60C5\u6233\uFF1A"),w={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},f=s("\u53EF\u4EE5\u8BF4\u662F2022\u5E74\u5168\u7F51\u6700\u5168\u7684\u5B66\u4E60\u548C\u627E\u5DE5\u4F5C\u7684PDF\u8D44\u6E90\u4E86"),S=n("p",null,[s("\u5173\u6CE8\u4E8C\u54E5\u7684\u539F\u521B\u516C\u4F17\u53F7 "),n("strong",null,"\u6C89\u9ED8\u738B\u4E8C"),s("\uFF0C\u56DE\u590D"),n("strong",null,"111"),s(" \u5373\u53EF\u514D\u8D39\u9886\u53D6\u3002")],-1),h=n("p",null,[n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:""})],-1);function _(x,j){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[k,n("a",r,[d,t(a)]),v]),b,n("p",null,[m,g,y,n("a",w,[f,t(a)])]),S,h])}var T=e(i,[["render",_],["__file","immutable.html.vue"]]);export{T as default};
