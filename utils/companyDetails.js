exports.compDetailsGet = (req, res) => {
    console.log(`${req.method} : ${req.url}`);

    res.render('company_details');
}

exports.compDetailsPost = (req, res) => {
    console.log(`${req.method} : ${req.url}`);

    let data = {
        compName : req.body.compName,
        city : req.body.city,
        pin : req.body.pin,
        turn: req.body.turn,
        type: req.body.type
    }

    console.log(data);
}

