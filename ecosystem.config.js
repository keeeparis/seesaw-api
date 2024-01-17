module.exports = {
  apps: [
    {
      name: 'seesaw-api',
      cwd: '/var/www/seesaw-api', // must have absolute path
      script: 'npm',
      args: 'start',
      // watch: true,
      // ignore_watch: ['node_modules'],
      // restart_delay: 10_000,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
