<script defer>
    import { base } from '$app/paths'
    import painting from "$lib/assets/pic3.jpg";
    import { renderMath } from "$lib/renderMath.js";
    import topics from "../data/postsData.json";
    import "../style/global.css";
</script>

<header class="header-container">
    <nav>
        <ul>
            <li><a href="/blog" class="home-link">Drew's nook</a></li>
            <li class="dash">-</li>
            {#each topics as topic}
            <li><a href="{base}/topics#{topic.name}" class="capitalize">{topic.name}</a></li>
            {/each}
            <li><a href="/blog/topics">All topics</a></li>
        </ul>
    </nav>

    <img class="header-image" src={painting} alt="painting" />
    <span class="image-credit">"Harvest in Ukraine" - Vladimir Orlovsky</span>
</header>

<div>

</div>

<div id="main-container">
    <slot></slot>
    <footer>
        Comments? Corrections? Sorry I don't have an email for this yet.
    </footer>
</div>

<style>
    /* Header Styles */
    .header-container {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 18rem;
    }

    .header-image {
        width: 100vw;
        height: 100%;
        object-fit: cover;
    }

    .image-credit {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        padding-right: 1rem;
        text-align: right;
        font-size: 80%;
        font-style: italic;
        color: white;
        background-color: rgba(0, 0, 0, 0.329);
    }

    /* Main Container Styles */
    #main-container {
        max-width: 40rem;
        padding: 0 1rem;
        min-height: calc(
            100vh - 19rem
        ); /* To calculate rem, add height and margin-top from #title-container */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 1rem auto 0;
    }

    /* Navigation Styles */
    nav {
        margin: 1rem 0;
        display: flex;
    }

    nav ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex: 1;
        align-items: center; /* Center vertically */
        justify-content: center; /* Center horizontally */
    }

    nav ul li {
        padding: 0.25rem;
    }

    nav ul li a {
        color: inherit;
        text-decoration: none;
        padding: 0.25rem;
        margin: 0.25rem;
        border-bottom: 1px solid transparent;
        transition: border-color 0.1s ease;
    }

    nav ul li a:hover {
        border-color: #bebebe;
    }

    .capitalize{
        text-transform: capitalize;
    }



    /* Footer Styles */
    footer {
        text-align: center;
        font-size: 80%;
        padding: 0.5rem 0;
        width: 100%;
        margin-top: 8rem;
    }

    /* Additional Styles */
    .home-link {
        font-style: italic;
        font-weight: lighter;
    }

    .dash {
        color: #bebebe;
    }

    @media print {
      .header-container {
        display: none;
      }

      footer {
        display: none;
      }
    }
</style>
