"use strict";var items_for_anim=document.querySelectorAll(".anim"),anim_items=[".anim_cat",".anim_u-96",".anim_torpeds",".anim_fire",".anim_flag",".anim_mine"],for_anim_activ_clas="_boom",for_anim_pasiv_clas="_pasiv",anim_name=function(e){for(var t=[],n=0;anim_items.length>n;n++)t.push(anim_items[n]+e);return t},anim_pasiv_names=anim_name(for_anim_pasiv_clas),anim_activ_names=anim_name(for_anim_activ_clas);function anim_pause(){for(var e=0;e<items_for_anim.length;e++)items_for_anim[e].hasAttribute("style")?(items_for_anim[e].removeAttribute("style"),document.querySelector(".messadge").setAttribute("style","display: flex;")):(items_for_anim[e].setAttribute("style","animation-play-state: running"),document.querySelector(".messadge").removeAttribute("style"))}function change_anim_name(m){var e=document.querySelectorAll(m);console.log(e),e.forEach(function(e){e.classList.forEach(function(e){for(var t=0;t<m.length;t++)if("."+e==m[t]){var n=document.querySelector("."+e),a=n.classList.item(0);n.classList.remove(e);var i=anim_activ_names[t].slice(1);console.log(i),document.querySelector("."+a).classList.add(i)}})}),document.querySelectorAll(anim_activ_names)&&setTimeout(function(){var e=document.createElement("div");e.innerText="Як тобі таке Ілон Маск!!!",e.classList.add("popup"),document.querySelector("body").appendChild(e),setTimeout(function(){document.querySelector("body").removeChild(e)},5e3)},19e3)}document.querySelector(".frozen").addEventListener("click",anim_pause),document.querySelector(".boolid").addEventListener("click",function(){change_anim_name(anim_pasiv_names)});