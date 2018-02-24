function Library(name, creator) {
  this.name = name
  this.creator = creator
  this.playlists = []
}

let myLibrary = new Library('classical', 'yves')


Library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist)
};

function Playlist(name) {
  this.name = name
  this.tracks = []
}

Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track)
}

let myPlaylist = new Playlist('18th century')

function Track(title, rating, length) {
  this.title = title
  this.rating = rating
  this.length = length
}

let myTrack = new Track('requiem', 3, 360)
let mySecondTrack = new Track('concerto', 5, 240)

Playlist.prototype.overallRating = function() {
  averageRating = 0
  for (let track of this.tracks) {
    averageRating += track.rating
  }
  return averageRating / this.tracks.length
};

Playlist.prototype.totalDuration = function() {
  totalDuration = 0
  for (let track of this.tracks) {
    totalDuration += track.length
  }
  return totalDuration
};

myLibrary.addPlaylist(myPlaylist)
myPlaylist.addTrack(myTrack)
myPlaylist.addTrack(mySecondTrack)

console.log(myPlaylist.overallRating())

console.log(myPlaylist.totalDuration())