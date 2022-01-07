const axios = require('axios')
const generateKey = require('./generate_key')
const conf = require('./conf')
const account = '' // Advanced => Diagnostics => ID
const token = '7e28adde-5031-4259-912f-6dcb6a211dfb' // Token Authorization (debug request pls change :v)

const main = async () => {
    let key = await generateKey()
    let req = await axios.patch(`https://api.cloudflareclient.com/v0a2158/reg/${account}`, JSON.stringify({
        "key": key.publicKey
    }), {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'User-Agent': 'okhttp/3.12.1',
            'Authorization': `Bearer ${token}`
        }
    }
    )
    let data = await req.data
    console.log(conf({ ...data, ...key }))
}

main()