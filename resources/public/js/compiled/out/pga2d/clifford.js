// Compiled by ClojureScript 1.7.170 {}
goog.provide('pga2d.clifford');
goog.require('cljs.core');
goog.require('pga2d.grassmann');
cljs.core.enable_console_print_BANG_.call(null);
pga2d.clifford.sp = (function pga2d$clifford$sp(as){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__25438_SHARP_){
return cljs.core.apply.call(null,cljs.core._STAR_,p1__25438_SHARP_);
}),as));
});
pga2d.clifford.sd = (function pga2d$clifford$sd(var_args){
var args25439 = [];
var len__17910__auto___25442 = arguments.length;
var i__17911__auto___25443 = (0);
while(true){
if((i__17911__auto___25443 < len__17910__auto___25442)){
args25439.push((arguments[i__17911__auto___25443]));

var G__25444 = (i__17911__auto___25443 + (1));
i__17911__auto___25443 = G__25444;
continue;
} else {
}
break;
}

var G__25441 = args25439.length;
switch (G__25441) {
case 2:
return pga2d.clifford.sd.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return pga2d.clifford.sd.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25439.length)].join('')));

}
});

pga2d.clifford.sd.cljs$core$IFn$_invoke$arity$2 = (function (as,bs){
return (pga2d.clifford.sp.call(null,as) - pga2d.clifford.sp.call(null,bs));
});

pga2d.clifford.sd.cljs$core$IFn$_invoke$arity$1 = (function (as){
return pga2d.clifford.sp.call(null,as);
});

