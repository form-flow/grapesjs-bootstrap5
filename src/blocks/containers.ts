export const containerBlocks = [
  {
    id: 'bs5-form-1-col-container',
    category: 'Bootstrap5 Containers',
    label: '1-Col Container', 
    content: `
      <div class="col mb-3">
        <label class="d-block">
          <span>First Name</span>
          <input type="text" class="form-control" placeholder="First name" aria-label="First name">
        </label>
      </div>
      `,
  },
  {
    id: 'bs5-form-2-col-container',
    category: 'Bootstrap5 Containers',
    label: '2-Col Container', 
    content: `
      <div class="row mb-3">
        <div class="col">
          <label class="d-block">
            <span>First Name</span>
            <input type="text" class="form-control" placeholder="First name" aria-label="First name">
          </label>
        </div>
        <div class="col">
          <label class="d-block">
            <span>Last Name</span>
            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
          </label>
        </div>
      </div>
    `,
  },
  {
    id: 'bs5-form-3-col-container',
    category: 'Bootstrap5 Containers',
    label: '3-Col Container',
    content: `
    <div class="row mb-3">
      <div class="col">
        <label class="d-block">
          <span>Prefix</span>
          <input type="text" class="form-control" placeholder="Prefix" aria-label="Prefix">
        </label>
      </div>
      <div class="col">
        <label class="d-block">
          <span>First Name</span>
          <input type="text" class="form-control" placeholder="First name" aria-label="First name">
        </label>
      </div>
      <div class="col">
        <label class="d-block">
          <span>Last Name</span>
          <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
        </label>
      </div>
    </div>
    `,
  }
];
