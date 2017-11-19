import { HomePage } from './Home';
import { AboutPage } from './About';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: HomePage,
        config: {
            exact: true
        }
    },
    {
        name: 'About',
        path: '/about',
        component: AboutPage
    }
];

export { routes as Routes };