// js/supabaseClient.js
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = 'https://dnimfbfmysroayjculow.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuaW1mYmZteXNyb2F5amN1bG93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyMzAxOTMsImV4cCI6MjA3NjgwNjE5M30.6slwRavUPClozrWubmKL_8ZUjnEXhM0zofROItWvD9E'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function loadProducts() {
    const container = document.getElementById('products-list')
    container.innerHTML = 'Initializing store...'

    const { data, error } = await supabase.from('products').select('*')

    if (error) {
        console.error(error)
        container.innerHTML = 'حدث خطأ أثناء تحميل المنتجات'
        return
    }

    if (!data || data.length === 0) {
        container.innerHTML = 'لا يوجد منتجات حالياً'
        return
    }

    container.innerHTML = ''
    data.forEach((product) => {
        const card = document.createElement('div')
        card.className = 'product-card'
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <strong>${product.price} درهم</strong>
        `
        container.appendChild(card)
    })
}


