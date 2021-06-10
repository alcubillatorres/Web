import {config} from 'dotenv' 
config(); //funcion de dotenv que intentará leer las variables de entorno

export default {
    port: process.env.PORT || 3000, 
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbServer: process.env.DB_SERVER || '',
    dbDatabase: process.env.DB_DATABASE || ''
};