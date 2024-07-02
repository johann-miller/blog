import { c as create_ssr_component, a as each, e as escape } from "../../chunks/ssr.js";
/* empty css                  */
const blogPost = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida justo sed metus lacinia, sit amet eleifend magna vestibulum. Nulla facilisi. Integer in semper nunc. Sed ultricies ante a condimentum auctor. Mauris rhoncus erat a odio feugiat, eget cursus velit tristique. Nam sit amet elit ligula. Integer commodo, est at congue eleifend, justo quam gravida nunc, nec posuere tortor risus a purus. Donec eu lobortis magna. Sed id malesuada nunc. $$0 \\to A \\xrightarrow{f} B \\xrightarrow{g} C \\to 0 $$",
  "Vestibulum vitae tellus a nisi eleifend gravida. Duis sit amet leo justo. Cras vestibulum magna et justo consequat, ut tempus ligula dignissim. Suspendisse potenti. Proin eget neque vel justo efficitur luctus. Morbi non consectetur leo. Nullam quis enim nec justo gravida malesuada. In eu odio nec dolor commodo congue. Sed non odio ut nunc tristique consequat.",
  "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In vel dui ac quam ullamcorper fermentum. Fusce vestibulum lacus ac finibus fermentum. Sed quis tortor vel quam vehicula rhoncus at ut eros. Curabitur ac tincidunt lorem, non vehicula lectus. Integer vel est non felis auctor pharetra. Integer volutpat lacus a enim vehicula, sed fermentum purus eleifend. Nullam sit amet faucibus libero, in mollis nisi. Mauris nec fringilla leo. Nullam scelerisque tristique felis, vel viverra metus. Vestibulum mattis, tortor sed condimentum congue, ipsum felis ultricies quam, in aliquet odio sapien at eros. ",
  "The Ricci curvature tensor \\( R_{ij} \\) is defined as the contraction of the Riemann curvature tensor:\\[R_{ij} = R^k_{\\;ikj} = g^{kl} R_{kilj}\\]where \\( R_{ijkl} \\) is the Riemann curvature tensor and \\( g^{kl} \\) is the inverse of the metric tensor \\( g_{kl} \\). The Einstein field equations in general relativity are given by:\\[R_{ij} - \\frac{1}{2} R g_{ij} + \\Lambda g_{ij} = \\frac{8 \\pi G}{c^4} T_{ij}\\]where \\( R \\) is the Ricci scalar, \\( \\Lambda \\) is the cosmological constant, \\( G \\) is the gravitational constant, \\( c \\) is the speed of light, and \\( T_{ij} \\) is the stress-energy tensor.",
  "Sed a nisi ullamcorper, vestibulum tortor quis, feugiat quam. $$F(x) = \\int_{a}^x f(t)dt$$Cras volutpat purus non mauris ultricies placerat. Vestibulum ac ultricies felis. Vivamus tempus velit a sapien maximus, vel efficitur metus vestibulum. Fusce elementum, arcu nec efficitur vestibulum, dolor sapien interdum arcu, id fermentum lorem risus id leo. Integer facilisis enim ac velit fermentum, non bibendum lectus eleifend. Ut tincidunt lacinia dolor, nec commodo justo tempus vitae. Suspendisse finibus consectetur nulla, eget ultricies risus interdum nec. Morbi dignissim nisl in lectus viverra dignissim. Morbi eleifend magna quis mi malesuada eleifend. Curabitur nec nisi suscipit, placerat magna et, lacinia nulla. Cras efficitur lacus urna, quis ullamcorper est finibus eget."
];
const contentData = {
  blogPost
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article><h1 data-svelte-h="svelte-1ov0njn">Lorem ipsum</h1> ${each(contentData.blogPost, (paragraph) => {
    return `<p>${escape(paragraph)}</p>`;
  })} </article>`;
});
export {
  Page as default
};
