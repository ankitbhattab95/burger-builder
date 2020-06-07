let baseURL = 'http://localhost:4000'
const readEnv = () => {
    process.env.SRV_URL = baseURL
    // console.log('process.env.SRV_URL = ', process.env.SRV_URL)
    if (process.env.SRV_URL != undefined) {
        baseURL = process.env.SRV_URL
    }
    console.log('baseurl = ', baseURL)
}
export { readEnv, baseURL };
