// function for getting desiplay/ cancel the popup chat
function openbutton(){
 		document.getElementById("chat-form").style.display = "block";
 	}
 function closebutton(){
 		document.getElementById("chat-form").style.display = "none";
 	}

 	//function to show the values of the form 

 	function saveContactFormdata(){
 		var username=document.getElementById("Username").value;
 		var email=document.getElementById("Email").value;
 		var subject=document.getElementById("Subject").value;
 		var content=document.getElementById("Content").value;
 		
 		//to write the code on the browser

 	 document.writeln("UserName:   "+ username + ""+"<br>");
 	 document.writeln("Email:  " + email + " " +"<br>");
 	 document.writeln("Subject:  " + subject + " "  +"<br>");
 	 document.writeln("Message:   " + content + " "  +"<br>");
 	}

 	// fetching data in JSON format
//  $.ajax({
//   type: "POST",
//   url: "serverUrl",
//   data: formData,
//   success: function (){
//   		var username=document.getElementById("Username").value;
//  		var email=document.getElementById("Email").value;
//  		var subject=document.getElementById("Subject").value;
//  		var content=document.getElementById("Content").value;
//   },
//   dataType: "json",
//   contentType : "application/json"
// });

//funtion to display blog form data on browser.
	function saveBlogFormdata(){
	 		var username=document.getElementById("name").value;
	 		var email=document.getElementById("email").value;
	 		var content=document.getElementById("message").value;	 	
			 document.writeln("Name:   "+ username + ""+"<br>");
			 document.writeln("Email:  " + email + " " +"<br>"); 	
			 document.writeln("Message:   " + content + " "  +"<br>");
	 	}

	//Adding functionality of bouncing ball

	// var canvas = document.querySelector("canvas");
 
 //            canvas.width = window.innerWidth;
 //            canvas.height = window.innerHeight;
 
 //            var l = canvas.getContext('2d');
 
 //            // x and y are the co-ordinates of the circle
 
 //            // vx and vy are the respective speeds
 
 //            var x = Math.floor(Math.random() * innerWidth);
 //            var y = Math.floor(Math.random() * innerHeight);
 //            var vx = Math.floor(Math.random() * 2);
 //            var vy = Math.floor(Math.random() * 4);
 //            var radius = 20;
 
 //            move();
           
 //            // This function will do the animation
 //            function move() {
 //                requestAnimationFrame(move);
 
 //                // It clears the specified pixels within
 //                // the given rectangle
 //                l.clearRect(0, 0, innerWidth, innerHeight);
 
 //                // Creating a circle
 //                l.beginPath();
 //                l.strokeStyle = "RED";
 //                l.arc(x, y, radius, 0, Math.PI * 2, false);
 //                l.stroke();
 
 //                // Conditions so that the ball bounces
 //                // from the edges
 //                if (radius + x > innerWidth)
 //                    vx = 0 - vx;
 
 //                if (x - radius < 0)
 //                    vx = 0 - vx;
 
 //                if (y + radius > innerHeight)
 //                    vy = 0 - vy;
 
 //                if (y - radius < 0)
 //                    vy = 0 - vy;
 
 //                x = x + vx;
 //                y = y + vy;
 
 //            }

	 // adding functionality of cursor emoji



// (function emojiCursor() {
  
//   var possibleEmoji = ["😀", "😂", "😆", "😊"]
//   var width = window.innerw;
//   var height = window.innerHeight;
//   var cursor = {x: width/2, y: width/2};
//   var particles = [];
  
//   function init() {
//     bindEvents();
//     loop();
//   }
  
//   // Bind events that are needed
//   function bindEvents() {
//     document.addEventListener('mousemove', onMouseMove);
//     document.addEventListener('touchmove', onTouchMove);
//     document.addEventListener('touchstart', onTouchMove);
    
//     window.addEventListener('resize', onWindowResize);
//   }
  
//   function onWindowResize(e) {
//     width = window.innerWidth;
//     height = window.innerHeight;
//   }
  
//   function onTouchMove(e) {
//     if( e.touches.length > 0 ) {
//       for( var i = 0; i < e.touches.length; i++ ) {
//         addParticle( e.touches[i].clientX, e.touches[i].clientY, possibleEmoji[Math.floor(Math.random()*possibleEmoji.length)]);
//       }
//     }
//   }
  
//   function onMouseMove(e) {    
//     cursor.x = e.clientX;
//     cursor.y = e.clientY;
    
//     addParticle( cursor.x, cursor.y, possibleEmoji[Math.floor(Math.random()*possibleEmoji.length)]);
//   }
  
//   function addParticle(x, y, character) {
//     var particle = new Particle();
//     particle.init(x, y, character);
//     particles.push(particle);
//   }
  
//   function updateParticles() {
    
//     // Updated
//     for( var i = 0; i < particles.length; i++ ) {
//       particles[i].update();
//     }
    
//     // Remove dead particles
//     for( var i = particles.length -1; i >= 0; i-- ) {
//       if( particles[i].lifeSpan < 0 ) {
//         particles[i].die();
//         particles.splice(i, 1);
//       }
//     }
    
//   }
  
//   function loop() {
//     requestAnimationFrame(loop);
//     updateParticles();
//   }
  
//   /**
//    * Particles
//    */
  
//   function Particle() {

//     this.lifeSpan = 120; //ms
//     this.initialStyles ={
//       "position": "absolute",
//       "display": "block",
//       "pointerEvents": "none",
//       "z-index": "10000000",
//       "fontSize": "16px",
//       "will-change": "transform"
//     };

//     // Init, and set properties
//     this.init = function(x, y, character) {

//       this.velocity = {
//         x:  (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
//         y: 1
//       };
      
//       this.position = {x: x - 10, y: y - 20};

//       this.element = document.createElement('span');
//       this.element.innerHTML = character;
//       applyProperties(this.element, this.initialStyles);
//       this.update();
      
//       document.body.appendChild(this.element);
//     };
    
//     this.update = function() {
//       this.position.x += this.velocity.x;
//       this.position.y += this.velocity.y;
//       this.lifeSpan--;
      
//       this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px,0) scale(" + (this.lifeSpan / 120) + ")";
//     }
    
//     this.die = function() {
//       this.element.parentNode.removeChild(this.element);
//     }}
    
 
  
  /**
   * Utils
   */
  
  // Applies css `properties` to an element.
  // function applyProperties( target, properties ) {
  //   for( var key in properties ) {
  //     target.style[ key ] = properties[ key ];
  //   }
  // }
  
 