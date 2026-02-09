// Configuración de mensajes en JSON
const messagesConfig = {
    messages: [
        '¡Oh no! ¿Estás seguro?',
        '¡¿Realmente estás seguro?!',
        'Estás seguro de verdad, ¿eh?',
        '¿Eres positivo?',
        'Di que sí por favor?',
        'Solo piensa en ello',
        'Si dices que no, estaré muy triste',
        'Estaré muy triste',
        'Estaré muy muy muy triste',
        'Estaré muy muy muy muy triste',
        'Vale, ya dejaré de preguntar...',
        'Es broma, POR FAVOR DI SÍ',
        'Estaré muy muy muy muy muy triste',
        'Estás rompiendo mi corazón :(',
        'NO... ya di que sí',
        'Anda Siiiiiiiiiiiiiiiiiiiiiiiiiii',
        'Por favooooooor',
        'Piénsalo bien...',
        '¿Seguro seguro seguro?',
        'No seas malita/o 🥺',
        'Dame una oportunidad',
        'Solo di que sí, please',
        '¿Por qué me haces esto?',
        'Mi corazón se está rompiendo',
        'Ay no, di que sí mejor',
        '¿No te doy lástima?',
        'Siiiii, por favor',
        'Te prometo que será bonito',
        'No me hagas sufrir más',
        'Okayyy, última oportunidad',
        '¿Reconsideras?',
        'Venga va, di que sí',
        'Te voy a llorar',
        'Estoy a punto de llorar',
        'Ya me hiciste llorar',
        'Mira lo que provocaste',
        '¿Te arrepientes?',
        'Creo que sí te arrepientes',
        'Lo sé, quieres decir que sí',
        'Dale, anímate',
        'Sé que en el fondo quieres',
        'Tu corazón dice sí',
        'No luches contra tus sentimientos',
        'Déjate llevar',
        '¿Qué pierdes con decir sí?',
        'Todo ganamos si dices sí',
        'Será la mejor decisión',
        'No te vas a arrepentir',
        '¡SIIIIIIIIIIII POR FAVOR!',
        'Última última oportunidad'
    ]
};

let noButtonClickCount = 0; // Contador para el botón "No"
let noButtonState = 0; // Estado actual del botón "No"

// Mostrar el gif inicial
document.getElementById('gifContainer').style.display = 'block';

document.getElementById('siBtn').addEventListener('click', function() {
    // Ocultar el gif triste y mostrar el gif feliz
    document.getElementById('sadGifContainer').style.display = 'none';
    document.getElementById('sadGifContainer1').style.display = 'none';
    document.getElementById('sadGifContainer2').style.display = 'none';
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('happyGifContainer').style.display = 'block';

    // Ocultar los botones "Pregunta Sí" y "No "
    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('noBtn').style.display = 'none';

    // Mostrar el mensaje específico con SweetAlert
    Swal.fire({
        text: '¡Oh Siii! jajaja',
        icon: 'success',
        confirmButtonText: 'Continuar'
    }).then(() => {
        // Mostrar secuencia de GIFs felices
        setTimeout(function() {
            document.getElementById('happyGifContainer').style.display = 'none';
            document.getElementById('happyGifContainer2').style.display = 'block';
        }, 1000);

        setTimeout(function() {
            document.getElementById('happyGifContainer2').style.display = 'none';
            document.getElementById('happyGifContainer3').style.display = 'block';
        }, 2000);
        setTimeout(function() {
            document.getElementById('happyGifContainer3').style.display = 'none';
            document.getElementById('happyGifContainer4').style.display = 'block';
        }, 3000);
    });
});


