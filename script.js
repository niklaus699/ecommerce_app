const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const mobileMenu = document.getElementById('mobileMenu');
const addToCart = document.getElementById('addToCart');
const pushToCart = document.getElementById('pushToCart');
const removeFromCart = document.getElementById('removeFromCart');
const cartCount = document.getElementById('cartQuantity');
const price = 125;


// Toggle menu visibility
menuIcon.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
});

// Close menu when clicking outside
if (window.innerWidth < 768) {
    window.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && e.target !== menuIcon) {
        console.log(e.target);
        mobileMenu.style.display = 'none';}})
    }


// Image array
let images = [
'./images/image-product-1-thumbnail.jpg',
'./images/image-product-2-thumbnail.jpg',
'./images/image-product-3-thumbnail.jpg',
'./images/image-product-4-thumbnail.jpg'
];

let currentIndex = 0;
const currentImage = document.getElementById('currentImage');
const prevBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');

const updateImage = () => {
currentImage.src = images[currentIndex];
}

prevBtn.addEventListener('click', () => {
currentIndex = (currentIndex - 1 + images.length) % images.length;
updateImage();
});

nextBtn.addEventListener('click', () => {
currentIndex = (currentIndex + 1) % images.length;
updateImage();
});

// Initialize with the first image
updateImage();   
const cartContent = document.getElementById('cartContent'); 
let count = 0;
addToCart.addEventListener('click', () => {
    count+=1;
    cartCount.textContent = `${count}`;
    cartQuantityCount.textContent = `${count}`;
    if (count > 0){
        cartQuantity.style.visibility="visible";
    }
    else{
        cartQuantity.style.visibility="hidden";
    }
})

removeFromCart.addEventListener('click', () => {
    count > 0 ? count-=1 : count = 0;
    cartCount.textContent = `${count}`;
    cartQuantityCount.textContent = `${count}`;
     if (count > 0){
        cartQuantity.style.visibility="visible";
    }
    else{
        cartQuantity.style.visibility="hidden";
    }
})

const updateState = () => {
    cartContent.innerHTML=""
    cartContent.classList.remove('finalCartContent');
    cartContent.classList.remove('cart-content')
    cartContent.classList.add("cart-content-empty");
    productInfo.className = "empty-text";
    productInfo.textContent = "Your cart is empty.";
    cartContent.append(cartText,underline, productInfo);
    cartContent.style.visibility="visible";
    cartCount.textContent = `${count}`;
}

const purchaseContainer = document.createElement('div');
const purchaseImage = document.createElement('img');
const purchaseInfoContainer = document.createElement('div');
let productInfo = document.createElement('span');
const priceByCount = document.createElement('span');
const productTotal = document.createElement('span');
const trashIcon = document.createElement('img');
const checkoutBtn = document.createElement('div');
const btnTxt = document.createElement('span');
const cartText = document.createElement('span');
const underline = document.createElement('hr');
const cartQuantity = document.getElementById('count');
const cartQuantityCount = document.getElementById('cartQuantityCount');
const lastVariable = document.getElementById("imageProductDiv");

pushToCart.addEventListener('click', () => {
    cartContent.style.display ="grid";
    cartContent.style.visibility="visible";
    cartContent.style.flexDirection ="column";
    window.addEventListener('click', (e) => {
        if (cartContent.contains(e.target)) {
            cartContent.style.visibility = 'hidden';
        }})
    underline.style.width="99%";
    underline.style.position="absolute";
    underline.style.top="20%";
    cartText.textContent="Cart";
    cartText.className="cart-text-info";

    if (count > 0){
        cartContent.innerHTML ="";
        cartContent.classList.remove('finalCartContent');
        cartContent.classList.remove('cart-content-empty');
        cartContent.classList.add("cart-content");
        btnTxt.textContent = "Checkout";
        checkoutBtn.className = "checkout-btn";
        productInfo.textContent = "Fall Limited Edition Sneakers";
        productInfo.className="product-info";
        trashIcon.src = "./images/icon-delete.svg";
        trashIcon.className="trash";
        purchaseImage.src = "./images/image-product-1-thumbnail.jpg";
        purchaseImage.className = "thumbnail";
        purchaseContainer.className = "purchase-container";
        purchaseInfoContainer.className ="purchase-info";
        let total = count * price;
        priceByCount.textContent = `$125.00 x ${count}  `;
        productTotal.textContent = `    $${total}`;
        productTotal.className="total-price";   
        priceByCount.appendChild(productTotal);
        purchaseInfoContainer.append(productInfo, priceByCount);
        purchaseContainer.append(purchaseImage, purchaseInfoContainer,  trashIcon);
        checkoutBtn.append(btnTxt);
        cartContent.append(cartText, underline, purchaseContainer, checkoutBtn)
        cartQuantityCount.textContent = `${count}`;
        cartQuantity.style.visibility="visible";
        
        trashIcon.addEventListener('click', () => {
            count = 0;
            cartQuantity.style.visibility="hidden";
            updateState();
        })

        checkoutBtn.addEventListener('click', () => {
            cartContent.innerHTML ="";
            const thankYouText = document.createElement('span');
            const orderIsComing = document.createElement('p');
            orderIsComing.textContent="Your Order is on the way";
            thankYouText.textContent="Thank You For Shopping with us";
            cartContent.style.display= "flex";
            cartContent.classList.remove('cart-content');
            cartContent.classList.add('finalCartContent');
            cartContent.append(thankYouText, orderIsComing);
        })

    }
    else {
        updateState();
        cartQuantity.style.visibility="hidden";
    }
})