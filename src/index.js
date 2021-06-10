import app from './app'
import engine from 'ejs-mate'
import path from 'path'

app.listen(app.get('port'))

app.set('views', path.join(__dirname,'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

console.log('server on port', app.get('port'))