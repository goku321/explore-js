// Program to add a message to the event loop queue.

const s = new Date().getSeconds()

setTimeout(function() {
    // print out 5, meaning that callback is not called immediately after 500 milliseconds.
    console.log("Ran after " + (new Date().getSeconds() - s) + " seconds.");
}, 500);

while(true) {
    if(new Date().getSeconds() - s >= 5) {
        console.log("Looped for 5 seconds");
        break;
    }
}