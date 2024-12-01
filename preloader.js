document.addEventListener("DOMContentLoaded", function() {
    // Simulate a delay to demonstrate the preloader (remove this setTimeout in production)
    setTimeout(function(){
        document.querySelector('.preloader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 2000); // Adjust the timeout as per your requirement
});
