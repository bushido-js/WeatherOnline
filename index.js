      // const fs = require('fs')

      // const data = `
      //   Hello from NodeJS
      //   I am random text!
      // `

      // fs.writeFileSync('nodejs.txt', data) // Создаём файл

      // const result = fs.readFileSync('nodejs.txt', {encoding: 'utf-8'}) // Читаем файл
      // console.log(result)

      // console.log(__dirname) //Путь до текущей папки
      // console.log(__filename)//Путь до текущего файла

const express = require('express')
const bodyParser = require('body-parser')
const weatherRequest = require('./requests/weather.request')


const app = express()


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('index', {weather: null, error: null})
})

app.post('/', async (req, res) => {
  const { city } = req.body

  const {weather, error} = await weatherRequest(city)
  res.render('index', {weather, error})
})

app.listen(3000, () => {
  console.log('Server has started on port 3000...');
}) //Значение порта на котором слушаем, далее cb

