# NATY X (NXT) — Premium Fashion E-Commerce Frontend

A frontend-only e-commerce website for **NATY X**, a Nigerian streetwear brand.

Built with **React + Vite + Tailwind CSS + React Router**. No backend, database, or real payment processing is included. The project is structured as a clean, well-organized mock/demo that can be connected to a real backend later with minimal changes.

---

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Opens the site locally. Vite will print the local URL, usually `http://localhost:5173`.

## Build for Production

```bash
npm run build
```

Outputs the production build to `dist/`.

## Preview the Production Build

```bash
npm run preview
```

---

## Project Structure

```text
src/
├── components/
│   ├── layout/       Navbar, Footer, MobileMenu, WhatsAppButton
│   ├── products/     ProductCard, ProductGrid, ProductGallery, ProductFilters, SizeGuide
│   ├── cart/         CartItem, CartDrawer, CartSummary
│   ├── checkout/     CheckoutForm, PaymentMethods, OrderSummary
│   ├── ui/           Button, Modal, Input, Loading, Accordion, SearchOverlay
│   └── sections/     Homepage sections (Hero, Marquee, FeaturedCollection, etc.)
│
├── pages/            One file per route (Home, Shop, ProductDetail, Cart, Checkout, ...)
│
├── data/
│   └── products.js   Demo product catalog (single source of truth)
│
├── context/
│   ├── CartContext.jsx       Cart state, persisted to localStorage
│   └── WishlistContext.jsx   Wishlist state, persisted to localStorage
│
├── services/         Mock service layer
├── hooks/            useLocalStorage — generic localStorage-backed state hook
├── utils/
│   ├── format.js     Currency/date helpers
│   └── filters.js    Product filtering/sorting
│
├── App.jsx           Route definitions
├── main.jsx          App entry point, Router + Context providers
└── index.css         Tailwind directives + design tokens
```

---

## Where Products Are Stored & How to Change Them

All product data lives in **`src/data/products.js`** as a single exported array, `PRODUCTS`.

Each product follows this structure:

```js
{
  id: 1,
  slug: 'natyx-premium-polo-black',
  name: 'NATY X Premium Polo',
  category: 'polos',
  price: 25000, // in Naira, no formatting
  sku: 'NXT-POL-001',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  colors: ['Black', 'White', 'Sand'],
  images: ['https://...', 'https://...'],
  stock: 25,
  featured: true,
  newArrival: false,
  description: '...',
  features: ['...'],
}
```

To add a product, copy an existing object in the array and give it a unique `id` and `slug`.

To remove a product, delete its object.

Categories shown on the homepage and shop filters come from the `CATEGORIES` array in the same file. Add a category there if you introduce a new product category.

---

## How to Replace Images

Image references are plain URL strings.

Product images are centralized in:

```text
src/data/products.js
```

Editorial and marketing images are located inside their respective section components, such as:

```text
Hero.jsx
AboutPreview.jsx
InstagramSection.jsx
```

The demo currently uses placeholder images from `picsum.photos`.

Replace these URLs with your own hosted images, such as images hosted through Cloudinary, S3, or another image hosting service.

### Using Local Images

To use local images instead of remote URLs:

1. Put image files inside `public/images/`.
2. Reference them using paths such as:

```text
/images/your-file.jpg
```

---

## How the Cart Works

`src/context/CartContext.jsx` exposes a `CartProvider` that wraps the application in `main.jsx`.

Cart items are stored in React state and mirrored into `localStorage` under the key:

```text
natyx_cart
```

This allows the cart to survive a page refresh.

Available through `useCart()`:

```text
cartItems
cartCount
cartSubtotal
shippingFee
cartTotal

addToCart(product, { size, color, quantity })
removeFromCart(key)
updateQuantity(key, quantity)
updateVariant(key, { size, color })
clearCart()

isCartOpen
setIsCartOpen
```

`isCartOpen` and `setIsCartOpen` control the slide-in `CartDrawer`.

Wishlist functionality follows a similar pattern through:

```text
src/context/WishlistContext.jsx
```

and `useWishlist()`.

Wishlist data is persisted under:

```text
natyx_wishlist
```

---

## How Mock Checkout Works

Checkout is intentionally **frontend-only**.

The process works as follows:

1. `CheckoutForm.jsx` validates the form fields on submission.
2. It calls `charge()` from `src/services/paymentService.js`, which simulates network latency and returns a fake success/failure result.
3. On success, `createOrder()` from `src/services/orderService.js` generates an order number and saves the order to `localStorage` under `natyx_orders`.
4. The cart is cleared and the user is redirected to `/order-confirmation?order=<orderNumber>`.
5. The order confirmation page reads the order from `localStorage` and displays the relevant information.
6. `/track-order` can look up locally stored orders by ID and includes a permanent demo order so that the tracking interface remains testable.

**No real money is transferred and no real card details are collected.**

---

## Future Paystack Integration

The mock payment implementation is located in:

```text
src/services/paymentService.js
```

A future Paystack integration can replace the body of `charge()` with a call to your backend.

The backend can then communicate with Paystack's transaction APIs while the frontend continues using the existing function interface:

```js
charge({ method, amount, customer })
```

The function can continue returning:

```js
{
  success: true,
  reference: '...'
}
```

or:

```js
{
  success: false,
  error: '...'
}
```

This keeps the checkout component largely independent of the payment provider implementation.

---

## Where Future Backend APIs Should Go

The `src/services/` directory acts as the integration layer between the frontend and future backend APIs.

```text
productService.js
→ GET /api/products
→ GET /api/products/:slug

orderService.js
→ POST /api/orders
→ GET /api/orders/:id

paymentService.js
→ Payment gateway integration

emailService.js
→ Transactional email API
→ Order confirmations
→ Contact form
→ Newsletter signups
```

The service functions are already structured asynchronously, making it easier to replace mock/local implementations with real API requests without restructuring the application's components.

---

## Deploying to Vercel

1. Push the project to a GitHub repository.
2. Open Vercel and import the repository.
3. Vercel should automatically detect the Vite project.
4. Confirm the following settings:

```text
Build Command: npm run build
Output Directory: dist
```

5. Deploy the project.

For manual deployment through the Vercel CLI:

```bash
npm install -g vercel
vercel
```

---

## Notes

* This is a **frontend-only demo**.
* There is no database.
* There is no real authentication.
* There is no real payment processing.
* There is no real email delivery.
* Mock functionality is clearly separated from the UI through the service layer.
* The application is built with a mobile-first approach.
* Pay particular attention to the mobile cart drawer, mobile filters drawer, and mobile checkout form when modifying the layout.

---

## Developer

Built by **JhayCodes**.

* **GitHub:** [@JhayCodesDev](https://github.com/JhayCodesDev)
* **Twitter/X:** [@JhayCode](https://www.twitter.com/JhayCodes)
* **Instagram:** [@jhaycodes_](https://www.instagram.com/jhaycodes_)
* **LinkedIn:** [Joshua Odusanya](https://www.linkedin.com/in/joshua-odusanya/)

> **Build with purpose. Learn with curiosity. Deliver with quality.**
