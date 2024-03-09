const React = require('react')
const Def = require('./layouts/default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/ChiaJuice.jpeg" alt="Chia Fruit Shake" className="shrink-image" />
                </div>
                 <button type="button" className="btn btn-primary"><a href="/places">Places Page</a></button>
            </main>
        </Def>
    )
}

module.exports = home
