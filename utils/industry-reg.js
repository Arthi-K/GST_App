exports.IndusLoginGet = (req, res) => {
    res.render('industry_register');
}

exports.IndusLoginPost = (req, res) => {
    let data = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        username: req.body.username,
        password: req.body.password
    }

    console.log(data);
}