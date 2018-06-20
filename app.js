const express = require('express');
const path = require('path');

const app = express();

// set static path
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function(){
  console.log('Server started on port 3000...');
});