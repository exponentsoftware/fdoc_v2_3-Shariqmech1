const projects = [
  {
    name: "WebApp",
    client: "Ford",
    tasks: [
      {
        title: "serviceApp",
        assignee: "john",
        status: "underDevlopement",
        dueDate: "2023-05-20",
      },
      {
        title: "mobileApp",
        assignee: "rick",
        status: "Completed",
        dueDate: "2023-05-18",
      },
    ],
  },
  {
    name: "ShopingApp",
    client: "Amazon",
    tasks: [
      {
        title: "modification",
        assignee: "steve",
        status: "underDevlopement",
        dueDate: "2023-05-22",
      },
      {
        title: "AddFunctionality",
        assignee: "jim",
        status: "Completed",
        dueDate: "2023-05-19",
      },
    ],
  },
];

function findOverdueTasks(projects, specifiedDate) {
  const overdueTasks = [];

  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];

    for (let j = 0; j < project.tasks.length; j++) {
      const task = project.tasks[j];
      if (task.dueDate < specifiedDate) {
        overdueTasks.push(task);
      }
    }
  }

  return overdueTasks;
}

const specifiedDate = "2023-05-19";
const overdueTasks = findOverdueTasks(projects, specifiedDate);
console.log(overdueTasks);

// Assigns a task with a specified title to an employee with a given name,
//  only if the employee and task exist

function assignTaskToEmployee(projects, taskTitle, employeeName) {
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];

    for (let j = 0; j < project.tasks.length; j++) {
      const task = project.tasks[j];

      if (task.title === taskTitle && task.assignee === employeeName) {
        task.assignee = employeeName;
        console.log(
          `Task "${taskTitle}" assigned to employee "${employeeName}".`
        );
        return;
      }
    }
  }

  console.log(`Task "${taskTitle}" or employee "${employeeName}" not found.`);
}
assignTaskToEmployee(projects, "serviceApp", "steve");
assignTaskToEmployee(projects, "mobileApp", "bob");

// Updates a task's status in a specified project only if the task and
// project exist. This function should be able to update the task's status

function updateTaskStatus(projects, projectName, taskTitle, newStatus) {
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];

    if (project.name === projectName) {
      for (let j = 0; j < project.tasks.length; j++) {
        const task = project.tasks[j];

        if (task.title === taskTitle) {
          // Task exists, update the status
          task.status = newStatus;
          console.log(
            `Task "${taskTitle}" status updated to "${newStatus}" in project "${projectName}".`
          );
          return;
        }
      }

      console.log(`Task "${taskTitle}" not found in project "${projectName}".`);
      return;
    }
  }

  console.log(`Project "${projectName}" not found.`);
}
