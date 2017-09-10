const scribble = require('scribbletune');

// Create a clip that plays the C major scale
let clip = scribble.clip({
	notes: 'c2 c2', // Or ['c4', 'd4', 'e4', 'f4', 'g4', 'a4', 'b4', 'c5']
	pattern: 'x___x__x_x___x__x_x___x__x___xx_'
});

// Render a MIDI file of this clip
scribble.midi(clip, 'drums.mid');