exports.IndusLoginGet = (req, res) => {
    console.log(`${req.method} : ${req.url}`);

    res.render('industry_login');
}


exports.IndusLoginPost = (req, res) => {
    console.log(`${req.method} : ${req.url}`);

    let data = {
        username  :req.body.username,
        password : req.body.password
    }

    console.log(data);
}
