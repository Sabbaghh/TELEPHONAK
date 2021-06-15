const express = require('express')
const app = express()
const products = require('./data/products')

app.get('/', (req, res) => {
	res.json({
		name: 'abdallah',
		lastName: 'sabbagh',
	})
})

app.get('/api/products', (req, res) => {
	res.json(products)
})
app.get('/api/products/:id', (req, res) => {
	const product = products.find((pro) => pro._id === req.params.id)
	res.json(product)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
	console.log('server is running')
})
