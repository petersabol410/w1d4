var words = ["ground", "control", "to", "major", "tom"];

function map(list, mapper) {
  var output = [];
  list.forEach(function(i) {
  return output.push(mapper(i));
  });
  console.log(output);
}


map (words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});