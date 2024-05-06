export { renderers } from '../renderers.mjs';

const page = () => import('./pages/project-1_yb_16kb4.mjs').then(n => n.p);

export { page };
