export const setLocalStorage  = item => {
    localStorage.setItem('user' , JSON.stringify(item))
}

export const getLocalStorage = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return user;
}

export const resetLocalStorage = () => {
    localStorage.clear()
}