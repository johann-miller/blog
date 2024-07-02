<script defer>
    import painting from "$lib/assets/pic4.jpg";
    import { renderMath } from "$lib/renderMath.js";
    import topics from "../data/postsData.json";
    import "../style/global.css";
</script>

<header class="header-container">
    <nav>
        <ul use:renderMath>
            <li><a href="/" class="home-link">Drew's nook</a></li>
            <li><span>$\cdot$</span></li>
            {#each topics as topic}
            <li><a href="/topics#{topic.name}" class="capitalize">{topic.name}</a></li>
            {/each}
            <li><a href="/topics">All topics</a></li>
        </ul>
    </nav>

    <img class="header-image" src={painting} alt="painting" />
    <span class="image-credit">"Harvest in Ukraine" - Vladimir Orlovsky</span>
</header>

<div>

</div>

<div id="main-container">
    <slot></slot>
    <footer use:renderMath>
        Comments? Corrections? <span class="dash">-</span>
        drewsnook@gmail.com <span class="dash">-</span> Copyright 2024
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
