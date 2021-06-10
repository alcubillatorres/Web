//consultas de la bd
export const queries = {

    savePerfil: 'INSERT INTO Perfiles (NombrePerfil, ArmedForces, Bussines, Charitable, SitesPermited) VALUES (@NombrePerfil, @ArmedForces, @Bussines, @Charitable, @SitesPermited)',
   

    
    getAllProducts: 'SELECT * FROM Products',
    addNewProduct: 'INSERT INTO Products (Name, Description, Quantity) VALUES (@Name, @Description, @Quantity)',
    getProductById: 'SELECT * FROM Products WHERE Id = @Id',
    deleteProductById: 'DELETE FROM  [WebAxtel].[dbo].[Products] WHERE Id = @Id',
    getTotalProducts: 'SELECT COUNT(*) FROM [WebAxtel].[dbo].[Products]',
    updateProductById: 'UPDATE [WebAxtel].[dbo].[Products] SET Name = @Name, Description=@Description, Quantity=@Quantity WHERE Id=@Id '

}