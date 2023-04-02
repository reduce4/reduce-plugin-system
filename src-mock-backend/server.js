import express from 'express'
const app = express()
import fs from 'fs'
import toml from '@iarna/toml'
import cors from 'cors'
import { dirname } from 'path'
const configFile = fs.readFileSync('rps.toml', 'utf-8')
const config = toml.parse(configFile);
app.use(cors())

app.get('/api', (req, res) => {
    res.send({
        ok: 1
    })
})
const mapToObj = (arr, type) => {
    return arr.map(name => ({
        type: name.slice(0, name.indexOf(".")).toLowerCase(),
        url: `./${type}/${name.slice(0, name.indexOf("."))}`
    }));
}
app.get("/api/components", (req, res) => {
    const cmps = [];
    cmps.push(...mapToObj(fs.readdirSync("./src/components"), "components"));
    cmps.push(...mapToObj(fs.readdirSync("./src/pages"), "pages"))
    res.send({
        data: cmps
    })
})


app.listen(config.server.port, "0.0.0.0", () => {
    console.log(`server started at: http://localhost:${config.server.port}/api`)
})