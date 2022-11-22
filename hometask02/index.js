const vehicle={
    brandName :"BMW",
    model :"X5"
}
console.log(vehicle.brandName)
console.log(vehicle["model"])
vehicle["model"]="M1"
console.log(vehicle["model"])
delete vehicle["model"]
/*console.log(vehicle)*/
let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
}
let s=0;
for(let k in salaries){
    s=s+salaries[k];
}
console.log(s)