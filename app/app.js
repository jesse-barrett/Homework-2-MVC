function callbackFunction(id) {
    console.log(id);
}

function getBindings() {
    $("nav a").click(function(e){
        let btnID = event.currentTarget.id;
        MODEL.updateContent(btnID, callbackFunction);
    })
}

//run this function when the page is read
$(document).ready(function(){
    // console.log("ready");
    getBindings();
})