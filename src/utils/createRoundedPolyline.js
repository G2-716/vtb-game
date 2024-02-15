import {lineAngle, pointTranslate, lineLength} from 'geometric'

export function createRoundedPolyline(points, radius) {
    if (points.length < 2) return null;

    let out = "M" + points[0],
        prev = points[0];

    for (let i = 1, l = points.length; i < l; i++){
        const curr = points[i],
            a = lineAngle([prev, curr]);

        if (i > 1){
            out += `Q${prev} ${pointTranslate(prev, a, radius)}`;
        }

        out += `L${i === points.length - 1 ? curr : pointTranslate(prev, a, lineLength([prev, curr]) - radius)}`;

        prev = curr;
    }

    return out;
}