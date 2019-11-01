import React from 'react';

import NavBar from './NavBar';

import "../styles.scss";

const Players = (props) => {
    return (
        <div>
            <NavBar />
            {props.data.map((player, id) =>

                <div key={id} >
                    <h2>#{id + 1} {player.name}</h2>
                    <h4>{player.country}</h4>
                </div>
            )}

        </div>
    )
}

export default Players
