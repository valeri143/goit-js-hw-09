const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.querySelector("body");let a=null;e.addEventListener("click",(function(){a=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,e.disabled=!0,t.disabled=!1}),1e3)})),t.addEventListener("click",(function(){clearInterval(a),e.disabled=!1,t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.74a153a9.js.map
