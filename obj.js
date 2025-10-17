let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for each function 
arr.forEach(function (el, ind) { //method
  console.log(el, ind);
});
// Desc:create for each function - Function call as a parameter - then create new prametter(el) inside function- # This function is treated as a method.

arr.forEach((el, ind) => console.log(el, ind)); // # el- element[arr value] # ind- index[index number]

// ------------------------------------
