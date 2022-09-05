//Esta Promesa me sirve para pedir los productos al archivo datos.js  
export const getProducts = (products) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(products)
    //reject(error => console.log(error))
  }, 3000);
})



