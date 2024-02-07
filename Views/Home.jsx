const React = require('react')
const Def = require('./layouts/default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/css/images/ChiaJuice.jpeg" alt="Chia Fruit Shake" className="shrink-image" />
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home
