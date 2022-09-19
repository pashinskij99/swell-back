module.exports = ({ env }) => {
  const c =  ({
    connection: {
      pool: {
        min: 0,
      },
      client: "postgres",
      connection: {
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "strapi"),
        user: env("DATABASE_USERNAME", ""),
        username: env("DATABASE_USERNAME", ""),
        password: env("DATABASE_PASSWORD", ""),
      },
      useNullAsDefault: true,
    },
  });

  return c
};