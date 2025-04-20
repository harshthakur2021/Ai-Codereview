const app= require('./src/app')

const port = 3000


app.get('/', (req, res) => {
    res.send('Harsh Thakur')
  })

  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })