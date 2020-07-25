const mongoose = require('mongoose');
mongoose.connect ("mongodb://localhost/Exam_db",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
// replace Exam With what model you create below
require('../models/Pet');