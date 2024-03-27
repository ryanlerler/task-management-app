**How long did you spend on the coding test?**

Half-day

**What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.**

Destructuring assignment which extracts values from objects or arrays and assign them to variables in a more concise way

e.g.

function Dashboard({ tasks, onEdit, onDelete }) destructures the objects props.tasks etc. into variables of the same names

**How would you track down a performance issue in production? **

Identify the Scope: Determine if the performance issue is affecting the entire application, specific features, or individual pages. This can help narrow down the potential causes.

Review Recent Changes: Check if any recent code changes, deployments, or configuration updates coincide with the onset of the performance issue. This can help identify potential causes related to code changes.

Analyze Logs: Review server logs, application logs, and error logs for any indications of issues or errors that could be impacting performance.

Check Database Queries: Slow database queries can often be a source of performance issues. Use database monitoring tools to identify and optimize slow queries.

Review External Dependencies: If the application relies on external services or APIs, check if there are any issues with these dependencies that could be impacting performance.

Optimize Frontend Performance: Consider optimizing frontend assets such as images, scripts, and stylesheets to reduce load times.

Implement Caching: Use caching mechanisms to cache frequently accessed data or computations and reduce the load on application.

**Have you ever had to do this?**

No as all my bootcamp projects are completed after they are deployed to production.

**If you had more time, what additional features or improvements would you consider adding to the task management application?**

A separate database, backend and authentication for security and data persistence
