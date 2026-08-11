import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'quizes',
            component: () => import('../views/Home.vue'),
        },
        {
            path: '/home',
            redirect: { name: 'quizes' },
        },
        {
            path: '/quiz/:id',
            name: 'quiz',
            component: () => import('../views/Quiz.vue'),
        }
    ],
});

export default router;
