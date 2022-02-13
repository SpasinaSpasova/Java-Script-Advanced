class Company{
    constructor(){
        //keep all departments with array for every emploeey
        this.departments=[]; 
    }
    addEmployee(name, salary, position, department){
        /*•	If one of the passed parameters is an empty string (""), undefined or null, 
        this function should throw an error with the following message: "Invalid input!"*/ 

        if(name==''||name==undefined||name==null||
        salary==''||salary==undefined||salary==null||
        position==''||position==undefined||position==null||
        department==''||department==undefined||department==null){
            throw new Error("Invalid input!");
        }

        //•	If salary is less than 0, 
        //this function should throw an error with the following message: "Invalid input!"
        if(Number(salary)<0){
            throw new Error("Invalid input!");
        }
        /*•	If the new employee is hired successfully, 
        you should add him into the departments object with the current name 
        of the department and return the following message:
         `New employee is hired. Name: {name}. Position: {position}` */

         if (!this.departments[department]) {
             //every department has employees
            this.departments[department] = [];
        }
        console.log(this.departments[department]);
        this.departments[department].push({name, salary, position});
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
    bestDepartment() {
        let bestDepartmentInAllDepartments = '';
        let maxSalary = 0;
  
        //one by one search for best deparment in departments
        for (const [key, value] of Object.entries(this.departments)) {
            let salary = 0;
            value.forEach(e => {
                salary += e.salary;
            })
            salary = salary / value.length;
            if (salary > maxSalary) {
                bestDepartmentInAllDepartments = key;
                maxSalary = salary;
            }
        };
        if (bestDepartmentInAllDepartments) {
            let result = `Best Department is: ${bestDepartmentInAllDepartments}\nAverage salary: ${maxSalary.toFixed(2)}\n`;
  
            //for best deparment return all employees in 
            Object.values(this.departments[bestDepartmentInAllDepartments]).sort((a, b) => b.salary - a.salary
                || a.name.localeCompare(b.name)).
                forEach(e => {
                    let currentEmpl = `${e.name} ${e.salary} ${e.position}\n`;
                    result += currentEmpl;
                })
            return result.trim();
        }
    }
  
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
