const htmlfile=document.getElementById("hp");
async function folder (){
  const data=await fetch("https://acode-theta.vercel.app/file.txt");
  const res=await data.text();
  htmlfile.innerHTML=res;
}
folder();