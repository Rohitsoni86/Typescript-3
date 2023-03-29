var employee: { emp_id: number, emp_FName: string, emp_LName: string, emp_Address: string, emp_Salary: number }[] = [
  
  { emp_id: 1, emp_FName: "Rohit", emp_LName: "Soni", emp_Address: "DDDDD", emp_Salary: 565343 },
  
  { emp_id: 2, emp_FName: "Roh2", emp_LName: "Soni2", emp_Address: "DDDDD2", emp_Salary: 5655343 },
  
  { emp_id: 3, emp_FName: "Roh3", emp_LName: "Soni3", emp_Address: "DDDDD3", emp_Salary: 565334343 },
  
  { emp_id: 4, emp_FName: "Roh4", emp_LName: "Soni4", emp_Address: "DDDDD4", emp_Salary: 5632345343 },
]



 var mytable = document.getElementById("employeeTable") as HTMLInputElement;

 var x = `<tr class="table-dark">
        <th>Index</th>
        <th>ID</th>
        <th>Emp Name</th>
        <th>Address</th>
        <th>Emp Salary</th>
        <th>Delete User</th>
      </tr>`
    
    mytable.innerHTML = x

function gettable() {
   

    employee.forEach(function (value, index) {
        // console.log(value)
        // console.log(index)
        
      x = `<tr class="table-light">
     <td>${index}</td>
     <td>${value.emp_id}</td>
     <td>${value.emp_FName + value.emp_LName}</td>
     <td>${value.emp_Address}</td>
     <td>${value.emp_Salary}</td>
     <td><button class="deleteBTN" id="${value.emp_id}" onclick="delete_Emp(${index})">Delete</button></td>
     </tr>`

      mytable.innerHTML += x
      
      // let dleID = document.getElementById("${value.emp_id}")

    })

}

gettable()


function delete_Emp(index) {

  // console.log(index.emp_id)
  // let empIDDD = index
  // console.log(employee)
  // let deleElemArray =  employee.splice(index)
  // console.log(deleElemArray)
  console.log(employee)
  let deleElemArray =  employee.splice(index,1)
  console.log(deleElemArray)
  console.log(employee)
  gettable()
  }

var EmpID_G;
var Emp_FNAME_G;
var Emp_LNAME_G;
var Emp_Address_G;
var Emp_Salary_G;

function addUSER() {
    EmpID_G = document.getElementById("emp_id") as HTMLInputElement
    Emp_FNAME_G = document.getElementById("fname") as HTMLInputElement
    Emp_LNAME_G = document.getElementById("lname") as HTMLInputElement
    Emp_Address_G = document.getElementById("emp_Address") as HTMLInputElement
    Emp_Salary_G = document.getElementById("Emp_Salary") as HTMLInputElement

    // console.log(EmpID_G.value)
    // console.log(Emp_FNAME_G.value)
    // console.log(Emp_LNAME_G.value)
    // console.log(Emp_Address_G.value)
    // console.log(Emp_Salary_G.value)

    employee.push({ emp_id: EmpID_G.value, emp_FName: Emp_FNAME_G.value, emp_LName: Emp_LNAME_G.value, emp_Address: Emp_Address_G.value , emp_Salary:  Emp_Salary_G.value })


    gettable()

    return false

}

// var searchINDEX_Input = document.getElementById("searchINDEX_Input") as HTMLInputElement

let indexINPUT = document.querySelector('#searchINDEX_Input') as HTMLInputElement


indexINPUT?.addEventListener('input', function () {

  console.log(this.value)

  let index = parseInt(this.value);

  let newFilteredArray = employee.filter((value,indexof,employee) => {
    
    return indexof == index

  })

  console.log(newFilteredArray)
  
  

  mytable.innerHTML = `<tr class="table-dark">
        <th>Index</th>
        <th>ID</th>
        <th>Emp Name</th>
        <th>Address</th>
        <th>Emp Salary</th>
        <th>Delete User</th>
      </tr>`
  

  if (indexINPUT.value == "") {
     gettable()
  }

  else {
 newFilteredArray.forEach(function (value, index) {
    console.log("Value :  ", value)
   x = `<tr class="table-light">
     <td>${index}</td>
     <td>${value.emp_id}</td>
     <td>${value.emp_FName + value.emp_LName}</td>
     <td>${value.emp_Address}</td>
     <td>${value.emp_Salary}</td>
     <td><button class="deleteBTN" id="${value.emp_id}" onclick="delete_Emp(${index})">Delete</button></td>
     </tr>`

      mytable.innerHTML += x


   })
  }
 

})



let searchbyID_input = document.querySelector('#searchID_Input') as HTMLInputElement


searchbyID_input.addEventListener('input', function () {


  var newFilteredArray_with_ID;

  let empIDD = parseInt(this.value);
  // console.log(empIDD)
  // console.log(typeof this.value)
 
  // if (isNaN(empIDD)) {
  //   gettable()
  // }

 if (searchbyID_input.value == "") {
   alert("Enter Correct Emp ID")
    mytable.innerHTML = `<tr class="table-dark">
        <th>Index</th>
        <th>ID</th>
        <th>Emp Name</th>
        <th>Address</th>
        <th>Emp Salary</th>
        <th>Delete User</th>
      </tr>`
   gettable()
   
  }

  else if (empIDD != 0) {
    
    newFilteredArray_with_ID = employee.filter(function (EMP_element) {
      return EMP_element.emp_id == empIDD
      
    })

     mytable.innerHTML = `<tr class="table-dark">
        <th>Index</th>
        <th>ID</th>
        <th>Emp Name</th>
        <th>Address</th>
        <th>Emp Salary</th>
        <th>Delete User</th>
      </tr>`
    
    
    newFilteredArray_with_ID.forEach(function (value, index) {
    console.log("Value :  ", value)
   x = `<tr class="table-light">
     <td>${index}</td>
     <td>${value.emp_id}</td>
     <td>${value.emp_FName + value.emp_LName}</td>
     <td>${value.emp_Address}</td>
     <td>${value.emp_Salary}</td>
     <td><button class="deleteBTN" id="${value.emp_id}" onclick="delete_Emp(${index})">Delete</button></td>
     </tr>`

      mytable.innerHTML += x


   })
    
    //  console.log(newFilteredArray_with_ID)



  }

  // let newFilteredArray = employee.filter((value,indexof,employee) => {
    
  //   return indexof == empIDD

  // })

  // console.log(newFilteredArray)

})


























// function filterBYIndex() {

//   var searchINDEX_Input = document.getElementById("searchINDEX_Input") as HTMLInputElement
//   console.log(searchINDEX_Input.value)

// }



// array.forEach(function(currentValue, index, arr), thisValue)
// employee.forEach(function (value, index ) {
//   console.log(value)
//   console.log(index)
// })
// employee.push({ emp_id: 5, emp_FName: "Rohit5", emp_LName: "Soni5", emp_Address: "DDDDD5", emp_Salary: 56534355 })
// console.log(employee[4])



