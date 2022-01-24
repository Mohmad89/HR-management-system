function employee_generate(employee_id, full_name, department, level) {
    this.employee_id = employee_id;
    this.full_name = full_name;
    this.department = department;
    this.level = level;
    this.salary = "";
    this.image = `assets/${employee_id}.jpg`;
}

// Random Salary Function
employee_generate.prototype.random_salary = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// DOM Function
let main = document.querySelector(".main-section");
employee_generate.prototype.render = function () {
    let div_element = document.createElement("div");
    let h_element = document.createElement("h3");
    let pre_element = document.createElement("pre")
    let br_element = document.createElement("br");
    let pre_text = document.createTextNode(`    Id Is : ${this.employee_id} 
    Department : ${this.department} 
    Your Level : ${this.level} 
    Your Salary : ${this.salary}`);
    pre_element.appendChild(pre_text);
    let h_text = document.createTextNode(`* ${this.full_name}`);
    h_element.appendChild(h_text);
    div_element.appendChild(h_element);
    div_element.appendChild(pre_element);
    main.appendChild(div_element);
    main.appendChild(br_element);
    main.appendChild(document.createElement("br"));
}

// First Employee
const first_employee = new employee_generate(1000, "Mohammad Adarbeh", "Administration", "Senior");
first_employee.salary = first_employee.random_salary(1500, 2000);
first_employee.render();

// secound Employee
const secound_employee = new employee_generate(1001, "Lana Ali", "Marketing", "Senior");
secound_employee.salary = secound_employee.random_salary(1500, 2000);
secound_employee.render();

// Third Employee
const third_emp = new employee_generate(1002, "Tamara Ayoup", "Finance", "Senior");
third_emp.salary = third_emp.random_salary(1500, 2000);
third_emp.render();

// fourth_emp
const fourth_emp = new employee_generate(1003, "Safi Walid", "Adminstration", "Mid-Senior");
fourth_emp.salary = fourth_emp.random_salary(1000, 1500);
fourth_emp.render();

// fifth_emp
const fifth_emp = new employee_generate(1004, "Omar Zaid", "Development", "Senior");
fifth_emp.salary = fifth_emp.random_salary(1500, 2000);
fifth_emp.render();

// sexth_emp
const sexth_emp = new employee_generate(1005, "Rana Saleh", "Development", "Junior");
sexth_emp.salary = sexth_emp.random_salary(500, 1000);
sexth_emp.render();

// seventh_emp
const seventh_emp = new employee_generate(1006, "Hadi Ahmad", "Finance", "Mid-Senior");
seventh_emp.salary = seventh_emp.random_salary(1000, 1500);
seventh_emp.render();



