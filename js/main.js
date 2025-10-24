import { supabase } from './js/supabaseClient.js';

// --- تحميل المنتجات ---
export async function loadProducts() {
    const { data, error } = await supabase.from('products').select('*');

    if (error) {
        console.error('خطأ في جلب البيانات:', error);
        return;
    }

    const container = document.getElementById('products-list');
    container.innerHTML = '';

    data.forEach((product) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <strong>${product.price} درهم</strong>
        `;
        container.appendChild(card);
    });
}

// --- Admin Login / Logout ---
window.handleAdminLogin = (event) => {
    event.preventDefault();
    const pin = document.getElementById('admin-pin').value;
    if (pin === ADMIN_PIN) {
        adminLoggedIn = true;
        showNotification(T('notif_admin_granted'));
        renderPage('admin-panel');
    } else {
        showNotification(T('notif_admin_invalid'), 'bg-red-500');
    }
};

window.handleAdminLogout = () => {
    adminLoggedIn = false;
    showNotification(T('notif_admin_logout'), 'bg-gray-500');
    renderPage('home');
};

// --- Language / RTL ---
window.switchLanguage = (lang) => {
    currentLanguage = lang;
    localStorage.setItem('mtshop_language', lang);

    const htmlEl = document.documentElement;
    htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    currentLangDisplayEl.textContent = lang.toUpperCase();
    document.title = T('app_title');

    if (currentPage === 'admin-panel') {
        renderAdminPanel();
    } else {
        renderPage(currentPage);
    }
};

// --- Misc Utilities ---
window.copyUserId = () => {
    const tempInput = document.createElement('textarea');
    tempInput.value = userId;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showNotification(T('notif_id_copied'), 'bg-gray-500');
};

window.scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
        setTimeout(() => {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }, 10);
    }
};

// --- تنفيذ كل شيء بعد تحميل الصفحة ---
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
});
