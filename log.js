AFRAME.registerComponent("log", {schema :{message :{type:"string", default: "Hi its Me"}},
init: function(){
console.log(this.data.message)
}})