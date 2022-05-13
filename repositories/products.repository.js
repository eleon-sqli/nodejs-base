export class ProductsRepository {
  index;
  products = [
    { id: 1, name: "Cristaline", qty: 50 },
    { id: 2, name: "Contrex", qty: 10 },
    { id: 3, name: "Hepar", qty: 103 },
    { id: 4, name: "Abatilles", qty: 39 }
  ];

  constructor() {
    this.index = this.products.length + 1;
  }

  get() {
    return new Promise((resolve, _reject) => {
      resolve(this.products);
    });
  }

  getOne(id) {
    return this.products.find((p) => p.id === id);
  }

  create(product) {
    const existing = this.products.find((p) => p.name === product.name);
    if (existing) {
      return undefined;
    }
    const newProduct = {
      ...product,
      id: this.index++
    };
    this.products.push(newProduct);
    return newProduct;
  }
}
