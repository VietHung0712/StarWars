export const $ = document.querySelector.bind(document);

export function toDegrees(radians) {
    return radians * (180 / Math.PI);
}
export function toRadians(degrees) {
    return degrees * Math.PI / 180;
}


