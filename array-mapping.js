var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
//console.log(input);
//console.log(input[0].x, input[0].y);

var result = input.map(function(index) {
  //console.log(index);
  return (Math.sqrt((index.x * index.x) + (index.y * index.y)));

});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);