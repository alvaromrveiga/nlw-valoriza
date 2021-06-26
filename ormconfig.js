module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  migrations: [`${process.env.TYPEORM_FOLDER}/database/migrations/**.ts`],
  entities: [`${process.env.TYPEORM_FOLDER}/entities/**.ts`],
  cli: {
    migrationsDir: `${process.env.TYPEORM_FOLDER}/database/migrations`,
    entitiesDir: `${process.env.TYPEORM_FOLDER}/entities`,
  },
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
