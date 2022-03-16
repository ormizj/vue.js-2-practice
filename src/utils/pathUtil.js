import router from './../router'

//checks if the "path" is in a specific Route by name
//(taking "this.$route" as parameter to force update on "computed methods more cleanly")
export const onRoute = (thisRoute, routeName) => {
    return thisRoute.matched.some((route) => route.name === routeName)
}

export const onRouter = (routeName) => {
    return router.currentRoute.matched.some((route) => route.name === routeName)
}