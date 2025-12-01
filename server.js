const  express = require('express')
const server = express()

const PORT = process.env.PORT || 3000


const helmet = require('helmet')
const cors = require('cors')

server.use(helmet.contentSecurityPolicy({
    useDefaults:true,
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    directives: {
        "img-src": ("'self'","https: data"),
        "scriptSrc": ("'self'", "cdn.jsdelivr.net")
    }

}))

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extened: true}))


server.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))
