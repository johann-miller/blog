// src/routes/topics/[topic]/[slug]/+page.js

export async function load({ params }) {
    const { topic, slug } = params;

    return {
        topic,
        slug
    };
}
