//*************************  Variables *********************************
let button = document.querySelector('#emp-form');
let div_contentA = document.querySelector('.contentA');
let div_contentM = document.querySelector('.contentM');
let div_contentD = document.querySelector('.contentD');
let div_contentF = document.querySelector('.contentF');
let global_array = [];

//*************************  Functions *********************************

checkLocalAndPush();

// checkLocalAndPush function

function checkLocalAndPush() {
    if (global_array.length == 0) {
        let emp = readFromLocal();
        if (emp.length != 0) {
            global_array = emp;
        }
    }
}
// Unique  Id Function
let a = 1000;

function unique() {
    // var id = new Date().getUTCMilliseconds();
    a++;
    return a;

Employee.prototype.random_id = function () {
    // var id = new Date().getUTCMilliseconds();
    a = a+1;
    return a;


}

//read local storage function
function readFromLocal() {
    let json_arr = localStorage.getItem('Employees');
    let norml_arr = JSON.parse(json_arr);
    if (norml_arr !== null) {
        return norml_arr;
    } else {
        return [];
    }

    img.setAttribute('src', `${this.image}`);
    div_icons.appendChild(img);

    h_name.textContent = `${this.f_name} ${this.l_name}`;
    div_info.appendChild(h_name);
    p_info.textContent = `Deparatment: ${this.department} - Level: ${this.level} - ${this.emp_id} `
    div_info.appendChild(p_info);
};

}
// Random Salary Function
function random_salary(level) {
    let min = 0;
    let max = 0;
    if (level === "Junior") {
        min = 500;
        max = 1000;
    } else if (level === "Senior") {
        min = 1000;
        max = 1500;
    } else if (level === "Mid-Sinior") {
        min = 1500;
        max = 2000;
    }
    let sal = Math.floor(Math.random() * (max - min + 1) + min);
    let sal_with_tax = sal * 7.5 % - sal;
    return sal_with_tax;
}

// render Function 
function render(arr) {
    div_contentA.innerHTML = "";
    div_contentD.innerHTML = "";
    div_contentM.innerHTML = "";
    div_contentF.innerHTML = "";


    // separate department section
    for (let i = 0; i < arr.length; i++) {
        let div_cards = document.createElement('div');
        let div_icons = document.createElement('div');
        let div_info = document.createElement('div');
        let h_name = document.createElement('h3');
        let img = document.createElement('img');
        let p_info = document.createElement('p')
        div_cards.setAttribute('class', 'card');
        div_icons.setAttribute('class', 'icon');
        div_info.setAttribute('class', 'info');
        div_cards.appendChild(div_icons);
        div_cards.appendChild(div_info);
        switch (arr[i].obj_dept) {
            case "Adminstration": div_contentA.appendChild(div_cards);
                break;
            case "Marketing": div_contentM.appendChild(div_cards);
                break;
            case "Development": div_contentD.appendChild(div_cards);
                break;
            case "Finance": div_contentF.appendChild(div_cards);
                break;
        }
        //Determine the image for users
        img.setAttribute('src', `${arr[i].obj_image}`);
        div_icons.appendChild(img);

        h_name.textContent = `${arr[i].obj_f_name} ${arr[i].obj_l_name}`;
        div_info.appendChild(h_name);
        p_info.textContent = `Deparatment: ${arr[i].obj_dept} - Level: ${arr[i].obj_level} - ${arr[i].obj_id} `
        div_info.appendChild(p_info);
    }
};

// Event Function
function handleSubmit(event) {
    event.preventDefault();
    let first_name = event.target.firstName.value;
    let last_name = event.target.lastName.value;
    let dept = event.target.department.value;
    let level = event.target.level.value;
    let image = event.target.image.value;

    let id = unique();
    let salary = random_salary(level);
    //Save value in array of object
    let obj_e = { obj_id: id, obj_f_name: first_name, obj_l_name: last_name, obj_dept: dept, obj_level: level, obj_image: image, obj_salary: salary };
    global_array.push(obj_e);
    //Convert array of object to json format
    let json_global_array = JSON.stringify(global_array);
    //Save array in local storage
    localStorageSet(json_global_array);
    render(readFromLocal());

}

// local_storage_git function   
function localStorageSet(set_array) {
    localStorage.setItem('Employees', set_array);
}


//************************** event and Call Functions********************

render(readFromLocal());

button.addEventListener('submit', handleSubmit);

