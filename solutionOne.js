// Create a function that takes an array of `companies` as input. Each company object contains a name,
// an array of employee objects, and a nested object representing departments.
// Employee objects have a name, role, and department.
// The function should return a new array of companies with the same structure
// but with an additional property `numEmployees` and a modified `departments` o
// bject containing an array of department names and the number of employees in each department.

const companies = [
  {
    name: "Company 1",
    employees: [
      { name: "Alice", role: "Developer", department: "Engineering" },
      { name: "Bob", role: "Manager", department: "Engineering" },
      { name: "Charlie", role: "Designer", department: "Design" },
    ],
  },
  {
    name: "company 2",
    employees: [
      { name: "peter", role: "HOD", department: "Quality" },
      { name: "mark", role: "Developer", department: "Quality" },
      { name: "sam", role: "Designer", department: "Design" },
    ],
  },
  {
    name: "company 3",
    employees: [
      { name: "kane", role: "Hr", department: "human" },
      { name: "johnson", role: "Manager", department: "design" },
      { name: "david", role: "Designer", department: "Design" },
    ],
  },
];

function processCompanies(companies) {
  for (let i = 0; i < companies.length; i++) {
    const company = companies[i];
    console.log(companies[i]);
    // let employees = companies.employees;
    let employees = company.employees;
    for (let j = 0; j < employees.length; j++) {
      console.log(employees);

      let numOfEmployees = employees.length;
      let newProperty = "numEmployees";

      for (let i = 0; i < companies.length; i++) {
        employees[i][newProperty] = numOfEmployees;

        const modifiedCompanies = []; //for modified cdepartment

        for (let i = 0; i < companies.length; i++) {
          const company = companies[i];
          const departments = {};

          for (let j = 0; j < company.employees.length; j++) {
            const employee = company.employees[j];
            const department = employee.department;

            if (department in departments) {
              departments[department]++;
            } else {
              departments[department] = 1;
            }
          }

          const modifiedCompany = { departments };
          modifiedCompanies.push(modifiedCompany);
        }

        console.log(modifiedCompanies);
      }
    }
  }
}

processCompanies(companies);
