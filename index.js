const express = require('express');
const bodyParser = require('body-parser');
const coursesController = require('./controller/course');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE'
    );
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization'
    );
    next();
})


//App routes
app.get('/courses' , coursesController.getAllCourses);
app.post('/courses', coursesController.postCourse);
app.put('/courses', coursesController.updateCourse);
app.delete('/courses/:id', coursesController.deleteCourse);

app.listen(port, () => console.log(`App listerning to port ${port}`));
