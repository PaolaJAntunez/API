const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select *from clientes', (err, clientes) => {
            if (err) {
                res.json(err);
            }
            res.json(clientes);
        });
    });
};

controller.edit = (req, res) => {
    const { id_cliente } = req.params;
   
    req.getConnection((err, conn) => {
        conn.query('select *from clientes where id_cliente=?', [id_cliente], (err, cliente) => {
            res.json(cliente[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('insert into clientes set?', [data], (err, cliente) => {
            res.json(cliente);
        });
    });
};

controller.update = (req, res) => {
    const { id_cliente } = req.params;
    const nuevo_cliente = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update clientes set ? where id_cliente =?', [nuevo_cliente, id_cliente], (err, rows) => { 
            res.json({ message: "Registro Actualizado" }); 
        });
    });
};

controller.delete = (req, res) => {
    const { id_cliente } = req.params; 
    req.getConnection((err, conn) => {
        conn.query('delete from clientes where id_cliente =?', [id_cliente], (err, rows) => {
            res.json({ message: "Registro Eliminado" }); 
        });
    });
};

module.exports = controller;