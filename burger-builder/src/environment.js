let baseURL = ''
const readEnv = () => {
    if (process.env.NODE_ENV === 'production') {
        baseURL = 'https://buildtheburger.herokuapp.com/'
        console.log(`${process.env.NODE_ENV} >>> baseurl =${baseURL}`)
    }
    else {
        baseURL = 'http://localhost:4000'
        console.log(`${process.env.NODE_ENV} >>> baseurl =${baseURL}`)
    }
}
export { readEnv, baseURL };
