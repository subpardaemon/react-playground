import React from "react";
import SithLord from "./SithLord";
import { connect } from 'react-redux';

const Siths = (props) => {
    const { title, lords, minSkill, editAction } = props;
    const sithList = lords.map((sith) => {
        return (minSkill<=sith.skillLevel) ? (
            <SithLord key={sith.uid} uid={sith.uid} name={sith.name} rank={sith.rank} skillLevel={sith.skillLevel} editAction={editAction} />
        ) : null;
    });
    return(
        <div className="sith-list">
            <h2>{title}</h2>
            <ul>
                {sithList}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        lords: [...state.sithLords],
        minSkill: state.cutoff
    };
};

export default connect(mapStateToProps)(Siths);
