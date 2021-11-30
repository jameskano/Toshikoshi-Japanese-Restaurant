function containerMargin() {
  const headerH = document.querySelector('.navbar').offsetHeight;
  const footerH = document.querySelector('.footer').offsetHeight;
  const containerH = document.querySelector('.container').offsetHeight;

  if (window.location.href.includes('cart' || 'dashboard')) {
    if (window.innerHeight > headerH + footerH + containerH) {
      document.querySelector('.container').style.marginBottom = window.innerHeight - (headerH + footerH + containerH) + 'px';
    } else {
      document.querySelector('.container').style.marginBottom = '0';
    }
  }
  else if(!window.location.href.includes('order')) {
    if (window.innerHeight > headerH + footerH + containerH) {
      document.querySelector('.container').style.margin = (window.innerHeight - (headerH + footerH + containerH)) / 2 + 'px 0';
    } else {
      document.querySelector('.container').style.marginBottom = '0';
    }
  }
}

export default containerMargin;
