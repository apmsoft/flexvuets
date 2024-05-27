class TableView {
  constructor() {
  }
  render(message = {}) {
    return String.raw/*HTML*/`
            <th>${message.id}</th>
            <td class="item font-bold cursor-pointer" data-id="${message.id}">${message.title}</td>
            <td>${message.gid}</td>
            <td>
                <button type="button" class="btn-edit btn btn-primary" data-id="${message.id}">Edit</button>
            </td>
        `;
  }
}
export { TableView };