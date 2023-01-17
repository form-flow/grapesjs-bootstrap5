
const formScript = function() {
  const controls = Array.from(this.elements)
    .filter( (el: HTMLFormElement) => ['INPUT', 'SELECT', 'TEXTAREA'].includes(el.tagName));
  
  controls.forEach( (el: HTMLFormElement) => {
    el.addEventListener('blur', event => 
      el.classList.add(el.checkValidity() ? 'is-valid' : 'is-invalid')
    );
  });

  this.addEventListener('submit', event => {
    controls.forEach( (el: HTMLFormElement) => {
      el.classList.add(el.checkValidity() ? 'is-valid' : 'is-invalid')
    }); 
    if (!this.checkValidity()) {
      event.preventDefault();
    }
  })
};

export const formType = {
  isComponent: el => el.tagName === 'FORM',

  model: {
    defaults: {
      script: formScript,
      tagName: 'form',
      testprop: 1,
      droppable: ':not(form)',
      draggable: ':not(form)',
      traits: [
        'id', 
        'title',
        'method',
        'action'
      ],
    },
  },

  view: {
    events: {
      'dblclick button': e => console.log(`dblclick form button`),
      submit: 'onFormSubmit'
    },

    onFormSubmit(event) {
      // console.log('form submit');
    },

    init({ model }) {
      // console.log('form init', model, this.model);
      // this.listenTo(model, 'change:prop', this.handlePropChange);
    },

    removed() {
      // console.log('form removed');
    },

    onRender() {
      // console.log('form onRender', this.el)
    },
  },
}