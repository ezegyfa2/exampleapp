import './bootstrap';
import '../css/app.css';

import { createApp, h, DefineComponent } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

// Vuetify
import '../styles/main.scss';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify, type ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

let textColor = 'white';
let backgroundColor1 = '#1C2120';
let backgroundColor2 = '#5B8BDF';
let elementColor1 = '#7D7E7D';
let elementColor2 = '#FAAE69';

const mainTheme: ThemeDefinition = {
    colors: {
        surface: backgroundColor1,
    },
}

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'mainTheme',
        themes: {
            mainTheme,
        },
    },
    defaults: {
        global: {
            hideDetails: 'auto',
        },

        VTextField: {
            variant: 'solo',
            rounded: true,
            baseColor: textColor,
            color: textColor,
            bgColor: elementColor1,
        },
        VCheckbox: {
            //baseColor: textColor,
            //color: textColor,
        }
    },
});

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob<DefineComponent>('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(vuetify)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
