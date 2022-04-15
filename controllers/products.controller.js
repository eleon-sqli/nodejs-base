export class ProductsController {
  repository = undefined;

  constructor(repository) {
    this.repository = repository;
  }

  getAll(req, res) {
    const products = this.repository.get();
    res.render('index', { products })
  }

  getOne(req, res) {
    const id = +req.params.id;
    const product = this.repository.getOne(id);
    res.render('details', { product })
  }

  editForm(req, res) {
    res.render('edit', { product: {} });
  }

  create(req, res) {
    const product = this.repository.create(req.body);
    if (product) {
      res.redirect('/');
    } else {
      res.render('edit', {
        product: req.body,
        error: true
      });
    }
  }
}
