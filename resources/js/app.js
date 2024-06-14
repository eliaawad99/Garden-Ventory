import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import { InertiaProgress } from '@inertiajs/progress'; // Import InertiaProgress

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        // Create Vue app instance
        return createApp({ render: () => h(App, props) })
            .use(plugin) // Use Inertia plugin
            .use(ZiggyVue) // Use ZiggyVue for named routes
            .mount(el); // Mount Vue app to the element
    },
    progress: {
        color: '#4B5563',
    },
});

InertiaProgress.init(); // Initialize InertiaProgress for page loading indicators
