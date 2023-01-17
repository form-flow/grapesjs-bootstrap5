export const formControlBlocks = [
  {
    id: 'bs5-control-radio',
    category: 'Bootstrap5 Forms',
    label: 'Radio Button',
    content: `
      <label class="form-check form-check-inline">
        <input class="form-check-input" type="radio" value="1" name="my-radio">
        <span class="form-check-label">Option 1</span>
      </label>
      <label class="form-check form-check-inline">
        <input class="form-check-input" type="radio" value="2" name="my-radio">
        <span class="form-check-label">Option 2</span>
      </label>`
  },
  {
    id: 'bs5-control-switch',
    category: 'Bootstrap5 Forms',
    label: 'switch',
    content:`
      <label class="form-check form-switch">
        <input class="form-check-input" type="checkbox" name="my-switch">
        <span>Default switch checkbox input</span>
      </label>`
  },
  {
    id: 'bs5-control-checkbox',
    category: 'Bootstrap5 Forms',
    label: 'Checkbox',
    content: `
      <label class="form-check">
        <input type="checkbox" class="form-check-input" />
        <span class="form-check-label">Label</span>
      </label>`
  },
  {
    id: 'bs5-control-file',
    category: 'Bootstrap5 Forms',
    label: 'File Input',
    content: `<input class="form-control" type="file" />`,
  },
  {
    id: 'bs5-control-select',
    category: 'Bootstrap5 Forms',
    label: 'Select',
    content: `
      <select class="form-select" aria-label="Default select example">
        <option selected>Set multiple to edit options</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>`
  },
  {
    id: 'bs5-control-color-picker',
    category: 'Bootstrap5 Forms',
    label: 'Color Picker',
    content: `<input type="color" class="form-control form-control-color" value="#563d7c" title="Choose your color">`
  },
  {
    id: 'bs5-control-password',
    category: 'Bootstrap5 Forms',
    label: 'Password',
    content: `<input type="password" class="form-control" name="my-password">`
  },
  {
    id: 'bs5-control-range',
    category: 'Bootstrap5 Forms',
    label: 'range',
    content: `<input type="range" class="form-range" min="0" max="5" value="2" step="0.5">`
  },
  {
    id: 'bs5-control-button',
    category: 'Bootstrap5 Forms',
    label: 'button',
    content: `
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
    <button type="button" class="btn btn-link">Link</button>
    <button type="button" class="btn-close" aria-label="Close"></button>
  `
  },
  {
    id: 'bs5-control-floating-label',
    category: 'Bootstrap5 Forms',
    label: 'Floating Label',
    content: `
      <div class="form-floating mb-3">
        <input class="form-control" id="floatingInput" placeholder="name@example.com" value="">
        <label for="floatingInput">First Name</label>
      </div>
    `
  },
  {
    id: 'bs5-control-textarea',
    category: 'Bootstrap5 Forms',
    label: 'Textarea',
    content: `
      <textarea rows="6" class="form-control"></textarea>
    `,
  },
  {
    id: 'bs5-control-option',
    category: 'Bootstrap5 Forms',
    label: 'Option',
    content: `<option value="val">Option</option>`
  }
];
