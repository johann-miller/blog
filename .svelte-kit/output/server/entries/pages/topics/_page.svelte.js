import { c as create_ssr_component, a as each, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { p as postsData } from "../../../chunks/postsData.js";
const css = {
  code: "h1.svelte-1dofrqh.svelte-1dofrqh{text-align:center}.topics.svelte-1dofrqh.svelte-1dofrqh{list-style:none;padding:0;width:100%}.topics.svelte-1dofrqh li h2.svelte-1dofrqh::first-letter{text-transform:uppercase}.post-links.svelte-1dofrqh.svelte-1dofrqh{text-decoration:none}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import { renderMath } from \\"$lib/renderMath.js\\";\\n    import { onMount } from \\"svelte\\";\\n    import topics from \\"../../data/postsData.json\\";\\n\\n    onMount(async () => {});\\n<\/script>\\n\\n<h1>Topics</h1>\\n\\n<ul use:renderMath class=\\"topics\\">\\n    <li>\\n        {#each topics as topic}\\n            <h2 id=\\"{topic.name}\\">{topic.name}</h2>\\n            <ol>\\n                {#each topic.posts as post}\\n                    <li><a href=\\"/topics/{topic.name}/{post.filename}\\" class=\\"post-links\\">{post.title}</a></li>\\n                {/each}\\n            </ol>\\n        {/each}\\n    </li>\\n</ul>\\n\\n<style>\\n    h1 {\\n        text-align: center;\\n    }\\n    .topics {\\n        list-style: none;\\n        padding: 0;\\n        width: 100%;\\n    }\\n    .topics li h2::first-letter {\\n        text-transform: uppercase;\\n    }\\n    .post-links {\\n        text-decoration: none;\\n    }\\n</style>\\n"],"names":[],"mappings":"AAwBI,gCAAG,CACC,UAAU,CAAE,MAChB,CACA,qCAAQ,CACJ,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,CAAC,CACV,KAAK,CAAE,IACX,CACA,sBAAO,CAAC,EAAE,CAAC,iBAAE,cAAe,CACxB,cAAc,CAAE,SACpB,CACA,yCAAY,CACR,eAAe,CAAE,IACrB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1 class="svelte-1dofrqh" data-svelte-h="svelte-1p02fsk">Topics</h1> <ul class="topics svelte-1dofrqh"><li>${each(postsData, (topic) => {
    return `<h2${add_attribute("id", topic.name, 0)} class="svelte-1dofrqh">${escape(topic.name)}</h2> <ol>${each(topic.posts, (post) => {
      return `<li><a href="${"/topics/" + escape(topic.name, true) + "/" + escape(post.filename, true)}" class="post-links svelte-1dofrqh">${escape(post.title)}</a></li>`;
    })} </ol>`;
  })}</li> </ul>`;
});
export {
  Page as default
};
