(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b461012a"],{ad8f:function(e,t,n){"use strict";n.r(t),n.d(t,"getList",function(){return r});var o=n("b775");function r(e){return Object(o["a"])({url:"/table/list",method:"get",params:e})}},b775:function(e,t,n){"use strict";var o=n("bc3a"),r=n.n(o),a=n("5c96"),s=n("4360"),c=n("5f87"),i=r.a.create({baseURL:"http://back.ynxpyz.cn/",withCredentials:!0,timeout:5e3});i.interceptors.request.use(function(e){return s["a"].getters.token&&(e.headers["X-Token"]=Object(c["a"])()),e},function(e){return console.log(e),Promise.reject(e)}),i.interceptors.response.use(function(e){var t=e.data;return 2e4!==t.code?(Object(a["Message"])({message:t.message||"error",type:"error",duration:5e3}),50008!==t.code&&50012!==t.code&&50014!==t.code||a["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then(function(){s["a"].dispatch("user/resetToken").then(function(){location.reload()})}),Promise.reject(t.message||"error")):t},function(e){return console.log("err"+e),Object(a["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}),t["a"]=i}}]);