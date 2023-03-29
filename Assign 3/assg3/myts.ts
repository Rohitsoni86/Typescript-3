interface employee{
    emp_id: number,
    emp_FName: string,
    emp_LName: string,
    emp_Address: string,
    emp_Salary: number
}


class employee{
    emp_id = 1
    emp_FName = "Rohit"
    emp_LName = "Soni"
    emp_Address = "DDDDD"
    emp_Salary = 565343

    constructor(ID: number, Fname: string, LName: string, U_Address: string, E_Salary: number) {
        this.emp_id = ID
        this.emp_FName = Fname
        this.emp_LName = LName
        this.emp_Address = U_Address
        this.emp_Salary = E_Salary
    }

    
}

const empoyee_1 = new employee(1,"Rajesh","Soni","myAddress Comes Here 1",105000)
const empoyee_2 = new employee(2,"Rahul","Soni","myAddress Comes Here 2",10000)
const empoyee_3 = new employee(3,"Tarun","Soni","myAddress Comes Here 3",10500)
const empoyee_4 = new employee(4,"Yogita","Soni","myAddress Comes Here 4",10600)
const empoyee_5 = new employee(5, "Radhe", "Soni", "myAddress Comes Here 5", 10700)


let employeeArr: employee[] = []

employeeArr.push(empoyee_1)
employeeArr.push(empoyee_2)
employeeArr.push(empoyee_3)
employeeArr.push(empoyee_4)
employeeArr.push(empoyee_5)

console.log(employeeArr)