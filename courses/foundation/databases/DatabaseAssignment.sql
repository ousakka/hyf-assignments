--1 How many tasks are in the task table?
SELECT Count(*) as total FROM task;
--2 How many tasks in the task table do not have a valid due date?
SELECT count(*) as due_date_not_valid from task where due_date is NULL;
--3 Find all the tasks that are marked as done.
SELECT * FROM task WHERE status_id=3;
--4 Find all the tasks that are not marked as done.
SELECT * FROM task WHERE status_id =1 OR status_id =2;
--5 Get all the tasks, sorted with the most recently created first.
SELECT * FROM task ORDER BY created DESC;
--6 Get the single most recently created task.
SELECT * FROM task ORDER BY created DESC LIMIT 1;
--7 Get the title and due date of all tasks where the title or description contains database.
select title,due_date,description from task where task.description like '%database%' or task.title like '%database%';
--8 Get the title and status (as text) of all tasks.
SELECT title,
CASE status_id 
WHEN 0 THEN 'Not started'
WHEN 1 THEN 'In progress'
WHEN 2 THEN 'Done'
END AS status_text
FROM task;

--9 Get the name of each status, along with a count of how many tasks have that status.
select (select name from status where status.id=task.status_id) as status_name,count(*) as total_tasks from task group by status_name; 
--10 Get the names of all statuses, sorted by the status with most tasks first.
select (select name from status where status.id=task.status_id) as status_name,count(*) as total_tasks from task group by status_name order by total_tasks desc;