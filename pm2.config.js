module.exports = {
  apps: [
    {
      name: "app",
      script: "server/app.ts",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
