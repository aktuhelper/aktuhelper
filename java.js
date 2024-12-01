
if('serviceWorker' in navigator){
navigator.serviceWorker.register('/se.js')
.then(function(){
  console.log('SW Registered');
});
}
addEventListener('click', function (event) {
  if (!detailsShown) {
    detailsShown = true;
    pwaCardContent.style.opacity = 0;
    pwaCardDetails.style.display = 'block';
    pwaCardContent.style.display = 'none';
    setTimeout(function () {
      pwaCardDetails.style.opacity = 1;
    }, 300);
  } else {
    detailsShown = false;
    pwaCardDetails.style.opacity = 0;
    pwaCardContent.style.display = 'block';
    pwaCardDetails.style.display = 'none';
    setTimeout(function () {
      pwaCardContent.style.opacity = 1;
    }, 300);
  }
});