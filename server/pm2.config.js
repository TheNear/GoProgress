module.exports = {
  apps: [
    {
      name: "app",
      script: "build/app.js",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
