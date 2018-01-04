

function getTriangleArea(a,h) {
	if ( (a > 0) && (h > 0) ) {
		return a*h/2;
	} 
	else {
		console.log('Nieprawidłowe dane');
	}
}

console.log(getTriangleArea(10,6));

var Triangle1Area = getTriangleArea(3,5);
var Triangle2Area = getTriangleArea(8,0);
var Triangle3Area = getTriangleArea(87,2);

console.log('Powierzchnia trójkąta pierwszego: ' + Triangle1Area);
console.log('Powierzchnia trójkąta drugiego: ' + Triangle2Area);
console.log('Powierzchnia trójkąta trzeciego: ' + Triangle3Area);


