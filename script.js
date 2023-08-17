const url = 'https://ca99-181-231-122-56.ngrok-free.app';

// // Ocultar el popup y cargar los estudiantes al cargar la página
// $(document).ready(function () {
//     $('#popUp').hide();
//     getStudents();
// });

function saveStudent() {
    const dni = document.getElementById('dni').value;
    const lastName = document.getElementById('lastName').value;
    const firstName = document.getElementById('firstName').value;
    const email = document.getElementById('email').value;

    if (dni.trim() !== '' && lastName.trim() !== '' && firstName.trim() !== '' && email.trim() !== '') {
        const student = {
            dni: dni,
            lastName: lastName,
            firstName: firstName,
            email: email,
            cohort: '0',
            status: 'activo',
            gender: 'masculino',
            address: 'abc123',
            phone: '000'
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Estudiante agregado:', data);
                getStudents();
            })
            .catch(error => {
                console.error('Error al agregar el estudiante:', error);
            });
    }
}

/**
 * Obtiene la lista de estudiantes de la API y los muestra en la tabla.
 */
function getStudents() {
    loadStudents().then(response => {
        var tbody = $('tbody');
        tbody.empty(); // Limpiar el contenido existente de la tabla
        response.forEach(student => {
            var row = $('<tr></tr>');
            row.append(`<td>${student.dni}</td>`);
            row.append(`<td>${student.lastName}</td>`);
            row.append(`<td>${student.firstName}</td>`);
            row.append(`<td>${student.email}</td>`);
            row.append(`<td><button onclick="viewStudent(${JSON.stringify(student)})">View</button></td>`);
            row.append(`<td><button onclick="deleteStudent(${student.id})">Delete</button></td>`);
            tbody.append(row);
        });
    }).catch(reason => {
        console.error(reason);
    });
}
// document.addEventListener('DOMContentLoaded', function () {
//     const addBtn = document.getElementById('add-btn');
//     addBtn.addEventListener('click', saveStudent);

//     // Cargar estudiantes al cargar la página
//     getStudents();
// });
