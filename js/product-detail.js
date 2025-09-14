// Data produk contoh, bisa dikembangkan atau ambil dari API/backend
const products = {
  produk1: {
    title: "Varian Botol",
    description: "Kami menawarkan beragam varian botol plastik yang dirancang khusus untuk memenuhi kebutuhan spesifik industri Anda. Mulai dari botol dengan desain ergonomis yang memudahkan penggunaan, hingga botol dengan ketahanan tinggi untuk menjaga kualitas produk di dalamnya. Setiap varian diproduksi dengan material pilihan dan pengawasan yang ketat oleh QC, memastikan keamanan, daya tahan, serta estetika yang menarik.",
    features: [
      "Botol caladine lotion 60 ml & 95 ml",
      "Botol caladine powder 60 gr & 100 gr",
      "botol caladine baby powder kecil & besar",
      "botol caladine baby liquid kecil & besar",
      "botol oilum cleansing wash 210 ml"
    ],
    price: "Mulai dari Rp 5.000 / pcs",
    image: "assets/produk1.jpg"
  },
  produk2: {
    title: "Varian Tutup",
    description: "Kami menyediakan varian tutup yang dirancang untuk memberikan perlindungan optimal dan kemudahan penggunaan. Mulai dari tutup dengan segel kedap udara untuk menjaga kesegaran produk dan kebocoran untuk cairan, hingga tutup ergonomis yang memudahkan pembukaan dan penutupan. Setiap tutup diproduksi dengan standar kualitas tinggi dan material tahan lama, memastikan keamanan produk Anda tetap terjaga selama distribusi dan penyimpanan. Pilih varian tutup kami yang inovatif dan fungsional untuk melengkapi kemasan produk Anda dengan sempurna. varian tutup yang telah tersedia adalah :",
    features: [
      "Tutup caladine lotion",
      "Tutup caladine powder",
      "Tutup caladine baby powder",
      "Tutup caladine baby liquid",
    ],
    price: "Mulai dari Rp 1.500 / pcs",
    image: "assets/produk2.jpg"
  },
  produk3: {
    title: "Drigen Plastik Industri",
    description: "Jerigen plastik kami dirancang khusus untuk memberikan solusi penyimpanan dan pengangkutan cairan yang aman dan efisien. Terbuat dari material berkualitas tinggi yang tahan terhadap benturan dan bahan kimia, jerigen ini memastikan produk Anda terlindungi dengan maksimal selama proses distribusi dan penyimpanan. Dengan desain ergonomis dan berbagai pilihan kapasitas, jerigen kami mudah digunakan dan diandalkan untuk berbagai aplikasi industri, mulai dari kimia, farmasi, hingga makanan dan minuman. Pilih jerigen kami sebagai kemasan yang kuat, praktis, dan terpercaya untuk kebutuhan bisnis Anda.",
    features: [
      "Jerigen kapasitas 1 liter",
      "Jerigen kapasitas 2 liter",
      "Jerigen kapasitas 5 liter"
    ],
    price: "Mulai dari Rp 25.000 / pcs",
    image: "assets/produk3.jpg"
  }
};

function getProductIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

function displayProduct(productId) {
  const product = products[productId];
  if (!product) {
    document.querySelector('.product-detail-content').innerHTML = "<p>Produk tidak ditemukan.</p>";
    return;
  }

  document.getElementById('product-title').textContent = product.title;
  document.getElementById('product-description').textContent = product.description;

  const featuresList = document.getElementById('product-features');
  featuresList.innerHTML = "";
  product.features.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature;
    featuresList.appendChild(li);
  });

  document.getElementById('product-price').textContent = product.price;
  const img = document.getElementById('product-image');
  img.src = product.image;
  img.alt = product.title;
}

// Tombol kembali ke halaman produk
document.getElementById('back-button').addEventListener('click', () => {
  window.history.back();
});

// Inisialisasi halaman
const productId = getProductIdFromURL();
displayProduct(productId);
