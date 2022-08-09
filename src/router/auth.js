import Cookies from "js-cookie";


export const requireAuth = (to, from, next) => {
    const checkCookies = ( Cookies.get('session')) ? true : false
    if (checkCookies) {
      next();
    } else {
      next('/login')
    }
  };