export class ShoppingCart {
  constructor() {
    this.items = []; // { name, price, quantity }
  }

  addItem(name, price, quantity = 1) {
    if (!name || price <= 0 || quantity <= 0) return false;

    const existing = this.items.find(i => i.name === name);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({ name, price, quantity });
    }

    return true;
  }

  removeItem(name) {
    const before = this.items.length;
    this.items = this.items.filter(i => i.name !== name);
    return this.items.length < before;
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  applyDiscount(code) {
    if (code === "BLACKFRIDAY") {
      return this.getTotal() * 0.7; // 30% rabatt
    }
    if (code === "FREESHIP" && this.getTotal() > 100) {
      return this.getTotal() - 50; // 50 kr avdrag
    }
    return this.getTotal(); // ogiltig kod – ingen rabatt
  }

  clear() {
    this.items = [];
  }
}

