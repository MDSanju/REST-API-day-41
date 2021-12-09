const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
loadBuddies();

const displayBuddies = data => {
    const buddies = data.results
    const buddyDiv = document.getElementById('buddies');
    for (const buddy of buddies) {
        const h5 = document.createElement('h5');
        h5.innerText = `Emaiil Id: ${buddy.email}
        Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}.`;
        buddyDiv.appendChild(h5);
    }
}