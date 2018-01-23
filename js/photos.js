// Initialize Firebase
var config = {
  apiKey: "AIzaSyDV48Vgcfz3B7pjGOsxuHCjZ1yh9SZa5WU",
  authDomain: "photos-d71d1.firebaseapp.com",
  databaseURL: "https://photos-d71d1.firebaseio.com/",
  storageBucket: "gs://photos-d71d1.appspot.com"
};

firebase.initializeApp(config);

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();
// Create a storage reference from our storage service
var storageRef = storage.ref();
// Photos reference
var photosRef = storageRef.child('photography');

var images = ["4.jpg", "5.jpg", "10.jpg", "11.jpg"];

for (var i = 0; i < images.length; i++) {
  photosRef.child(images[i]).getDownloadURL().then(function(url) {
    var image = new Image();
    image.src = url;
    image.className = "single-image img-responsive";
    $(".images-main").append(image);
  });
}

