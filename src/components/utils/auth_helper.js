let redirect = {
    path: null
};

export const redirect403Response = (vm, response) => {
    if (response && response.status === 403) {
        redirect.path = vm.$router.currentRoute.fullPath;
        vm.$router.push({name: 'route_login'})
    }
};

export const redirectAfterLoginSuccess = (vm) => {
    if (redirect.path) {
        console.log('===redirect login===',redirect.path)
        vm.$router.push({path: redirect.path});
        redirect.path = null;
    } else {
        vm.$router.push({name: 'route_test_case_catalog'})
    }
};