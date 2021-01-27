const express = require('express');


const app = express();


app.use(express.static('./src/list-app'));


app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'src/list-app' }
  );
});

app.listen(process.env.PORT || 8080);


console.log(`Running on port ${process.env.PORT || 8080}`)