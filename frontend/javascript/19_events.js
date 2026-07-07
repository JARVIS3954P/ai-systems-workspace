// JS is a sequentially run language, i.e., from top to bottom. (with some exceptions) So, the events also run sequentially.
// Events are a way to make JS run code in response to user actions or other events that happen in the browser.

/* on-click event
 document.getElementById('abc').onclick = function(){
    alert("abc clicked")
 }
*/

// It is not a good approach to use onclick as it doesn't provide much feature, instead use Event Listener

/*
 document.getElementById('owl').addEventListener('click', fucntion(){
    alert("owl clicked again")
 },false)
*/

// This event listener provides very much information about the poninter and environment of the browser, such as, timestamp of click, screen size, pointer coordinates, etc.

/* Important Events to study (also for interview)
1. type
2. timestamp
3. defaultPrevented
4. target
5. toElement
6. srcElement
7. currentTarget
8. clientX, clientY
9. screenX, screenY
10. altkey, ctrlkey, shiftkey
11. keyCode
*/

// Also, we get an Object of the event 'e' with event listener.

/*
 document.getElementById('owl').addEventListener('click', fucntion(e){
    console.log(e);
 },false)
*/

// Event Propagation
/*
1. Event Bubbling: The effect or event is captured and execute from interior to outer block.
eg. ABC('onClick added'){
    XYZ('onClick added'){}
}

    document.getElementById('ABC').addEventListener('click',function(e){
        console.log("clicked ABC")
    },false)

    document.getElementById('XYZ').addEventListener('click',function(e){
        console.log("clicked XYZ present inside ABC")
    },false)

    OUTPUT : clicked XYZ present inside ABC
             clicked ABC

2. Event Capturing: The effect or event is captured and execute from outside or top to inner block.
eg. ABC('onClick added'){
    XYZ('onClick added'){}
}

    document.getElementById('ABC').addEventListener('click',function(e){
        console.log("clicked ABC")
    },true)

    document.getElementById('XYZ').addEventListener('click',function(e){
        console.log("clicked XYZ present inside ABC")
    },true)

    OUTPUT : clicked ABC
             clicked XYZ present inside ABC
*/

//To stop events from bubbling, use stop propagation
    document.getElementById('XYZ').addEventListener('click',function(e){
            console.log("clicked XYZ present inside ABC")
            e.stopPropagation()
        },false)

    // OUTPUT: clicked XYZ present inside ABC

/* To prevent default behaviour
P{
    Q(href:"google.com"{}
}
*/

document.getElementById('P').addEventListener('click',function(e){
    console.log("clicked P")
},true)

document.getElementById('XYZ').addEventListener('click',function(e){
    console.log("clicked Q present inside P")
},true)

/* OUTPUT : 
    clicked P
    clicked Q present inside P
    (redirect to google.com)
*/

document.getElementById('P').addEventListener('click',function(e){
    console.log("clicked P")
},true)

document.getElementById('XYZ').addEventListener('click',function(e){
    e.preventDefault();
    e.stopPropagation();
    console.log("clicked Q present inside P")
},true)

/* OUTPUT :
    clicked Q present inside P
    (no redirect to google.com)
*/