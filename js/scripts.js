var a = 0,
    h = 0;

function getTriangleArea(a, h) {
    if (a <= 0 && h <= 0) {
        alert('Nieprawidłowe dane');
    } else {
        return a * h / 2;
    }
}
console.log('Pole trójkąta wynosi: ' + getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(11, 17);
var triangle3Area = getTriangleArea(12, 19);

console.log('Pola trójkąta1: ' + triangle1Area);
console.log('Pola trójkąta2: ' + triangle2Area);
console.log('Pola trójkąta3: ' + triangle3Area);