import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
// import gjsForms from 'grapesjs-plugin-forms';
import './styles.scss';
import './theme.scss';
import {
  topPanel, basicActionsPanel, devicesPanel,
  rightSideSwitcher, layersPanel,
} from './panels';
import { showSidePanel } from './custom-commands';
import { blocks }  from './blocks';
import { componentTypes } from './components';

const devices = [
  { name: 'Desktop', width: ''},// default size
  { name: 'Mobile', width: '320px', /* canvas width */ widthMedia: '480px' /* used in CSS @media */ }
];

function initGrapesJs() {
  const editor = grapesjs.init({
    container: '#gjs',
    fromElement: true, // initial html is from innerHTMl
    height: '100%', // default 900px,
    plugins: [
      componentTypes,
    ],
    storageManager: false,
    deviceManager: {
      devices
    },
    layerManager: {
      appendTo: '.layers-container'
    },
    styleManager: {
      appendTo: '.styles-container'
    },
    blockManager: {
      appendTo: '.blocks-container',
      blocks
    },
    selectorManager: {
      appendTo: '.traits-container'
    },
    traitManager: {
      appendTo: '.traits-container',
    },
    canvas: {
      scripts: [ 
        'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js',
      ],
      styles: [
        'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css'
      ],
    },
    panels: {
      defaults: [
        topPanel,
        basicActionsPanel,
        devicesPanel,
        rightSideSwitcher,
        layersPanel,
      ]
    },
    commands: {
      defaults: [
        { id: 'show-layers', ...showSidePanel('.layers-container') },
        { id: 'show-styles', ...showSidePanel('.styles-container') }, 
        { id: 'show-traits', ...showSidePanel('.traits-container') },
        { id: 'show-blocks', ...showSidePanel('.blocks-container') },
        { id: 'set-device-desktop', run(editor) { editor.setDevice('Desktop')} },
        { id: 'set-device-mobile', run(editor) { editor.setDevice('Mobile')} }
      ]
    }
  });
  

  return editor;
}

initGrapesJs();