const app= require('./src/app')

const port = 3000


app.get('/', (req, res) => {
    res.send('Server is Working ')
  })

  
app.listen(port, () => {
  
    console.log(`Example app listening on port ${port}`)
  })