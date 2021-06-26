console.log(process.env.DB_URL);

module.exports = {
  type: "postgres",
  url: process.env.DB_URL,
  migrations: ["src/database/migrations/**.ts"],
  entities: ["src/entities/**.ts"],
  cli: {
    migrationsDir: "src/database/migrations",
    entitiesDir: "src/entities",
  },
};
