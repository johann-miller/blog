import { c as create_ssr_component, a as each, b as add_attribute, e as escape } from "../../chunks/ssr.js";
import { p as postsData } from "../../chunks/postsData.js";
/* empty css                  */
const painting = "/_app/immutable/assets/pic4.YrRH11So.jpg";
const css = {
  code: ".header-container.svelte-1pbj024.svelte-1pbj024{position:relative;display:flex;flex-direction:column;height:18rem}.header-image.svelte-1pbj024.svelte-1pbj024{width:100vw;height:100%;object-fit:cover}.image-credit.svelte-1pbj024.svelte-1pbj024{position:absolute;bottom:0;right:0;width:100%;padding-right:1rem;text-align:right;font-size:80%;font-style:italic;color:white;background-color:rgba(0, 0, 0, 0.329)}#main-container.svelte-1pbj024.svelte-1pbj024{max-width:40rem;padding:0 1rem;min-height:calc(\n            100vh - 19rem\n        );display:flex;flex-direction:column;justify-content:space-between;align-items:center;margin:1rem auto 0}nav.svelte-1pbj024.svelte-1pbj024{margin:1rem 0;display:flex}nav.svelte-1pbj024 ul.svelte-1pbj024{list-style:none;margin:0;padding:0;display:flex;flex:1;align-items:center;justify-content:center}nav.svelte-1pbj024 ul li.svelte-1pbj024{padding:0.25rem}nav.svelte-1pbj024 ul li a.svelte-1pbj024{color:inherit;text-decoration:none;padding:0.25rem;margin:0.25rem;border-bottom:1px solid transparent;transition:border-color 0.1s ease}nav.svelte-1pbj024 ul li a.svelte-1pbj024:hover{border-color:#bebebe}.capitalize.svelte-1pbj024.svelte-1pbj024{text-transform:capitalize}footer.svelte-1pbj024.svelte-1pbj024{text-align:center;font-size:80%;padding:0.5rem 0;width:100%;margin-top:8rem}.home-link.svelte-1pbj024.svelte-1pbj024{font-style:italic;font-weight:lighter}.dash.svelte-1pbj024.svelte-1pbj024{color:#bebebe}@media print{.header-container.svelte-1pbj024.svelte-1pbj024{display:none}footer.svelte-1pbj024.svelte-1pbj024{display:none}}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script defer>\\n    import painting from \\"$lib/assets/pic4.jpg\\";\\n    import { renderMath } from \\"$lib/renderMath.js\\";\\n    import topics from \\"../data/postsData.json\\";\\n    import \\"../style/global.css\\";\\n<\/script>\\n\\n<header class=\\"header-container\\">\\n    <nav>\\n        <ul use:renderMath>\\n            <li><a href=\\"/\\" class=\\"home-link\\">Drew's nook</a></li>\\n            <li><span>$\\\\cdot$</span></li>\\n            {#each topics as topic}\\n            <li><a href=\\"/topics#{topic.name}\\" class=\\"capitalize\\">{topic.name}</a></li>\\n            {/each}\\n            <li><a href=\\"/topics\\">All topics</a></li>\\n        </ul>\\n    </nav>\\n\\n    <img class=\\"header-image\\" src={painting} alt=\\"painting\\" />\\n    <span class=\\"image-credit\\">\\"Harvest in Ukraine\\" - Vladimir Orlovsky</span>\\n</header>\\n\\n<div>\\n\\n</div>\\n\\n<div id=\\"main-container\\">\\n    <slot></slot>\\n    <footer use:renderMath>\\n        Comments? Corrections? <span class=\\"dash\\">-</span>\\n        drewsnook@gmail.com <span class=\\"dash\\">-</span> Copyright 2024\\n    </footer>\\n</div>\\n\\n<style>\\n    /* Header Styles */\\n    .header-container {\\n        position: relative;\\n        display: flex;\\n        flex-direction: column;\\n        height: 18rem;\\n    }\\n\\n    .header-image {\\n        width: 100vw;\\n        height: 100%;\\n        object-fit: cover;\\n    }\\n\\n    .image-credit {\\n        position: absolute;\\n        bottom: 0;\\n        right: 0;\\n        width: 100%;\\n        padding-right: 1rem;\\n        text-align: right;\\n        font-size: 80%;\\n        font-style: italic;\\n        color: white;\\n        background-color: rgba(0, 0, 0, 0.329);\\n    }\\n\\n    /* Main Container Styles */\\n    #main-container {\\n        max-width: 40rem;\\n        padding: 0 1rem;\\n        min-height: calc(\\n            100vh - 19rem\\n        ); /* To calculate rem, add height and margin-top from #title-container */\\n        display: flex;\\n        flex-direction: column;\\n        justify-content: space-between;\\n        align-items: center;\\n        margin: 1rem auto 0;\\n    }\\n\\n    /* Navigation Styles */\\n    nav {\\n        margin: 1rem 0;\\n        display: flex;\\n    }\\n\\n    nav ul {\\n        list-style: none;\\n        margin: 0;\\n        padding: 0;\\n        display: flex;\\n        flex: 1;\\n        align-items: center; /* Center vertically */\\n        justify-content: center; /* Center horizontally */\\n    }\\n\\n    nav ul li {\\n        padding: 0.25rem;\\n    }\\n\\n    nav ul li a {\\n        color: inherit;\\n        text-decoration: none;\\n        padding: 0.25rem;\\n        margin: 0.25rem;\\n        border-bottom: 1px solid transparent;\\n        transition: border-color 0.1s ease;\\n    }\\n\\n    nav ul li a:hover {\\n        border-color: #bebebe;\\n    }\\n\\n    .capitalize{\\n        text-transform: capitalize;\\n    }\\n\\n\\n\\n    /* Footer Styles */\\n    footer {\\n        text-align: center;\\n        font-size: 80%;\\n        padding: 0.5rem 0;\\n        width: 100%;\\n        margin-top: 8rem;\\n    }\\n\\n    /* Additional Styles */\\n    .home-link {\\n        font-style: italic;\\n        font-weight: lighter;\\n    }\\n\\n    .dash {\\n        color: #bebebe;\\n    }\\n\\n    @media print {\\n      .header-container {\\n        display: none;\\n      }\\n\\n      footer {\\n        display: none;\\n      }\\n    }\\n</style>\\n"],"names":[],"mappings":"AAqCI,+CAAkB,CACd,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,MAAM,CAAE,KACZ,CAEA,2CAAc,CACV,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KAChB,CAEA,2CAAc,CACV,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,CAAC,CACR,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,KAAK,CACjB,SAAS,CAAE,GAAG,CACd,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,KAAK,CACzC,CAGA,6CAAgB,CACZ,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,CAAC,CAAC,IAAI,CACf,UAAU,CAAE;AACpB,YAAY,KAAK,CAAC,CAAC,CAAC,KAAK;AACzB,SAAS,CACD,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,IAAI,CAAC,IAAI,CAAC,CACtB,CAGA,iCAAI,CACA,MAAM,CAAE,IAAI,CAAC,CAAC,CACd,OAAO,CAAE,IACb,CAEA,kBAAG,CAAC,iBAAG,CACH,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,IAAI,CACb,IAAI,CAAE,CAAC,CACP,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACrB,CAEA,kBAAG,CAAC,EAAE,CAAC,iBAAG,CACN,OAAO,CAAE,OACb,CAEA,kBAAG,CAAC,EAAE,CAAC,EAAE,CAAC,gBAAE,CACR,KAAK,CAAE,OAAO,CACd,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,OAAO,CAChB,MAAM,CAAE,OAAO,CACf,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,CACpC,UAAU,CAAE,YAAY,CAAC,IAAI,CAAC,IAClC,CAEA,kBAAG,CAAC,EAAE,CAAC,EAAE,CAAC,gBAAC,MAAO,CACd,YAAY,CAAE,OAClB,CAEA,yCAAW,CACP,cAAc,CAAE,UACpB,CAKA,oCAAO,CACH,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,GAAG,CACd,OAAO,CAAE,MAAM,CAAC,CAAC,CACjB,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IAChB,CAGA,wCAAW,CACP,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,OACjB,CAEA,mCAAM,CACF,KAAK,CAAE,OACX,CAEA,OAAO,KAAM,CACX,+CAAkB,CAChB,OAAO,CAAE,IACX,CAEA,oCAAO,CACL,OAAO,CAAE,IACX,CACF"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="header-container svelte-1pbj024"><nav class="svelte-1pbj024"><ul class="svelte-1pbj024"><li class="svelte-1pbj024" data-svelte-h="svelte-1pms94e"><a href="/" class="home-link svelte-1pbj024">Drew&#39;s nook</a></li> <li class="svelte-1pbj024" data-svelte-h="svelte-lumyf3"><span>$\\cdot$</span></li> ${each(postsData, (topic) => {
    return `<li class="svelte-1pbj024"><a href="${"/topics#" + escape(topic.name, true)}" class="capitalize svelte-1pbj024">${escape(topic.name)}</a></li>`;
  })} <li class="svelte-1pbj024" data-svelte-h="svelte-1rg6t9z"><a href="/topics" class="svelte-1pbj024">All topics</a></li></ul></nav> <img class="header-image svelte-1pbj024"${add_attribute("src", painting, 0)} alt="painting"> <span class="image-credit svelte-1pbj024" data-svelte-h="svelte-nhmo4t">&quot;Harvest in Ukraine&quot; - Vladimir Orlovsky</span></header> <div data-svelte-h="svelte-12du6ng"></div> <div id="main-container" class="svelte-1pbj024">${slots.default ? slots.default({}) : ``} <footer class="svelte-1pbj024" data-svelte-h="svelte-1l5r2s2">Comments? Corrections? <span class="dash svelte-1pbj024">-</span>
        drewsnook@gmail.com <span class="dash svelte-1pbj024">-</span> Copyright 2024</footer> </div>`;
});
export {
  Layout as default
};
