import express from 'express'
const app = express()
import fs from 'fs'
import toml from '@iarna/toml'
const configFile = fs.readFileSync('rps.toml', 'utf-8')
const config = toml.parse(configFile);

app.get('/api', (req, res) => {
    res.send({
        ok: 1
    })
})



app.listen(config.server.port, "0.0.0.0", () => {
    console.log(`server started at: http://localhost:${config.server.port}/api`)
})