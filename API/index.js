async function getRandomDomImage(){
    
    const url = `https://random.dog/woof.json`;
    const response = await fetch(url)
    const data = response.json();

    document.getElementById("dogImage").src = data.url;
}