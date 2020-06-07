let baseURL = ''
const readEnv = () => {
    // process.env.SRV_URL = baseURL
    // if (process.env.SRV_URL !== undefined) {
    if (process.env.NODE_ENV === 'production') {
        baseURL = 'https://buildtheburger.herokuapp.com/'
        console.log('if >>> setting baseURL to ', process.env.SRV_URL)
        console.log('if >>> baseurl = ', baseURL)
    }
    else {
        baseURL = 'http://localhost:4000'
        console.log('else >>> setting baseURL to ', process.env.REACT_APP_SRV_URL, process.env.NODE_ENV)
        console.log('else >>> baseurl = ', baseURL)
    }
}
export { readEnv, baseURL };
