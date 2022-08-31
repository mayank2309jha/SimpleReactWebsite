function Product(){

    let data = [
        { name: "Ryomen Sukuna",
          image: "https://pbs.twimg.com/media/E2fcWXvXwAMiG1A.jpg"
        },
        { name: "Gojo Satoru",
        image: "https://images2.alphacoders.com/114/thumb-1920-1140283.jpg"
        },
      { name: "Toji Fushiguro",
        image: "https://1.bp.blogspot.com/-lXJNwgwbPFM/YCnTI9IGsII/AAAAAAAAG78/QARShfLzje0L_WBqqJkqxWvrhbaktapBgCPcBGAsYHg/w919-h516-p-k-no-nu/jujutsu-kaisen-toji-fushiguro-uhdpaper.com-4K-7.3075-wp.thumbnail.jpg"
        },
        {name: "Levi Ackerman",
        image: "https://wallpapercave.com/wp/wp1956139.jpg"
        },
    ];
    return(
        <div className = "products">
            <h1 class = "intro">Other Gods</h1>
            <div className = "pro">
                
                {

                    data.map(function(product)
                    { 
                        return(
                        <div className = "product">
                            <div>
                                <img className = "img" src = {product.image}/>
                            </div>
                            <h1>{product.name}</h1>
                        </div>
                        )
                    })  
                }
            </div>
        </div>
    )
}
export default Product;