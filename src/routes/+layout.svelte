<script defer>
    import painting from "$lib/assets/painting.jpg";
    import { renderMath } from "$lib/renderMath.js";
</script>

<div id="header-container">
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/topics">Algebra</a></li>
            <li><a href="/topics">Calculus</a></li>
            <li><a href="/topics">Trigonometry</a></li>
            <li><a href="/topics">Geometry</a></li>
            <li><a href="/topics">All topics</a></li>
        </ul>
    </nav>

    <div id="title-container">
        <h1>Drew's blog of things</h1>
        <img id="header-image" src={painting} alt="painting" />
    </div>
</div>

<div id="main-container">
    <slot></slot>
    <footer>
        Errors? Comments? EMAIL <span class="dash">-</span> Copyright Drew, 2024
    </footer>
</div>

<style>
    #header-container {
        display: flex;
        flex-direction: column;
        height: 15rem;
    }

    #title-container {
        display: flex;
        flex-flow: column;
        justify-content: center;
        position: relative;
        height: 16rem;
        margin-top: 1rem;
    }

    #title-container img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1; /* Ensure the image is behind the content */
    }

    h1 {
        margin: 1rem 0;
        padding: 0.5rem 0;
        text-align: center;
        color: white;
        background-color: #bebebe5d;
    }

    #header-image {
        width: 100vw;
        position: absolute;
        height: 5rem;
        object-fit: cover;
    }

    #main-container {
        min-height: calc(100vh - 16rem); /* To calculate rem, add height and margin-top from #title-container */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: auto;
        margin: 1rem auto 0 1rem;
    }

    .dash {
        color: #bebebe;
    }

    footer {
        text-align: center;
        font-size: 90%;
        padding: 1rem 0;
        width: 100%;
        margin-top: 8rem;
    }

    nav {
        margin-top: 1rem;
        background-color: default;
        display: flex;
    }

    nav ul {
        list-style: none;
        margin: 0.5rem 0 0 0;
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
        color: black;
        text-decoration: none;
        padding: 0.25rem;
        margin: 0.25rem;
        border-bottom: 2px solid transparent;
        transition: border-color 0.3s ease;
    }

    nav ul li a:hover {
        border-color: #bebebe;
    }
</style>
