// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  var names = arr;
  //console.log(names);
  names.forEach(function(item, index) {
    if (item === "Waldo") {
    found(index);   // execute callback
    }
  });
}

function actionWhenFound(index) {
  console.log("Found Waldo at Index "+ index +"!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);