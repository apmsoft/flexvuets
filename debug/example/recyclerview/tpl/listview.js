class ListView {
  constructor() {
  }
  render(message = {}) {
    return String.raw/*HTML*/`<div class="item border" data-id="${message.id}">
        <span>${message.id}</span>: <span class="item-text"> ${message.title}</span>
    </div>`;
  }
}
export { ListView };