module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  migrations: [
    `${process.env.TYPEORM_FOLDER}/database/migrations/**.${process.env.TYPEORM_FILE}`,
  ],
  entities: [
    `${process.env.TYPEORM_FOLDER}/entities/**.${process.env.TYPEORM_FILE}`,
  ],
  cli: {
    migrationsDir: "src/database/migrations",
    entitiesDir: "src/entities",
  },
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
