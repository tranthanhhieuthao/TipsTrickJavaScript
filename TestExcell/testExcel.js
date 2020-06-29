import demo from './demo.html'
import TableExporter from './TableExporter'

let tableExporter
let BtnPortExcel = document.querySelector('exportExcelBtn')

BtnPortExcel.onclick = () => {
    tableExporter.exportXLS()
}

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(ref => drawUsersTable(ref))

function drawUsersTable(users) {
    const tbody = document.querySelector('table > tbody')
    tableExporter = new TableExporter(document.querySelector('table > tbody'))
    users.forEach(user => {
        const tr = document.createElement('tr')
        tr.innerHTML = `
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.username}</td>
    <td>${user.email}</td>`
    tbody.appendChild(tr)
        
    })
}