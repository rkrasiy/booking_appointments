export const isAuthenticated = () => {

  const user = localStorage.getItem('user')
  let isAuth = false
  if(user)
    isAuth = true

  return {
    isAuth
  }
};