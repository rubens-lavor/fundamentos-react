import React from "react";

import alunos from "../../data/alunos";

export default (props) => {

    const alunoLI = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} --&gt; {aluno.nota}
            </li>
        )
    })
    return (
        <div>
            <ul style={{listStyle:"none"}}>
                {alunoLI}
            </ul>
        </div>
    )
}