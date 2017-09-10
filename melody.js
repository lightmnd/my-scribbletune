const scribble = require('scribbletune');

// Create a clip that plays the C major scale
let clip1 = scribble.clip({
	notes: 'e2 e2 f4 e2 e2 e2 f4 e2 c1 g4', // Or ['c4', 'd4', 'e4', 'f4', 'g4', 'a4', 'b4', 'c5']
	//pattern: 'x_x_x_x_x_x_x_x_',
	pattern: 'x'.repeat(24),
	//accentMap: '--x--x'
	accentMap:[10, 20, 30, 40, 50, 60, 70, 80]
});


let clip2 = scribble.clip({
	notes: 'CMaj, FMaj, GMaj, CMaj',
	pattern: 'x---'.repeat(1),
	shuffle: true
})

let clip3 = scribble.clip({
	notes: 'CMaj, FMaj, EMaj, FMaj',
	pattern: 'x---'.repeat(1),
	shuffle: true
})

// Render a MIDI file of this clip
scribble.midi(clip1.concat(clip2.concat(clip1.concat(clip3, 'melody.mid'))));