/**
 * Created by pratyush on 23/6/17.
 */
'use strictly';

//immediately invoked fn defn

//design patterns

(function (){
    function public1() {
        console.log("in  am inside iife");
    }

    function public2() {
        console.log("in  am inside iife");
    }

    function private1() {
        console.log("in  am inside iife");
    }
    function private2() {
        console.log("in  am inside iife");
    }
    var functions={
        "public1":public1,
        "public2":public2
    };
    function getToWindow(){
        return functions;
    }
    window.main=getToWindow;
})();


// main;
console.log(main()["public1"]());
