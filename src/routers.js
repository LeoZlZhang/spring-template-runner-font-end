import Menu from './components/sider_menu/sider_menu.vue'

const MainPage = resolve => {
    require.ensure(['./components/content/MainPage.vue'], () => resolve(require('./components/content/MainPage.vue')))
};

const Header = resolve => {
    require.ensure(['./components/header/header.vue'], () => resolve(require('./components/header/header.vue')))
};

const TestCasePage = resolve => {
    require.ensure(['./components/content/TestCasePage.vue'], () => resolve(require('./components/content/TestCasePage.vue')))
};


export const routers = () => [

    {
        path: '/', name: 'route_home',
        components: {menu: Menu}
    },
    {
        path: '/#', components: {menu: Menu, play_ground: MainPage},
        children: [
            {path: 'page1', components: {header: Header}, name: 'route_test_case_catalog'}
        ]

    },
    {path: '/home/page1', redirect: '/#/page1'},

    {
        path: '/#', components: {menu: Menu, play_ground: TestCasePage},
        children: [
            {path: 'test_case', name: 'route_test_case_edit'}
        ]
    },
    {path: '/home/test_case', redirect: '/#/test_case'},

    {path: `/*`, redirect: `/`},
];