const Database = require('nedb');
db = {};
db.user = new Database('data/user.db');
db.user.loadDatabase();
users = db.user;

module.exports.postLogin = (req, res) => {
    const { email, password } = req.body

    users.findOne({email: email}, (err, data) => {
        if(!data){
            res.json({ 
                account: {},
                error: { email: 'User not found', pass: '' } 
            });
            return;
        }

        if(data.password !== password) {
            res.json({ 
                account: {},
                error: { email: '', pass: 'Wrong password' } 
            });
            return;
        }

        res.json({
            account: data,
            error: { email: '', pass: '' }
        })
    });
}