pga2d.clifford.sd.cljs$lang$maxFixedArity = 2;
pga2d.clifford.gp = (function pga2d$clifford$gp(sig,p__25446,p__25447){
var map__25460 = p__25446;
var map__25460__$1 = ((((!((map__25460 == null)))?((((map__25460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25460):map__25460);
var vec__25461 = cljs.core.get.call(null,map__25460__$1,new cljs.core.Keyword(null,"0","0",351625802));
var a = cljs.core.nth.call(null,vec__25461,(0),null);
var vec__25462 = cljs.core.get.call(null,map__25460__$1,new cljs.core.Keyword(null,"1","1",-521621649));
var a0 = cljs.core.nth.call(null,vec__25462,(0),null);
var a1 = cljs.core.nth.call(null,vec__25462,(1),null);
var a2 = cljs.core.nth.call(null,vec__25462,(2),null);
var vec__25463 = cljs.core.get.call(null,map__25460__$1,new cljs.core.Keyword(null,"2","2",-1645882217));
var A0 = cljs.core.nth.call(null,vec__25463,(0),null);
var A1 = cljs.core.nth.call(null,vec__25463,(1),null);
var A2 = cljs.core.nth.call(null,vec__25463,(2),null);
var vec__25464 = cljs.core.get.call(null,map__25460__$1,new cljs.core.Keyword(null,"3","3",2097825370));
var A = cljs.core.nth.call(null,vec__25464,(0),null);
var map__25465 = p__25447;
var map__25465__$1 = ((((!((map__25465 == null)))?((((map__25465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25465):map__25465);
var vec__25466 = cljs.core.get.call(null,map__25465__$1,new cljs.core.Keyword(null,"0","0",351625802));
var b = cljs.core.nth.call(null,vec__25466,(0),null);
var vec__25467 = cljs.core.get.call(null,map__25465__$1,new cljs.core.Keyword(null,"1","1",-521621649));
var b0 = cljs.core.nth.call(null,vec__25467,(0),null);
var b1 = cljs.core.nth.call(null,vec__25467,(1),null);
var b2 = cljs.core.nth.call(null,vec__25467,(2),null);
var vec__25468 = cljs.core.get.call(null,map__25465__$1,new cljs.core.Keyword(null,"2","2",-1645882217));
var B0 = cljs.core.nth.call(null,vec__25468,(0),null);
var B1 = cljs.core.nth.call(null,vec__25468,(1),null);
var B2 = cljs.core.nth.call(null,vec__25468,(2),null);
var vec__25469 = cljs.core.get.call(null,map__25465__$1,new cljs.core.Keyword(null,"3","3",2097825370));
var B = cljs.core.nth.call(null,vec__25469,(0),null);
return pga2d.grassmann.multivector_native.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pga2d.clifford.sd.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,b1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a2,b2], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A0,B0], null)], null)) + (sig * pga2d.clifford.sd.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a0,b0], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A,B], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A1,B1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A2,B2], null)], null))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pga2d.clifford.sd.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a0,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A2,b1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a2,B1], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A0,B], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A,B0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A1,b2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,B2], null)], null)),(pga2d.clifford.sd.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A0,b2], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a2,B0], null)], null)) + (sig * pga2d.clifford.sd.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a0,B2], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A1,B], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A2,b0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A,B1], null)], null)))),(pga2d.clifford.sd.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a2,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,B0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b2], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A0,b1], null)], null)) + (sig * pga2d.clifford.sd.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A1,b0], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A2,B], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a0,B1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A,B2], null)], null))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pga2d.clifford.sd.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A0,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,B0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,b2], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a2,b1], null)], null)) + (sig * pga2d.clifford.sd.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a0,B], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A,b0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A2,B1], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A1,B2], null)], null)))),pga2d.clifford.sd.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A1,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,B], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a2,b0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A,b1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,B1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A0,B2], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A2,B0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a0,b2], null)], null)),pga2d.clifford.sd.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A2,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a2,B], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A1,B0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a0,b1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A,b2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,B2], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,b0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A0,B1], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pga2d.clifford.sd.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,B], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A0,b0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a0,B0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A1,b1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,B1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [A2,b2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a2,B2], null)], null))], null));
});
pga2d.clifford.polarized = (function pga2d$clifford$polarized(sig,mv){
return pga2d.clifford.gp.call(null,sig,mv,pga2d.grassmann.pseudoscalar.call(null,(1)));
});
pga2d.clifford.ideal_inner_product = (function pga2d$clifford$ideal_inner_product(v0,v1){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,v0,v1));
});
pga2d.clifford.ordinary_norm_squared = (function pga2d$clifford$ordinary_norm_squared(sig,mv){
return cljs.core.get.call(null,pga2d.clifford.gp.call(null,sig,mv,pga2d.grassmann.ga_reverse.call(null,mv)).call(null,new cljs.core.Keyword(null,"0","0",351625802)),(0));
});
pga2d.clifford.ideal_QMARK_ = (function pga2d$clifford$ideal_QMARK_(var_args){
var args25472 = [];
var len__17910__auto___25475 = arguments.length;
var i__17911__auto___25476 = (0);
while(true){
if((i__17911__auto___25476 < len__17910__auto___25475)){
args25472.push((arguments[i__17911__auto___25476]));

var G__25477 = (i__17911__auto___25476 + (1));
i__17911__auto___25476 = G__25477;
continue;
} else {
}
break;
}

var G__25474 = args25472.length;
switch (G__25474) {
case 2:
return pga2d.clifford.ideal_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pga2d.clifford.ideal_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25472.length)].join('')));

}
});

pga2d.clifford.ideal_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (sig,mv){
return pga2d.clifford.ideal_QMARK_.call(null,sig,mv,pga2d.clifford.ordinary_norm_squared.call(null,sig,mv));
});

pga2d.clifford.ideal_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (sig,mv,nv){
var and__16840__auto__ = mv.call(null,new cljs.core.Keyword(null,"kvector?","kvector?",11224922));
if(cljs.core.truth_(and__16840__auto__)){
var and__16840__auto____$1 = cljs.core._EQ_.call(null,nv,(0));
if(and__16840__auto____$1){
var or__16852__auto__ = pga2d.grassmann.line_QMARK_.call(null,mv);
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return pga2d.grassmann.point_QMARK_.call(null,mv);
}
} else {
return and__16840__auto____$1;
}
} else {
return and__16840__auto__;
}
});

