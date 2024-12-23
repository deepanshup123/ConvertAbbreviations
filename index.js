generate = document.getElementById("button")
generate.addEventListener("click", glossary_Generate)
glossary_Text = document.getElementById("exampleFormControlTextarea1")



function glossary_Generate(){
	end_abbreviation = "</def-list></glossary>"
			   final_result = "<glossary><title>Abbreviations Used</title><def-list>"
					  user_input = glossary_Text.value.split("\n")
		user_input.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
	console.log(user_input)
				    
	for(let i = 0; i < user_input.length; i++){
		let def_item = []
		let forSplitting = "";
		if (user_input[i].includes("\t")){
			forSplitting = "\t"
		}else if (user_input[i].includes("=")){
			forSplitting = "="
		}else {
			let error = document.getElementById("error")
			error.innerHTML = "!!Please ensure your input of abbreviation must contain '=' or 'tab' Provide a valid Input!!"
			
			break;
		}
		def_item = user_input[i].split(forSplitting)
		
		lists = `<def-item><term id="G${i+1}">${def_item[0].trim()}</term><def><p>${def_item[1].trim()}</p></def></def-item>`
		final_result = final_result + lists;
	}
	result = final_result + end_abbreviation
	let forUserResult = document.getElementById("exampleFormControlTextarea2")
			    forUserResult.value = ""
		end_abbreviation="";
	final_result=""
	forUserResult.value = result			    // \t
		     }

