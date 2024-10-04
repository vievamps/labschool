const url = "http://localhost:3000/api"


function searchTurmas() {
    axios.get(`${url}/turmas`).then(
        (response) => {
            const data = response.data.result

            let html = ""

            console.log(data)

            for(let turmas of data){
                html += `<tr>
                <th scope="row">${turmas.id}</th>
                <td>${turmas.nome}</td>
                <td>${turmas.periodo}</td>
                <td>${turmas.professor}</td>
                <td><button type="button" class="btn btn-success" onclick="redirect(${turmas.id})">Editar</button></td>
                <td><button type="button" class="btn btn-danger" onclick="deleteTurma(${turmas.id})">Excluir</button></td>
                </tr>`
            }
            document.getElementById('table-body').innerHTML = html
        }
    ).catch(err => console.error(err))
}


function deleteTurma(id_turma){
    axios.delete(`${url}/turma/${id_turma}`).then((response) => {
        alert(response)
        window.location.reload 
    }).catch(err => console.error(err))
}

function createTurmas(){
    let nome = document.getElementById('nomeTurma').value
    let periodo = document.getElementById('Periodo').value
    let select = document.getElementById('select-professor')
    let option = select.options[select.selectedIndex].value

    const data = {
        nome: nome,
        periodo: periodo,
        professor: option
    }
    axios.post(`${url}/turma`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        alert(response.data.result)
        window.location.href = "http://localhost/FRONTEND/cadastroTurma.html"
    }    
    ).catch(err => console.error(err))
}

function redirect(id_turma){
    window.location.href = `http://localhost/FRONTEND/atualizarTurma.html?id_turma=${id_turma}`
}


function readAtividades() {
    axios.get(`${url}/atividade`).then(
        (response) => {
            const data = response.data.result

            let html = ""

            for(let atividade of data){
                html += `<tr>
                <th scope="row">${atividade.id}</th>
                <td>${atividade.id_atividade}</td>
                <td>${atividade.nome}</td>
                <td>${atividade.descricao}</td>
                <td>${atividade.data_entrega}</td>
                <td>${atividade.turma_id}</td>
                <td>${atividade.peso}</td>
               <td><button class="btn btn-success"  onclick="redirect(${atividade.id})">Editar</button></td>
                <td><button class="btn btn-danger" onclick="deleteAtividade(${atividade.id})">Excluir</button></td>
                </tr>`
            }
            document.getElementById('atividade-body').innerHTML = html
        }
    ).catch(err => console.error(err))
}
function deleteAtividade(id_atividade){
    axios.delete(`${url}/atividade/${id_atividade}`).then(
        (response) => {
            alert(response.data.result)
            readAtividades() 
        }
    ).catch(err => console.error(err))
}
