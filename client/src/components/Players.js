import React from 'react';


import "../styles.scss";


const Players = (props) => {
    return (
        <div>
            
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
