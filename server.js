import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const employees = [];

function showMenu() {
  console.log("\n Employee Management System");
  console.log("1. Add Employee");
  console.log("2. List Employees");
  console.log("3. Remove Employee");
  console.log("4. Exit");
  rl.question("\nChoose an Option: ", handleInput);
}

function handleInput(choice) {
  switch (choice) {
    case "1":
      rl.question("\nEnter employee name: ", (name) => {
        rl.question("\nEnter employee ID: ", (id) => {
          employees.push({ id, name });
          console.log(`\n Employee ${name} (ID: ${id}) added.`);
          showMenu();
        });
      });
      break;

    case "2":
      console.log("\n Employee List ");
      if (employees.length === 0) {
        console.log("No employees found.");
      } else {
        employees.forEach((emp, index) => {
          console.log(`${index + 1}. ID: ${emp.id}, NAME: ${emp.name}`);
        });
      }
      showMenu();
      break;

    case "3":
      rl.question("\nEnter employee ID to remove: ", (id) => {
        const index = employees.findIndex((emp) => emp.id === id);
        if (index !== -1) {
          const removed = employees.splice(index, 1);
          console.log(`\n Employee (ID: ${removed[0].id}) removed.`);
        } else {
          console.log("\nEmployee not found.");
        }
        showMenu();
      });
      break;

    case "4":
      console.log("\nExiting... Goodbye!");
      rl.close();
      break;

    default:
      console.log("\nInvalid Option.");
      showMenu();
  }
}

showMenu();
