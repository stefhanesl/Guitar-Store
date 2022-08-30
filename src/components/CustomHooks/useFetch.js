export const getItem = (products) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products)
    reject(error => console.log(error))
  }, 3000);
})



