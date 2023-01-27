function makeFunc() {
  var name = "mozilla";
  function displayName(num) {
    console.log(name,num);
  }
  return displayName;
}
makeFunc()(5)