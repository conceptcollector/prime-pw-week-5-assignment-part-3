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
    ['Blackstar', '9:57'],
    ["'Tis a Pity She Was a Whore", '4:52'],
    ['Lazarus', '6:22'],
    ['Sue (Or in a Season of Crime)', '4:40'],
    ['Girl Loves Me', '4:52'],
    ['Dollar Days', '4:44'],
    ["I Can't Give Everything Away", '5:47']
]);
addToCollection(collection, 'Let It Be', 'The Beatles', 1970, [
    ['Two of Us', '3:36'],
    ['Dig a Pony', '3:54'],
    ['Across the Universe', '3:48'],
    ['I Me Mine', '2:26'],
    ['Dig It', '0:50'],
    ['Let it Be', '4:03'],
    ['Maggie Mae', '0:40'],
    ["I've Got a Feeling", '3:37'],
    ['One After 909', '2:54'],
    ['The Long and Winding Road', '3:38'],
    ['For You Blue', '2:32'],
    ['Get Back', '3:09']
]);
addToCollection(collection, 'Let It Be', 'The Replacements', 1984, [
    ['I Will Dare', '3:08'],
    ['Favorite Thing', '2:19'],
    ["We're Comin' Out", '2:21'],
    ['Tommy Gets His Tonsils Out', '1:53'],
    ['Androgynous', '3:11'],
    ['Black Diamond', '2:40'],
    ['Unsatisfied', '4:01'],
    ['Seen Your Video', '3:08'],
    ["Gary's Got a Boner", '2:28'],
    // Just want to apologize for some of the titles...
    // Blackstar and Replacements both had one I cringed over putting in my assignment.
    ['Sixteen Blue', '4:24'],
    ['Answering Machine', '3:40']
]);
addToCollection(collection, 'Alice', 'Tom Waits', 2002, [
    ['Alice', '4:28'],
    ['Everything You Can Think', '3:10'],
    ["Flower's Grave", '3:28'],
    ["No One Knows I'm Gone", '1:42'],
    ['Kommienezuspadt', '3:10'],
    ['Poor Edward', '3:42'],
    ['Table Top Joe', '4:14'],
    ['Lost in the Harbour', '3:45'],
    ["We're All Mad Here", '2:31'],
    ['Watch Her Disappear', '2:33'],
    ['Reeperbahn', '4:02'],
    ["I'm Still Here", '1:49'],
    ['Fish & Bird', '3:59'],
    ['Barcarolle', '3:59'],
    ['Fawn', '1:43']
]);
addToCollection(collection, 'Blood Money', 'Tom Waits', 2002, [
    ['Misery Is the River of the World', '4:25'],
    ['Everything Goes to Hell', '3:45'],
    ['Coney Island Baby', '4:02'],
    ['All the World Is Green', '4:36'],
    ["God's Away on Business", '2:59'],
    ["Another Man's Vine", '2:28'],
    ['Knife Chase', '2:26'],
    ['Lullaby', '2:09'],
    ['Starving in the Belly of a Whale', '3:41'],
    ['The Part You Throw Away', '4:22'],
    ['Woe', '1:20'],
    ['Calliope', '1:59'],
    ['A Good Man Is Hard to Find', '3:57']
]);
addToCollection(collection, 'Beyonce', 'Beyonce', 2013, [
    ['Pretty Hurts', '4:17'],
    ['Haunted', '6:09'],
    ['Drunk in Love', '5:23'],
    ['Blow', '5:09'],
    ['No Angel', '3:48'],
    ['Partition', '5:19'],
    ['Jealous', '3:04'],
    ['Rocket', '6:31'],
    ['Mine', '6:18'],
    ['XO', '3:35'],
    ['Flawless', '4:10'],
    ['Superpower', '4:36'],
    ['Heaven', '3:50'],
    ['Blue', '4:26']
]);
console.log(collection);

// Commenting out verifiableCollection. It works, so I'm leaving it here.
// Just didn't want to add the track names to a whole extra array.
// Might return if I find myself having an abundance of time tonight, haha

// let verifiableCollection = [];
const emptyCollection = [];

// addToCollection(verifiableCollection, 'Blue', 'Joni Mitchell', 1971);
// addToCollection(verifiableCollection, 'The Miseducation of Lauryn Hill', 'Lauryn Hill', 1998);
// addToCollection(verifiableCollection, 'Fetch the Bolt Cutters', 'Fiona Apple', 2020);
// addToCollection(verifiableCollection, "Blacks' Magic", 'Salt-N-Pepa', 1990);
// addToCollection(verifiableCollection, 'Pastel Blues', 'Nina Simone', 1965);
// addToCollection(verifiableCollection, 'Zen Arcade', 'Hüsker Dü', 1984);

function showCollection(array) {
    console.log(`My collection currently holds ${array.length} albums.`);
    for (let item of array) {
        console.log(`${item.title} by ${item.artist}, published in ${item.yearPublished}.`);
    }
    return;
}

showCollection(collection);
// showCollection(verifiableCollection);
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
// findByArtist('Nina Simone', verifiableCollection);
findByArtist('Beyonce', collection);
// findByArtist('Joni Mitchell', verifiableCollection);
findByArtist('Prince', collection);
// findByArtist('Led Zeppelin', verifiableCollection);

//Probably completely unnecessary to run this against two arrays that work the same way.
//But I'm taking my notes from last week to heart, I guess!

// Function to search objects
// Input: { artist: 'Ray Charles', year: 1957 },
// (I do not know how to return a full collection with no search criteria,
// so I'll default back to just the original collection)
// Output: New Array matching items in search criteria, empty array sans results,
// & full array if no search criteria entered...

function searchCollection(artist, year, trackName) {

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
            finder = album;
        for (let songFinder = 0; songFinder < finder.tracks.length; songFinder++ ) {
            if (trackName === finder.tracks[songFinder]) {
        }
        recordStoreFind.push(finder.tracks[songFinder]);
    }
    }
    }
    return recordStoreFind;
}

console.log(searchCollection('The Replacements', 1984, 'Unsatisfied'));
// console.log(searchCollection('Tom Waits', 2002));
// console.log(searchCollection('Beyonce', 2020));
// console.log(searchCollection('Ray Charles', 1957));
// console.log(searchCollection());

// Hm... I don't know how to make it only push the artist and year.
// (Though I'm not sure if that was the goal...)
// Also not sure why my for of loop didn't work.
// (Even tried it after office hours. Still nothing.)
// But the standard for loop did, at least!

// Tracks as an array. (I'm thinking very seriously about making it an array of arrays.
// But that seems potentially needlessly complicated with little to no pay off.)

// addToCollection INPUT: + Tracks
// addToCollection OUTPUT: + [Tracks]

// searchCollection INPUT: + trackName
// + loop through albums and... return the array that they're located in? (Which array will I get??)
// Okay, arrays in an array in an array...
// So, the song is in the inner array which is in an array called tracks...
//
// " OUTPUT: Not sure if this should just grab the song or grab the whole album...


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