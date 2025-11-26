# 🎓 Sistema de Gestão de Alunos — JavaScript

Um projeto simples e eficiente desenvolvido para praticar lógica de programação e manipulação de arrays em JavaScript.  
O sistema permite cadastrar alunos, buscar por nome, listar aprovados, calcular média da turma e ordenar por nota.

---

## 🚀 Funcionalidades

### ✔ Adicionar aluno
Adiciona novos alunos ao sistema com nome e nota.
### ✔ Buscar aluno
Busca um aluno específico utilizando o método `find()`.
### ✔ Listar aprovados
Filtra os alunos com nota maior ou igual a **7**.
### ✔ Calcular média da turma
Soma todas as notas com `reduce()` e divide pela quantidade de alunos.
### ✔ Ordenar alunos por nota
Ordena a lista do menor para o maior usando `sort()`.

---

## 📂 Código Principal

```js
let alunos = [
    {nome: "Lucas", nota: 7},
    {nome: "Rafaela", nota: 9},
    {nome: "Bruno", nota: 5}
];

function adicionarAluno(nome, nota){
    let novoAluno = {nome, nota};
    alunos.push(novoAluno);
    console.log(`Novo aluno foi adicionado ao Sistema!`);
}

function buscarAluno(nome){
    return alunos.find(aluno => aluno.nome === nome);
}

function listarAprovados(){
   return alunos.filter(aluno => aluno.nota >= 7);
}

function mediaDaTurma(){
    let soma = alunos.reduce((total, aluno) => total + aluno.nota, 0);
    return soma / alunos.length;
}

function ordenarPorNota(){
    return alunos.sort((a, b) => a.nota - b.nota);
}
```

**▶ Como executar**
🔹 Opção 1 — Usando Node.js:

Instale o Node (se ainda não tiver).
Salve o arquivo como alunos.js.
Execute:
bash
Copiar código
node alunos.js

🔹 Opção 2 — Pelo navegador:

Abra o navegador.
Pressione F12.
Cole o código no console e execute.

**🧠 Conceitos praticados**
Arrays e Objetos
Funções
Métodos de array (map, filter, find, sort, reduce)
Boas práticas de organização
Lógica de programação

**✨ Exemplo de Uso**
```js

adicionarAluno("Jorge", 10);
adicionarAluno("João", 2);

console.log("Busca João:", buscarAluno("João"));
console.log("Aprovados:", listarAprovados());
console.log("Ordenados:", ordenarPorNota());
console.log("Média:", mediaDaTurma());
```

**🛠 Tecnologias**
JavaScript (ES6+)
VS Code
Node.js (opcional)

**👨‍💻 Autor**
João Paulo Gonçalves Santos Lobo
Desenvolvedor Front-End Júnior | Estudante de ADS
📧 jpaulolobo2509@gmail.com
📍 Lauro de Freitas – BA

**⭐ Contribuições**
Sinta-se à vontade para sugerir melhorias ou abrir issues.
Obrigado por visitar meu repositório! 🚀✨
