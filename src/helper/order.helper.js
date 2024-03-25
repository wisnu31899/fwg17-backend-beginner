
const getProductSizeVariantAndDelivery = async (deliveryName, productId, sizeName, variantName, productModel, checkoutModel) => {
    const delivery = await checkoutModel.getDataByShipping(deliveryName);
    if (!delivery) {
        throw new Error('shipping not found');
    }


    const product = await productModel.findOne(productId);
    if (!product) {
        throw new Error('Product not found');
    }

    const size = await checkoutModel.getDataBySizeName(sizeName);
    if (!size) {
        throw new Error('Size not found');
    }

    const variant = await checkoutModel.getDataByVariantName(variantName);
    if (!variant) {
        throw new Error('Variant not found');
    }

    const total = product.basePrice + size.additionalPrice + variant.additionalPrice;

    return { delivery, product, size, variant, total };
}

module.exports = { getProductSizeVariantAndDelivery }