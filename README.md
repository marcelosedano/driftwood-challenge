## Driftwood Challenge

Author: Marcelo Sedano

I've included a few saved markers initially in the app so that there's something to work with. To start fresh and also to have the reducer.test.js file pass, see the note in reducer.js.

### What you were able to implement (and specify any highlights)?

* Searchable map view using Google Places API and react-native-maps
* Ability to save places/markers from map
* Clustering of map markers based on zoom level
* Saved Places list to view all saved markers

### What part of the project are you the most proud of?

Provided that this was my first foray into React Native and working with these 3rd party libraries, I would say I'm proud of being able to deliver an app that meets the essential user requirements with an intuitive UI without sacrificing code quality, readability, or testing.

### How much time did you spend on the challenge?

I spent about 16-18 hours on the challenge over the course of 3 days. A big portion of that time was spent troubleshooting and digging into the 3rd party libraries (react-native-map-clustering, react-native-google-places-autocomplete) because of inaccurate documentation, limitations, or inconsistencies between npm and their Github repo (*shakes fist at sky*).

### What would you have cleaned up, worked on, or added if you had more time to work on the project?

With more time, I would have refactored some of the bigger components into smaller distinct components, taken the time to write tests for the components, investigated some of the 3rd party bugs that resulted in hack fixes, and fleshed out the UI a bit more. Adding redux-persist to persist the app state in the device storage.
