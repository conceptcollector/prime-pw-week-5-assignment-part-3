console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
    let album = new Object();
    album.title = title;
    album.artist = artist;
    album.yearPublished = yearPublished;
    collection.push(album);
    return album;
}

addToCollection('Surfer Rosa', 'Pixies', 1988);
