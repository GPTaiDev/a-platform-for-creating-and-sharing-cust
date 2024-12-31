document.getElementById('routineForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var routineName = document.getElementById('routineName').value;
    if (routineName) {
        addRoutine(routineName);
        document.getElementById('routineName').value = ''; // Clear the input after adding
    }
});

function addRoutine(name) {
    var list = document.getElementById('routineList').querySelector('ul');
    var item = document.createElement('li');
    item.textContent = name;
    list.appendChild(item);
}