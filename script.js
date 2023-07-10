fetch('https://ca99-181-231-122-56.ngrok-free.app/student/getAll')
    .then(response => response.json())
    .then(data => {
        const studentsList = document.getElementById('students-list');

        data.forEach(student => {
            const studentItem = document.createElement('li');
            studentItem.textContent = `${student.name} - ${student.dni}`;
            studentsList.appendChild(studentItem);
        });
    })
    .catch(error => {
        console.log('Error al obtener el listado de estudiantes:', error);
    });
