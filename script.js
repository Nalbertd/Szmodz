// Função para carregar dados do JSON
async function loadData() {
    try {
        const response = await fetch('products.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
        return null;
    }
}

// Função para criar ícones SVG dos links sociais
function createSocialIcon(platform) {
    const icons = {
        youtube: `<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3545 15.2793L7.07189 15.2181C6.00906 15.1967 4.94359 15.2393 3.90161 15.0182C2.3165 14.6877 2.20421 13.0675 2.0867 11.7084C1.9248 9.79779 1.98747 7.85245 2.29302 5.95773C2.46551 4.8946 3.14432 4.26022 4.19408 4.19119C7.7378 3.94066 11.3051 3.97035 14.8409 4.08723C15.2144 4.09795 15.5904 4.15651 15.9586 4.22317C17.7762 4.54829 17.8205 6.38436 17.9384 7.92998C18.0559 9.49156 18.0063 11.0611 17.7817 12.6121C17.6015 13.8962 17.2568 14.9731 15.8019 15.077C13.9791 15.213 12.1981 15.3224 10.3701 15.2876C10.3702 15.2793 10.3597 15.2793 10.3545 15.2793ZM8.42463 12.0283C9.79829 11.2234 11.1457 10.432 12.5115 9.63257C11.1353 8.82773 9.79043 8.03631 8.42463 7.23688V12.0283Z" fill="currentColor"/>
        </svg>`,
        telegram: `<svg width="19" height="15" viewBox="0 0 19 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.00611 6.49944C6.67043 4.46712 9.78083 3.1276 11.337 2.48024C15.7805 0.632238 16.7037 0.310958 17.3053 0.300398C17.4378 0.298158 17.7335 0.330798 17.9255 0.486318C18.0874 0.617518 18.1319 0.795118 18.1533 0.919598C18.1748 1.04408 18.2013 1.32792 18.1802 1.54936C17.9396 4.07928 16.8976 10.2188 16.3674 13.0524C16.1431 14.2514 15.7015 14.6534 15.274 14.6927C14.3447 14.7782 13.6394 14.0786 12.7392 13.4889C11.3309 12.5657 10.5354 11.9913 9.16867 11.0905C7.58883 10.0495 8.61315 9.47736 9.51331 8.54232C9.74883 8.29752 13.8429 4.574 13.922 4.23608C13.9319 4.19384 13.9412 4.0364 13.8474 3.9532C13.7536 3.87 13.6157 3.89848 13.5162 3.9212C13.3751 3.9532 11.1255 5.44024 6.76739 8.382C6.12899 8.8204 5.55043 9.03416 5.03235 9.02296C4.46115 9.01048 3.36227 8.70008 2.54531 8.43448C1.54339 8.10872 0.746914 7.93656 0.816354 7.38328C0.852514 7.09528 1.24931 6.80056 2.00675 6.49944H2.00611Z" fill="currentColor"/>
        </svg>`,
        discord: `<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0909 6.27273C15.0909 6.27273 13.6317 5.13045 11.9091 5L11.7538 5.31086C13.311 5.69236 14.0256 6.23773 14.7727 6.90909C13.485 6.25173 12.2145 5.63636 10 5.63636C7.78545 5.63636 6.51495 6.25173 5.22727 6.90909C5.97436 6.23773 6.82455 5.63127 8.24618 5.31086L8.09091 5C6.28364 5.17023 4.90909 6.27273 4.90909 6.27273C4.90909 6.27273 3.27968 8.63555 3 13.2727C4.64182 15.1669 7.13636 15.1818 7.13636 15.1818L7.65818 14.4869C6.77236 14.1789 5.77327 13.6294 4.90909 12.6364C5.93936 13.4159 7.49432 14.2273 10 14.2273C12.5057 14.2273 14.0606 13.4159 15.0909 12.6364C14.227 13.6294 13.228 14.1789 12.3418 14.4869L12.8636 15.1818C12.8636 15.1818 15.3582 15.1669 17 13.2727C16.7203 8.63555 15.0909 6.27273 15.0909 6.27273ZM7.93182 12C7.31645 12 6.81818 11.4305 6.81818 10.7273C6.81818 10.0241 7.31645 9.45455 7.93182 9.45455C8.54718 9.45455 9.04545 10.0241 9.04545 10.7273C9.04545 11.4305 8.54718 12 7.93182 12ZM12.0682 12C11.4528 12 10.9545 11.4305 10.9545 10.7273C10.9545 10.0241 11.4528 9.45455 12.0682 9.45455C12.6835 9.45455 13.1818 10.0241 13.1818 10.7273C13.1818 11.4305 12.6835 12 12.0682 12Z" fill="currentColor"/>
        </svg>`
    };
    return icons[platform] || '';
}

// Função para renderizar links sociais
function renderSocialLinks(socialLinks) {
    const container = document.getElementById('social-links');
    
    socialLinks.forEach(link => {
        const socialElement = document.createElement('a');
        socialElement.href = link.url;
        socialElement.target = '_blank';
        socialElement.rel = 'noopener noreferrer';
        socialElement.className = 'social-link';
        socialElement.setAttribute('aria-label', `${link.platform} Social Link`);
        socialElement.innerHTML = createSocialIcon(link.platform);
        
        container.appendChild(socialElement);
    });
}

// Função para renderizar produtos
function renderProducts(products, whatsappNumber) {
    const container = document.getElementById('products');
    
    // Criar grid de produtos
    const grid = document.createElement('div');
    grid.className = 'products-grid';
    
    products.forEach(product => {
        const productCard = document.createElement('a');
        productCard.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(product.whatsapp_message)}`;
        productCard.target = '_blank';
        productCard.rel = 'noopener noreferrer';
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">${product.price}</div>
                <button class="buy-button">Comprar via WhatsApp</button>
            </div>
        `;
        
        grid.appendChild(productCard);
    });
    
    container.appendChild(grid);
}

// Função para renderizar seção sobre
function renderAbout(about) {
    document.getElementById('about-title').textContent = about.title;
    document.getElementById('about-description').textContent = about.description;
}

// Função principal para inicializar a página
async function initializePage() {
    const data = await loadData();
    
    if (!data) {
        console.error('Não foi possível carregar os dados');
        return;
    }
    
    // Configurar informações do site
    document.title = data.site_info.title;
    document.getElementById('site-title').textContent = data.site_info.title;
    document.getElementById('profile-image').src = data.site_info.profile_image;
    document.getElementById('profile-image').alt = data.site_info.title;
    
    // Renderizar seções
    renderSocialLinks(data.social_links);
    renderProducts(data.products, data.whatsapp_number);
    renderAbout(data.about);
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', initializePage);

