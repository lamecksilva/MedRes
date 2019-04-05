const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from api');
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`));
