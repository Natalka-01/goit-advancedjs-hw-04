import{a as p,i as u,S as f}from"./assets/vendor-BgmC94F3.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const m=s=>`
    <li class="gallery-card">
    <a class = "js-gallery-link" href = "${s.largeImageURL}"> <img class="gallery-img" src="${s.webformatURL}" alt="${s.tags}"/></a>
    <div class="stats-container">
        <ul class="stats-list">
            <li class="gallery-item">
                <span class="label">Likes</span>
                <span class="value">${s.likes}</span>
            </li>
            <li class="gallery-item">
                <span class="label">Views</span>
                <span class="value">${s.views}</span>
            </li>
            <li class="gallery-item">
                <span class="label">Comments</span>
                <span class="value">${s.comments}</span>
            </li>
            <li class="gallery-item">
                <span class="label">Downloads</span>
                <span class="value">${s.downloads}</span>
            </li>
        </ul>
    </div>
</li>`;p.defaults.baseURL="https://pixabay.com";const L={loader:document.querySelector(".js-loader")},y=(s,a)=>{const l={key:"52947144-373b760a7dc07b63f24b6c37a",q:s,image_type:"photo",orientation:"horizontal",page:a,per_page:15,safesearch:!0};return p.get("/api/?",{params:l}).finally(()=>{L.loader.classList.remove("is-active")})};let d=null;const h=()=>{d?d.refresh():d=new f(".js-gallery a",{captionDelay:250,captionsData:"alt"})},r={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader"),loadMoreBtn:document.querySelector(".js-load-more-btn")};let n=1,c;const g=async s=>{try{n++,r.loader.classList.add("is-active");const a=await y(c,n),l=a.data.hits.map(i=>m(i)).join("");r.gallery.insertAdjacentHTML("beforeend",l),h(),r.loader.classList.remove("is-active");const t=document.querySelector(".gallery-card").getBoundingClientRect().height*2;window.scrollBy({top:t,behavior:"smooth"}),n*15>=a.data.totalHits&&(r.loadMoreBtn.classList.add("is-hidden"),r.loadMoreBtn.removeEventListener("click",g),u.show({message:"We're sorry, but you've reached the end of search results.",color:"blue",position:"topCenter"}))}catch(a){console.log(a)}},b=async s=>{s.preventDefault();const{target:a}=s;if(c=a.elements.user_query.value.trim(),c.length===0){u.show({title:"WARNING",message:"Search query cannot be empty!",color:"red",position:"topCenter"});return}r.gallery.innerHTML="",r.loader.classList.add("is-active"),r.loadMoreBtn.classList.add("is-hidden"),n=1;try{const l=await y(c,n);if(l.data.hits.length===0){u.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topCenter"});return}r.loadMoreBtn.addEventListener("click",g);const o=l.data.hits.map(e=>m(e)).join("");r.gallery.innerHTML=o,h(),r.loadMoreBtn.classList.remove("is-hidden")}catch(l){console.log(l)}};r.searchForm.addEventListener("submit",b);
//# sourceMappingURL=index.js.map
