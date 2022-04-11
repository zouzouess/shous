 export function Header () {

    const myHeader =document.createElement('header');
    myHeader.innerHTML=`
 <div class="logotitle">
    
<img  class="logo" src="./asset/images/logo.jpeg" alt="logoheader">
<h1 class="headertitle">SHOES ME</h1>
</div>
<input type="text" id="serchbar"  placeholder="recherche">

<div class="connexion">
  
    <a class=" compte textdeco" href="./authentif-html.HTML">MON COMPTE</a>
    <a class=" panier textdeco" href="./panier-htlm.html">MON PANIER🧺 </a>
     
</div>



<nav class="nav">
  
    <a href="tousproduits.html" class="nproduit textdeco" >NOS PRODUITS</a>
    <a href="promos.html"class="promos textdeco" >PROMOS</a>
    <a href="#contacts" class="contact textdeco" >NOUS CONTACTER</a>

    </nav>


    `
return myHeader

 }

