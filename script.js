/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
 let developers = arr.filter(employee => employee.profession =="developer")
 developers.map(employee => console.log(employee))
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(employee => {
    if (employee.profession =="developer")
    {console.log(employee)}
  });
}

function addData() {
  //Write your code here, just console.log  
  let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" }
  arr.push(newEmployee)
  console.log(newEmployee)
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter(employee => employee.profession != "admin")
  console.log(arr)
  }

function concatenateArray() {
  //Write your code here, just console.log
  let newArray = [
    { id: 5, name: "A", age: "22", profession: "xyz" },
    { id: 6, name: "B", age: "25", profession: "abc" },
    { id: 7, name: "C", age: "23", profession: "sjk" }
  ];
  newArray.forEach(newArray => {arr.push(newArray);});
console.log(arr);
}



