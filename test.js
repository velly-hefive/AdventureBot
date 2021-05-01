var a = 0;
function callback() {
    a += 1;
    console.log("Done : " + a);
}

function main(){
    var a = 0;
    while (a < 10){
        setTimeout(callback,Math.random() * 4000 + 1000);
        a+=1;
    }

}

main();
