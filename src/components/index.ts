import { buttonType } from './types/button';
import { formType } from './types/form';
import { inputCheckboxType } from './types/input-checkbox';
import { inputRadioType } from './types/input-radio';
import { inputType } from './types/input';
import { labelType } from './types/label';
import { optionType } from './types/option';
import { selectType } from './types/select';
import { textareaType } from './types/textarea';
import { tooltipType } from './types/tooltip';

export const componentTypes = (editor) => {
  editor.DomComponents.addType('button', buttonType);
  editor.DomComponents.addType('form', formType);
  editor.DomComponents.addType('input-checkbox', inputCheckboxType);
  editor.DomComponents.addType('input-radio', inputRadioType);
  editor.DomComponents.addType('input', inputType);
  editor.DomComponents.addType('label', labelType);
  editor.DomComponents.addType('option', optionType);
  editor.DomComponents.addType('select', selectType);
  editor.DomComponents.addType('textarea', textareaType);
  editor.DomComponents.addType('tooltip', tooltipType);
};
