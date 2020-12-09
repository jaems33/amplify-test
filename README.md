# Redux Structure


```
{
  products: [
    {
      id: 0
      imageUrl: string,
      name: string,
      size: Array<string>,
      manufacturer: string,
      price: number
    }
  ],
  currentUser: {
    items: Array<Product>,
    total: number
  },
}
```

The most complicated part of this mini app is the Add to Cart
- If the product doesn't exist in the cart, add 1
- If the product exists and the user modified the number, change the quantity
- If the product is down to 0, remove it entirely from the cart
- User should be able to add multiple sizes of the same product to their cart