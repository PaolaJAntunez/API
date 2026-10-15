const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from empresa',(err,banco) =>{
            if(err){
                res.json(err);
            }
            res.json(banco);
        });

    });

};

controller.edit = (req, res) => {

    const {cbank}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from bancos where cbank=?', [cbank], (err,banco) => {
            res.json(banco[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into bancos set?', [data], (err,banco) => {
        res.json(banco);
       });
   })
};

controller.update = (req,res) =>{

    const {cbank}= req.params;
    const nuevo_banco = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update bancos set ? where cbank =?', [nuevo_banco, cbank], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {cbank}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from bancos where cbank =?', [cbank], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
