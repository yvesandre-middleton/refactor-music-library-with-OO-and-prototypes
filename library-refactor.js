var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

  printPlaylists: function () {
  var a = this.playlists
    for (var b in a) {
       console.log(b+": "+ a[b].name + " - " + a[b].tracks.length + " tracks")
    }
  return b;
  },

  printTracks: function () {
  var a = this.tracks
    for (var b in a) {
      console.log(b+": "+ a[b].name + " by " + a[b].artist + " " + "(" + a[b].album + ")" );
    }
  return b;
  },

  printPlaylist: function (playlistId) {

  var findPlaylist = this.playlists[playlistId]
  var findTrack = this.playlists[playlistId].tracks

  console.log(playlistId +": "+ findPlaylist.name + " - " + findPlaylist.tracks.length+ " tracks")

  for (var z in findTrack) {
    console.log(findPlaylist.tracks[z] + ": " + this.tracks[findPlaylist.tracks[z]].name + " by " + "(" + this.tracks[findPlaylist.tracks[z]].album + ")");
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
  var findTrack  = this.tracks[trackId].id;
  var findPlaylist = this.playlists[playlistId];
  findPlaylist.tracks.push(findTrack);
  console.log(findPlaylist);
  },
  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack:function (name, artist, album) {
  var newTrackId = this.uid();
  var newObj = {
    id: newTrackId,
    name: name,
    artist: artist,
    album: album
    }
    this.tracks[newTrackId] = newObj;
  },

  addPlaylist: function (name) {
  var newPlaylistId = this.uid();
  var newObj = {
    id: newPlaylistId,
    name: name,
    tracks: [],
    }
    library.playlists[newPlaylistId] = newObj;
    }
  }

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

// library.printPlaylists();

// printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)



// library.printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

// library.printPlaylist('p01');
// library.printPlaylist('p02');

// adds an existing track to an existing playlist


// library.addTrackToPlaylist('t03', 'p01')
// printPlaylist('p01');

// generates a unique id
// (use this for addTrack and addPlaylist)


// adds a track to the library

// library.addTrack('the moon', 'John Doe', 'Best Album Ever')
// console.log(library.tracks);
// adds a playlist to the library


// library.addPlaylist('some guy');
// console.log(library.playlists);

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

    var a = library.tracks
    for (var b in a) {
     if (a[b].name.includes(query) || a[b].artist.includes(query) || a[b].album.includes(query));
    }
  return a[b];
    }

console.log(printSearchResults('Jonathan Coulton'));
