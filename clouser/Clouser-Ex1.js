function a(){
    var a1=10;
    function b(){
        let b1=20;
        function c(){
         const c1=30;
         console.log(a1,b1,c1)
        }
        c()
    }
    b()
}
a()