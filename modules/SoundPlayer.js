import {camera} from "../modules/gui.js";
let sound;
function initSound() {
    let listener;
    listener = new THREE.AudioListener();
    camera.add( listener );
    sound = new THREE.Audio( listener );
}
function playSound(filepath, loop=false) {
    // if (sound.isPlaying) {
    //     sound.stop();
    // }
// create a global audio source
// load a sound and set it as the Audio object's buffer
    var audio = new Audio(filepath)
    audio.play();
}

function playBackground(filepath, loop=true) {
    if (sound.isPlaying) {
         sound.stop();
    }
// create a global audio source
// load a sound and set it as the Audio object's buffer
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load( filepath, function( buffer ) {
        sound.setBuffer( buffer );
        sound.setLoop(loop);
        sound.setVolume( 1 );
        sound.play();
    });
}// load a sound and set it as the Audio object's buffer

export {playSound, initSound, playBackground}