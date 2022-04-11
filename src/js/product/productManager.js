// This script loads the product details from the information it recieves from the url

var r = window.location.search
        
        $(document).ready(function () {
            var product = r.substring(9)
            // console.log(product)

            fetch("src/json/products.json")
                .then(response => response.json())
                .then(data => {
                    if (data.products[product]) { // Product found

                        // Main elememts
                        $('title').text(data.products[product].product.name)
                        $('.pTitle').text('- ' + data.products[product].product.name)
                        $('.pImg').attr('src', data.products[product].product.image)
                        $('.pDesc').text(data.products[product].product.desc)
                        $('.pPrice').text(data.products[product].product.price)

                        $('.pRandLeft').text((Math.floor(Math.random() * 4)+3) + " left")

                        var details = Object.values(data.products[product].product.details)
                        var infoList = $('.col2 ul')

                        // Details List
                        for (const x in details) {
                            infoList.html(infoList.html() + `<li>${details[x]}</li>`)
                        }

                        // Reviews
                        $('.pReview').html(` ~ ${(data.products[product].review.user)}
                        <h4>${data.products[product].review.title}</h4>
                        <h5>${data.products[product].review.main}</h5>
                        `)

                    } else { // Product not found
                        $('.row').remove()

                        $('.main').html(`
                            <div class="notFoundWrapper">
                                <h1 class="notFoundText">An error has occured and the requested product does not exist</h1>
                                <h4>You will be redirected soon <i class="fa-solid fa-clock"></i></h4>
                            </div>
                        `)

                        setTimeout(() => {
                            window.location = "/"
                        }, 2500);
                    }
                })
        })