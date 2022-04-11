// The script that controls the 'Reserve Now' button

$('.pRsrv').click(function () {
    let rBtn = $('.pRsrv')

    rBtn.text("Reserving Product...")
    
    setTimeout(() => {
        alert("Product reserved!")
        rBtn.text("Reserve Product")
    }, Math.floor(Math.random() * 8001));
    
})