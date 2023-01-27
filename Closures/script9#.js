//use closures and var to print 0 1 2 in below following code:

 
  for (var i = 0; i < 3; i++) {
     function inner(i){
    setTimeout(function log() {
      console.log(i);
    }, i * 1000);
  }
 inner(i);
}


//0 1 2

// a();