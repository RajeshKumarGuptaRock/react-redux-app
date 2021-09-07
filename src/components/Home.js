import React from 'react'
function Home(){
    return(
        <div>
            <div className="add-to-cart">
            <img src="https://static.vecteezy.com/system/resources/previews/000/574/981/non_2x/shopping-cart-trolley-icon-vector.jpg"/> 
            </div>
            <h1>Home Component 11</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://picsum.photos/id/237/200/300"/>
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000
                    </span>
                </div>
                <div className="btn-wrapper item">
                   <button>Add To Cart</button> 
                </div>
            </div>
        </div>
    )
}
export default Home