export const tasks = [];

export function addTask(task) {
    try {
        if (!task.title || !task.dueTime || !task.priority) {
            throw new Error("Task must have a title, due time, and priority!");
        }
        tasks.push(task);
        console.log("Task added successfully!");
        displayTasks(tasks, 'addTaskOutput'); // Display tasks in the 'addTaskOutput' section
    } catch (error) {
        console.error(error.message);
    }
}

export function sortTasksByPriority() {
    tasks.sort((a, b) => {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    console.log("Tasks sorted by priority:");
    displayTasks(tasks, 'genreOutput'); // Display tasks in the 'genreOutput' section
}

export function getTasksDueWithin(minutes) {
    const now = 0; // Assuming now = 0 for simplicity
    const dueTasks = tasks.filter(task => task.dueTime <= now + minutes);
    console.log(`Tasks due within ${minutes} minutes:`);
    displayTasks(dueTasks, 'dueTasksOutput'); // Display due tasks in the 'dueTasksOutput' section
    return dueTasks;
}

export function displayTasks(taskList, outputDivId) {
    const outputDiv = document.getElementById(outputDivId);
    outputDiv.innerHTML = ''; // Clear previous output
    taskList.forEach(task => {
        outputDiv.innerHTML += `<p>- ${task.title} (Due in ${task.dueTime} minutes, Priority: ${task.priority})</p>`;
    });
}

export function scheduleReminders() {
    const outputDiv = document.getElementById('reminderOutput');
    outputDiv.innerHTML = ''; // Clear previous reminders

    tasks.forEach(task => {
        const reminderTime = task.dueTime * 60000; // Convert minutes to milliseconds
        outputDiv.innerHTML += `<p>Reminder scheduled for: "${task.title}" (Due in ${task.dueTime} minutes)</p>`;

        setTimeout(() => {
            outputDiv.innerHTML += `<p><strong>Reminder:</strong> Task "${task.title}" is due now!</p>`;
        }, reminderTime);
    });

    if (tasks.length === 0) {
        outputDiv.innerHTML = `<p>No tasks available to schedule reminders.</p>`;
    }
}

export function clearOutput(sectionId) {
    document.getElementById(sectionId).innerHTML = ''; // Clear the specified output section
}