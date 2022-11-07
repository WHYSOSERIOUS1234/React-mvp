DROP TABLE IF EXISTS song;
CREATE TABLE song (
  song_id SERIAL PRIMARY KEY,
  artist VARCHAR(50),
  song_title VARCHAR(100),
  album_cover VARCHAR(3000),
  mp3_fileLink VARCHAR(2000)

);


INSERT INTO song (artist, song_title, album_cover, mp3_fileLink) VALUES 
('Rebecca Black', 'Friday','http://brojsimpson.com/wordpress/wp-content/uploads/2011/05/Rebecca-Black-Friday-e1305920142885.jpg' ,'BlackMp3'),
('Metallica', 'Master Of Puppets', 'https://e.snmc.io/i/1200/s/48b2dadafbe058a054154faa16f751b7/3986151', 'Puppets'),
('Fergie', 'I dont Know', 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/The_Dutchess.png/220px-The_Dutchess.png', 'Fergilicious');