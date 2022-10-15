export default () => ({
  port: process.env.PORT ?? 3000,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN,
  database: {
    type: process.env.DATABASE_TYPE,
    database: process.env.DATABASE_NAME,
    synchronize: true,
  },
});
