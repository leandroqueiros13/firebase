function CadastrarDespesa(){
    var description = document.getElementById("description").value;
    var amount = document.getElementById("amount").value;
    var dateAdd = document.getElementById("dateAdd").value;

    console.log("Descrição",description,"Amount",amount,"DateAdd",dateAdd);       
    var despesas = {description:description,amount:amount,dateAdd:dateAdd};    
    db.database().ref('minhasdespesas').push(despesas);
    console.log(despesas);
}