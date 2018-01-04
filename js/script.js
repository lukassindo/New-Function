
function getTriangleArea(a,h) {
	if ( (a > 0) && (h > 0) ) {
	var area = a*h/2;
} 
	else  {
	alert('Nieprawidłowe dane');
	}
    return area;
}

console.log(getTriangleArea(10,6));

var Triangle1Area = getTriangleArea(3,5);
var Triangle2Area = getTriangleArea(8,9);
var Triangle3Area = getTriangleArea(87,2);



