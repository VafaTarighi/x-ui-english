const ONE_KB = 1024;
const ONE_MB = ONE_KB * 1024;
const ONE_GB = ONE_MB * 1024;
const ONE_TB = ONE_GB * 1024;
const ONE_PB = ONE_TB * 1024;

function sizeFormat(size) {
    if (size < ONE_KB) {
        return size.toFixed(0) + " B";
    } else if (size < ONE_MB) {
        return (size / ONE_KB).toFixed(2) + " KB";
    } else if (size < ONE_GB) {
        return (size / ONE_MB).toFixed(2) + " MB";
    } else if (size < ONE_TB) {
        return (size / ONE_GB).toFixed(2) + " GB";
    } else if (size < ONE_PB) {
        return (size / ONE_TB).toFixed(2) + " TB";
    } else {
        return (size / ONE_PB).toFixed(2) + " PB";
    }
}

function base64(str) {
    return Base64.encode(str);
}

function safeBase64(str) {
    return base64(str)
        .replace(/\+/g, '-')
        .replace(/=/g, '')
        .replace(/\//g, '_');
}

function formatSecond(second) {
    if (second < 60) {
        const sec = second.toFixed(0);
        return sec + (sec===1? ' second':' seconds');
    } else if (second < 3600) {
        const min = (second / 60).toFixed(0);
        return min + (min===1? ' minute':' minutes');
    } else if (second < 3600 * 24) {
        const h = (second / 3600).toFixed(0);
        return h + (h===1? ' hour':' hours');
    } else {
        const d = (second / 3600 / 24).toFixed(0);
        return d + (d===1? ' day':' days');
    }
}

function addZero(num) {
    if (num < 10) {
        return "0" + num;
    } else {
        return num;
    }
}

function toFixed(num, n) {
    n = Math.pow(10, n);
    return Math.round(num * n) / n;
}