const timer = {
    mounted(el, binding) {
        const ms = binding.modifiers.ms; // Check if the 'ms' modifier is present
        const chrono = binding.modifiers.chrono; // Check if the 'chrono' modifier is present
        // Initialization of the displayed time
        // (allows it to be displayed immediately without waiting for a second)
        let time = chrono ? getChronoTime(ms) : getCurrentTime(ms);
        el.innerHTML = time;
        setInterval(() => {
            // Then incrementing the time every second
            let time = chrono ? getChronoTime(ms) : getCurrentTime(ms);
            el.innerHTML = time;
        }, 1000);   // Every 1000 ms = 1 second
    },
}

let startChronoTime = new Date();   // Start time of the chronometer

function getCurrentTime(ms = false) {
    // Return the currnet time in the format HH:MM:SS
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    let formattedTime = `${hours}:${minutes}:${seconds}`;

    if (ms) {
        const milliseconds = now.getMilliseconds().toString().padStart(3, '0');
        formattedTime += `.${milliseconds}`;
    }
    return formattedTime;
}

function getChronoTime(ms = false) {
    // Return the time elapsed since the start of the chronometer in the format HH:MM:SS
    const now = new Date();
    const elapsed = new Date(now - startChronoTime);
    const hours = elapsed.getUTCHours().toString().padStart(2, '0');
    const minutes = elapsed.getUTCMinutes().toString().padStart(2, '0');
    const seconds = elapsed.getUTCSeconds().toString().padStart(2, '0');
    let formattedTime = `${hours}:${minutes}:${seconds}`;

    if (ms) {
        const milliseconds = elapsed.getUTCMilliseconds().toString().padStart(3, '0');
        formattedTime += `.${milliseconds}`;
    }
    return formattedTime;
}

export default timer;