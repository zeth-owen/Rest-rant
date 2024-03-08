const React = require('react');
const Default = require('./layouts/default');

const NotFound = () => {
    return (
        <Default>
            <h1>404</h1>
            <main>
                <h2>Timmy not found.</h2>
                <img
                    src='/images/bread.jpeg'
                    alt='Croissant with a Croissant Family, but missing Timmy.'
                />
            </main>
        </Default>
    );
};

module.exports = NotFound;