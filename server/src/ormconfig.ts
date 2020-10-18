import { ConnectionOptions } from "typeorm";

export const connectionOptions: ConnectionOptions = {
  type: "mysql",
  host: "localhost",
  port: +process.env.PORT || 3306,
  username: process.env.DATABASE_ID,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
};
