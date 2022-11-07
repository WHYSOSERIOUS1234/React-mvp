
const cors = require('cors')
const {Client} = require('pg')
const express = require('express')
const app = express()
const PORT = 8000
app.use(express.json())
app.use(cors())
const connectionString = 'postgresql://postgres:docker@127.0.0.1:5432/music'
const client = new Client ({
    connectionString:connectionString
})
 client.connect()


app.get('/songs', (req, res) => {
    client.query('SELECT * FROM song').then(result => { console.log('Server:', result.rows)
        res.send(result.rows)
    })
})


app.post('/songs', (req,res) => {
    try{
        const {artist, song_title, album_cover, mp3_filelink} = req.body
        client.query(`INSERT INTO song (artist, song_title, album_cover, mp3_filelink) VALUES ('${artist}','${song_title}','${album_cover}', '${mp3_filelink}');`)
        res.status(201).send('new song created!')
    }catch(error) {
        console.log(error)
    }
})

app.listen(PORT, () => {
    console.log('listening' + PORT)
})