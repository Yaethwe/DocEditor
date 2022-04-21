const body = document.querySelector("body");
const letter = document.querySelector("#letter");
const main = (function(){
	console.log("Hello,World!");
})();
const GNpaper =`
	<h1 style="color:orange">Garden Net</h1>
	<p style="color:blue">This text can be edited by the user.</p>
	<p>This is the only one way to create a rich text editor in html.</p>
`;
const mainDiv = document.createElement('div');
function addPage(x){
	let div = document.createElement('div');
	let textDiv = document.createElement('div');
	let toolbarDiv = document.createElement('div');
	let xbutton = document.createElement('button');
	xbutton.textContent="x";
	xbutton.className="XBTN";
	
	xbutton.addEventListener('click',()=>{
		mainDiv.removeChild(div);
	});
	
	div.setAttribute("contenteditable","true");
	div.className="richtexteditor";
	toolbarDiv.className="toolbarDiv";
	
	toolbarDiv.appendChild(xbutton);
	
	textDiv.className="textDiv";
	textDiv.innerHTML=x;
	div.appendChild(toolbarDiv);
	div.appendChild(textDiv);
	mainDiv.appendChild(div);
}
letter.appendChild(mainDiv);

addPage(GNpaper);

