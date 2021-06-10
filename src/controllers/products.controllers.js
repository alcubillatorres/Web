import {getConnection, sql, queries}  from '../database'


export const savePerfil = async (req, res) => {
    console.log(req.body)
    const {nombrePerfilWeb, armedH, businessH, charitableH, sitios_permitidos} = req.body;

    if(nombrePerfilWeb == ''){
        return res.status(400).send('No olvides el nombre de Perfil');
    }

    try{
        const pool = await getConnection();
        const result = await pool.request()
            .input("NombrePerfil", sql.VarChar, nombrePerfilWeb)
            .input("ArmedForces",sql.VarChar, armedH)
            .input("Bussines", sql.VarChar, businessH)
            .input("Charitable", sql.VarChar, charitableH)
            .input("SitesPermited", sql.Text, sitios_permitidos)
            .query(queries.savePerfil
            );
    
            console.log("result",result);
            res.json(result.recordset);
    }catch(error){
        res.status(500)
        res.send(error.message)
    }   
};




////////////////////////////////////



export const getProducts = async (req, res) => {
try{  
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllProducts);

    console.log(result);
    res.json(result.recordset);
    }catch(error){
        res.status(500)
        res.send(error.message)
    }   
};
 
export const createNewProduct = async (req, res) => {
    const { Name, Description } = req.body;
    let { Quantity } =req.body;
    
    if(Name == null || Description == null){
        return res.status(400).json({msg: 'Bad Request. Please fill all fields'})
    }

    if(Quantity == null) Quantity = 0;

    try{
        const pool = await getConnection();
        await pool.request()
            .input("Name", sql.VarChar, Name)
            .input("Description",sql.Text, Description)
            .input("Quantity", sql.Int, Quantity)
            .query(queries.addNewProduct
            );
    
        res.json ({Name, Description, Quantity});
    }catch(error){
        res.status(500)
        res.send(error.message)
    }   
};

export const getProductById = async (req, res) =>{
    const {id} = req.params;
    try{
        const pool = await getConnection();
        const result = await pool.request().input('Id', id).query(queries.getProductById)
        console.log(result)
        res.send(result.recordset[0]);
    }catch(error){
        res.status(500)
        res.send(error.message)
    }  
}

export const deleteProductById = async (req, res) =>{
    const {id} = req.params;
    try{
        const pool = await getConnection();
        const result = await pool.request().input('Id', id).query(queries.deleteProductById)
        res.sendStatus(304)
    }catch(error){
        res.status(500)
        res.send(error.message)
    }  
}

export const getTotalProducts = async (req, res) =>{
    
    try{
        const pool = await getConnection();
        const result = await pool.request().query(queries.getTotalProducts)
        res.json(result.recordset[0]['']);
    
    }catch(error){
        res.status(500)
        res.send(error.message)
    }  
}

export const updateProductById = async (req, res) =>{
   const { Name, Description, Quantity } = req.body;
   const { id } = req.params;

    if(Name == null || Description == null || Quantity == null){
        return res.status(400).json({msg: 'Bad Request. Please fill all fields'})
    }

    try{
        const pool = await getConnection();
        await pool.request()
            .input("Name", sql.VarChar, Name)
            .input("Description",sql.Text, Description)
            .input("Quantity", sql.Int, Quantity)
            .input("Id", sql.Int, id)
            .query(queries.updateProductById
            );
    
        res.json ({Name, Description, Quantity});
    }catch(error){
        res.status(500)
        res.send(error.message)
    } 

    ////////////////////////////////

}