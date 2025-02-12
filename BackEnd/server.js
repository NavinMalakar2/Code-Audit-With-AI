require('dotenv').config()
const app = require('./src/app')

Port=process.env.PORT

app.listen(Port, () => {
    console.log('Server is running on http://localhost:3000')
})