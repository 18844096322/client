// token设置工具函数

export const setToken = () => {
    localStorage.setItem('token', '123');
}

export const getToken = (): string | null | undefined => {
    return localStorage.getItem('token');
}