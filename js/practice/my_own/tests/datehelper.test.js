import { ShoppingCart } from "../src/datehelper";
describe("datehelper tests", () => {
  let cart;
  beforeEach(() => {
    cart = new ShoppingCart();
  });

  test("addItem", () => {
    const expectedValue = cart.addItem("banan", 10, 5);
    expect(expectedValue).toBeTruthy();
  });

  test("Check not exisitng", () => {
    cart.addItem("banan", 10, 5);
    expect(cart.items).toHaveLength(1);
  });

  test("should increase quantity if item already exists", () => {
    const cart = new ShoppingCart();
    cart.addItem("Apple", 10, 2);
    const result = cart.addItem("Apple", 10, 3);
    expect(result).toBeTruthy(); // Denna kollar att vi får true
    expect(cart.items).toHaveLength(1); // Denna visar att du fortfarande bara har 1 produkt i vagnen
    expect(cart.items[0].quantity).toBe(5); // Här har mängden uppdateras. 2 + 3 vilket blir 5
  });

  test("Should remove item from list", () => {
    cart.addItem("Bulle", 5, 3);
    expect(cart.items).toHaveLength(1);
    const itemRemoved = cart.removeItem("Bulle");
    expect(cart.items).toHaveLength(0);
    expect(itemRemoved).not.toBe(1);
  });

  test("Discordcode test", () => {
    cart.addItem("Bulle", 25, 5);
    const black = cart.applyDiscount("BLACKFRIDAY");
    expect(black).toBe(25 * 5 * 0.7);

    const FREESHIP = cart.applyDiscount("FREESHIP");
    expect(FREESHIP).toBe(25 * 5 - 50);

    const nothing = cart.applyDiscount("nothing");
    expect(nothing).toBe(25 * 5);
  });

  test("Test clear method", () => {
    cart.addItem("Bulle", 25, 5);
    cart.clear();
    expect(cart.items).toHaveLength(0);
  });

  test("Add Item should have valid parameter", () => {
    const expectedValue = cart.addItem()
    expect(expectedValue).toBeFalsy()
  });
});
