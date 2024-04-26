import{_ as n,D as l,c as o,l as a,a as e,I as i,a4 as t,o as p}from"./chunks/framework.YYPGhuUz.js";const x=JSON.parse('{"title":"Function Call","description":"","frontmatter":{},"headers":[],"relativePath":"features/ai/function-call.md","filePath":"features/ai/function-call.md","lastUpdated":1714060873000}'),h={name:"features/ai/function-call.md"},r={id:"function-call",tabindex:"-1"},c=a("a",{class:"header-anchor",href:"#function-call","aria-label":'Permalink to "Function Call <Badge type="tip" text="^0.4.0-beta.0" /> <Badge type="warning" text="Beta" />"'},"​",-1),u=t('<div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p>Only supports OpenAI.</p></div><p>You can use the function call feature in AI Chat, which is currently in the <code>🌊 Alpha</code> stage.</p><blockquote><p>Due to time constraints, <strong>Azure OpenAI</strong> is not supported for the time being. Contributions are welcome.</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Now we support the following functions:</p><ul><li><code>Serp</code> - Search Engine Results Page (Power by <a href="https://apyhub.com/" target="_blank" rel="noreferrer">ApyHub</a>)</li><li><code>WebSearch</code> - Search for information from the internet</li></ul><p>You can control the started plugins by yourself. This requires you to configure the plugins configuration item in <code>[AI.Functions]</code> in the configuration file. The usage method is detailed in the configuration example.</p><p>You can find the environment variables which are required to use features in the <code>config.example.toml</code> file.</p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2>',9),d=a("code",null,"[AI.Functions].disable",-1),k=a("li",null,[a("code",null,"[AI.Functions].plugins"),e(": A set of function call tools that are available for use.")],-1),g=a("li",null,[a("code",null,"[AI.Functions].Serp"),a("ul",null,[a("li",null,[a("code",null,"apyHub_api_key"),e(": The API Key in apyHub")])])],-1),E=t(`<h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Functions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">disable = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">plugins = [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;serp&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;web_search&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Functions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Serp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">apyHub_api_key = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span></code></pre></div>`,2);function _(f,y,b,m,F,C){const s=l("Badge");return p(),o("div",null,[a("h1",r,[e("Function Call "),i(s,{type:"tip",text:"^0.4.0-beta.0"}),e(),i(s,{type:"warning",text:"Beta"}),e(),c]),u,a("ul",null,[a("li",null,[d,e(": Disable the function call feature. "),i(s,{type:"warning",text:"^0.4.1-beta.0"})]),k,g]),E])}const B=n(h,[["render",_]]);export{x as __pageData,B as default};
