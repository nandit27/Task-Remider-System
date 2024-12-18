import { addTask, getTasksDueWithin, sortTasksByPriority, scheduleReminders, clearOutput } from "./tasks.js";

export function handleAddTask() {
    const title = document.getElementById('title').value;
    const dueTime = parseInt(document.getElementById('duetime').value);
    const priority = document.getElementById('priority').value;
    addTask({ title, dueTime, priority });
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button[onclick="handleAddTask()"]').onclick = handleAddTask;
    document.querySelector('button[onclick="sortTasksByPriority()"]').onclick = sortTasksByPriority;
    document.querySelector('button[onclick="getTasksDueWithin(parseInt(document.getElementById(\'minutesInput\').value))"]').onclick = () => {
        const minutes = parseInt(document.getElementById('minutesInput').value);
        getTasksDueWithin(minutes);
    };
    document.querySelector('button[onclick="clearOutput(\'genreOutput\')"]').onclick = () => clearOutput('genreOutput');

    window.handleAddTask = handleAddTask;
    window.sortTasksByPriority = sortTasksByPriority;
    window.getTasksDueWithin = getTasksDueWithin;
    window.scheduleReminders = scheduleReminders;
    window.clearOutput = clearOutput;
});