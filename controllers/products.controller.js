export class ProductsController {
  repository = undefined;

  constructor(repository) {
    this.repository = repository;
  }

  getAll(_req, res) {
    this.repository.get().then((products) => {
      res.render('index', { products })
    }).catch((error) => {
      console.log('Error', error);
    });
  }

  getOne(req, res) {
    const id = +req.params.id;
    const product = this.repository.getOne(id);
    res.render('details', { product })
  }

  editForm(_req, res) {
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
