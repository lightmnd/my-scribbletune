const scribble = require('scribbletune');

// Create a clip that plays the C major scale
let clip = scribble.clip({
	notes: 'e2 e2 f2 e2', // Or ['c4', 'd4', 'e4', 'f4', 'g4', 'a4', 'b4', 'c5']
	pattern: '__x_x__x___x_x__x_x__x_x__x_______'
});

// Render a MIDI file of this clip
scribble.midi(clip, 'bass.mid');