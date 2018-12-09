function sum() {
    var inputs=Array.from(arguments);
    var objInut=Object.assign({}, inputs);
    console.log('objInut ', objInut)
    console.log(arguments)
    console.log('inputs ', inputs)
}
sum(1,2,3,4)
// objInut  { '0': 1, '1': 2, '2': 3, '3': 4 }
// [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
// inputs  [ 1, 2, 3, 4 ]