/**
 * Assignment 1
 * Advanced Server-Side Scripting
 * 
 * Daniel Costa Ramos - 200354269
 * 
 * CUSTOM.JS
 */

function render_games(games) {

    let list_games = `
        ${games.map( game => `
            <div class="email-item email-item-selected pure-g">
                <div class="pure-u">
                    <img width="64" height="64" alt="${game.subject}" class="game-avatar" src="${game.avatar}">
                </div>

                <div class="pure-u-3-4">
                    <h5 class="game-publisher">${game.publisher}</h5>
                    <h4 class="game-subject">${game.subject}</h4>
                    <p class="game-body">
                        ${game.body}
                    </p>
                </div>
            </div>
        `).join('')}
    `;
    return list_games;
} // END render_games()

let el = document.getElementById('list');
el.innerHTML = render_games(games);