const productModel = require('../models/products.model')

exports.getallproducts = async (req, res) => {
    try {
        const { search, sortBy, orderBy, page = 1, limit, category } = req.query;
        const limitData = parseInt(limit) || 4;
        const count = await productModel.countAll(search);
        const products = await productModel.findAll(search, sortBy, orderBy, page, limit, category);

        const totalPage = Math.ceil(count / limitData);
        const nextPage = parseInt(page) + 1;
        const prevPage = parseInt(page) - 1;

        return res.json({
            success: true,
            message: 'list all product',
            pageInfo: {
                currentPage: parseInt(page),
                totalPage,
                nextPage: nextPage <= totalPage ? nextPage : null,
                prevPage: prevPage >= 1 ? prevPage : null,
                totalData: count
            },
            results: products
        })
    } catch (err) {
        if (err.message === 'no_data') {
            return res.status(404).json({
                success: false,
                message: 'no data'
            })
        }
        console.log(err)
        return res.status(500).json({
            success: false,
            message: 'internal server error'
        })
    }
}

exports.getdetailproduct = async (req, res) => {
    //SINGKAT

    // // tidak untuk ditampilkan di halaman checkoutproduct
    // const id = parseInt(req.params.id)
    // const product = await productModel.findOne(id)
    // if (!product) {
    //     return res.status(404).json({
    //         success: false,
    //         message: 'product not found'
    //     })
    // }
    // return res.json({
    //     success: true,
    //     message: 'detail product',
    //     results: product
    // })

    const {id} = req.params
    try{
        const products = await productModel.findDetailProduct(id)
        const results = products.reduce((prev,curr, idx, arr)=>{
            for(keys in curr){
                if(!prev[keys]){
                    prev[keys] = curr[keys]
                }
                if(keys === 'sizes' || keys === 'variants'){
                    if(prev[keys].length === undefined){
                        prev[keys] = []
                    }
                    if(prev[keys].findIndex(item => item.id === curr[keys].id) === -1){
                        prev[keys].push(curr[keys])
                    }
                }
            }
            return prev
        }, {})
        return res.json({
            success: true,
            message: 'Detail product',
            results
        })
    }catch(err){
        console.error(err)
        return res.status(500).json({
            success: false,
            message: 'internal server error'
        })
    }
}

// exports.getdetailproduct = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const products = await productModel.findDetailProduct(id);
//         if (!products || products.length === 0) {
//             return res.status(404).json({
//                 success: false,
//                 message: 'Product not found'
//             });
//         }

//         const result = {
//             ...products[2], // Ambil hasil pertama dari array hasil query
//             variant: products[0].variants[0], // Ambil varian pertama dari array varian
//             size: products[0].sizes[0] // Ambil ukuran pertama dari array ukuran
//         };

//         return res.json({
//             success: true,
//             message: 'Detail product',
//             results: result
//         });
//     } catch (err) {
//         console.error(err);
//         return res.status(500).json({
//             success: false,
//             message: 'Internal server error'
//         });
//     }
// }
