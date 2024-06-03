<script defer>
    import painting from "$lib/assets/painting.jpg";
    import { renderMath } from "$lib/renderMath.js";
</script>

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

<h1>Drew's blog of things</h1>
<img id="header-image" src={painting} alt="painting" />

<div id="main-container">
    <slot></slot>
</div>

<footer>Errors? Comments? EMAIL <span class="dash">-</span> Copyright Drew, 2024</footer>

<style>
    h1 {
        text-align: center;
        border-left: 3px solid #bebebe;
    }

    #header-image {
        width: 100vw;
        max-height: 12rem;
        object-fit: cover;
    }

    #main-container {
        width: auto;
        margin: 0 auto 10rem auto;
    }

    .dash {
        color: #bebebe;
    }

    footer {
        text-align: center;
        font-size: 0.8rem;
        padding: 0;
        width: 100%;
        position: sticky;
        height: 3rem;
        top: calc(100vh - 3rem);
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
