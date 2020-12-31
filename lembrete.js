buscar_lembrete();

function buscar_lembrete() {
    var database = firebase.database();
    var ref = database.ref('note');
    ref.on('value', gotData, errData);

    function gotData(data) {
        //recebe lembrete e o mostra na pagina
        document.getElementById('lembrete').value = data.val();
    }
    function errData(err) {
        //mostra erros
        console.log('Erro: ');
        console.log(err);
    }

}


function salvar() {

    var firebaseRef = firebase.database().ref();
    //manda para o banco de dados o texto do input
    firebaseRef.child("note").set(document.getElementById('lembrete').value);
}
