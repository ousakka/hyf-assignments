import express from "express";
import knexLibrary from "knex";

const app = express();
const port = 3000;

app.use(express.json());

/**
 * Knex connection to SQLite database
 * Make sure users.sqlite3 exists in this folder
 */
const knexInstance = knexLibrary({
  client: "sqlite3",
  connection: {
    filename: "C:\Users\oumai\Documents\web developement\HackYourFuture\week-10",
  },
  useNullAsDefault: true,
});

/**
 * HOME ROUTE — HTML PAGE
 */
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>User API</title>
      </head>
      <body>
        <h1>Welcome to the User API</h1>
        <p>Use the endpoints to retrieve user data.</p>
        <p>
          Current user count:
          <strong><span id="user-count">Loading...</span></strong>
        </p>

        <script>
          fetch('/user-count')
            .then(response => response.json())
            .then(data => {
              document.getElementById('user-count').textContent =
                data[0].total_users;
            });
        </script>
      </body>
    </html>
  `);
});

/**
 * USER COUNT
 */
app.get("/user-count", async (req, res) => {
  try {
    const result = await knexInstance.raw(
      "SELECT COUNT(*) AS total_users FROM users"
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * ALL USERS (sorted by id)
 */
app.get("/all-users", async (req, res) => {
  try {
    const rows = await knexInstance.raw(
      "SELECT * FROM users ORDER BY id ASC"
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * UNCONFIRMED USERS
 */
app.get("/unconfirmed-users", async (req, res) => {
  try {
    const rows = await knexInstance.raw(
      "SELECT * FROM users WHERE confirmed_at IS NULL"
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GMAIL USERS
 */
app.get("/gmail-users", async (req, res) => {
  try {
    const rows = await knexInstance.raw(
      "SELECT * FROM users WHERE email LIKE '%@gmail.com'"
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * USERS CREATED IN 2022
 */
app.get("/2022-users", async (req, res) => {
  try {
    const rows = await knexInstance.raw(`
      SELECT * FROM users
      WHERE created_at >= '2022-01-01'
        AND created_at < '2023-01-01'
    `);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * FIRST USER
 */
app.get("/first-user", async (req, res) => {
  try {
    const result = await knexInstance.raw(
      "SELECT * FROM users ORDER BY id ASC LIMIT 1"
    );

    if (result.length === 0) {
      return res.status(404).send("No users found");
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * LAST NAME COUNT
 */
app.get("/last-name-count", async (req, res) => {
  try {
    const result = await knexInstance.raw(`
      SELECT last_name, COUNT(*) AS last_name_count
      FROM users
      GROUP BY last_name
      ORDER BY last_name ASC
    `);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * START SERVER
 */
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
