  $(function() {

	var listOfComics = {
		1: {
			"title" : "Wonder Woman",
			"era"   : "Golden Age",
			"issue" : 3
	 	},
	 	2: {
	 		"title" : "The Unbeatable Squirrel Girl",
	 		"era" : "Copper Age",
	 		"issue" : 1
	 	},
	 	3: {
	 		"title" : "Longshot",
	 		"era" : "Copper Age",
	 		"issue" : 1
	 	},
	 	4: {
	 		"title" : "Luke Cage: Hero For Fire",
	 		"era" : "Bronze Age",
	 		"issue" :1
	 	}	
	}
 	
 	for (comic in listOfComics){
 		var comicToDisplay = listOfComics[comic];
 		$(".comicDisplayList").append(
 			"<div class='displayItemBlock'>"
 			+"<div class='displayTitle'>"+comicToDisplay.title+"</div>"
 			+"<div class='displayData'>Era: "+comicToDisplay.era+"</div>"
 			+"<div class='displayData'>Issue: "+comicToDisplay.issue+"</div>"
 			+"<div class='displayData'>boop boop be doop</div>"
 			+"</div>"
 			); 
 	}

  }); 