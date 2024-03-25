const errorHandlerImg = (err, res)=>{
                //ERROR UNTUK limits
                if (err.message === 'File too large') {
                    return res.status(400).json({
                        success: false,
                        message: err.message
                    })
                }
                //ERROR UNTUK file Filter
                if (err.message === 'file_issue') {
                    return res.status(400).json({
                        success: false,
                        message: 'File not support'
                    })
                }
                if (err.message === "not found") {
                    return res.status(404).json({
                        success: false,
                        message: 'product not found'
                    })
                }
                if (err.message) {
                    return res.status(404).json({
                        success: false,
                        message: err.message
                    })
                }
                console.log(err)
                return res.status(500).json({
                    success: false,
                    message: 'internal server error'
                })
}

module.exports = errorHandlerImg