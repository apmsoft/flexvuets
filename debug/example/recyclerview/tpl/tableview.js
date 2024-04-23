class TableView {
  constructor() {
  }
  render(message = {}) {
    return `
        <td class="w-auto">${message.id}</td>
        <td class="item w-auto" data-id="${message.id}">${message.title}</td>
        `;
  }
}
export { TableView };