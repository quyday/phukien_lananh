// Scroll reveal animation
export const revealOnScroll = () => {
  const elements = document.querySelectorAll('.product-item, .gallery-item, .home-text, .home-image');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(element => {
    element.classList.add('hidden');
    observer.observe(element);
  });
};

// Smooth scroll to top
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Add loading animation
export const showLoading = () => {
  const loader = document.createElement('div');
  loader.className = 'loader';
  document.body.appendChild(loader);
};

export const hideLoading = () => {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
};

// Add hover effect to buttons
export const addHoverEffect = () => {
  const buttons = document.querySelectorAll('.buy-now-btn, .subscribe-btn, .add-to-cart, .buy-now');
  
  buttons.forEach(button => {
    button.addEventListener('mouseover', (e) => {
      const x = e.pageX - button.offsetLeft;
      const y = e.pageY - button.offsetTop;
      
      button.style.setProperty('--x', `${x}px`);
      button.style.setProperty('--y', `${y}px`);
    });
  });
}; 