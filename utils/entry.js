const path = require('path');
const eBillDB = require(path.join(__dirname, '..', 'database', 'eBill'));

const fs = require('fs');
exports.getEntry = (req, res) => {
    res.render('entry');
}

exports.postEnter = (req, res) => {

    let username;
    fs.readFile('username.txt','utf-8',(err, uName) => {
        if (err) throw err;
        username = uName;
        console.log(username);
        let data = {
            username : uName,
            gstNo: req.body.gstNo,
            industryName: req.body.industryName,
            prod: req.body.prod,
            quant: req.body.quant,
            hsn: req.body.hsn,
            size: req.body.size,
            wards: req.body.wards,
            way: req.body.way,
            vechNo: req.body.vechNo,
            pod: req.body.pod
        }

        eBillDB.create(data, (err, result) => {
            if (err) throw err;
            console.log(result);
            fs.readFile('billNo.txt','utf-8',(err,vv)=>{
                if(err) throw err;
                let vvv = parseInt(vv)+1;
                fs.writeFile('billNo.txt',vvv,(err)=>{
                    if(err) throw err;
                    res.redirect('/ewayBill');
                })
            })
            
        });
    })

}