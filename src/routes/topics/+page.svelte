<script>
    import { renderMath } from "$lib/renderMath.js";
    import { onMount } from "svelte";
    import topics from "../../data/topics.json";

    onMount(async () => {});
</script>

<h1>Topics</h1>

<ul use:renderMath class="topics">
    <li>
        {#each topics as topic}
            <h2 id="{topic.name}">{topic.name}</h2>
            <ol>
                {#each topic.posts as post}
                    <li><a href="/topics/{topic.name}/{post.filename}" class="post-links">{post.title}</a></li>
                {/each}
            </ol>
        {/each}
    </li>
</ul>

<style>
    h1 {
        text-align: center;
    }
    .topics {
        list-style: none;
        padding: 0;
        width: 100%;
    }
    .topics li h2::first-letter {
        text-transform: uppercase;
    }
    .post-links {
        text-decoration: none;
    }
</style>
