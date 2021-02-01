
const routes = [
    {
        // =============================================================================
        // Backend Page Layouts
        // =============================================================================
        path: '/admin/',
        component: () => import('../layouts/BackendPage'),
        // meta: {
        //     requiresAuth: true
        // },
        children: [
            {
                path: '/admin/',
                component: () => import('../pages/backend/dashboard/Dashboard'),
                name: 'dashboard',
                // meta: {}
            },
            {
                path: '/admin/users',
                component: () => import('../pages/backend/users/UserIndex'),
                name: 'users.index'
            },
            {
                path: '/admin/blog',
                component: () => import('../pages/backend/blogs/BlogIndex'),
                name: 'blog.index'
            },
        ],
    },
    // =============================================================================
    // Frontend Page Layouts
    // =============================================================================
    {
        path: '/',
        component: () => import('../layouts/FrontendPage'),
        // meta: {
        //     requiresAuth: true
        // },
        children: [
            {
                path: '/blog',
                component: () => import('../pages/frontend/blog/BlogIndex'),
                name: 'blog',
                // meta: {}
            },
        ],
    },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    {
        path: '',
        component: () => import('../layouts/FullPage.vue'),
        children: [
            // =============================================================================
            // PAGES
            // =============================================================================
            // {
            //     path: '/login',
            //     name: 'login',
            //     component: () => import('@/views/pages/Login.vue')
            // },
            {
                path: '*',
                component: () => import('../pages/errors/404.vue')
            },
        ]
    },
    // Redirect to 404 page, if no match found
];
export default routes;
