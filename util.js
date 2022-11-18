
const RNG = new Math.seedrandom('super random seed.');

const genRandomPastel = () => {
    const r = 204 + Math.round(51 * RNG());
    const g = 204 + Math.round(51 * RNG());
    const b = 204 + Math.round(51 * RNG());
    return `rgb(${r},${g},${b})`;
};

const isVideoUrl = (url) => url.endsWith('.mp4') || url.endsWith('.mov');
const isPhotoUrl = (url) => url.endsWith('.jpg') || url.endsWith('.gif') || url.endsWith('.png');

const getMediaOffset = (index, layerCounts) => {
    let layerIndex = index;
    let layerNumber = 0;

    for(let layerCount of layerCounts) {
        if(layerIndex >= layerCount) {
            layerIndex -= layerCount;
            layerNumber++;
        }else {
            break;
        }
    }

    const total = layerCounts.reduce((acc, el) => acc + el);

    const [layerWidth, layerHeight] = getCollageDimensions(layerCounts[layerNumber]);
    const [totalWidth, totalHeight] = getCollageDimensions(total);

    const radian = (2 * Math.PI * layerIndex / layerCounts[layerNumber]) + Math.PI * (2 - layerNumber) / 5;

    const x = Math.sin(radian) * (layerWidth/2) + (totalWidth/2) - 250;
    const y = Math.cos(radian) * (layerHeight/2) + (totalHeight/2) - 250;

    return [Math.floor(x), Math.floor(y)];

};

const getCollageDimensions = (total) => {
    return [Math.ceil(Math.sqrt(total)) * 700,Math.ceil(Math.sqrt(total)) * 500];
};

// returns a list of counts representing the size of each layer
const getMediaLayerCounts = (total) => {
    if( total < 5) {
        return [total];
    }else if( total == 5) {
        return [4, 1];
    }else {
        return [total - 5, 4,1];
    }
};
