
	var data = [
		{
			"name" : "Ashwin",
			"age" : "20",
			"Gender" : "M"
		},
		{
			"name" : "Abhinandan",
			"age" : "20",
			"Gender" : "F"
		},
		{
			"name" : "Ayansh",
			"age" : "2",
			"Gender" : "M"
		},
		{
			"name" : "Anand",
			"age" : "30",
			"Gender" : "M"
		},
		{
			"name" : "Rinki",
			"age" : "20",
			"Gender" : "F"
		},
		{
			"name" : "Nimrat",
			"age" : "20",
			"Gender" : "F"
		},
		{
			"name" : "Anand",
			"age" : "30",
			"Gender" : "M"
		},
		{
			"name" : "Rinki",
			"age" : "20",
			"Gender" : "F"
		},
		{
			"name" : "Nimrat",
			"age" : "20",
			"Gender" : "F"
		},
		{
			"name" : "Anand",
			"age" : "30",
			"Gender" : "M"
		},
		{
			"name" : "Rinki",
			"age" : "20",
			"Gender" : "F"
		},
		{
			"name" : "Nimrat",
			"age" : "20",
			"Gender" : "F"
		},
		{
			"name" : "Anand",
			"age" : "30",
			"Gender" : "M"
		},
		{
			"name" : "Rinki",
			"age" : "20",
			"Gender" : "F"
		},
		{
			"name" : "Nimrat",
			"age" : "20",
			"Gender" : "F"
		}
	];
	const selectOptions = [...new Set(data.map(x=>x.name))];
	var dataCol = [];
	var dataTable = document.createElement("table");
	var dataRow = dataTable.insertRow(-1);
	var conDiv = document.getElementById("tblData");
	var selectBox = document.getElementById("department");

function createSelectBox(){
	for(var i=0; i<selectOptions.length; i++){
		var option = document.createElement("option");
		option.text = option.value = selectOptions[i];
		selectBox.add(option,0);
	}
}

function createTableHeader(){
	for(var i=0; i<1; i++){
		for(var key in data[i]){21
			if(dataCol.indexOf(key) === -1){
				dataCol.push(key);
			}
		}
	}
}
/*
function createTable(){
	for(var i=0; i<data.length; i++){
		dataRow = dataTable.insertRow(-1);
		for(var j=0; j<dataCol.length; j++){
			var tblCell = dataRow.insertCell(-1);
			if(data[i][dataCol[j]]==="M"){
				tblCell.className = 'greenCell';
			} else if(data[i][dataCol[j]]==="F"){
				tblCell.className = 'redCell';
			}

			tblCell.innerHTML= data[i][dataCol[j]];

		}
	}
	dataTable.border = 1;
	dataTable.classList.add("dataTable");
	conDiv.innerHTML = '';
	conDiv.appendChild(dataTable);
}*/

function createTable (){
	var selectedVal = selectBox.options[selectBox.selectedIndex].value;
	conDiv.innerHTML = '';
	dataTable.innerHTML = '';
	createTableHeader();
	console.log(dataCol);
	dataRow = dataTable.insertRow(0);
	for(var i=0; i<dataCol.length; i++){
		var th = document.createElement("th");
		th.innerHTML = dataCol[i];
		dataRow.appendChild(th);
	}
	for(var i=0; i<data.length; i++){
		dataRow = dataTable.insertRow(-1);
		for(var j=0; j<1; j++){
			if((data[i][dataCol[j]]=== selectedVal) || selectedVal === 'select' ){

				for(var k=0; k<dataCol.length; k++){
					var tblCell = dataRow.insertCell(-1);
					if(data[i][dataCol[k]]==="M"){
						tblCell.className = 'greenCell';
					} else if(data[i][dataCol[k]]==="F"){
						tblCell.className = 'redCell';
					}
					tblCell.innerHTML= data[i][dataCol[k]];
				}
			}

		}
	}

	//createTableHeader();
	dataTable.border = 1;
	dataTable.classList.add("dataTable");
	conDiv.innerHTML = '';
	conDiv.appendChild(dataTable)
};
createSelectBox();
createTable();
$(document).ready(function(){
	$("td.yCell").each(function(){
		$(this).parent("tr").find("td:eq(1)").addClass("greenCell");
	});
	$("td.nCell").each(function(){
		$(this).parent("tr").find("td:eq(1)").addClass("redCell");
	});
})
