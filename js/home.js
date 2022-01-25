//*************************  Variables *********************************
let button = document.querySelector('#emp-form');
let div_contentA = document.querySelector('.contentA');
let div_contentM = document.querySelector('.contentM');
let div_contentD = document.querySelector('.contentD');
let div_contentF = document.querySelector('.contentF');

//*************************  Functions *********************************

// Employee Constructor 
function Employee(f_name, l_name, department, level, image) {
    this.emp_id = 0;
    this.f_name = f_name;
    this.l_name = l_name;
    this.department = department;
    this.level = level;
    this.image = image;
}

// Unique  Id Function
Employee.prototype.random_id = function () {
    var id = new Date().getUTCMilliseconds();
    return id;
}

// render Function 
Employee.prototype.render = function () {
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

    switch (this.department) {
        case "Adminstration": div_contentA.appendChild(div_cards);
            break;
        case "Marketing": div_contentM.appendChild(div_cards);
            break;
        case "Development": div_contentD.appendChild(div_cards);
            break;
        case "Finance": div_contentF.appendChild(div_cards);
            break;

    }

    if (this.image === "Mael")
        img.setAttribute('src', `../assets/${this.image}.png`);
    else if (this.image === "Female")
        img.setAttribute('src', `../assets/${this.image}.png`);
    div_icons.appendChild(img);

    h_name.textContent = `${this.f_name} ${this.l_name}`;
    div_info.appendChild(h_name);
    p_info.textContent = `Deparatment: ${this.department} - Level: ${this.level} - ${this.emp_id} `
    div_info.appendChild(p_info);
};



// Event Function
function handleSubmit(event) {
    event.preventDefault();
    let first_name = event.target.firstName.value;
    let last_name = event.target.lastName.value;
    let dept = event.target.department.value;
    let level = event.target.level.value;
    let image = event.target.image.value;
    let employee_obj1 = new Employee(first_name, last_name, dept, level, image)

    employee_obj1.emp_id = employee_obj1.random_id();
    employee_obj1.render();
    console.log(employee_obj1)
}


//************************** event and Call Functions********************
button.addEventListener('submit', handleSubmit);

