// guys i have made it a id based application as this is how to works in real world
// there are only 2 easy to understand changes read the code carefully

// new function getProductByID() is created check it out

let products = [
  {
    id: 1,
    name: "White Tshirt",
    size: "L",
    color: "white",
    price: 90,
    image: "product1.jpg",
    description: "Good looking white tshirt",
  },
  {
    id: 2,
    name: "Black Shirt",
    size: "M",
    color: "Black",
    price: 1500,
    image: "product2.jpg",
    description: "Good looking black shirt",
  },

  {
    id: 3,
    name: "Checked Shirt",
    size: "S",
    color: "White & Black",
    price: 900,
    image: "product3.jpg",
    description: "Good looking Checked Shirt",
  },

  {
    id: 4,
    name: "Black Female Blazer",
    size: "M",
    color: "Black",
    price: 3000,
    image: "product4.jpg",
    description: "Beautifull Blazer",
  },

  {
    id: 5,
    name: "Navy Blue Top",
    size: "S",
    color: "Blue",
    price: 1300,
    image: "product5.jpg",
    description: "Good looking Top",
  },

  {
    id: 6,
    name: "Indian Dress",
    size: "M",
    color: "Henna",
    price: 1500,
    image: "product6.jpg",
    description: "Good looking Traditional Dress",
  },
  {
    id: 7,
    name: "Mens Formal Wear",
    size: "L",
    color: "White & Black",
    price: 100,
    image: "product7.jpg",
    description: "Good looking Formal Dress",
  },
  {
    id: 8,
    name: "Yoga Pant",
    size: "M",
    color: "Grey",
    price: 400,
    image: "product8.jpg",
    description: "Good looking Slim Fit Pant",
  },
  {
    id: 9,
    name: "Denim Jeans",
    size: "L",
    color: "Navy Blue",
    price: 1350,
    image: "product9.jpg",
    description: "Good looking Jeans",
  },
  {
    id: 10,
    name: "Women Formal Wear",
    size: "M",
    color: "Black & Grey",
    price: 1200,
    image: "product10.jpg",
    description: "Good looking Formal Dress",
  },
  {
    id: 11,
    name: "Red Pant",
    size: "L",
    color: "Red",
    price: 750,
    image: "product11.jpg",
    description: "Good looking Pants",
  },
  {
    id: 12,
    name: "Wedding Kurta",
    size: "L",
    color: "Multicolor",
    price: 2000,
    image: "product12.jpg",
    description: "Good looking Traditional Wedding Kurta",
  },
];

cart = [];
let counter=0;


function displayProducts(productsData, who = "productwrapper") {
  let productsString = "";

  productsData.forEach(function (product, index) {
    let { id, name, image, color, description, price, size } = product;

    if (who == "productwrapper") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="productimages/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button class="button addbutton" onclick="addToCart(${id})">Add to Cart</button>
        </p>
      </div>`;
    } else if (who == "cart") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="productimages/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button class="button removebutton" onclick="removeFromCart(${id})">Remove from Cart</button>
        </p>
      </div>`;
    }
  });

  document.getElementById(who).innerHTML = productsString;
}

displayProducts(products);

function searchProduct(searchValue) {
  let searchedProducts = products.filter(function (product, index) {
    let searchString =
      product.name + " " + product.color + " " + product.description;

    return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });
  console.log("search"+ searchedProducts);
  displayProducts(searchedProducts);
}

// this is a function to get a product based on id from a particular array
// @param 1 the array u want to get products from
// @param 2 the id u want to search

function getProductByID(productArray, id) {
  return productArray.find(function (product) {
    return product.id == id;
  });
}

function addToCart(id) {
  // getting the product
  let pro = getProductByID(products, id);
  let kkcart=getProductByID(cart,id);
  console.log(pro,kkcart);
  //   putting in cart
  if(kkcart==null)
  {
    cart.push(pro);
    counter++;
  }
  else if(pro==kkcart){
    console.log("yesyes");
  alert("Item already in cart");  
  }
  else{
    cart.push(pro);
    counter++;
  }
  if(counter>0){
    document.getElementById("cartcounter").innerHTML = counter +"items";

  }
  
  displayProducts(cart, "cart");
}

function removeFromCart(id) {
  // getting the index based on id
  let index = cart.findIndex(function (product) {
    return product.id == id;
  });

  //   removing from cart based on index
  cart.splice(index, 1);
  counter--;
  if(counter==0){
  document.getElementById("cartcounter").innerHTML = "Cart is Empty";
  }
  else{
  document.getElementById("cartcounter").innerHTML = counter +"items";
  }
  displayProducts(cart, "cart");
}

function filterproducts(e){
  e.preventDefault();

  let max=document.getElementById("maxprice").value;
  let min=document.getElementById("minprice").value;
  console.log(max,min);
  
  let filterProducts = products.filter(function (product, index) {
      
    if(product.price>=min && product.price<=max){
      return product;
    }
  });
  //console.log("blah"+ filterProducts);
  document.getElementById("maxprice").value="";
  document.getElementById("minprice").value="";
  
  displayProducts(filterProducts);
}
if(counter==0){
  document.getElementById("cartcounter").innerHTML = "Cart is Empty";
}
function Reset(){

  displayProducts(products);
}