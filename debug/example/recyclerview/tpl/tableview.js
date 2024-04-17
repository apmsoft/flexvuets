class TableView {
  constructor() {
  }
  render(message = {}) {
    return `
        <td>${message.id}</td>
        <td class="item" data-id="${message.id}">${message.title}</td>
        `;
  }
}
export { TableView };