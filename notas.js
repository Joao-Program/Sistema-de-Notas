let alunos = [
    {nome: "Lucas", nota: 7},
    {nome: "Rafaela", nota: 9},
    {nome: "Bruno", nota: 5}
];

//Adiciona alunos ao Sistema de Notas
function adicionarAluno(nome, nota){
    let novoAluno = {nome, nota};
    alunos.push(novoAluno);
    console.log(`Novo aluno foi adicionado ao Sistema!`);
}

//Mostra o aluno buscado pelo nome
function buscarAluno(nome){
    return alunos.find(aluno => aluno.nome === nome);
}

//Lista todos os alunos aprovados
function listarAprovados(){
   return alunos.filter(aluno => aluno.nota >= 7);
}

//Retorna a média de nota dos alunos do Sistema
function mediaDaTurma(){
    let soma = alunos.reduce((total, aluno) => total + aluno.nota, 0);
    return soma / alunos.length;
}

//Organiza o Sistema com base nas notas dos alunos
function ordenarPorNota(){
    return alunos.sort((a, b) => a.nota - b.nota);
}

adicionarAluno("Jorge", 10);
adicionarAluno("João", 2);
console.log("Busca João:", buscarAluno("João"));
console.log("Aprovados:", listarAprovados());
console.log("Ordenados:", ordenarPorNota());
console.log("Média:", mediaDaTurma());
