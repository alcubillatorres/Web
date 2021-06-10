import {Router} from 'express'


import {savePerfil, getProducts, createNewProduct, getProductById, deleteProductById, getTotalProducts, updateProductById, principalPage} from '../controllers/products.controllers'

const router = Router()

//pagina principal del formulario
router.get('/', (req,res,next) =>{
    res.render('index');
})

//guardar formulario en bd
router.post('/', savePerfil);





//consulta los productos/////////////////////////////////////

router.get('/products', getProducts);

router.post('/products', createNewProduct);

router.get('/products/count', getTotalProducts);

router.get('/products/:id', getProductById);

router.delete('/products/:id', deleteProductById)

router.put('/products/:id', updateProductById )

//////////////////////////////////////////////////////////77

export default router