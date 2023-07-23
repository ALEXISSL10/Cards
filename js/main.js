
function getData(){
    
let promesa = fetch("https://fakestoreapi.com/products", {
        method: "GET"
});


promesa.then( (response) => {
    response.json()
    .then(
            (data) => {
                createCards(data);
            } )


    .catch(
                (error) => {console.error("Problema en el json")}
    );
})

.catch( (error) => {
    console.error(error, "Ocurrió un error en la solicitud");
});



    // Se ejecuta la función dentro de 2 segundos
    // setTimeout (()=>{console.log(data);} , 2000);
    // return data;



} //get Data

// console.log(getData());

getData();


// function createCards(data){

//     data.forEach(producto => {
//         console.log(producto.id, producto.title);
        
//     });
// }

let mainProds = document.getElementById("mainProds");
function createCards(prods){

        prods.forEach(prod => {
            mainProds.insertAdjacentHTML("beforeend",
            
            `  <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${prod.image}" class="img-fluid rounded-start" alt="${prod.description}" >
              </div>
              
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${prod.title}</h5>
                  <p class="card-text"><strong>${prod.category}</strong></p>
                  <p class="card-text"><small class="text-body-secondary" >${prod.description.slice(0,80)}</small></p>
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal_${prod.id}">
  Info
  </div>
  </div>
  </button>
<!--card-->
<!-- Modal -->
<div class="modal fade" id="exampleModal_${prod.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="${prod.title}">${prod.title}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      ${prod.description}
      <div style='text-align:right'>
     <p class="tex-end"><strong>$ ${prod.price} USD </strong></p>
     </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
                
              </div>
            </div>
          </div>  `
            
            );
            
        });
    }