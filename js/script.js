/* Menu Sobre */
 const sobre = document.querySelector(".header ul li:first-child")

sobre.addEventListener("click", (event) => {
  event.preventDefault()
  const element = event.target;
  const id = element.getAttribute('href')
  const to = document.querySelector(id).offsetTop;

  window.scroll({
    top: to - 50,
    behavior: "smooth",
  })
})

/* Menu Contato */
const contato = document.querySelector('.header ul li:nth-child(2)')

contato.addEventListener("click", (event) => {
  event.preventDefault()
  const element = event.target;
  const id = element.getAttribute('href')
  const to = document.querySelector(id).offsetTop;

  window.scroll({
    top: to,
    behavior: "smooth",
  })
}) 

/* Lanes */

const buttonAdc = document.querySelector(".adc_overlay")
const buttonSupp = document.querySelector(".supp_overlay")
const buttonTop = document.querySelector(".top_overlay")
const buttonMid = document.querySelector(".mid_overlay")
const buttonJg = document.querySelector(".jungle_overlay")


buttonJg.addEventListener("click", function(){
  const adc = document.querySelector(".videos_adc");
  const jinx = document.querySelector(".jinx2")
  const buttonAdc = document.querySelector(".adc_overlay")
  const supp = document.querySelector(".videos_supp")
  const thresh = document.querySelector(".thresh")
  const buttonSupp = document.querySelector(".supp_overlay")
  const buttonTop = document.querySelector(".top_overlay")
  const top = document.querySelector(".videos_top")
  const yasuo = document.querySelector(".yasuo")
  const buttonMid = document.querySelector(".mid_overlay")
  const mid = document.querySelector(".videos_mid")
  const lux = document.querySelector(".lux")
  const buttonJg = document.querySelector(".jungle_overlay")
  const jg = document.querySelector(".videos_jungle")
  const leona = document.querySelector(".leona")

  if (jg.style.display == "none"){
    
    jg.style.display = "block";
    leona.style.display = "block";
    jg.style.transition = "2s"
    buttonJg.style.opacity = "1";
    buttonJg.style.transition = "0.5s"
    supp.style.display = "none";
    thresh.style.display = "none"
    buttonSupp.style.opacity = "0.5"
    adc.style.display = "none";
    jinx.style.display = "none"
    buttonAdc.style.opacity = "0.5"
    top.style.display = "none";
    yasuo.style.display = "none"
    buttonTop.style.opacity = "0.5"
    mid.style.display = "none"
    lux.style.display = "none"
    buttonMid.style.opacity = "0.5"
  
  } else {
    jg.style.display = "none";
    leona.style.display = "none"
    buttonJg.style.opacity = "0.5"
    
  } 
})

buttonMid.addEventListener("click", function(){
  const adc = document.querySelector(".videos_adc");
  const jinx = document.querySelector(".jinx2")
  const buttonAdc = document.querySelector(".adc_overlay")
  const supp = document.querySelector(".videos_supp")
  const thresh = document.querySelector(".thresh")
  const buttonSupp = document.querySelector(".supp_overlay")
  const buttonTop = document.querySelector(".top_overlay")
  const top = document.querySelector(".videos_top")
  const yasuo = document.querySelector(".yasuo")
  const buttonMid = document.querySelector(".mid_overlay")
  const mid = document.querySelector(".videos_mid")
  const lux = document.querySelector(".lux")
  const buttonJg = document.querySelector(".jungle_overlay")
  const jg = document.querySelector(".videos_jungle")
  const leona = document.querySelector(".leona")

  if (mid.style.display == "none"){
    mid.style.display = "block";
    lux.style.display = "block";
    buttonMid.style.opacity = "1";
    buttonMid.style.transition = "0.5s"
    supp.style.display = "none";
    thresh.style.display = "none"
    buttonSupp.style.opacity = "0.5"
    adc.style.display = "none";
    jinx.style.display = "none"
    buttonAdc.style.opacity = "0.5"
    top.style.display = "none";
    yasuo.style.display = "none"
    buttonTop.style.opacity = "0.5"
    jg.style.display = "none";
    leona.style.display = "none";
    buttonJg.style.opacity = "0.5";
  
  } else {
    mid.style.display = "none";
    lux.style.display = "none"
    buttonMid.style.opacity = "0.5"
  }

})