pga2d.clifford.ideal_QMARK_.cljs$lang$maxFixedArity = 3;
pga2d.clifford.translator_QMARK_ = (function pga2d$clifford$translator_QMARK_(sig,rotor){
if(cljs.core.truth_((function (){var and__16840__auto__ = rotor.call(null,new cljs.core.Keyword(null,"rotor?","rotor?",2032905831));
if(cljs.core.truth_(and__16840__auto__)){
return cljs.core._EQ_.call(null,sig,(0));
} else {
return and__16840__auto__;
}
})())){
var grade_2 = pga2d.grassmann.grade.call(null,rotor,(2));
return pga2d.clifford.ideal_QMARK_.call(null,sig,grade_2);
} else {
return null;
}
});
pga2d.clifford.norm_squared = (function pga2d$clifford$norm_squared(sig,mv){
if(cljs.core.truth_(mv.call(null,new cljs.core.Keyword(null,"kvector?","kvector?",11224922)))){
if(cljs.core.truth_(pga2d.clifford.ideal_QMARK_.call(null,sig,mv))){
var v = mv.call(null,cljs.core.get.call(null,pga2d.grassmann.gradekeys,mv.call(null,new cljs.core.Keyword(null,"k","k",-2146297393))));
return pga2d.clifford.ideal_inner_product.call(null,v,v);
} else {
return pga2d.clifford.ordinary_norm_squared.call(null,sig,mv);
}
} else {
if(cljs.core.truth_(mv.call(null,new cljs.core.Keyword(null,"rotor?","rotor?",2032905831)))){
return pga2d.clifford.ordinary_norm_squared.call(null,sig,mv);
} else {
return null;
}
}
});
pga2d.clifford.norm = (function pga2d$clifford$norm(sig,mv){
return Math.sqrt(Math.abs(pga2d.clifford.norm_squared.call(null,sig,mv)));
});
pga2d.clifford.normalized = (function pga2d$clifford$normalized(sig,mv){
var n2 = pga2d.clifford.norm_squared.call(null,sig,mv);
if(cljs.core.not_EQ_.call(null,n2,null)){
var result = pga2d.grassmann.times.call(null,mv,(1.0 / pga2d.clifford.norm.call(null,sig,mv)));
var flip = (cljs.core._EQ_.call(null,sig,(0))) && (cljs.core._EQ_.call(null,mv.call(null,new cljs.core.Keyword(null,"k","k",-2146297393)),(2))) && ((cljs.core.get.call(null,pga2d.grassmann.point_from.call(null,mv),(2)) < (0)));
if(flip){
return pga2d.grassmann.times.call(null,result,(-1));
} else {
return result;
}
} else {
return null;
}
});
pga2d.clifford.e0 = pga2d.grassmann.line.call(null,(0),(0),(1));
pga2d.clifford.measure_of_rotor = (function pga2d$clifford$measure_of_rotor(sig,rotor){
if(cljs.core.truth_(rotor.call(null,new cljs.core.Keyword(null,"rotor?","rotor?",2032905831)))){
var grade_2 = pga2d.grassmann.grade.call(null,rotor,(2));
if(cljs.core.truth_(pga2d.clifford.translator_QMARK_.call(null,sig,rotor))){
var distance = pga2d.clifford.norm.call(null,sig,grade_2);
return distance;
} else {
var zneg = (cljs.core.get.call(null,rotor.call(null,new cljs.core.Keyword(null,"2","2",-1645882217)),(0)) < (0));
var xcord = pga2d.grassmann.scalar_from.call(null,rotor);
var pnorm = pga2d.clifford.norm.call(null,sig,grade_2);
var ycord = ((zneg)?(- pnorm):pnorm);
var pangle = Math.atan2(ycord,xcord);
return pangle;
}
} else {
return null;
}
});
pga2d.clifford.inverse = (function pga2d$clifford$inverse(sig,mv){
if(cljs.core.truth_((function (){var or__16852__auto__ = mv.call(null,new cljs.core.Keyword(null,"kvector?","kvector?",11224922));
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return mv.call(null,new cljs.core.Keyword(null,"rotor?","rotor?",2032905831));
}
})())){
var n2 = pga2d.clifford.norm_squared.call(null,sig,mv);
if((cljs.core.not_EQ_.call(null,null,n2)) && (cljs.core.not_EQ_.call(null,(0),n2))){
return pga2d.grassmann.times.call(null,mv,(1.0 / n2));
} else {
return null;
}
} else {
return null;
}
});
pga2d.clifford.sandwich = (function pga2d$clifford$sandwich(sig,bread){
return (function (X){
return pga2d.clifford.gp.call(null,sig,pga2d.clifford.gp.call(null,sig,bread,X),pga2d.grassmann.ga_reverse.call(null,bread));
});
});
pga2d.clifford.reflection = (function pga2d$clifford$reflection(sig,mirror){
if(cljs.core.truth_((function (){var and__16840__auto__ = mirror.call(null,new cljs.core.Keyword(null,"kvector?","kvector?",11224922));
if(cljs.core.truth_(and__16840__auto__)){
return cljs.core._EQ_.call(null,mirror.call(null,new cljs.core.Keyword(null,"k","k",-2146297393)),(1));
} else {
return and__16840__auto__;
}
})())){
return pga2d.clifford.sandwich.call(null,sig,mirror);
} else {
return null;
}
});
pga2d.clifford.exp = (function pga2d$clifford$exp(sig,t,rotor){
if(cljs.core.truth_(rotor.call(null,new cljs.core.Keyword(null,"rotor?","rotor?",2032905831)))){
if(cljs.core.truth_(pga2d.clifford.translator_QMARK_.call(null,sig,rotor))){
return pga2d.grassmann.add.call(null,pga2d.grassmann.scalar.call(null,(1)),pga2d.grassmann.times.call(null,pga2d.grassmann.grade.call(null,rotor,(2)),t));
} else {
var angle = pga2d.clifford.measure_of_rotor.call(null,(0),rotor);
var angle__$1 = (((angle > (Math.PI / (2))))?(angle - Math.PI):(((angle < (- (Math.PI / (2)))))?(angle + Math.PI):angle));
var tt = (t * angle__$1);
return pga2d.clifford.normalized.call(null,sig,pga2d.grassmann.add.call(null,pga2d.grassmann.scalar.call(null,Math.cos(tt)),pga2d.grassmann.times.call(null,pga2d.clifford.normalized.call(null,sig,pga2d.grassmann.grade.call(null,rotor,(2))),Math.sin(tt))));
}
} else {
return null;
}
});
pga2d.clifford.ga = (function pga2d$clifford$ga(sig){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"polarized","polarized",925543553),new cljs.core.Keyword(null,"normalized","normalized",-1887621663),new cljs.core.Keyword(null,"gp","gp",-1879258781),new cljs.core.Keyword(null,"translator?","translator?",979836296),new cljs.core.Keyword(null,"inverse","inverse",-1623859672),new cljs.core.Keyword(null,"norm","norm",-1440124407),new cljs.core.Keyword(null,"measure-of-rotor","measure-of-rotor",-1061608855),new cljs.core.Keyword(null,"exp","exp",-261706262),new cljs.core.Keyword(null,"ideal?","ideal?",-917103091),new cljs.core.Keyword(null,"norm-squared","norm-squared",-2019462250),new cljs.core.Keyword(null,"sandwich","sandwich",1338727993),new cljs.core.Keyword(null,"ordinary-norm-squared","ordinary-norm-squared",-1067173635)],[(function (mv){
return pga2d.clifford.polarized.call(null,sig,mv);
}),(function (mv){
return pga2d.clifford.normalized.call(null,sig,mv);
}),(function (mv1,mv2){
return pga2d.clifford.gp.call(null,sig,mv1,mv2);
}),(function (mv){
return pga2d.clifford.translator_QMARK_.call(null,sig,mv);
}),(function (mv){
return pga2d.clifford.inverse.call(null,sig,mv);
}),(function (mv){
return pga2d.clifford.norm.call(null,sig,mv);
}),(function (mv){
return pga2d.clifford.measure_of_rotor.call(null,sig,mv);
}),(function (t,mv){
return pga2d.clifford.exp.call(null,sig,t,mv);
}),(function (mv){
return pga2d.clifford.ideal_QMARK_.call(null,sig,mv);
}),(function (mv){
return pga2d.clifford.norm_squared.call(null,sig,mv);
}),(function (mv){
return pga2d.clifford.sandwich.call(null,sig,mv);
}),(function (mv){
return pga2d.clifford.ordinary_norm_squared.call(null,sig,mv);
})]);
});

//# sourceMappingURL=clifford.js.map?rel=1453218277138