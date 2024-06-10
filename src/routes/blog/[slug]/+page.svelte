<script>
  export let data;
</script>

<h1>{data.slug}</h1>

{#if data.markdownContent}
  <article>{@html data.markdownContent}</article>
{:else}
  <p>Post not found.</p>
{/if}

