````markdown
# 🛒 GadgetHeaven - Your Ultimate Tech Store

Welcome to **GadgetHeaven**, a modern E-commerce platform built with React. This application allows users to explore the latest tech gadgets, manage their shopping cart, and keep a wishlist of their favorite items.

![GadgetHeaven](https://i.ibb.co.com/358cxVZV/image.png)

## 🚀 Live Demo

[Check out the Live Website](https://hasan-bashful-camp.surge.sh/)

---

## ✨ Features

- **Dynamic Dashboard**: Manage your shopping cart and wishlist separately.
- **Interactive Statistics**: View product price and rating comparisons using `Recharts`.
- **Price Sorting**: Sort cart items by price (descending order) to find the best deals.
- **Responsive Design**: Fully optimized for Mobile, Tablet, and Desktop using `Tailwind CSS`.
- **Local Storage Persistence**: Cart and Wishlist data stay saved even after page refresh.
- **Smooth Navigation**: Integrated with `React Router v6/v7` for a seamless experience.

---

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS & DaisyUI
- **Navigation**: React Router DOM
- **Charts**: Recharts
- **Icons**: React Icons / FontAwesome
- **Notifications**: React Toastify (Optional)

---

## 📂 Project Structure

```text
├── public
│   └── products.json        # Main product database
├── src
│   ├── components           # Reusable UI components
│   ├── layouts              # Layout wrappers (Navbar, Footer)
│   ├── pages                # Main views (Dashboard, Statistics, Home)
│   ├── utility              # LocalStorage management (addtoCart, wishlist)
│   ├── App.jsx              # Main application entry
│   └── main.jsx             # Router configuration
└── README.md
```
````

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

1. **Clone the repository:**

```bash
git clone [https://github.com/hasan-mahmud-sazid/gadget-heaven.git](https://github.com/hasan-mahmud-sazid/gadget-heaven.git)

```

2. **Navigate to the project folder:**

```bash
cd gadget-heaven

```

3. **Install dependencies:**

```bash
npm install

```

4. **Start the development server:**

```bash
npm run dev

```

5. **Build for production:**

```bash
npm run build

```

---

## 📊 Statistics Page Details

The statistics page uses a **Composed Chart** from `Recharts` to visualize:

- **Price**: Represented by purple Bar charts.
- **Total**: Background area shade for better contrast.
- **Rating**: Scatter/Line overlay for product quality assessment.

---

**Developed with ❤️ by [Hasan Mahmud]**
