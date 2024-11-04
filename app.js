const express = require('express');
const app = express();
const PORT = 3000;

//files
const { getUserInfo } = require('./Controller/userController');

app.get('/', getUserInfo);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});