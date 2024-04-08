(function(){
    console.log("1ra funcion anonima autoejecutable")
    console.log(self)
})();
(function(d,w,c){
    console.log("2ra funcion anonima autoejecutable")
    console.log(d,w,c)
    c.log("log del parametro c")
})(document,window,console);