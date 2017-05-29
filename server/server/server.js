//Init server
const app = require('./expressApp.js');
const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = server;