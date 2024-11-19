const userList = document.getElementById('user-list');

const API = 'http://localhost:8080/api/users';

const fetchUsers = async () => {
    try {
        const response = await fetch(API);
        const data = await response.json();
        renderUsers(data);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};

const renderUsers = (users) => {
    userList.innerHTML = '';
    users.forEach(user => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${user.name} - ${user.job}</h3>
        `;
        userList.appendChild(li);
    })
}

fetchUsers();
