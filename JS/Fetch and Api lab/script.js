
async function getDogImage() {
    try{
        const req = new Request("https://dog.ceo/api/breeds/image/random");
        const res = await fetch(req);
        const data = await res.json();

        const img = document.createElement ("img");
        img.src = data.message;
        img.alt = "An img of a dog from the dogs api";

        document.body.appendChild(img);
    }
    catch (error)
    {
        console.error("Error fetching api", error);
        const message = document.createElement("div");
        message.textContent = "We couldn't connect to the api try again soon!";

        document.body.appendChild(message);
    }
}

getDogImage();
