<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>متجري</title>
    <link href="https://cdn.tailwindcss.com" rel="stylesheet">
</head>
<body>

<div id="products-list"></div>

<script type="module">
  import { loadProducts } from './supabaseClient.js';

  // تحميل المنتجات عند فتح الصفحة
  document.addEventListener('DOMContentLoaded', loadProducts);
</script>

</body>
</html>



