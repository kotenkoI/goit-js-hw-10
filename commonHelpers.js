import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as h,i as g}from"./assets/vendor-77e16229.js";const a=document.querySelector("span[data-days]"),i=document.querySelector("span[data-hours]"),c=document.querySelector("span[data-minutes]"),u=document.querySelector("span[data-seconds]");let e,o,d;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]),t[0].getTime()>Date.now()?(document.querySelector("button[data-start]").removeAttribute("disabled"),e=t[0],o=new Date,window.clearInterval(s)):(document.querySelector("button[data-start]").setAttribute("disabled",""),g.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}))}},S=document.getElementById("datetime-picker");h(S,b);const r=document.querySelector("button[data-start]");r.addEventListener("click",s);r.addEventListener("click",()=>{r.setAttribute("disabled",""),document.getElementsByClassName("flatpickr-input")[0].setAttribute("disabled",""),d=setInterval(s,1e3)});function s(){if(e.getTime()>o.getTime()){e=new Date(e.getTime()-1e3);const t=C(e.getTime()-o.getTime());a.textContent=n(t.days),i.textContent=n(t.hours),c.textContent=n(t.minutes),u.textContent=n(t.seconds)}else clearInterval(d),a.textContent="00",i.textContent="00",c.textContent="00",u.textContent="00"}function n(t){return t<10?t.toString().padStart(2,"0"):t}function C(t){const m=Math.floor(t/864e5),p=Math.floor(t%864e5/36e5),y=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:m,hours:p,minutes:y,seconds:f}}
//# sourceMappingURL=commonHelpers.js.map