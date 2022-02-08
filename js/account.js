//*************************  Variables *********************************
let main_table = document.createElement('table');
let thead_class = document.querySelector('.tbody');
let tfoot_class = document.querySelector('.tfoot');

//*************************  Functions *********************************


//read local storage function
function readFromLocal() {
    let json_arr = localStorage.getItem('Employees');
    let norml_arr = JSON.parse(json_arr);
    if (norml_arr !== null) {
        return norml_arr;
    } else {
        return [];
    }
}
// render function
function render(arr) {
    let all_number = 0;
    let all_salary = 0;
    let all_average = 0;
    let total_employeeA = 0;
    let total_employeeM = 0;
    let total_employeeD = 0;
    let total_employeeF = 0;
    let average_salaryA = 0;
    let average_salaryM = 0;
    let average_salaryD = 0;
    let average_salaryF = 0;
    let total_salaryA = 0;
    let total_salaryM = 0;
    let total_salaryD = 0;
    let total_salaryF = 0;
    main_table.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i].obj_dept) {
            case "Adminstration":
                total_salaryA += arr[i].obj_salary;
                total_employeeA += 1;
                break;
            case "Marketing":
                total_salaryM += arr[i].obj_salary;
                total_employeeM += 1;
                break;
            case "Development":
                total_salaryD += arr[i].obj_salary;
                total_employeeD += 1;

                break;
            case "Finance":
                total_salaryF += arr[i].obj_salary;
                total_employeeF += 1;

                break;
        }

    }
    all_number = total_employeeA + total_employeeF + total_employeeD + total_employeeM;
    all_salary = total_salaryA + total_salaryF + total_salaryD + total_salaryM;
    all_average = Math.round(all_salary / all_number);
    showFooter(all_number, all_salary, all_average);
    average_salaryA = Math.round(total_salaryA / total_employeeA);
    average_salaryM = Math.round(total_salaryM / total_employeeM);
    average_salaryD = Math.round(total_salaryD / total_employeeD);
    average_salaryF = Math.round(total_salaryF / total_employeeF);
    if (average_salaryA.toString() === "NaN") {
        average_salaryA = 0;

    }
    if (average_salaryM.toString() === "NaN") {
        average_salaryM = 0;

    }
    if (average_salaryF.toString() === "NaN") {
        average_salaryF = 0;

    }
    if (average_salaryD.toString() === "NaN") {
        average_salaryD = 0;

    }
    showContent("Adminstration", total_employeeA, total_salaryA, average_salaryA);
    showContent("Marketing", total_employeeM, total_salaryM, average_salaryM);
    showContent("Development", total_employeeD, total_salaryD, average_salaryD);
    showContent("Finance", total_employeeF, total_salaryF, average_salaryF);
}

// show function
function showContent(department, emp_number, salary, aver_salary) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    td1.textContent = department;
    td2.textContent = emp_number;
    td3.textContent = salary;
    td4.textContent = aver_salary;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    thead_class.appendChild(tr);
}

// Show footer tabel 
function showFooter(all_numb, all_sal, all_aver) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    td1.textContent = "Total Count";
    td2.textContent = all_numb;
    td3.textContent = all_sal;
    td4.textContent = all_aver;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tfoot_class.appendChild(tr);
}
render(readFromLocal());