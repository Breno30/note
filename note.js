buscar_lembrete();

function buscar_lembrete() {
    var database = firebase.database();
    var ref = database.ref('note');
    ref.on('value', gotData, errData);

    function gotData(data) {
        document.getElementById('lembrete').value = data.val();
    }
    function errData(err) {
        console.log('Error: ');
        console.log(err);
    }

}

ref.on("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
        var data = childSnapshot.val();

        console.log(data);
    })
})


function salvar() {

    var firebaseRef = firebase.database().ref();
    firebaseRef.child("note").set(document.getElementById('lembrete').value);
}