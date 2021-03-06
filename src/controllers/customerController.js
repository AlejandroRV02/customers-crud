const controller = {};

controller.list = (req, res) => {
    
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer', (err, customers) => {
            if (err){
                res.json(err);
            }
            res.render('customers', {
                data : customers
            });
        });
    })

};



controller.add = (req, res) =>{
    req.getConnection((err,conn) => {
        const data = req.body;

        conn.query('INSERT INTO customer SET ?',
            [data], (err, customer) => {
                if (err){
                    res.json(err)
                }
                
                res.redirect('/')
            })
    })
};

controller.updateForm = (req, res) => {
    const {id} = req.params;

    req.getConnection ((err, conn) => {
        conn.query('SELECT * FROM customer WHERE id=?', [id],
            (err, customer) => {
                if (err){
                    res.json(err)
                }
                res.render('editCustomer', {
                    data: customer[0]
                })
            })
    })
}
controller.updateCustomer = (req, res) => {
    const {id} = req.params;
    const data = req.body;

    req.getConnection ((err, conn) => {
        conn.query('UPDATE customer SET ? WHERE id=?', [data, id],
            (err, customer) => {
                if (err){
                    res.json(err)
                }
                res.redirect('/');
            })
    })
};


controller.delete = (req, res) =>{
    
    req.getConnection ((err, conn) => {
        const {id} = req.params;
        conn.query('DELETE FROM customer WHERE id=?', [id],
            (err, customer) => {
                if (err){
                    res.json(err)
                }
                res.redirect('/');
            })
    })
};

module.exports = controller;