document.getElementById('noBtn').addEventListener('click', function() {
    switch (noButtonState) {
        case 0:
            // Primera vez haciendo clic en "No"
            document.getElementById('happyGifContainer').style.display = 'none';
            document.getElementById('gifContainer').style.display = 'none';
            document.getElementById('sadGifContainer').style.display = 'block';

            // Mostrar mensaje en el botón
            document.getElementById('noBtn').innerHTML = messagesConfig.messages[0];

            document.getElementById('siBtn').style.fontSize = '40px';
            document.getElementById('siBtn').style.padding = '20px 40px';

            noButtonClickCount++;
            noButtonState++;
            break;

        case 1:
            // Segunda vez haciendo clic en "No"
            document.getElementById('noBtn').innerHTML = messagesConfig.messages[1];
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'block';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '50px';
            document.getElementById('siBtn').style.padding = '30px 50px';

            noButtonState++;
            break;

        case 2:
            document.getElementById('noBtn').innerHTML = messagesConfig.messages[2];
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'block';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '60px';
            document.getElementById('siBtn').style.padding = '40px 60px';

            noButtonState++;
            break;

        case 3:
            document.getElementById('noBtn').innerHTML = messagesConfig.messages[3];

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '70px';
            document.getElementById('siBtn').style.padding = '50px 70px';

            noButtonState++;
            break;
        case 4:
            document.getElementById('noBtn').innerHTML = messagesConfig.messages[4];

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '80px';
            document.getElementById('siBtn').style.padding = '60px 80px';

            noButtonState++;
            break;
        case 5:
            document.getElementById('noBtn').innerHTML = messagesConfig.messages[5];

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '90px';
            document.getElementById('siBtn').style.padding = '70px 90px';

            noButtonState++;
            break;
        case 6:
            document.getElementById('noBtn').innerHTML = messagesConfig.messages[6];

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '100px';
            document.getElementById('siBtn').style.padding = '80px 100px';

            noButtonState++;
            break;
        case 7:
            document.getElementById('noBtn').innerHTML = messagesConfig.messages[7];

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '120px';
            document.getElementById('siBtn').style.padding = '90px 120px';

            noButtonState++;
            break;
        case 8:
            document.getElementById('noBtn').innerHTML = messagesConfig.messages[8];

            document.getElementById('siBtn').style.fontSize = '140px';
            document.getElementById('siBtn').style.padding = '100px 140px';

            noButtonState++;
            break;

        case 9:
            document.getElementById('noBtn').innerHTML = messagesConfig.messages[9];

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '160px';
            document.getElementById('siBtn').style.padding = '110px 160px';

            noButtonState++;
            break;

        case 10:
            document.getElementById('noBtn').innerHTML = messagesConfig.messages[10];

            document.getElementById('siBtn').style.fontSize = '180px';
            document.getElementById('siBtn').style.padding = '120px 180px';

            noButtonState++;
            break;
        case 11:
            document.getElementById('noBtn').innerHTML = messagesConfig.messages[11];

            document.getElementById('siBtn').style.fontSize = '200px';
            document.getElementById('siBtn').style.padding = '130px 200px';

            noButtonState++;
            break;

        case 12:
            document.getElementById('noBtn').innerHTML = messagesConfig.messages[12];

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '220px';
            document.getElementById('siBtn').style.padding = '140px 220px';

            noButtonState++;
            break;

        case 13:
            document.getElementById('noBtn').innerHTML = messagesConfig.messages[13];

            document.getElementById('siBtn').style.fontSize = '240px';
            document.getElementById('siBtn').style.padding = '150px 240px';

            noButtonState++;
            break;

        case 14:
            document.getElementById('noBtn').innerHTML = messagesConfig.messages[14];

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '260px';
            document.getElementById('siBtn').style.padding = '160px 260px';

            noButtonState++;
            break;

        case 15:
            document.getElementById('noBtn').innerHTML = messagesConfig.messages[15];

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '280px';
            document.getElementById('siBtn').style.padding = '170px 280px';

            noButtonState++;
            break;


        case 16:
                document.getElementById('noBtn').innerHTML = messagesConfig.messages[16];
                document.getElementById('sadGifContainer').style.display = 'none';
                document.getElementById('sadGifContainer1').style.display = 'none';
                document.getElementById('sadGifContainer2').style.display = 'none';
                document.getElementById('gifContainer').style.display = 'block';
                document.getElementById('happyGifContainer').style.display = 'none';
                // Vuelve al estado 0
                noButtonState = 0;
                break;


        default:
            // Por si acaso, maneja cualquier otro caso aquí
            break;
    }
});
