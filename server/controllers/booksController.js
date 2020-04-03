const books = []
let id = 0

module.exports = {
    getAllBooks: (req, res) => {
        res.status(200).send(books)
    },

    addBook: (req, res) => {
        const {title, author} = req.body

        const newBook = {
            title, 
            author,
            id
        }

        books.push(newBook)
        id++
        res.status(200).send(books)
    },

    editBook: (req, res) => {
        const {title, author} = req.body
        const {id} = req.params

        const index = books.findIndex(book => {
            return book.id === +id
        })

        if(index === -1){
            return res.status(404).send('book not found')
        }

        books[index] = {title, author, id: +id}
        
        res.status(200).send(books)
    },

    deleteBook: (req, res) => {
        const {id} = req.params
        
        const index = books.findIndex(book => {
            return book.id === +id
        })

        if(index === -1){
            res.status(404).send('book not found')
        }

        books.splice(index, 1)

        res.status(200).send(books)
    },
}