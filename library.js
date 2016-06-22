var library = {
  tracks: { 123: { id: 123,
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            456: { id: 456,
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"}
          },
  playlists: { 789: { id: 789,
                      name: "Coding Music",
                      tracks: [123, 456]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// 123: Coding Music - 10 tracks

var printPlaylists = function () {

}


// prints a list of all tracks, in the form:
// 123: Code Monkey by Jonathan Coulton (Thing a Week Three)

var printTracks = function () {

}


// prints a list of tracks for a given playlist, in the form:
// 123: Coding Music - 10 tracks
// 345: Code Monkey by Jonathan Coulton (Thing a Week Three)

var printPlaylist = function (playlistId) {

}


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {

}


// adds a playlist to the library

var addPlaylist = function (name) {

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use RegExp.test()

var printSearchResults = function(query) {

}