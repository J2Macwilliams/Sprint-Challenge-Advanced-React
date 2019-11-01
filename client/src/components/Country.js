import React from 'react'

import "../styles.scss";

const Country = (props) => {
    return (
        <div className="team">
            {props.team.map((player, id) =>
                <div key={id} className="teamCard">
                    <h2>#{id + 1} {player.name}</h2>
                        <h4>{player.country}</h4>
                </div>
                )}
        </div>
    )
}

export default Country
