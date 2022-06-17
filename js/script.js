function textChange1(){
	document.getElementById("one").innerHTML = "Tada!!! ";
	
}
function textChange2(){
document.getElementById("two").innerHTML = "Lmao";
}
function textChange3(){
	document.getElementById("three").innerHTML ="The text is Changed";
}
function myImage2(){
	document.getElementById('imgChange').src='images/1.jpg';
}
function fontChange(){

	document.getElementById('35px').style.fontSize='35px';
}

//function fontBack(){
	//document.getElementById('35px').style.fontSize='16px';
//}
function fontHide(){
	document.getElementById('35px').style.display="none";
}
function fontBack(){
	document.getElementById('35px').style.display='block';
}
function img1(){
	document.getElementById("myImage").src='images/2.jpg';
}
function img2(){
	document.getElementById('myImage').src='images/1.jpg';
}
//function docTest(){
	//document.getElementById('dtest').write(11+8);
//}
function demo12(){
    var x = 5;
    var y = 6;
    var z = x + y;
    document.getElementById("dem12").innerHTML =
    "The value of z is: " + z;
 }
function demo15(){
 	useName='Onas';

	document.getElementById('dem15').innerHTML = useName;
	var useName;
}
function demo16() {
	const grp = ['Onas', 'Habib', 'Shaon'];
	grp[4] = 'Mugdho';
	document.getElementById('dem16').innerHTML= grp;
}
{
	var x= 25;
	x%=6;
document.getElementById('dem18').innerHTML = x;
}
{
	let x = 5;
	x++;
	let z = x;
	document.getElementById("dem19").innerHTML = z;
}
{
	let x = 3;
	document.getElementById("dem20").innerHTML = x ** 3
}
{
	let x=5;
	let y = 5;
	document.getElementById('dem21').innerHTML = x == y;
}
{
	function demo22(x,y){
		return x*y;
	}
		document.getElementById('dem22').innerHTML= demo22(10,9);
}
{
 person ={name: 'onas' ,age:'23', height:'5 ft 8 inch', weigth:'70kg'};
 document.getElementById("dem23").innerHTML =
person.name + " is " + person.age + " years old.";
}
function demo24(){
	document.getElementById('dem24').innerHTML=Date()
}
{
	let text='MYNAMEISISMAMAHMEDONAS';
document.getElementById('dem25').innerHTML=text.length;
}
{
	let demo27 = "My name is Onas"
	document.getElementById('dem27').innerHTML= demo27.slice(5,20);
}
function demo28(){
	let x=document.getElementById('dem28').innerHTML;
	document.getElementById('dem28').innerHTML= x.replace("CR","Mentor");
}
{
	let text = document.getElementById('dem.29').innerHTML;
	document.getElementById('dem29').innerHTML= text.indexOf('random');
}
{
	let text = document.getElementById('dem.30').innerHTML;
	document.getElementById('dem30').innerHTML= text.match(/pain/g);
}