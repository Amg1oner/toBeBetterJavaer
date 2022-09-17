import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o,c,a as n,b as t,e as i,d as a}from"./app.14d8ac59.js";const l={},u=i(`<p>\u9996\u5148\u6211\u4EEC\u6765\u770B\u770B<strong>IO\u548CNIO\u7684\u533A\u522B</strong>\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-90c84f53-f82d-43dd-87c5-4477e540fa57.jpg" alt=""></p><ul><li><p>\u53EF\u7B80\u5355\u8BA4\u4E3A\uFF1A<strong>IO\u662F\u9762\u5411\u6D41\u7684\u5904\u7406\uFF0CNIO\u662F\u9762\u5411\u5757(\u7F13\u51B2\u533A)\u7684\u5904\u7406</strong></p></li><li><p>\u9762\u5411\u6D41\u7684I/O \u7CFB\u7EDF<strong>\u4E00\u6B21\u4E00\u4E2A\u5B57\u8282\u5730\u5904\u7406\u6570\u636E</strong>\u3002</p></li><li><p>\u4E00\u4E2A\u9762\u5411\u5757(\u7F13\u51B2\u533A)\u7684I/O\u7CFB\u7EDF<strong>\u4EE5\u5757\u7684\u5F62\u5F0F\u5904\u7406\u6570\u636E</strong>\u3002</p></li></ul><p>NIO\u4E3B\u8981\u6709<strong>\u4E09\u4E2A\u6838\u5FC3\u90E8\u5206\u7EC4\u6210</strong>\uFF1A</p><ul><li><strong>buffer\u7F13\u51B2\u533A</strong></li><li><strong>Channel\u7BA1\u9053</strong></li><li><strong>Selector\u9009\u62E9\u5668</strong></li></ul><h2 id="buffer\u7F13\u51B2\u533A\u548Cchannel\u7BA1\u9053" tabindex="-1"><a class="header-anchor" href="#buffer\u7F13\u51B2\u533A\u548Cchannel\u7BA1\u9053" aria-hidden="true">#</a> buffer\u7F13\u51B2\u533A\u548CChannel\u7BA1\u9053</h2><p>\u5728NIO\u4E2D\u5E76\u4E0D\u662F\u4EE5\u6D41\u7684\u65B9\u5F0F\u6765\u5904\u7406\u6570\u636E\u7684\uFF0C\u800C\u662F\u4EE5buffer\u7F13\u51B2\u533A\u548CChannel\u7BA1\u9053<strong>\u914D\u5408\u4F7F\u7528</strong>\u6765\u5904\u7406\u6570\u636E\u3002</p><p>\u7B80\u5355\u7406\u89E3\u4E00\u4E0B\uFF1A</p><ul><li>Channel\u7BA1\u9053\u6BD4\u4F5C\u6210\u94C1\u8DEF\uFF0Cbuffer\u7F13\u51B2\u533A\u6BD4\u4F5C\u6210\u706B\u8F66(\u8FD0\u8F7D\u7740\u8D27\u7269)</li></ul><p>\u800C\u6211\u4EEC\u7684NIO\u5C31\u662F<strong>\u901A\u8FC7Channel\u7BA1\u9053\u8FD0\u8F93\u7740\u5B58\u50A8\u6570\u636E\u7684Buffer\u7F13\u51B2\u533A\u7684\u6765\u5B9E\u73B0\u6570\u636E\u7684\u5904\u7406</strong>\uFF01</p><ul><li><p>\u8981\u65F6\u523B\u8BB0\u4F4F\uFF1AChannel\u4E0D\u4E0E\u6570\u636E\u6253\u4EA4\u9053\uFF0C\u5B83\u53EA\u8D1F\u8D23\u8FD0\u8F93\u6570\u636E\u3002\u4E0E\u6570\u636E\u6253\u4EA4\u9053\u7684\u662FBuffer\u7F13\u51B2\u533A</p></li><li><p><strong>Channel--&gt;\u8FD0\u8F93</strong></p></li><li><p><strong>Buffer--&gt;\u6570\u636E</strong></p></li></ul><p>\u76F8\u5BF9\u4E8E\u4F20\u7EDFIO\u800C\u8A00\uFF0C<strong>\u6D41\u662F\u5355\u5411\u7684</strong>\u3002\u5BF9\u4E8ENIO\u800C\u8A00\uFF0C\u6709\u4E86Channel\u7BA1\u9053\u8FD9\u4E2A\u6982\u5FF5\uFF0C\u6211\u4EEC\u7684<strong>\u8BFB\u5199\u90FD\u662F\u53CC\u5411</strong>\u7684(\u94C1\u8DEF\u4E0A\u7684\u706B\u8F66\u80FD\u4ECE\u5E7F\u5DDE\u53BB\u5317\u4EAC\u3001\u81EA\u7136\u5C31\u80FD\u4ECE\u5317\u4EAC\u8FD4\u8FD8\u5230\u5E7F\u5DDE)\uFF01</p><h3 id="buffer\u7F13\u51B2\u533A\u6838\u5FC3\u8981\u70B9" tabindex="-1"><a class="header-anchor" href="#buffer\u7F13\u51B2\u533A\u6838\u5FC3\u8981\u70B9" aria-hidden="true">#</a> buffer\u7F13\u51B2\u533A\u6838\u5FC3\u8981\u70B9</h3><p>\u6211\u4EEC\u6765\u770B\u770BBuffer\u7F13\u51B2\u533A\u6709\u4EC0\u4E48\u503C\u5F97\u6211\u4EEC\u6CE8\u610F\u7684\u5730\u65B9\u3002</p><p>Buffer\u662F\u7F13\u51B2\u533A\u7684\u62BD\u8C61\u7C7B\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-436aa175-3586-4457-b93c-70b21ff122dc.jpg" alt=""></p><p>\u5176\u4E2DByteBuffer\u662F<strong>\u7528\u5F97\u6700\u591A\u7684\u5B9E\u73B0\u7C7B</strong>(\u5728\u7BA1\u9053\u4E2D\u8BFB\u5199\u5B57\u8282\u6570\u636E)\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-4bf73cdc-b5e2-4866-ac68-cc57602be5e8.jpg" alt=""></p><p>\u62FF\u5230\u4E00\u4E2A\u7F13\u51B2\u533A\u6211\u4EEC\u5F80\u5F80\u4F1A\u505A\u4EC0\u4E48\uFF1F\u5F88\u7B80\u5355\uFF0C\u5C31\u662F<strong>\u8BFB\u53D6\u7F13\u51B2\u533A\u7684\u6570\u636E/\u5199\u6570\u636E\u5230\u7F13\u51B2\u533A\u4E2D</strong>\u3002\u6240\u4EE5\uFF0C\u7F13\u51B2\u533A\u7684\u6838\u5FC3\u65B9\u6CD5\u5C31\u662F:</p><ul><li>put()</li><li>get()</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-7229ef4c-a27d-4f90-97d0-8abbfda810a0.jpg" alt=""></p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-df9f0bdf-3afe-42dc-9e7e-459484d7cb8e.jpg" alt=""></p><p>Buffer\u7C7B\u7EF4\u62A4\u4E864\u4E2A\u6838\u5FC3\u53D8\u91CF\u5C5E\u6027\u6765\u63D0\u4F9B<strong>\u5173\u4E8E\u5176\u6240\u5305\u542B\u7684\u6570\u7EC4\u7684\u4FE1\u606F</strong>\u3002\u5B83\u4EEC\u662F\uFF1A</p><ul><li><p>\u5BB9\u91CFCapacity</p></li><li><p><strong>\u7F13\u51B2\u533A\u80FD\u591F\u5BB9\u7EB3\u7684\u6570\u636E\u5143\u7D20\u7684\u6700\u5927\u6570\u91CF</strong>\u3002\u5BB9\u91CF\u5728\u7F13\u51B2\u533A\u521B\u5EFA\u65F6\u88AB\u8BBE\u5B9A\uFF0C\u5E76\u4E14\u6C38\u8FDC\u4E0D\u80FD\u88AB\u6539\u53D8\u3002(\u4E0D\u80FD\u88AB\u6539\u53D8\u7684\u539F\u56E0\u4E5F\u5F88\u7B80\u5355\uFF0C\u5E95\u5C42\u662F\u6570\u7EC4\u561B)</p></li><li><p>\u4E0A\u754CLimit</p></li><li><p><strong>\u7F13\u51B2\u533A\u91CC\u7684\u6570\u636E\u7684\u603B\u6570</strong>\uFF0C\u4EE3\u8868\u4E86\u5F53\u524D\u7F13\u51B2\u533A\u4E2D\u4E00\u5171\u6709\u591A\u5C11\u6570\u636E\u3002</p></li><li><p>\u4F4D\u7F6EPosition</p></li><li><p><strong>\u4E0B\u4E00\u4E2A\u8981\u88AB\u8BFB\u6216\u5199\u7684\u5143\u7D20\u7684\u4F4D\u7F6E</strong>\u3002Position\u4F1A\u81EA\u52A8\u7531\u76F8\u5E94\u7684 <code>get( )</code>\u548C <code>put( )</code>\u51FD\u6570\u66F4\u65B0\u3002</p></li><li><p>\u6807\u8BB0Mark</p></li><li><p>\u4E00\u4E2A\u5907\u5FD8\u4F4D\u7F6E\u3002<strong>\u7528\u4E8E\u8BB0\u5F55\u4E0A\u4E00\u6B21\u8BFB\u5199\u7684\u4F4D\u7F6E</strong>\u3002</p></li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-85991ca3-99bd-4e56-a84e-e58af4d8aac9.jpg" alt=""></p><h3 id="buffer\u4EE3\u7801\u6F14\u793A" tabindex="-1"><a class="header-anchor" href="#buffer\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a> buffer\u4EE3\u7801\u6F14\u793A</h3><p>\u9996\u5148\u5C55\u793A\u4E00\u4E0B<strong>\u662F\u5982\u4F55\u521B\u5EFA\u7F13\u51B2\u533A\u7684\uFF0C\u6838\u5FC3\u53D8\u91CF\u7684\u503C\u662F\u600E\u4E48\u53D8\u5316\u7684</strong>\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u7F13\u51B2\u533A         </span>
        <span class="token class-name">ByteBuffer</span> byteBuffer <span class="token operator">=</span> <span class="token class-name">ByteBuffer</span><span class="token punctuation">.</span><span class="token function">allocate</span><span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u770B\u4E00\u4E0B\u521D\u59CB\u65F64\u4E2A\u6838\u5FC3\u53D8\u91CF\u7684\u503C         </span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u521D\u59CB\u65F6--&gt;limit---&gt;&quot;</span><span class="token operator">+</span>byteBuffer<span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u521D\u59CB\u65F6--&gt;position---&gt;&quot;</span><span class="token operator">+</span>byteBuffer<span class="token punctuation">.</span><span class="token function">position</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u521D\u59CB\u65F6--&gt;capacity---&gt;&quot;</span><span class="token operator">+</span>byteBuffer<span class="token punctuation">.</span><span class="token function">capacity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u521D\u59CB\u65F6--&gt;mark---&gt;&quot;</span> <span class="token operator">+</span> byteBuffer<span class="token punctuation">.</span><span class="token function">mark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u6DFB\u52A0\u4E00\u4E9B\u6570\u636E\u5230\u7F13\u51B2\u533A\u4E2D         </span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;\u6C89\u9ED8\u738B\u4E8C&quot;</span><span class="token punctuation">;</span>
        byteBuffer<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u770B\u4E00\u4E0B\u521D\u59CB\u65F64\u4E2A\u6838\u5FC3\u53D8\u91CF\u7684\u503C         </span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;put\u5B8C\u4E4B\u540E--&gt;limit---&gt;&quot;</span><span class="token operator">+</span>byteBuffer<span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;put\u5B8C\u4E4B\u540E--&gt;position---&gt;&quot;</span><span class="token operator">+</span>byteBuffer<span class="token punctuation">.</span><span class="token function">position</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;put\u5B8C\u4E4B\u540E--&gt;capacity---&gt;&quot;</span><span class="token operator">+</span>byteBuffer<span class="token punctuation">.</span><span class="token function">capacity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;put\u5B8C\u4E4B\u540E--&gt;mark---&gt;&quot;</span> <span class="token operator">+</span> byteBuffer<span class="token punctuation">.</span><span class="token function">mark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-cbf8b617-f71c-47f7-bc20-72d46306349f.jpg" alt=""></p><p>\u73B0\u5728<strong>\u6211\u60F3\u8981\u4ECE\u7F13\u5B58\u533A\u62FF\u6570\u636E</strong>\uFF0C\u600E\u4E48\u62FF\u5440\uFF1F\uFF1FNIO\u7ED9\u4E86\u6211\u4EEC\u4E00\u4E2A<code>flip()</code>\u65B9\u6CD5\u3002\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5<strong>\u6539\u52A8position\u548Climit\u7684\u4F4D\u7F6E</strong>\uFF01</p><p>\u8FD8\u662F\u4E0A\u9762\u7684\u4EE3\u7801\uFF0C\u6211\u4EEC<code>flip()</code>\u4E00\u4E0B\u540E\uFF0C\u518D\u770B\u770B4\u4E2A\u6838\u5FC3\u5C5E\u6027\u7684\u503C\u4F1A\u53D1\u751F\u4EC0\u4E48\u53D8\u5316\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-571a843f-1334-4fcb-bbae-90dbbe31ac8c.jpg" alt=""></p><p>\u5F88\u660E\u663E\u7684\u662F\uFF1A</p><ul><li><strong>limit\u53D8\u6210\u4E86position\u7684\u4F4D\u7F6E\u4E86</strong></li><li><strong>\u800Cposition\u53D8\u6210\u4E860</strong></li></ul><p>\u770B\u5230\u8FD9\u91CC\u7684\u540C\u5B66\u53EF\u80FD\u5C31\u4F1A\u60F3\u5230\u4E86\uFF1A\u5F53\u8C03\u7528\u5B8C<code>filp()</code>\u65F6\uFF1A<strong>limit\u662F\u9650\u5236\u8BFB\u5230\u54EA\u91CC\uFF0C\u800Cposition\u662F\u4ECE\u54EA\u91CC\u8BFB</strong></p><p>\u4E00\u822C\u6211\u4EEC\u79F0<code>filp()</code>\u4E3A**\u201C\u5207\u6362\u6210\u8BFB\u6A21\u5F0F\u201D**</p><ul><li>\u6BCF\u5F53\u8981\u4ECE\u7F13\u5B58\u533A\u7684\u65F6\u5019\u8BFB\u53D6\u6570\u636E\u65F6\uFF0C\u5C31\u8C03\u7528<code>filp()</code><strong>\u201C\u5207\u6362\u6210\u8BFB\u6A21\u5F0F\u201D</strong>\u3002</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-b7d1a7d4-f2a7-4635-b5a8-9d10733df5f3.jpg" alt=""></p><p>\u5207\u6362\u6210\u8BFB\u6A21\u5F0F\u4E4B\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u8BFB\u53D6\u7F13\u51B2\u533A\u7684\u6570\u636E\u4E86\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u521B\u5EFA\u4E00\u4E2Alimit()\u5927\u5C0F\u7684\u5B57\u8282\u6570\u7EC4(\u56E0\u4E3A\u5C31\u53EA\u6709limit\u8FD9\u4E48\u591A\u4E2A\u6570\u636E\u53EF\u8BFB)  </span>
<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span>byteBuffer<span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// \u5C06\u8BFB\u53D6\u7684\u6570\u636E\u88C5\u8FDB\u6211\u4EEC\u7684\u5B57\u8282\u6570\u7EC4\u4E2D         </span>
byteBuffer<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u8F93\u51FA\u6570\u636E         </span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>bytes<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> bytes<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-40d60cff-e87b-4180-a350-7dc5a5207156.jpg" alt=""></p><p>\u968F\u540E\u8F93\u51FA\u4E00\u4E0B\u6838\u5FC3\u53D8\u91CF\u7684\u503C\u770B\u770B\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-c0fc49ea-bc74-43e8-8f16-d26b93e731bf.jpg" alt=""></p><p><strong>\u8BFB\u5B8C\u6211\u4EEC\u8FD8\u60F3\u5199\u6570\u636E\u5230\u7F13\u51B2\u533A</strong>\uFF0C\u90A3\u5C31\u4F7F\u7528<code>clear()</code>\u51FD\u6570\uFF0C\u8FD9\u4E2A\u51FD\u6570\u4F1A\u201C\u6E05\u7A7A\u201D\u7F13\u51B2\u533A\uFF1A</p><ul><li>\u6570\u636E\u6CA1\u6709\u771F\u6B63\u88AB\u6E05\u7A7A\uFF0C\u53EA\u662F\u88AB<strong>\u9057\u5FD8</strong>\u6389\u4E86</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-6567241c-8ca6-492d-a4d1-45e6b275e75e.jpg" alt=""></p><h3 id="filechannel\u901A\u9053\u6838\u5FC3\u8981\u70B9" tabindex="-1"><a class="header-anchor" href="#filechannel\u901A\u9053\u6838\u5FC3\u8981\u70B9" aria-hidden="true">#</a> FileChannel\u901A\u9053\u6838\u5FC3\u8981\u70B9</h3><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-275c9588-216a-416f-934e-f3fbe54fda43.jpg" alt=""></p><p>Channel\u901A\u9053<strong>\u53EA\u8D1F\u8D23\u4F20\u8F93\u6570\u636E\u3001\u4E0D\u76F4\u63A5\u64CD\u4F5C\u6570\u636E\u7684</strong>\u3002\u64CD\u4F5C\u6570\u636E\u90FD\u662F\u901A\u8FC7Buffer\u7F13\u51B2\u533A\u6765\u8FDB\u884C\u64CD\u4F5C\uFF01</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// 1. \u901A\u8FC7\u672C\u5730IO\u7684\u65B9\u5F0F\u6765\u83B7\u53D6\u901A\u9053         </span>
<span class="token class-name">FileInputStream</span> fileInputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;F:\\\\3yBlog\\\\JavaEE\u5E38\u7528\u6846\u67B6\\\\Elasticsearch\u5C31\u662F\u8FD9\u4E48\u7B80\u5355.md&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5F97\u5230\u6587\u4EF6\u7684\u8F93\u5165\u901A\u9053         </span>
<span class="token class-name">FileChannel</span> inchannel <span class="token operator">=</span> fileInputStream<span class="token punctuation">.</span><span class="token function">getChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. jdk1.7\u540E\u901A\u8FC7\u9759\u6001\u65B9\u6CD5.open()\u83B7\u53D6\u901A\u9053         </span>
<span class="token class-name">FileChannel</span><span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token class-name">Paths</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;F:\\\\3yBlog\\\\JavaEE\u5E38\u7528\u6846\u67B6\\\\Elasticsearch\u5C31\u662F\u8FD9\u4E48\u7B80\u53552.md&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">StandardOpenOption</span><span class="token punctuation">.</span>WRITE<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528<strong>FileChannel\u914D\u5408\u7F13\u51B2\u533A</strong>\u5B9E\u73B0\u6587\u4EF6\u590D\u5236\u7684\u529F\u80FD\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-741d14cb-4ea6-43cb-aacc-4fa3297cedba.jpg" alt=""></p><p>\u4F7F\u7528<strong>\u5185\u5B58\u6620\u5C04\u6587\u4EF6</strong>\u7684\u65B9\u5F0F\u5B9E\u73B0<strong>\u6587\u4EF6\u590D\u5236</strong>\u7684\u529F\u80FD(\u76F4\u63A5\u64CD\u4F5C\u7F13\u51B2\u533A)\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-c8020177-39b4-405b-abc0-c908ab7cf73d.jpg" alt=""></p><p>\u901A\u9053\u4E4B\u95F4\u901A\u8FC7<code>transfer()</code>\u5B9E\u73B0\u6570\u636E\u7684\u4F20\u8F93(\u76F4\u63A5\u64CD\u4F5C\u7F13\u51B2\u533A)\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-2ce868f7-691e-419e-a443-e25131b2785a.jpg" alt=""></p><h3 id="\u76F4\u63A5\u4E0E\u975E\u76F4\u63A5\u7F13\u51B2\u533A" tabindex="-1"><a class="header-anchor" href="#\u76F4\u63A5\u4E0E\u975E\u76F4\u63A5\u7F13\u51B2\u533A" aria-hidden="true">#</a> \u76F4\u63A5\u4E0E\u975E\u76F4\u63A5\u7F13\u51B2\u533A</h3><ul><li>\u975E\u76F4\u63A5\u7F13\u51B2\u533A\u662F<strong>\u9700\u8981</strong>\u7ECF\u8FC7\u4E00\u4E2A\uFF1Acopy\u7684\u9636\u6BB5\u7684(\u4ECE\u5185\u6838\u7A7A\u95F4copy\u5230\u7528\u6237\u7A7A\u95F4)</li><li>\u76F4\u63A5\u7F13\u51B2\u533A<strong>\u4E0D\u9700\u8981</strong>\u7ECF\u8FC7copy\u9636\u6BB5\uFF0C\u4E5F\u53EF\u4EE5\u7406\u89E3\u6210---&gt;<strong>\u5185\u5B58\u6620\u5C04\u6587\u4EF6</strong>\uFF0C(\u4E0A\u9762\u7684\u56FE\u7247\u4E5F\u6709\u8FC7\u4F8B\u5B50)\u3002</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-c51af71c-759c-40de-9d92-92fffa2d075d.jpg" alt=""></p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-c6181e11-8960-46f3-a4b5-8233d013499c.jpg" alt=""></p><p>\u4F7F\u7528\u76F4\u63A5\u7F13\u51B2\u533A\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A</p><ul><li>\u7F13\u51B2\u533A\u521B\u5EFA\u7684\u65F6\u5019\u5206\u914D\u7684\u662F\u76F4\u63A5\u7F13\u51B2\u533A</li><li>\u5728FileChannel\u4E0A\u8C03\u7528<code>map()</code>\u65B9\u6CD5\uFF0C\u5C06\u6587\u4EF6\u76F4\u63A5\u6620\u5C04\u5230\u5185\u5B58\u4E2D\u521B\u5EFA</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-16943811-2190-4fc9-82f9-df34c06c22d2.jpg" alt=""></p><h3 id="scatter\u548Cgather\u3001\u5B57\u7B26\u96C6" tabindex="-1"><a class="header-anchor" href="#scatter\u548Cgather\u3001\u5B57\u7B26\u96C6" aria-hidden="true">#</a> scatter\u548Cgather\u3001\u5B57\u7B26\u96C6</h3><p>\u8FD9\u4E2A\u77E5\u8BC6\u70B9\u6211\u611F\u89C9\u7528\u5F97\u633A\u5C11\u7684\uFF0C\u4E0D\u8FC7\u5F88\u591A\u6559\u7A0B\u90FD\u6709\u8BF4\u8FD9\u4E2A\u77E5\u8BC6\u70B9\uFF0C\u6211\u4E5F\u62FF\u8FC7\u6765\u8BF4\u8BF4\u5427\uFF1A</p><ul><li>\u5206\u6563\u8BFB\u53D6(scatter)\uFF1A\u5C06\u4E00\u4E2A\u901A\u9053\u4E2D\u7684\u6570\u636E\u5206\u6563\u8BFB\u53D6\u5230\u591A\u4E2A\u7F13\u51B2\u533A\u4E2D</li><li>\u805A\u96C6\u5199\u5165(gather)\uFF1A\u5C06\u591A\u4E2A\u7F13\u51B2\u533A\u4E2D\u7684\u6570\u636E\u96C6\u4E2D\u5199\u5165\u5230\u4E00\u4E2A\u901A\u9053\u4E2D</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-d2b8a337-3c1b-4bce-ae8d-ed107a3676a2.jpg" alt=""></p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-e0916f2c-2ce9-4be6-b071-754301a09642.jpg" alt=""></p><p>\u5206\u6563\u8BFB\u53D6</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-886e1838-3404-4bfb-84c9-36cffa19aa19.jpg" alt=""></p><p>\u805A\u96C6\u5199\u5165</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-aba6d233-f294-4d1f-b389-dd174e76d1b0.jpg" alt=""></p><p>\u5B57\u7B26\u96C6(\u53EA\u8981\u7F16\u7801\u683C\u5F0F\u548C\u89E3\u7801\u683C\u5F0F\u4E00\u81F4\uFF0C\u5C31\u6CA1\u95EE\u9898\u4E86)</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/rumen-dba55dfc-48df-4111-884d-d67227b7723a.jpg" alt=""></p>`,75),r=a("\u53C2\u8003\u94FE\u63A5\uFF1A"),d={href:"https://www.zhihu.com/question/29005375/answer/667616386",target:"_blank",rel:"noopener noreferrer"},m=a("https://www.zhihu.com/question/29005375/answer/667616386"),b=a("\uFF0C\u6574\u7406\uFF1A\u6C89\u9ED8\u738B\u4E8C"),k=n("hr",null,null,-1),g=a("\u6700\u8FD1\u6574\u7406\u4E86\u4E00\u4EFD\u725B\u903C\u7684\u5B66\u4E60\u8D44\u6599\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8EJava\u57FA\u7840\u90E8\u5206\uFF08JVM\u3001Java\u96C6\u5408\u6846\u67B6\u3001\u591A\u7EBF\u7A0B\uFF09\uFF0C\u8FD8\u56CA\u62EC\u4E86 "),f=n("strong",null,"\u6570\u636E\u5E93\u3001\u8BA1\u7B97\u673A\u7F51\u7EDC\u3001\u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784\u3001\u8BBE\u8BA1\u6A21\u5F0F\u3001\u6846\u67B6\u7C7BSpring\u3001Netty\u3001\u5FAE\u670D\u52A1\uFF08Dubbo\uFF0C\u6D88\u606F\u961F\u5217\uFF09 \u7F51\u5173",-1),v=a(" \u7B49\u7B49\u7B49\u7B49\u2026\u2026\u8BE6\u60C5\u6233\uFF1A"),h={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},j=a("\u53EF\u4EE5\u8BF4\u662F2022\u5E74\u5168\u7F51\u6700\u5168\u7684\u5B66\u4E60\u548C\u627E\u5DE5\u4F5C\u7684PDF\u8D44\u6E90\u4E86"),y=n("p",null,[a("\u5173\u6CE8\u4E8C\u54E5\u7684\u539F\u521B\u516C\u4F17\u53F7 "),n("strong",null,"\u6C89\u9ED8\u738B\u4E8C"),a("\uFF0C\u56DE\u590D"),n("strong",null,"111"),a(" \u5373\u53EF\u514D\u8D39\u9886\u53D6\u3002")],-1),_=n("p",null,[n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:""})],-1);function B(q,S){const s=p("ExternalLinkIcon");return o(),c("div",null,[u,n("blockquote",null,[n("p",null,[r,n("a",d,[m,t(s)]),b])]),k,n("p",null,[g,f,v,n("a",h,[j,t(s)])]),y,_])}var C=e(l,[["render",B],["__file","rumen.html.vue"]]);export{C as default};
