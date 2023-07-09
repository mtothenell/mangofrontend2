import React from 'react';

const MemberTable = ({members}) => {

    return (
        <>
            <p>TEST</p>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Förnamn</th>
                    <th scope="col">Efternamn</th>
                </tr>
                </thead>
                <tbody>
                {members.map((member, index) => (
                    <tr key={member.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{member.firstName}</td>
                        <td>{member.lastName}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>

    );
}

export default MemberTable;
