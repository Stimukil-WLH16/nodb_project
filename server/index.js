const express = require('express')
const bookCtrl = require('./controllers/booksController')

const app = express()
const PORT = 5150

app.use(express.json)

app.get('/api/books', bookCtrl.getAllBooks)

app.post('/api/books', bookCtrl.addBook)

app.put('/api/books/:id', bookCtrl.editBook)

app.delete('/api/books/:id', bookCtrl.deleteBook)

app.listen(PORT, () => console.log(`listening to Van Halen ${PORT}`))