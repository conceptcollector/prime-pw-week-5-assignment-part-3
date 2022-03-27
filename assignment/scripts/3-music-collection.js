console.log('***** Music Collection *****')

let collection = [];

let album;

// After office hours today I thought testing my functions might be a good idea.
//Broadened addToCollection to work with more than just the one array

function addToCollection(recordCollection, title, artist, yearPublished, tracks) {
    recordCollection.push(album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks
        }
    )
    console.log(album);
    return album;
}

addToCollection(collection, 'Blackstar', 'David Bowie', 2016, [
    ['Blackstar']['9:57'],
    ["'Tis a Pity She Was a Whore"]['4:52']
]);
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

// Function to search objects
// Input: { artist: 'Ray Charles', year: 1957 },
// (I do not know how to return a full collection with no search criteria,
// so I'll default back to just the original collection)
// Output: New Array matching items in search criteria, empty array sans results,
// & full array if no search criteria entered...

function searchCollection(artist, year) {

    // new array
    // for of loop through collection (later Chris: nope...)
    // if else statement
    // artist or year
    // push to collection
    // if artist/year === undefined
    // return collection... thinking of what pair of curly brackets this needs to be in...
    // return array

    let recordStoreFind = [];
    if (artist === undefined && year === undefined) {
        recordStoreFind.push(collection);
    }
    
    for (let finder = 0; finder < collection.length; finder++) {
        if (artist === collection[finder].artist && year === collection[finder].yearPublished) {
            recordStoreFind.push(collection[finder]);
        }
    }
    return recordStoreFind;
}

console.log(searchCollection('The Replacements', 1984));
console.log(searchCollection('Tom Waits', 2002));
console.log(searchCollection('Beyonce', 2020));
console.log(searchCollection('Ray Charles', 1957));
console.log(searchCollection());

// Hm... I don't know how to make it only push the artist and year.
// (Though I'm not sure if that was the goal...)
// Also not sure why my for of loop didn't work.
// (Even tried it after office hours. Still nothing.)
// But the standard for loop did, at least!

// Tracks as an array. (I'm thinking very seriously about making it an array of arrays.
// But that seems potentially needlessly complicated with little to no pay off.)

// addToCollection INPUT: + Tracks
// addToCollection OUTPUT: + [Tracks]

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