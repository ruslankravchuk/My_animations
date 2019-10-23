let items_for_anim = document.querySelectorAll('.anim');
let anim_items = [".anim_cat", ".anim_u-96", ".anim_torpeds", ".anim_fire", ".anim_flag", ".anim_mine"];
const for_anim_activ_clas = "_boom";
const for_anim_pasiv_clas = "_pasiv";
let anim_name = (x) => { 
    let arrey =  [ ];    
    for (let i = 0; anim_items.length > i; i++) 
    {           
        arrey.push(anim_items[i]+x)
    } 
        return arrey
         };
let anim_pasiv_names = anim_name(for_anim_pasiv_clas); 
let anim_activ_names = anim_name(for_anim_activ_clas);
document.querySelector('.frozen').addEventListener('click', anim_pause);
document.querySelector('.boolid').addEventListener('click', () => { change_anim_name(anim_pasiv_names) } ); 

function anim_pause () {
    for (let i = 0; i<items_for_anim.length; i++)                           {        
        if (items_for_anim[i].hasAttribute('style'))
        {
            items_for_anim[i].removeAttribute('style');
            document.querySelector('.messadge').setAttribute('style', 'display: flex;')            
        }
        else {
            items_for_anim[i].setAttribute('style', 'animation-play-state: running');
            document.querySelector('.messadge').removeAttribute('style')
                            }
                     }
               }
               
function change_anim_name (anim_pasiv_names) {         
    let control_style_anim = document.querySelectorAll(anim_pasiv_names); 
    console.log(control_style_anim) 
    control_style_anim.forEach((element) => {
        element.classList.forEach((element) => { 
                         
            for (let i = 0; i < anim_pasiv_names.length; i++)  
            {                    
                   if ("."+element == anim_pasiv_names[i]) {                                            
                       let items = document.querySelector("."+element);                       
                       let items_2 = items.classList.item(0);
                       items.classList.remove(element);               
                       let u = anim_activ_names[i].slice(1); 
                       console.log(u)                                      
                       document.querySelector("."+items_2).classList.add(u)
                       
                   }   

            }         
                                })        
    }); 
                if (document.querySelectorAll(anim_activ_names)) {
                    setTimeout(() => {
                        let new_elem = document.createElement("div");    
                        new_elem.innerText = "Як тобі таке Ілон Маск!!!";
                        new_elem.classList.add("popup");
                        document.querySelector('body').appendChild(new_elem);
                        setTimeout(() => {        
                            document.querySelector('body').removeChild(new_elem); 
                    
                        },  5000  )
                            }, 19000 )
                }
    

            } 
   
