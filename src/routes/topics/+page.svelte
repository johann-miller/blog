<script>
    import { renderMath } from "$lib/renderMath.js";
    import { onMount } from "svelte";
    import topics from "../../data/topics.json"
    import posts from "../../data/posts.json"
    
    onMount(async () =>{
        console.log(topics)
    })
</script>

<article>
    <h1>Topics</h1>
    <a href="/">Go home</a>

    <ul use:renderMath>
        <li><a href="topics/calculus/post2">Post 1</a></li>
        <li><a href="topics/algebra/post2">Post 2</a></li>
        <li><a href="topics/trigonometry/post3">Post 3</a></li>
    </ul>
</article>
