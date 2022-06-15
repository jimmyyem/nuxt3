export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to)
  console.log(from)
  console.log("要去那个页面:" + to.path)
  console.log("来自那个页面:" + from.path)

  if (to.path === '/admin') {
    console.log('禁止访问这个页面')
    abortNavigation()  //停止当前导航，可以使用error进行报错
    return navigateTo('/')
 }
})