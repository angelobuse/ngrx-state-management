const Course = require('../models/course')

exports.getAllCourses = async (req, res, next) => {
    try {
        const [allCourses] = await Course.fetchAll();
        res.status(200).json(allCourses);
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
};

exports.postCourse = async (req, res, next) => {
    try {
        const postResponse = await Course.post(req.body.name);
        res.status(201).json(postResponse)
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error)
    }
};

exports.updateCourse = async (req, res, next) => {
    try {
        const updateResponse = await Course.update(req.body.id, req.body.name);
        res.status(200).json(updateResponse);
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
}

exports.deleteCourse = async (req, res, next) => {
    try {
        const deleteResponse = await Course.delete(req.params.id);
        res.status(200).json(deleteResponse);
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error)
    }
}
