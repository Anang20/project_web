
document.getElementsByName("kirim")[0].addEventListener('submit', function (event) {

    event.preventDefault();

    var data = ['nama', 'kritik'];

    template = "";

    data.forEach(element => {
        value = document.getElementsByName(element)[0].value;
        template += `
                <td>`+ value + `</td>`;

    });

    old = document.getElementById('hasil').innerHTML;

    document.getElementById('hasil').innerHTML = old + template;


});
