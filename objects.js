let EmployeeDB = {
    list : [],

    add : (employee) => {
        list.push(employee);
    },
    update : (employee, employee2) => {
        let a = list.indexOf(employee);
        list[a] = employee2;
    },
    delete : (employee) => {
        let a = list.indexOf(employee);
        list[a] = undefined;
    },
    read : (employee) => {
        let a = list.indexOf(employee);
        console.log(list[a]);
    }, 
    cap : () => {
        for (const employee in EmployeeDB.list) {
            if (typeof employee != 'undefined') {
                employee.name = employee.name.toUpperCase();
            }
        }
    },
    down : () => {
        for (const employee in EmployeeDB.list) {
            if (typeof employee != 'undefined') {
                employee.name = employee.name.toLowerCase();
            }
        }
    }
}


let employee1 = {    name : 'John',    post : 'Cheff',       department : 'Police'    }
let employee2 = {    name : 'Jack',    post : 'Lawyer',      department : 'Judge'     }
let employee3 = {    name : 'Chris',   post : 'Zam Cheff',   department : 'Police'    }
EmployeeDB.add(employee1);
EmployeeDB.add(employee2);
EmployeeDB.add(employee3);


let employee4 = {    name : 'Chris',   post : 'Glav Cheff',   department : 'Police'    }
EmployeeDB.update(employee3, employee4);

const readAll = () => {
    for (const employee in EmployeeDB.list) {
        if (typeof employee != 'undefined') {
            console.log(employee);
        }
    }
}

const duplicate = (ob) => {
    let rez;
    Object.assign(rez, ob);
    return rez;
}

let clone = duplicate(EmployeeDB);

const sliyanie = (ob1, ob2) => {
    return Object.assign(ob1, ob2);   
}

const unique = (EmployeeDB) => {
    let s = new Set();
    for (let [department] in EmployeeDB.list) {
        s.add(department);
    }
    for (let item in s) {
        console.log(item);
    }
}

const compare = (ob1, ob2, name, post, department) => {
    if (name) {
        if (ob1.name == ob2.name) {
            console.log("Names are equal");
        }
        else {
            console.log("Names are NOT equal");
        }
    }
    if (post) {
        if (ob1.post == ob2.post) {
            console.log("Posts are equal");
        }
        else {
            console.log("Posts are NOT equal");
        }
    }
    if (department) {
        if (ob1.department == ob2.department) {
            console.log("Department are equal");
        }
        else {
            console.log("Departments are NOT equal");
        }
    }
}
compare(employee1, employee2, 1, 0, 1); // 1 - учитываем 0 - не учитываем при сравнении