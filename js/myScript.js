 //search bar//

           function active(){
                var searchBar = document.getElementById('searchBar');
                
                if(searchBar.value == 'Search...'){
                    searchBar.value = ''
                    searchBar.placeholder = 'Search...'
                }
            }
            function inactive(){
                var searchBar = document.getElementById('searchBar');
                
                if(searchBar.value == ''){
                    searchBar.value = 'Search...'
                    searchBar.placeholder = ''
                }
            }


// function to load the next page when video is clicked on

 /* function loadNextPage(){

     alert("*** FOLLOW THE NEW LINK BELOW TO YOUR NEXT YOGA VIDEO ***");
     
     var h1 = document.createElement('h1 id="sevenVidTrialh1B"');
     var node = document.createTextNode('LET\'S UNLOCK');
     
     h1.appendChild(node);
     
     var div = document.getElementById("columnthree");
     
     div.appendChild(h1);
}; */



function loadNextPage(){

     alert("CLICK 'OK' AND FOLLOW THE LINK BELOW TO UNLOCK YOUR NEXT VIDEO");
     
     document.getElementById('contentTwoUnlock').style.display = "block";
     document.getElementById('unlockPara').style.display = "block";
     document.getElementById('columnoneUnlock').style.display = "block";
     document.getElementById('columntwoUnlock').style.display = "block";
     document.getElementById('columnthreeUnlock').style.display = "block";
    
     window.scrollTo(0,document.body.scrollHeight);
}; 



/* function loadNextPage(){

     vid = document.getElementById("vid");
   //  vid.addEventListener("playing");
                         
         if(vid == vid.playing){
         
         } else {
           alert("CLICK 'OK' AND FOLLOW THE LINK BELOW TO UNLOCK YOUR NEXT VIDEO");
     
           document.getElementById('contentTwoUnlock').style.display = "block";
           document.getElementById('unlockPara').style.display = "block";
           document.getElementById('columnoneUnlock').style.display = "block";
           document.getElementById('columntwoUnlock').style.display = "block";
           document.getElementById('columnthreeUnlock').style.display = "block";
    
           window.scrollTo(0,document.body.scrollHeight);
        }
};                */







/* var vid; 

function init(){
    vid = document.getElementById("vid");
}

 function loadNextPage(){

    if(vid.onended){
        alert('The End');
    }
};       */


/* var vid = document.getElementById("videoMainOne");
vid.onended = function(){
    alert("The video has ended");
}; */



/* var vid = document.getElementById("videoMainOne");
vid.addEventListener("ended", videoMain);
                     
function videoMain() {
    alert("The audio has ended");
}; */



/* var vid = document.getElementById('videoMainOne').addEventListener('ended',myHandler,false);
    function myHandler() {
        // What you want to do after the event
        alert('This one works');
    }
*/

