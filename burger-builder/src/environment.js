let baseURL = ''
const readEnv = () => {
    // process.env.SRV_URL = baseURL
    if (process.env.SRV_URL !== undefined) {
        baseURL = process.env.SRV_URL
        console.log('if >>> setting baseURL to ', process.env.SRV_URL)
        console.log('if >>> baseurl = ', baseURL)
    }
    else {
        baseURL = 'http://localhost:4000'
        console.log('else >>> setting baseURL to ', process.env.SRV_URL)
        console.log('else >>> baseurl = ', baseURL)
    }
}
export { readEnv, baseURL };
