const express = require('express');
const cors = require('cors')
const path = require('path')

const app = express();
app.use(cors())

let message = [
    {id: 1, text: 'Hello World!'},
    {id: 2, text: 'Hello from the server!'},
    {id: 3, text: 'Hello Everyone!'}
]

// here we are saying to get all posts
app.get('/api', (req, res) => {
  res.send(message);
  console.log(req.body);
})

// here we are saying to get a post by an ID
// So, if we go to localhost:8000/api/1, 
// it will return the first post which is Hello World!
app.get('/api/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const msg = message.find((msg) => msg.id === id);

    if(msg){
        return res.status(200).json(msg)
    }

    res.status(404).json({text: "This id does not exist"})
    
});

app.listen(8000, () => console.log('Server is running on port 8000'));