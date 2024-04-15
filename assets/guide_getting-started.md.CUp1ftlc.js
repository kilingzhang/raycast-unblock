import{_ as s,c as a,o as i,a4 as e}from"./chunks/framework.DCrfWSmk.js";const u=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[],"relativePath":"guide/getting-started.md","filePath":"guide/getting-started.md","lastUpdated":1713108769000}'),t={name:"guide/getting-started.md"},n=e(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p><strong>Raycast Unblock is currently in heavy development</strong>, with frequent code updates, and you need to keep up with the latest developments in this project.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>This project is for educational purposes only.</strong> Please do not use it for commercial purposes.</p></div><h2 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements&quot;">​</a></h2><ul><li>Raycast</li><li>macOS / Linux (Windows is not maintained)</li><li>Surge (or other proxy tools) <em><strong>(optional)</strong></em></li><li>Node.js 18.x (optional) <em><strong>(optional)</strong></em></li></ul><h2 id="installaion" tabindex="-1">Installaion <a class="header-anchor" href="#installaion" aria-label="Permalink to &quot;Installaion&quot;">​</a></h2><h3 id="docker-docker-compose" tabindex="-1">Docker / Docker Compose <a class="header-anchor" href="#docker-docker-compose" aria-label="Permalink to &quot;Docker / Docker Compose&quot;">​</a></h3><p>In general, we recommend deploying your application using <em>Docker or Docker Compose</em>.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-aVJ1k" id="tab--0Jj750" checked="checked"><label for="tab--0Jj750">Docker Compose</label><input type="radio" name="group-aVJ1k" id="tab-QgfwwXc"><label for="tab-QgfwwXc">Docker</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/wibus-wee/raycast-unblock/raw/main/docker-compose.yml</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ⬆ Modify the environment variables in docker-compose.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/wibus-wee/raycast-unblock/raw/main/config.example.toml</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config.toml</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ⬆ Modify the configurations in config.toml.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker-compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/wibus-wee/raycast-unblock/raw/main/config.example.toml</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config.toml</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ⬆ Modify the configurations in config.toml.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> raycast-unblock</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 3000:3000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./config.toml:/app/config.toml</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  wibuswee/raycast-unblock:latest</span></span></code></pre></div></div></div><h3 id="prebuilt-bundle" tabindex="-1">Prebuilt-bundle <a class="header-anchor" href="#prebuilt-bundle" aria-label="Permalink to &quot;Prebuilt-bundle&quot;">​</a></h3><ol><li>Download the latest dist from <a href="https://github.com/wibus-wee/raycast-unblock/actions/workflows/ci.yml" target="_blank" rel="noreferrer">GitHub Actions</a>.</li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The naming format is <code>raycast-unblock-&lt;platform&gt;-&lt;type&gt;</code>:</p><ul><li><code>&lt;platform&gt;</code> field refers to the deployment platform. <ul><li>If you want to deploy Raycast Unblock to macOS, select <code>macOS</code> Platform.</li><li>If deploying to Linux, select <code>Ubuntu</code> Platform.</li></ul></li><li><code>&lt;type&gt;</code> field refers to the type of built package. <ul><li><code>app</code> type is a single-application built with Node 21. It is larger in size, but it does not depend on Node runtime, which means you can use it anywhere. <strong><em>(Recommended 👍)</em></strong></li><li><code>js</code> type includes all dependencies bundled as a js bundle. It is relatively small in size but requires Node 18 or later to run.</li></ul></li></ul></div><ol start="2"><li>Download <a href="https://github.com/wibus-wee/raycast-unblock/raw/main/config.example.toml" target="_blank" rel="noreferrer">config.example.toml</a> as <code>config.toml</code>, then fill in the environment variables.</li><li>Put the <code>config.toml</code> file in the same directory as the executable file.</li><li>Start Raycast Unblock</li></ol><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-mj29M" id="tab-U2p3isj" checked="checked"><label for="tab-U2p3isj">raycast-unblock-platform-app</label><input type="radio" name="group-mj29M" id="tab-SfI1K_Z"><label for="tab-SfI1K_Z">raycast-unblock-platform-js</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./raycast-unblock-app</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Your config.toml file should be in this directory,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or you should set the \`--config\` parameter.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./raycast-unblock-app</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/your/config.toml</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.js</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Your config.toml file should be in this directory,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or you should set the \`--config\` parameter</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.js</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/your/config.toml</span></span></code></pre></div></div></div><p>If you want to run it in the background, you can use <code>pm2</code> or <code>nohup</code>.</p><h2 id="🎉-congratulations" tabindex="-1">🎉 Congratulations <a class="header-anchor" href="#🎉-congratulations" aria-label="Permalink to &quot;🎉 Congratulations&quot;">​</a></h2><p>You have completed the installation of Raycast Unblock. Next, read the <a href="./intercept-raycast.html">Intercept Raycast</a> chapter and let Raycast Unblock take effect.</p>`,17),l=[n];function o(p,r,c,h,d,k){return i(),a("div",null,l)}const m=s(t,[["render",o]]);export{u as __pageData,m as default};