buttonTop.addEventListener("click", function(){
  const adc = document.querySelector(".videos_adc");
  const jinx = document.querySelector(".jinx2")
  const buttonAdc = document.querySelector(".adc_overlay")
  const supp = document.querySelector(".videos_supp")
  const thresh = document.querySelector(".thresh")
  const buttonSupp = document.querySelector(".supp_overlay")
  const buttonTop = document.querySelector(".top_overlay")
  const top = document.querySelector(".videos_top")
  const yasuo = document.querySelector(".yasuo")
  const buttonMid = document.querySelector(".mid_overlay")
  const mid = document.querySelector(".videos_mid")
  const lux = document.querySelector(".lux")
  const buttonJg = document.querySelector(".jungle_overlay")
  const jg = document.querySelector(".videos_jungle")
  const leona = document.querySelector(".leona")

  if (top.style.display == "none"){
    top.style.display = "block";
    yasuo.style.display = "block";
    buttonTop.style.opacity = "1";
    buttonTop.style.transition = "0.5s"
    supp.style.display = "none";
    thresh.style.display = "none"
    buttonSupp.style.opacity = "0.5"
    adc.style.display = "none";
    jinx.style.display = "none"
    buttonAdc.style.opacity = "0.5"
    mid.style.display = "none"
    lux.style.display = "none"
    buttonMid.style.opacity = "0.5"
    jg.style.display = "none";
    leona.style.display = "none";
    buttonJg.style.opacity = "0.5";
  
  } else {
    top.style.display = "none";
    yasuo.style.display = "none"
    buttonTop.style.opacity = "0.5"
  }

})

buttonAdc.addEventListener("click", function(){

  const adc = document.querySelector(".videos_adc");
  const jinx = document.querySelector(".jinx2")
  const buttonAdc = document.querySelector(".adc_overlay")
  const supp = document.querySelector(".videos_supp")
  const thresh = document.querySelector(".thresh")
  const buttonSupp = document.querySelector(".supp_overlay")
  const buttonTop = document.querySelector(".top_overlay")
  const top = document.querySelector(".videos_top")
  const yasuo = document.querySelector(".yasuo")
  const buttonMid = document.querySelector(".mid_overlay")
  const mid = document.querySelector(".videos_mid")
  const lux = document.querySelector(".lux")
  const buttonJg = document.querySelector(".jungle_overlay")
  const jg = document.querySelector(".videos_jungle")
  const leona = document.querySelector(".leona")

  if (adc.style.display == "none"){
    adc.style.display = "block";
    jinx.style.display = "block";
    buttonAdc.style.opacity = "1";
    buttonAdc.style.transition = "0.5s"
    supp.style.display = "none";
    thresh.style.display = "none"
    buttonSupp.style.opacity = "0.5"
    top.style.display = "none";
    yasuo.style.display = "none"
    buttonTop.style.opacity = "0.5"
    mid.style.display = "none"
    lux.style.display = "none"
    buttonMid.style.opacity = "0.5"
    jg.style.display = "none";
    leona.style.display = "none";
    buttonJg.style.opacity = "0.5";
  
  } else {
    adc.style.display = "none";
    jinx.style.display = "none"
    buttonAdc.style.opacity = "0.5"
  }
})

buttonSupp.addEventListener("click", function(){

  const supp = document.querySelector(".videos_supp")
  const thresh = document.querySelector(".thresh")
  const buttonSupp = document.querySelector(".supp_overlay")
  const adc = document.querySelector(".videos_adc");
  const jinx = document.querySelector(".jinx2")
  const buttonAdc = document.querySelector(".adc_overlay")
  const buttonTop = document.querySelector(".top_overlay")
  const top = document.querySelector(".videos_top")
  const yasuo = document.querySelector(".yasuo")
  const buttonMid = document.querySelector(".mid_overlay")
  const mid = document.querySelector(".videos_mid")
  const lux = document.querySelector(".lux")
  const buttonJg = document.querySelector(".jungle_overlay")
  const jg = document.querySelector(".videos_jungle")
  const leona = document.querySelector(".leona")

  if(supp.style.display == "none"){
    supp.style.display = "block";
    thresh.style.display = "block"
    buttonSupp.style.opacity = "1"
    buttonSupp.style.transition = "0.5s"
    adc.style.display = "none";
    jinx.style.display = "none"
    buttonAdc.style.opacity = "0.5"
    top.style.display = "none";
    yasuo.style.display = "none"
    buttonTop.style.opacity = "0.5"
    mid.style.display = "none"
    lux.style.display = "none"
    buttonMid.style.opacity = "0.5"
    jg.style.display = "none";
    leona.style.display = "none";
    buttonJg.style.opacity = "0.5";

  } else {
    supp.style.display = "none";
    thresh.style.display = "none"
    buttonSupp.style.opacity = "0.5"
  }
})

