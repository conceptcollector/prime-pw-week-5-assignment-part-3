console.log('***** Music Collection *****')

let collection = [];

let album;

// After office hours today I thought testing my functions might be a good idea.
//Broadened addToCollection to work with more than just the one array

function addToCollection(recordCollection, title, artist, yearPublished) {
    recordCollection.push(album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
        }
    )
    return console.log(album);
}

addToCollection(collection, 'Blackstar', 'David Bowie', 2016);
addToCollection(collection, 'Let It Be', 'The Beatles', 1970);
addToCollection(collection, 'Let It Be', 'The Replacements', 1984);
addToCollection(collection, 'Alice', 'Tom Waits', 2002);
addToCollection(collection, 'Blood Money', 'Tom Waits', 2002);
addToCollection(collection, 'Beyonce', 'Beyonce', 2013);
console.log(collection);

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

// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

// Function to search objects
// Input: { artist: 'Ray Charles', year: 1957 },
// (I do not know how to return a full collection with no search criteria,
// so I'll default back to just the original collection)
// Output: New Array matching items in search criteria, empty array sans results,
// & full array if no search criteria entered...

function searchCollection(artist, year) {
    // new array
    // for of loop through collection

    // if else statement
    // artist or year
    // push to collection
    // if artist/year === undefined
    // return collection... thinking of what pair of brackets this needs to be in...
    // return array
    let recordStoreFind = [];
    for (let finder of collection) {
        if (collection[finder].artist === artist || collection[finder].yearPublished === year) {
            recordStoreFind.push(finder);
        }
        else if (collection[finder].artist != artist && collection[finder].yearPublished != year) {
            return recordStoreFind;
        }
        else if (artist === undefined && year === undefined) {
            recordStoreFind.push(collection);
        }
    }
    return console.log(recordStoreFind);
}

searchCollection('The Replacements', 1984);
searchCollection('Tom Waits', 2002);
searchCollection('Beyonce', 2020);
searchCollection('Ray Charles', 1957);
searchCollection();

// - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update `search` to allow a `trackName` search criteria.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION