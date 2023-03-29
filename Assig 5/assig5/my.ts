var employee: { emp_id: number, emp_FName: string, emp_LName: string, emp_city: string, emp_DOJ: string }[] = [
  
  { emp_id: 1, emp_FName: "Rohit", emp_LName: "Soni", emp_city: "Kota", emp_DOJ: "01-04-2019" },
  
  { emp_id: 2, emp_FName: "Roh2", emp_LName: "Soni2", emp_city: "Vadodara", emp_DOJ: "01-02-2016" },
  
  { emp_id: 3, emp_FName: "Roh3", emp_LName: "Soni3", emp_city: "Mumbai", emp_DOJ: "01-07-2013" },
  
  { emp_id: 4, emp_FName: "Roh4", emp_LName: "Soni4", emp_city: "Jhalawar", emp_DOJ: "01-04-2022" },
  
  { emp_id: 5, emp_FName: "Roh5", emp_LName: "Soni5", emp_city: "Guna", emp_DOJ: "01-02-2023" },
]




let indexINPUT = document.querySelector('#searchINDEX_Input') as HTMLInputElement


indexINPUT?.addEventListener('input', function () {

    console.log(this.value)

    let index = parseInt(this.value);

    let newFilteredArray = employee.filter((value, indexof, employee) => {
    
        return indexof == index

    })

    console.log(newFilteredArray)
}
    
    
)


let searchbyID_input = document.querySelector('#searchID_Input') as HTMLInputElement

searchbyID_input.addEventListener('input', function () {

    var newFilteredArray_with_ID;

    let empIDD = parseInt(this.value);
    
    newFilteredArray_with_ID = employee.filter(function (EMP_element) {
        return EMP_element.emp_id == empIDD
      
    })

    console.log(newFilteredArray_with_ID)

})


