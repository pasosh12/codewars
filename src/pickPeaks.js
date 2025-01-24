function pickPeaks(arr) {
    let peaks = {pos: [], peaks: []};
    let plateauStart = null

    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1] ) {
            peaks.peaks.push(arr[i]);
            peaks.pos.push(i);
        }
        else if (arr[i] > arr[i - 1] && arr[i] === arr[i + 1]) {
            // Начало плато
            plateauStart = i;
        } else if (arr[i] === arr[i - 1] && arr[i] > arr[i + 1] && plateauStart !== null) {
            // Конец плато
            peaks.pos.push(plateauStart);
            peaks.peaks.push(arr[plateauStart]);
            plateauStart = null;
        } else if (arr[i] < arr[i + 1]) {
            // Если значения уменьшаются, сбрасываем начало плато
            plateauStart = null;
        }
    }

    return {'pos': [...peaks.pos], 'peaks': [...peaks.peaks]};
}

console.log(pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1])); //{ pos: [ 3, 7 ], peaks: [ 6, 3 ] }
console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1])); // {pos:[3,7,10], peaks:[6,3,2]}
console.log(pickPeaks([2,1,3,1,2,2,2,2,1])); // {pos:[2,4], peaks:[3,2]}
console.log(pickPeaks([2,1,3,1,2,2,2,2])); // {pos:[2], peaks:[3]}