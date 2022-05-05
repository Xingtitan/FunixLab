const products = [];

class ProductController {
  getAddProduct = (req, res, next) => {
    res.render("add-product", {
      pageTitle: "Add Product",
      path: "/admin/add-product",
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
    });
  };

  postAddProduct = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect("/");
  };

  getProducts = (req, res, next) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProduct: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  };
}

module.exports = new ProductController;
