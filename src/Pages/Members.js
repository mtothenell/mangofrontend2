import React from "react";
import MemberTable from "../Components/MemberTable";

const Members = ({members}) => {

    // In class components, render() does not take any arguments. It simply returns JSX code, to specify what React elements to render.
    // In a function component, like function Helloworld() { return () } you dont ned the render() method.
    return (
        <div>
            <h2>Members</h2>
            <MemberTable members={members}/>
        </div>
    )
}

export default Members;
