// var numNeighbours = prompt("How many neighbour countries does your country have?");

// if (numNeighbours == 1){
// 	console.log("Only one border");
// }
// 	else if (numNeighbours>1){
// 		console.log("More than one border");
// 	}
// 	else {
// 			console.log("No border");
// 	}
	

	// To test what happens when you use (===) sign
let numNeigh = Number(prompt("How many neighbour countries does your country have?"));

	if (numNeigh === 1){
		console.log(`Only ${numNeigh} border`);
		// console.log("Only "+numNeigh+" border");
}
	else if (numNeigh>1){
		console.log("More than one border");
	}
	else {
			console.log("No border");
	}


	// lesson  learned___________________
	// Number functions "Number()", string functions "string()" and boolean functions "boolean()"
	// Strings and Template Literals eg ${numNeigh}
	//Backquote(``) gives no reason for escape sequences 
	
	console.log('We are making use of Michael\'s laptop');
	console.log("Michael once saind and I quote him \"I learnt jQuery sometimes ago\"");
	console.log(`We are making use of Michael's laptop`);
	console.log(`Michael once saind and I quote him "I learnt jQuery sometimes ago"`);
