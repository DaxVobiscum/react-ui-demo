import { HomePage } from './Home';
import { AboutPage } from './About';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: HomePage,
        props: {
            exact: true
        }
    },
    {
        name: 'About',
        path: '/about',
        component: AboutPage,
        requires: [
            'AboutPage'
        ]
    }
];

export default routes;