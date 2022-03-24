console.log('***** Music Collection *****')

let collection = [];

let album;

function addToCollection(recordCollection, title, artist, yearPublished) {
    recordCollection.push(album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
        }
    )
    return album;
}

addToCollection(collection, 'Blackstar', 'David Bowie', 2016);
console.log(album);
addToCollection(collection, 'Let It Be', 'The Beatles', 1970);
console.log(album);
addToCollection(collection, 'Let It Be', 'The Replacements', 1984);
console.log(album);
addToCollection(collection, 'Alice', 'Tom Waits', 2002);
console.log(album);
addToCollection(collection, 'Blood Money', 'Tom Waits', 2002);
console.log(album);
addToCollection(collection, 'Beyonce', 'Beyonce', 2013);
console.log(album);
console.log(collection);

// After office hours today I thought testing my functions might be a good idea.
//Broadened addToCollection to work with more than just the one array
let verifiableCollection = [];
const emptyCollection = [];

addToCollection(verifiableCollection, 'Blue', 'Joni Mitchell', 1971);
addToCollection(verifiableCollection, 'The Miseducation of Lauryn Hill', 'Lauryn Hill', 1998);
addToCollection(verifiableCollection, 'Fetch the Bolt Cutters', 'Fiona Apple', 2020);
addToCollection(verifiableCollection, "Blacks' Magic", 'Salt-N-Pepa', 1990);
addToCollection(verifiableCollection, 'Pastel Blues', 'Nina Simone', 1965);
addToCollection(verifiableCollection, 'Zen Arcade', 'Hüsker Dü', 1984);

function showCollection(array) {
    console.log(`My collection currently holds ${array.length} albums.`);
    for (let item of array) {
        console.log(`${item.title} by ${item.artist}, published in ${item.yearPublished}.`);
    }
    return;
}

showCollection(collection);
showCollection(verifiableCollection);
showCollection(emptyCollection);

//It did what I thought it should!

function findByArtist(artist, array) {
    let foundArtist = [];
    for (let i of array) {
        if (i.artist === artist) {
            foundArtist.push(i);
        }
    }
    return console.log(foundArtist);
}

findByArtist('Tom Waits', collection);
findByArtist('Nina Simone', verifiableCollection);
findByArtist('Beyonce', collection);
findByArtist('Joni Mitchell', verifiableCollection);
findByArtist('Prince', collection);
findByArtist('Led Zeppelin', verifiableCollection);

//Probably completely unnecessary to run this against two arrays that work the same way.
//But I'm taking my notes from last week to heart, I guess!