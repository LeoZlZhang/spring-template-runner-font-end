import Menu from './components/sider_menu/sider_menu.vue'


const LoginPage = resolve => {
    require.ensure(['./components/content/login_page.vue'], () => resolve(require('./components/content/login_page.vue')))
};


const TestCaseCatalog = resolve => {
    require.ensure(['./components/content/test_case_catalog.vue'], () => resolve(require('./components/content/test_case_catalog.vue')))
};

const Header = resolve => {
    require.ensure(['./components/header/header.vue'], () => resolve(require('./components/header/header.vue')))
};

const TestCasePage = resolve => {
    require.ensure(['./components/content/test_case_page.vue'], () => resolve(require('./components/content/test_case_page.vue')))
};


export const routers = () => [
    {
        path: '/', name: 'route_login',
        components: {play_ground: LoginPage}
    },
    {
        path: '/#/todo', name: 'route_home',
        components: {menu: Menu}
    },
    {path: '/todo', redirect: {name:'route_home'}},
    {
        path: '/#', components: {menu: Menu, play_ground: TestCaseCatalog},
        children: [
            {path: 'test_case_catalog', components: {header: Header}, name: 'route_test_case_catalog'}
        ]
    },
    {path: '/test_case_catalog', redirect: {name:'route_test_case_catalog'}},
    {
        path: '/#', components: {menu: Menu, play_ground: TestCasePage},
        children: [
            {path: 'test_case', name: 'route_test_case_edit'}
        ]
    },
    {path: '/test_case', redirect: {name:'route_test_case_edit'}},
    {path: `/*`, redirect: `/`},
];

