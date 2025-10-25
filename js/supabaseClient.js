// supabaseClient.js
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// ضع بيانات مشروعك الخاصة بـ Supabase هنا
const supabaseUrl = 'https://dnimfbfmysroayjculow.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuaW1mYmZteXNyb2F5amN1bG93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyMzAxOTMsImV4cCI6MjA3NjgwNjE5M30.6slwRavUPClozrWubmKL_8ZUjnEXhM0zofROItWvD9E'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// --- دالة تحميل المنتجات ---
export async function loadProducts() {
    const container = document.getElementById('products-list')
    if (!container) return;

    container.innerHTML = 'Initializing store...'

    try {
        const { data, error } = await supabase.from('products').select('*')

        if (error) {
            console.error('Supabase error:', error)
            container.innerHTML = 'حدث خطأ أثناء تحميل المنتجات: ' + error.message
            return
        }

        if (!data || data.length === 0) {
            container.innerHTML = 'لا يوجد منتجات حالياً'
            return
        }

        container.innerHTML = ''
        data.forEach((product) => {
            const card = document.createElement('div')
            card.className = 'product-card bg-white shadow-md rounded-lg p-4 mb-4'
            card.innerHTML = `
                <h3 class="text-xl font-bold mb-2">${product.name}</h3>
                <p class="mb-2 text-gray-700">${product.description}</p>
                <strong class="text-mt-primary">${product.price} درهم</strong>
            `
            container.appendChild(card)
        })
    } catch (err) {
        console.error('Unexpected error:', err)
        container.innerHTML = 'حدث خطأ غير متوقع أثناء تحميل المنتجات.'
    }
}


