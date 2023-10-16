const fn = name => `####${name}<<<<`;
class Template {
  constructor() {}
  render(message) {
    var _a;
    return `
            <h3 class="mt-4 text-red-800"><IMPORT 동기 템플릿 클래스></h3>
            <p>${fn(message.name)}</p>
            <p>${message.age}</p>
            <ul>
            ${(_a = message.msg) === null || _a === void 0 ? void 0 : _a.map(item => `
                <li>${item.name}</li>
            `).join('')}
            </ul>
        `;
  }
}
export { Template };