import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../pages/Home.vue'),
        },
        {
            path: '/home',
            redirect: { name: 'home' }, // redirect to the home route
        },
        {
            // dynamic route with a parameter for the product ID
            path: '/products/:id',
            name: 'product',
            component: () => import('../pages/Product.vue'),
            children: [
                {
                    path: 'owner',
                    name: 'owner',
                    component: () => import('../pages/Owner.vue'),
                },
            ],
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../pages/About.vue'),
        },
        {
            path: '/:catchall(.*)*', // catch-all route for 404 errors
            name: '404',
            component: () => import('../pages/errors/404.vue'),
        },
    ],
});

export default router;
