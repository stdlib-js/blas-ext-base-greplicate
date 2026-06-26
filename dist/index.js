"use strict";var g=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(v){throw (r=0, v)}};};var j=g(function(I,d){
function A(e,r,v,i,c,a,s,t){var n,u,f,l,p,o,q,x,y;for(n=v.data,u=a.data,f=v.accessors[0],l=a.accessors[1],o=c,p=t,x=0;x<e;x++){for(q=f(n,o),y=0;y<r;y++)l(u,p,q),p+=s;o+=i}return a}d.exports=A
});var b=g(function(J,m){
var P=require('@stdlib/array-base-arraylike2object/dist'),B=j();function C(e,r,v,i,c,a,s,t){var n,u,f,l,p,o,q;if(e<=0||r<=0)return a;if(f=P(v),l=P(a),f.accessorProtocol||l.accessorProtocol)return B(e,r,f,i,c,l,s,t),a;for(u=c,n=t,o=0;o<e;o++){for(p=v[u],q=0;q<r;q++)a[n]=p,n+=s;u+=i}return a}m.exports=C
});var w=g(function(K,h){
var R=require('@stdlib/strided-base-stride2offset/dist'),D=b();function E(e,r,v,i,c,a){var s=R(e,i),t=R(e*r,a);return D(e,r,v,i,s,c,a,t)}h.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=w(),G=b();F(z,"ndarray",G);module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
