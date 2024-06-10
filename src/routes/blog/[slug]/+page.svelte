<script>
  import { onMount } from "svelte";
  export let data;
  export let markdownContent = "";

  onMount(async () => {
    try {
      const response = await fetch(`/posts/${data.slug}.md`);
      if (response.ok) {
        markdownContent = await response.text();
        console.log("Fetched markdown content");
      } else {
        console.error("Failed to fetch Markdown content");
      }
    } catch (error) {
      console.error("Error fetching Markdown content:", error);
    }
  });
</script>

<h1>{data.slug}</h1>

<article on:change={markdownContent}>
  {@html markdownContent}
</article>
