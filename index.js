const alunosDaEscola=[
    {nome:"Henrique",notas:[],cursos:[],faltas:5},
    {nome:"Edson",notas:[],cursos:[],faltas:2},
    {nome:"Bruno",notas:[6,6,6],cursos:[],faltas:0},
    {nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},
    {nome:"Carlos",notas:[],cursos:[],faltas:0},
    {nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];


const adicionarAluno = nomeAluno=>{
    let novoAluno = {
        nome: nomeAluno,
        notas:[],
        cursos:[],
        faltas:0
    };
    alunosDaEscola.push(novoAluno);
    console.log(`${novoAluno.nome} foi adicionado com sucesso!!`);
};
const formatarData = data =>{
    let dia = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();
    return (`${dia}/${mes}/${ano}`);
} 
const listarMatricula = aluno=>{
    let conteudo = "";
    if (aluno.cursos[0]){
        for(let curso of aluno.cursos){
            conteudo+=`Curso: ${curso.nomeDoCurso}
        Matricula: ${formatarData(curso.dataMatricula)}
        `
        }
    }else{
        conteudo+=`Curso: 
        Matricula: `
    }
    return conteudo;
}
       
const listarAlunos = listaDeAlunos=>{
    let conteudo = "";
    for(let aluno of listaDeAlunos){
        conteudo+=`
        ----------------
        Nome: ${aluno.nome}
        Notas: ${aluno.notas}
        ${listarMatricula(aluno)}
        Faltas: ${aluno.faltas}`

    }
    console.log(conteudo);
}
const buscarAluno = nomeAluno=>{
    let resultado = alunosDaEscola.filter(aluno =>{return aluno.nome == nomeAluno});
    if (resultado[0] !== undefined){
        console.log(`Aí está!`);
        listarAlunos(resultado);
    }else{
        console.log(`não encontramos nenhum ${nomeAluno}`);
    }
}
const matricularAluno = (alunoNome, ...materias)=>{
    let alunoDesejado = alunosDaEscola.find(aluno =>{return aluno.nome == alunoNome});
    if(!alunoDesejado){
        console.log(`${alunoNome} não está matriculado!`);
    }else{
        for (let umaMateria of materias){
            let novaMateria = {nomeDoCurso: umaMateria, dataMatricula: new Date};
            alunoDesejado.cursos.push(novaMateria);
            console.log(`${alunoNome} foi matriculado na materia ${umaMateria} com sucesso!!`);
        }
    }
}
const aplicarFalta = alunoNome=>{
    let alunoDesejado = alunosDaEscola.find(aluno =>{return aluno.nome == alunoNome && aluno.cursos[0]});
    if (!alunoDesejado){
        console.log(`Aluno em situação irregular!!`);
    }else{
        alunoDesejado.faltas++;
        console.log(`${alunoDesejado.nome} recebeu uma falta`)
    }
}
        
const aplicarNota=(alunoNome,nota)=>{
    let alunoDesejado = alunosDaEscola.find(aluno =>{return aluno.nome == alunoNome && aluno.cursos[0]});
    if (!alunoDesejado){
        console.log(`Aluno em situação irregular!!`);
    }else{
        alunoDesejado.notas.push(nota);
        console.log(`Nota adicionada ao aluno(a)${alunoDesejado.nome}`)
    }
    

}
      
 const aprovarAluno= alunoNome=>{
    let alunoDesejado = alunosDaEscola.find(aluno =>{return aluno.nome == alunoNome && aluno.cursos[0]});
    if (!alunoDesejado){
        console.log(`Aluno em situação irregular!!`);
    }else{
        let soma = alunoDesejado.notas.reduce((total, elemento)=>{return total+elemento});
        let media = soma/alunoDesejado.notas.length;
        if (media>=7 && alunoDesejado.faltas<=3){
            console.log(`Parabens ${alunoDesejado.nome}, você foi aprovado!!`);
        }else{
            console.log(`O aluno ${alunoDesejado.nome} foi reprovado!`);
        }
    }
}


// listarAlunos(alunosDaEscola);
// matricularAluno("Bruno","Full Stack","UX");
// aplicarFalta("Edson");
// aplicarNota("Edson", 7);
// aprovarAluno("Bruno")
// buscarAluno("Lucca");