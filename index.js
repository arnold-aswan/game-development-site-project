// 1. Target release section div latestReleases
// 2. create array of game releases 
// 3. iterate through the array  

const gameRelease = document.querySelector('.latestReleases')

const release = [
    {
        id: 0,
        cover: "./Images/asc-red.jpg",
        title: `Assassin's Creed Red`,
        description: `Assassin's Creed Red looks to finally allow its longtime 
        fans by exploring feudal Japan, 
        and recent rumors have stated AC Red could have both 
        a ninja and samurai protagonist. `,
    },
    {
        id: 1,
        cover: "./Images/assasins-creed-mirage.jpg",
        title: `Assassin's Creed Mirage`,
        description: ` Assassin's Creed Mirage is an action-adventure 
        stealth game intended to be reminiscent of older 
        Assassin's Creed titles, being more linear and 
        story-focused and `,
    },
    {
        id: 2,
        cover: "./Images/Diablo-4.jpg",
        title: `Diablo V`,
        description: ` The endless battle between the High Heavens and the 
        Burning Hells rages on as chaos threatens to consume 
        Sanctuary. With ceaseless demons to slaughter,`
    },
    {
        id: 3,
        cover: "./Images/ghostoftsushima.jpg",
        title: `Ghost Of Tsushima`,
        description: ` As one of the last surviving samurai, you rise from the
        ashes to fight back. But honorable tactics won't lead you 
        to victory. You must move beyond your samurai ...`,
    }
]

window.addEventListener('DOMContentLoaded', function() {
    let displayReleases = release.map(function(game) {
        
        return `<article class="card">
        <div class="game">
            <img src=${game.cover} alt="game" class="cover">
        </div> 
        <div class="description">
            <h4 class="desc">${game.title}</h4>
            <p class="descP">
                ${game.description}
            </p>
            <button class="btn dice">View More</button>
        </div>
        </article>`
    }) 
    displayReleases = displayReleases.join("")
    gameRelease.innerHTML = displayReleases
})


   



