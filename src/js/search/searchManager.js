//This script controlls recieving the search input (or, if there is none, it displays all items)

var r = window.location.search

        var srch = r.substring(8).replace("+",' ').toLowerCase()
        var srch2 = r.substring(8).replace("+",' ')

        
        var isAllItems

        if (r != '') {
            if (r.substring(8) == 'all' || r.substring(8) == '*') {
                r.replace('+', ' ')
                document.querySelector('.resultText').innerHTML = 'All Products:'
                isAllItems = true
            } else {
                r = r.replace('+', ' ')
                document.querySelector('.resultText').innerHTML = 'Results for <span>' + r.substring(8) + '</span>:'
                isAllItems = false
            }
        }
        else {
            r.replace('+', ' ')
            document.querySelector('.resultText').innerHTML = 'All Products:'
            isAllItems = true
        }

        $(document).ready(function () {
            fetch('src/json/products.json')
                .then(response => response.json())
                .then(data => {
                    const pDiv = $('.products')

                    if (isAllItems === true) {
                        $('title').text("All" + " - Fitness")
                        for (const x in data.products) {
                            
                            pDiv.html(pDiv.html() + `
                            <div class="product">
                                <h1 class="pName">${data.products[x].product.name}</h1>
                                <img src="${data.products[x].product.image}" class="pImg">
                                <h3 class="pPrice">${data.products[x].product.price}</h3>
                                <a href="product.html?product=${data.products[x].product.min}" class="pViewMore">View Details</a><br>
                                </div>
                                `)
                        }
                            document.querySelector('.resultText').innerHTML = document.querySelector('.resultText').innerHTML + ` <mini>(${$('.product').length} results)</mini>` 
                        } 
                        
                        else {
                            $('title').text(srch2 + " - Fitness")
                            for (const x in data.products) {
                                let keyWords = data.products[x].keywords
                                let confirm = 0
                                for (const y in keyWords) {
                                    if (keyWords[y].includes(srch)) {
                                        confirm++
                                    }
                        }

                        if (confirm >= 1) {

                        pDiv.html(pDiv.html() + `
                        <div class="product">
                            <h1 class="pName">${data.products[x].product.name}</h1>
                            <img src="${data.products[x].product.image}" class="pImg">
                            <h3 class="pPrice">${data.products[x].product.price}</h3>
                            <a href="product.html?product=${data.products[x].product.min}" class="pViewMore">View Details</a><br>
                        </div>
                        `)
                    }
                }
                document.querySelector('.resultText').innerHTML = document.querySelector('.resultText').innerHTML + ` <mini>(${$('.product').length} results)</mini>` 
                }
            })
        })