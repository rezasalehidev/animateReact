(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[5],{21:function(n,e,t){"use strict";t.r(e),e.default=t.p+"static/media/logo.77646688.svg"},52:function(n,e,t){"use strict";function r(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function i(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var t=[],r=!0,i=!1,o=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return t}}(n,e)||function(n,e){if(n){if("string"===typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.r(e);var o,a,c,l,s,d,b=t(6),h=t(21),u=t(7),f=t(0),p=t(1),m=u.b.div(o||(o=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: var(--nav);\n  color: var(--white);\n  padding: 1rem 3rem;\n  position: relative;\n  z-index: 500;\n"]))),j=u.b.a(a||(a=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  width: 2rem;\n  height: auto;\n  cursor: pointer;\n\n  img {\n    margin-right: 0.5rem;\n  }\n"]))),g=u.b.nav(c||(c=Object(b.a)(['\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 25rem;\n  max-width: 40rem;\n\n  @media only screen and (max-width: 48em) {\n    display: none;\n  }\n  a {\n    font-weight: 600;\n    line-height: 1.5;\n    color: var(--white);\n\n    &::before {\n      content: "";\n      display: block;\n      width: 3px;\n      height: 3px;\n      background: transparent;\n      transition: width 0.5s;\n    }\n    &:not(:last-child):hover::before {\n      width: 100%;\n      background: #00bffe;\n    }\n  }\n']))),x=u.b.button(l||(l=Object(b.a)(['\n  padding: 1rem 2rem;\n  border-radius: 25px;\n  background-color: var(--purple);\n  transition: all 0.5s;\n  color: var(--white);\n  cursor: pointer;\n  position: relative;\n  &:before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: white;\n    border-radius: 100px;\n    transition: all 0.4s;\n    z-index: -1;\n  }\n\n  &:hover:before {\n    transform: scaleX(1.4) scaleY(1.6);\n    opacity: 0;\n  }\n']))),y=u.b.button(s||(s=Object(b.a)(["\n  position: relative;\n  background-color: transparent;\n  width: 2rem;\n  height: 2px;\n  cursor: pointer;\n  display: none;\n\n  @media only screen and (max-width: 48em) {\n    display: inline-block;\n  }\n  span {\n    background-color: var(--white);\n    width: 2rem;\n    height: 2px;\n    display: ",';\n    position: absolute;\n    left: 0;\n    cursor: pointer;\n    transition: all 0.3s;\n  }\n\n  &::before,\n  &::after {\n    content: "";\n    background-color: var(--white);\n    width: 2rem;\n    height: 2px;\n    display: inline-block;\n    position: absolute;\n    left: 0;\n    cursor: pointer;\n    transition: all 0.3s;\n  }\n  &::before {\n    top: ',";\n    transform: ",";\n  }\n  &::after {\n    top: ",";\n    transform: ",";\n  }\n"])),(function(n){return n.click?"none":"inline-block"}),(function(n){return n.click?"0":"-0.3rem"}),(function(n){return n.click?"rotate(135deg)":"rotate(0deg)"}),(function(n){return n.click?"0":"0.5rem"}),(function(n){return n.click?"rotate(-135deg)":"rotate(0deg)"})),v=u.b.div(d||(d=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  padding: 2rem 0;\n  background-color: rgba(53, 53, 63, 0.95);\n  width: 96%;\n  margin: 0.5rem;\n  border-radius: 20px;\n  visibility: ",";\n  opacity: ",';\n  overflow-x: hidden;\n  a {\n    margin-top: 1.5rem;\n    font-weight: 500;\n    color: var(--white);\n  }\n  button {\n    &:before {\n      content: "";\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: white;\n      border-radius: 100px;\n      transition: all 0.4s;\n      z-index: -1;\n    }\n\n    &:hover:before {\n      transform: scaleX(1.4) scaleY(1.6);\n      opacity: 0;\n    }\n\n    &:hover {\n      transform: translateY(-3px);\n      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n    }\n  }\n'])),(function(n){return n.click?"visible":"hidden"}),(function(n){return n.click?"1":"0"}));e.default=function(){var n=i(Object(f.useState)(!1),2),e=n[0],t=n[1],r=function(){return t(!e)};return Object(p.jsxs)(m,{children:[Object(p.jsxs)(j,{children:[Object(p.jsx)("img",{src:h.default}),Object(p.jsx)("h4",{children:"LogoMain"})]}),Object(p.jsxs)(g,{children:[Object(p.jsx)("a",{href:"#home",children:"\u0635\u0641\u062d\u0647 \u0627\u0635\u0644\u06cc"}),Object(p.jsx)("a",{href:"#about",children:"\u062f\u0631\u0628\u0627\u0631\u0647 \u0645\u0627"}),Object(p.jsx)("a",{href:"#services",children:"\u0645\u062d\u0635\u0648\u0644\u0627\u062a \u0622\u0645\u0648\u0632\u0634\u06cc"}),Object(p.jsx)("a",{href:"#contact",children:Object(p.jsx)(x,{children:"\u062a\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627"})})]}),Object(p.jsx)(y,{onClick:r,click:e,children:Object(p.jsx)("span",{})}),Object(p.jsxs)(v,{click:e,children:[Object(p.jsx)("a",{href:"#home",onClick:r,children:"\u0635\u0641\u062d\u0647 \u0627\u0635\u0644\u06cc"}),Object(p.jsx)("a",{href:"#about",onClick:r,children:"\u062f\u0631\u0628\u0627\u0631\u0647 \u0645\u0627"}),Object(p.jsx)("a",{href:"#services",onClick:r,children:"\u062e\u062f\u0645\u0627\u062a"}),Object(p.jsx)("a",{href:"#contact",onClick:r,children:Object(p.jsx)(x,{children:"\u062a\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627"})})]})]})}}}]);
//# sourceMappingURL=5.57f47b91.chunk.js.map