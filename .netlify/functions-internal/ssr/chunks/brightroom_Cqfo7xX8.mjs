export { renderers } from '../renderers.mjs';

const page = () => import('./pages/brightroom_BSed_Ngh.mjs').then(n => n.b);

export { page };
