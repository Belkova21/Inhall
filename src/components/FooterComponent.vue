<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-column">
        <ul>
          <li><a href="/">Domov</a></li>
          <li><a href="/products">Produkty</a></li>
          <li><a href="/services">Služby</a></li>
          <li><a href="/contact">Kontakt</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <p>INHALL s.r.o.</p>
        <p>Adresa: Centrum 26, 017 01 Považská Bystrica</p>
        <p>Telefón: +421 902 672 525, +421 944 224 282</p>
        <p>Email: inhall@inhall.sk</p>
      </div>
      <div class="footer-column">
        <ul>
          <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
          <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
          <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} INHALL s.r.o. Všetky práva vyhradené.</p>
    </div>
  </footer>
</template>

<style scoped>
/* Footer container */
.footer {
  background-color: #f6f6f6;
  color: #4d4e54; /* Soft dark text for readability */
  padding: 10px 0; /* Reduced padding */
  font-size: 12px; /* Smaller font size */
  line-height: 1.4; /* Slightly reduced line height */
  text-align: center;
}

/* Footer content sections */
.footer-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 5px; /* Reduced bottom margin */
}

/* Footer columns */
.footer-column {
  flex: 1;
  margin: 5px; /* Reduced margin */
  min-width: 100px; /* Minimum width for smaller screens */
}

/* Footer links */
.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column li {
  margin-bottom: 3px; /* Reduced spacing between list items */
}

.footer-column a {
  text-decoration: none;
  color: #4d4e54; /* Soft dark color */
  transition: color 0.3s;
}

.footer-column a:hover {
  color: #87cefa; /* Light blue hover effect */
}

/* Footer bottom section */
.footer-bottom {
  border-top: 1px solid #d1d3da;
  padding-top: 5px; /* Reduced padding at the top */
  font-size: 10px; /* Smaller font size for the bottom text */
  color: #4d4e54;
}
</style>
