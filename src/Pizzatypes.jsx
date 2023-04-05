import mag from './images/magarita.jpg'
import ham from './images/ham and cheese.jpg'
import thin from './images/thin crust.jpg'
import veg from './images/vegetarian.jpg'
export function Pizzatypes() {
    return (
        <>
       
<div class="container-fluid pasteries">
  <h2 class="text-center">types of pizza</h2>
  <div class="row">
<div class="col-md-3">
  <div class="card-croissant">
    <img class="card-img-top paste-img" src={mag} alt="Card image cap"/>
    <div class="card-body">
      <h3>Magaritta</h3>
      <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nemo asperiores corrupti delectus recusandae voluptas voluptatibus non impedit et dolor nostrum cum voluptatum ut maxime esse ipsam a, aliquid totam?</p>
    </div>
  </div>
</div>

<div class="col-md-3">
  <div class="card">
    <img class="card-img-top paste-img " src={ham}alt="Card image cap"/>
    <div class="card-body">
      <h3>Ham and Cheese</h3>
      <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nemo asperiores corrupti delectus recusandae voluptas voluptatibus non impedit et dolor nostrum cum voluptatum ut maxime esse ipsam a, aliquid totam?</p>
    </div>
  </div>
</div>

<div class="col-md-3">
  <div class="card shortcake">
    <img class="card-img-top paste-img" src={thin} alt="Card image cap"/>
    <div class="card-body">
      <h3>Thin Crust</h3>
      <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nemo asperiores corrupti delectus recusandae voluptas voluptatibus non impedit et dolor nostrum cum voluptatum ut maxime esse ipsam a, aliquid totam?</p>
    </div>
  </div>
</div>



<div class="col-md-3">
  <div class="card applepie">
    <img class="card-img-top paste-img"src={veg} alt="Card image cap"/>
    <div class="card-body">
      <h3>Vegetarian</h3>
      <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nemo asperiores corrupti delectus recusandae voluptas voluptatibus non impedit et dolor nostrum cum voluptatum ut maxime esse ipsam a, aliquid totam?</p>
    </div>
  </div>
</div>

</div>
</div>  
 


        </>
    )
}



{/* <div class="container-fluid pasteries">
  <h2 class="text-center">Types of Pizza</h2>
  <div class="row">
<div class="col-md-3">
  <div class="card croissant">
    <img class="card-img-top paste-img" src={mag} alt="Card image cap"/>
    <div class="card-body">
      <h3>croissant</h3>
      <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nemo asperiores corrupti delectus recusandae voluptas voluptatibus non impedit et dolor nostrum cum voluptatum ut maxime esse ipsam a, aliquid totam?</p>
    </div>
  </div>
</div>
</div>
</div>   */}