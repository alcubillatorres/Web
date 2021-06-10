import express from 'express'
import config from './config'
import productsRoutes from './routes/products.routes'

const app = express()

//settings
app.set('port', config.port)

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static('public')) //para usar la carpeta public con una ruta estática

app.use(productsRoutes)

export default app