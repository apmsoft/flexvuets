class TableView {
  constructor() {
  }
  render(message = {}) {
    return `
        <td class="w-1/3">${message.id}</td>
        <td class="item w-1/3" data-id="${message.id}">${message.title}</td>
        <td class="w-1/3">---</td>
        `;
  }
}
export { TableView };