const url = "http://localhost:3000/Colaborator"

///===================POST=================///
const addPessoa = async (dados: any) => {
    const res = await fetch('http://localhost:3000/Colaborator', {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const post = res.status
    console.log(post);
}

//====================GET==================//
const getPessoa = () => {
    return fetch(`${url}/`)
        .then((resServer) => {
            return resServer.json()
        })
}

//====================PUT==================//
const putPessoa = async (id: any, dados: any) => {
    const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    });
    if (response.status !== 200) {
        console.log(`Erro no servidor: ${response.status}`);
    } else {
        return response.json();
    }
}

const Delete = (id: any) => {
    return fetch(`${url}/${id}`, {
        method: 'DELETE'
    })
        .then((resServer) => {
            if (resServer.status !== 200) {
                console.log(`Erro no servidor: ${resServer.status}`);
            } else {
                return resServer.json()
            }
        })
}

export const service = {
    addPessoa,
    getPessoa,
    putPessoa,
    Delete
}