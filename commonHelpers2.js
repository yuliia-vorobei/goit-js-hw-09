import"./assets/styles-02f7a926.js";let a={email:"",message:""};const s=document.querySelector(".feedback-form"),m=localStorage.getItem("feedback-form-state");if(m){const e=JSON.parse(m);s.elements.email.value=e.email,s.elements.message.value=e.message,a.email=e.email,a.message=e.message}s.addEventListener("input",o);function o(e){e.preventDefault();let t=e.target.value,l=e.target.name;a[l]=t,localStorage.setItem("feedback-form-state",JSON.stringify(a))}s.addEventListener("submit",n);function n(e){e.preventDefault();const t=e.target,l=t.elements.email.value.trim(),r=t.elements.message.value.trim();l!=""&&r!=""?(console.log(a),localStorage.removeItem("feedback-form-state"),a={email:"",message:""},t.reset()):alert("Fill please all fields")}
//# sourceMappingURL=commonHelpers2.js.map