console.log('***** Music Collection *****')

let collection = [];

let album;

function addToCollection(title, artist, yearPublished) {
    collection.push(album = {
        Title: title,
        Artist: artist,
        'Year Published': yearPublished
        }
    )
    return album;
}

addToCollection('Blackstar', 'David Bowie', 2016);
console.log(album);
addToCollection('Let It Be', 'The Beatles', 1970);
console.log(album);
addToCollection('Let It Be', 'The Replacements', 1984);
console.log(album);
addToCollection('Alice', 'Tom Waits', 2002);
console.log(album);
addToCollection('Blood Money', 'Tom Waits', 2002);
console.log(album);
addToCollection('Beyonce', 'Beyonce', 2013);
console.log(album);
console.log(collection);

function showCollection(array) {
    console.log(`My collection currently holds ${array.length} albums.`);
    for (item of array) {
        console.log(item);
    }
    return;
}

showCollection(collection);
