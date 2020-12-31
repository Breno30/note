buscar_lembrete();

function buscar_lembrete() {
    var database = firebase.database();
    var ref = database.ref('note');
    ref.on('value', gotData, errData);

    function gotData(data) {
        document.getElementById('lembrete').value = data.val();
    }
    function errData(err) {
        console.log('Erro: ');
        console.log(err);
    }

}


function salvar() {

    var firebaseRef = firebase.database().ref();
    firebaseRef.child("note").set(document.getElementById('lembrete').value);
}
