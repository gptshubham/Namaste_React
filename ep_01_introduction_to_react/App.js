// const heading = React.createElement('h1', {}, 'Namaste Everyone!');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

// const heading = React.createElement(
//   'h1',
//   {
//     id: 'title',
//   },
//   'Namaste Everyone!'
// );
// console.log(heading);
// console.log(heading.type);
// console.log(heading.props.id);
// console.log(heading.props.children);

const heading = React.createElement(
  'h1',
  {
    id: 'title',
  },
  'Heading 1'
);
const heading2 = React.createElement(
  'h2',
  {
    id: 'title',
  },
  'Heading 2'
);
const container = React.createElement(
  'div',
  {
    id: 'container',
  },
  [heading, heading2]
);

const root = ReactDOM.createRoot(document.getElementById('root'));

// passing a react element inside the root
root.render(container);
