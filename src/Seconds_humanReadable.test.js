
import {expect} from 'vitest'
function humanReadable(seconds) {
    let hh, mm, ss = 0;

    function formatTime(hours, minutes, seconds) {
        let formattedHours = String(hours).padStart(2, '0');
        let formattedMinutes = String(minutes).padStart(2, '0');
        let formattedSeconds = String(seconds).padStart(2, '0');
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }


    hh = Math.floor(seconds / 3600);
    mm = Math.floor((seconds - hh * 3600) / 60);
    ss = Math.floor((seconds - hh * 3600) - (mm * 60));

    return formatTime(hh, mm, ss);

}

console.log(humanReadable(59));
console.log(humanReadable(60));
console.log(humanReadable(90));
console.log(humanReadable(3599));
console.log(humanReadable(3600))
console.log(humanReadable(45296))
console.log(humanReadable(86399))
console.log(humanReadable(86400))
console.log(humanReadable(359999))


expect(humanReadable(59)).toBe("00:00:59")


