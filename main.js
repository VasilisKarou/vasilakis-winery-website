const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

const toggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

if(toggle && nav){
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}
function filterProducts(category){

let products = document.querySelectorAll(".product-card");

products.forEach(product => {

if(category === "all"){
product.style.display = "block";
}

else if(product.classList.contains(category)){
product.style.display = "block";
}

else{
product.style.display = "none";
}

});

}
document.querySelectorAll(".read-more").forEach(btn => {
  btn.addEventListener("click", () => {

    const desc = btn.previousElementSibling;

    desc.classList.toggle("open");

    if(desc.classList.contains("open")){
      btn.textContent = btn.dataset.less;
    } else {
      btn.textContent = btn.dataset.more;
    }

  });
});
function openAward(src){
  const modal = document.getElementById("awardModal");
  const img = document.getElementById("awardImage");

  img.src = src;
  modal.style.display = "flex";
}

function closeAward(){
  document.getElementById("awardModal").style.display = "none";
}

document.getElementById("awardModal").addEventListener("click", function(e) {
  if(e.target === this){
    this.style.display = "none";
  }
});