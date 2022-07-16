const oe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};oe();function _(){}function N(t){return t()}function V(){return Object.create(null)}function F(t){t.forEach(N)}function Y(t){return typeof t=="function"}function Z(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function se(t){return Object.keys(t).length===0}function w(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode.removeChild(t)}function ie(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function x(t){return document.createElement(t)}function z(t){return document.createTextNode(t)}function ee(){return z(" ")}function d(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function le(t){return Array.from(t.childNodes)}function q(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function E(t,e,n,o){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function te(t){const e={};for(const n of t)e[n.name]=n.value;return e}let H;function v(t){H=t}const S=[],J=[],T=[],Q=[],ce=Promise.resolve();let L=!1;function ae(){L||(L=!0,ce.then(m))}function j(t){T.push(t)}const R=new Set;let I=0;function m(){const t=H;do{for(;I<S.length;){const e=S[I];I++,v(e),fe(e.$$)}for(v(null),S.length=0,I=0;J.length;)J.pop()();for(let e=0;e<T.length;e+=1){const n=T[e];R.has(n)||(R.add(n),n())}T.length=0}while(S.length);for(;Q.length;)Q.pop()();L=!1,R.clear(),v(t)}function fe(t){if(t.fragment!==null){t.update(),F(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const ue=new Set;function de(t,e){t&&t.i&&(ue.delete(t),t.i(e))}function he(t,e,n,o){const{fragment:r,on_mount:s,on_destroy:l,after_update:i}=t.$$;r&&r.m(e,n),o||j(()=>{const a=s.map(N).filter(Y);l?l.push(...a):F(a),t.$$.on_mount=[]}),i.forEach(j)}function me(t,e){const n=t.$$;n.fragment!==null&&(F(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ge(t,e){t.$$.dirty[0]===-1&&(S.push(t),ae(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ne(t,e,n,o,r,s,l,i=[-1]){const a=H;v(t);const c=t.$$={fragment:null,ctx:null,props:s,update:_,not_equal:r,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:V(),dirty:i,skip_bound:!1,root:e.target||a.$$.root};l&&l(c.root);let h=!1;if(c.ctx=n?n(t,e.props||{},(g,D,...M)=>{const $=M.length?M[0]:D;return c.ctx&&r(c.ctx[g],c.ctx[g]=$)&&(!c.skip_bound&&c.bound[g]&&c.bound[g]($),h&&ge(t,g)),D}):[],c.update(),h=!0,F(c.before_update),c.fragment=o?o(c.ctx):!1,e.target){if(e.hydrate){const g=le(e.target);c.fragment&&c.fragment.l(g),g.forEach(C)}else c.fragment&&c.fragment.c();e.intro&&de(t.$$.fragment),he(t,e.target,e.anchor,e.customElement),m()}v(a)}let P;typeof HTMLElement=="function"&&(P=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(N).filter(Y);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){F(this.$$.on_disconnect)}$destroy(){me(this,1),this.$destroy=_}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const o=n.indexOf(e);o!==-1&&n.splice(o,1)}}$set(t){this.$$set&&!se(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});const A={format(t){return t[0]==="#"?A.switch16toRGB(t):t.indexOf("rgb")===0?t:A.switch16toRGB("#"+t)},switch16toRGB(t){const e=parseInt(t.slice(1,3),16),n=parseInt(t.slice(3,5),16),o=parseInt(t.slice(5,7),16);return`rgb(${e},${n},${o})`},getRGB(t){return t.match(/rgb\((\d+),(\d+),(\d+)\)/).slice(1).map(e=>parseInt(e,10))},getGeryLevel(t){const[e,n,o]=A.getRGB(t);return e*.299+n*.587+o*.114},isDeep(t){return A.getGeryLevel(t)>=192}},re={setStyle(t,e){if(!!t)for(let n in e)t.style[n]=e[n]},create(t,e){const n=document.createElement(t);e.style&&re.setStyle(n,e.style);for(const o in e)n[o]=e[o];return n},createStyle(t,e){const n=document.createElement("style");return n.innerHTML=t,e&&e.appendChild(n),n}},ye=t=>{let e;return{exec(n){clearTimeout(e),e=setTimeout(n,t)},cancel(){clearTimeout(e)}}},_e=t=>t.map(e=>({v:e,sort:Math.random()})).sort((e,n)=>e.sort-n.sort).map(e=>e.v);var y={Color:A,DOM:re,Debounce:ye,Shuffle:_e};function W(t,e,n){const o=t.slice();o[5]=e[n][0],o[6]=e[n][1],o[7]=e[n][2],o[8]=e[n][3];const r=Math.random();o[9]=r;const s=o[1](o[6]);return o[10]=s,o}function pe(t){let e=t[5]+"",n;return{c(){n=z(e)},m(o,r){p(o,n,r)},p(o,r){r&1&&e!==(e=o[5]+"")&&q(n,e)},d(o){o&&C(n)}}}function be(t){let e,n=t[5]+"",o,r;return{c(){e=x("a"),o=z(n),d(e,"part","link"),d(e,"href",r=t[8]),d(e,"target","_blank")},m(s,l){p(s,e,l),w(e,o)},p(s,l){l&1&&n!==(n=s[5]+"")&&q(o,n),l&1&&r!==(r=s[8])&&d(e,"href",r)},d(s){s&&C(e)}}}function X(t){let e,n,o,r,s;function l(c,h){return c[8]?be:pe}let i=l(t),a=i(t);return{c(){e=x("mark"),a.c(),d(e,"part","tag"),d(e,"data-rand",n=t[9]),d(e,"data-score",o=t[10]),d(e,"class",r="score-"+t[10]),d(e,"data-type",s=t[7]||"")},m(c,h){p(c,e,h),a.m(e,null)},p(c,h){i===(i=l(c))&&a?a.p(c,h):(a.d(1),a=i(c),a&&(a.c(),a.m(e,null))),h&1&&o!==(o=c[10])&&d(e,"data-score",o),h&1&&r!==(r="score-"+c[10])&&d(e,"class",r),h&1&&s!==(s=c[7]||"")&&d(e,"data-type",s)},d(c){c&&C(e),a.d()}}}function Ee(t){let e,n,o=t[0],r=[];for(let s=0;s<o.length;s+=1)r[s]=X(W(t,o,s));return{c(){for(let s=0;s<r.length;s+=1)r[s].c();e=ee(),n=x("slot"),this.c=_,d(n,"name","text")},m(s,l){for(let i=0;i<r.length;i+=1)r[i].m(s,l);p(s,e,l),p(s,n,l)},p(s,[l]){if(l&3){o=s[0];let i;for(i=0;i<o.length;i+=1){const a=W(s,o,i);r[i]?r[i].p(a,l):(r[i]=X(a),r[i].c(),r[i].m(e.parentNode,e))}for(;i<r.length;i+=1)r[i].d(1);r.length=o.length}},i:_,o:_,d(s){ie(r,s),s&&C(e),s&&C(n)}}}function Ce(t,e,n){let{rerender:o}=e;const r=i=>i.split(`
`).slice(0,-1).filter(a=>a.indexOf("//")!==0&&a!=="").map(a=>a.split("/").slice(0,3).concat([a.split("/").slice(3).join("/")])),s=i=>i||Math.ceil(Math.random()*(8-3)+3);let l=[];return t.$$set=i=>{"rerender"in i&&n(2,o=i.rerender)},t.$$.update=()=>{if(t.$$.dirty&4){const i=document.querySelector("my-tags [slot=text]").textContent;n(0,l=y.Shuffle(r(i)))}},[l,s,o]}class De extends P{constructor(e){super(),this.shadowRoot.innerHTML="<style>::slotted(*){display:none}</style>",ne(this,{target:this.shadowRoot,props:te(this.attributes),customElement:!0},Ce,Ee,Z,{rerender:2},null),e&&(e.target&&p(e.target,this,e.anchor),e.props&&(this.$set(e.props),m()))}static get observedAttributes(){return["rerender"]}get rerender(){return this.$$.ctx[2]}set rerender(e){this.$$set({rerender:e}),m()}}customElements.define("my-tags",De);const xe=[2.5,3.2,3.9,4.5,5.1,5.6,6.1,6.5,6.9,7.3,7.7],G=["93BB6D","6D9C6D","D5E1A1","FEF4D8","CBE7FD","B7CFE2","DD8766","F6EEE1","E88C67","65A9BE","F7C070","636C8D","E2CBC4","BDA995","BBD2DB","C99B92","9BB6C7","EAB196","F0C9AC","A2AA71","F8F5EE","D2CEC1","8B958A","D9DAEE","B6BDD9","A2C1CB","BED7DB","ABB4AB","EADCD0","EBA397","DEC152","CA677C","9D89AD","B5CFE2","DDE8EB","F7F2EF","D2DEDA","67787F","CFD4EE","#efefef"].map(t=>y.Color.format(t));function ke(t){let e,n,o,r,s;return{c(){e=x("div"),n=x("div"),o=z(t[3]),r=ee(),s=x("slot"),this.c=_,d(n,"id","title-bg"),E(n,"font-size",11*t[4](t[0])+"rem",!1),E(n,"color",y.Color.format(G.pop()),!1),d(e,"id","tags-root"),E(e,"width",t[1]||"100%",!1),E(e,"height",t[2]||"100%",!1)},m(l,i){p(l,e,i),w(e,n),w(n,o),w(e,r),w(e,s)},p(l,[i]){i&8&&q(o,l[3]),i&1&&E(n,"font-size",11*l[4](l[0])+"rem",!1),i&2&&E(e,"width",l[1]||"100%",!1),i&4&&E(e,"height",l[2]||"100%",!1)},i:_,o:_,d(l){l&&C(e)}}}function Be(t,e,n){let{rerender:o}=e,{title:r}=e,{scale:s}=e,{width:l}=e,{height:i}=e,{icon:a="\u279C"}=e,{inorder:c=!1}=e;const h=f=>parseFloat(f),g=f=>f*5*h(s),D=(f,u)=>Math.floor(f*u),M=f=>G[D(f,G.length)],$=()=>{const f=u=>`.score-${u} { font-size: ${g(xe[u])}px }`;return Array.from(Array(11)).map((u,k)=>f(k)).join(`
`)},K=f=>y.Color.isDeep(f)?"#555":"#fff",U=y.Debounce(200);let O=r;return y.DOM.createStyle(`
    ${$()}

    mark {
      position: ${c?"unset":"absolute"};
      padding: .2em .3em;
      display: inline-block;
      border-radius: .3em;
      margin: .15em .1em;
      opacity: .8;
      transition: opacity .2s;
    }
    mark a::after { content: "${a}"; }
    mark a:hover::after { animation: move .5s linear infinite; position: relative; }
    @keyframes move {
      0% { left: 0px }
      50% { left: 1% }
      100% { left: 0px }
    }
    @media (max-width: 1000px) {
      mark { animation: none !important; }
    }
    @media (max-width: 600px) {
      mark { position: unset; }
      html { overflow-x: hidden; font-size: 10px; }
    }
  `,document.querySelector("my-tags").shadowRoot),t.$$set=f=>{"rerender"in f&&n(5,o=f.rerender),"title"in f&&n(6,r=f.title),"scale"in f&&n(0,s=f.scale),"width"in f&&n(1,l=f.width),"height"in f&&n(2,i=f.height),"icon"in f&&n(7,a=f.icon),"inorder"in f&&n(8,c=f.inorder)},t.$$.update=()=>{if(t.$$.dirty&96){const f=Array.from(document.querySelector("my-tags").shadowRoot.querySelectorAll("mark"));f.forEach(u=>{const k=M(parseFloat(u.dataset.rand));y.DOM.setStyle(u,{backgroundColor:k,color:K(k),top:D(Math.random(),90)+"%",left:D(Math.random(),85)+"%",zIndex:(11-parseInt(u.dataset.score,10)).toString()}),y.DOM.setStyle(u.getElementsByTagName("a")[0],{color:K(k),textDecoration:"none"}),u.onmouseover=()=>{U.exec(()=>{const b=u.dataset.type;f.forEach(B=>{b&&B.dataset.type===b?(B.style.opacity=String(1),B.style.zIndex=String(10+parseInt(B.style.zIndex)),n(3,O=b)):B.style.opacity=String(.1)}),u.style.opacity=String(1),u.style.zIndex=String(21)})},u.onmouseout=()=>{U.cancel(),f.forEach(b=>{b.style.opacity=String(.8),b.style.zIndex=String(11-parseInt(b.dataset.score))}),n(3,O=r)}})}},[s,l,i,O,h,o,r,a,c]}class we extends P{constructor(e){super(),this.shadowRoot.innerHTML="<style>#tags-root{overflow-x:hidden;padding:7%;text-align:center;position:relative;box-sizing:border-box;margin:0 auto}#title-bg{position:absolute;z-index:-1;display:flex;justify-content:center;align-items:center;width:100%;height:100%;top:0;left:0}</style>",ne(this,{target:this.shadowRoot,props:te(this.attributes),customElement:!0},Be,ke,Z,{rerender:5,title:6,scale:0,width:1,height:2,icon:7,inorder:8},null),e&&(e.target&&p(e.target,this,e.anchor),e.props&&(this.$set(e.props),m()))}static get observedAttributes(){return["rerender","title","scale","width","height","icon","inorder"]}get rerender(){return this.$$.ctx[5]}set rerender(e){this.$$set({rerender:e}),m()}get title(){return this.$$.ctx[6]}set title(e){this.$$set({title:e}),m()}get scale(){return this.$$.ctx[0]}set scale(e){this.$$set({scale:e}),m()}get width(){return this.$$.ctx[1]}set width(e){this.$$set({width:e}),m()}get height(){return this.$$.ctx[2]}set height(e){this.$$set({height:e}),m()}get icon(){return this.$$.ctx[7]}set icon(e){this.$$set({icon:e}),m()}get inorder(){return this.$$.ctx[8]}set inorder(e){this.$$set({inorder:e}),m()}}customElements.define("tags-default-style",we);
