// (() => {
//   const refs = {
//     formsend: document.querySelector('.subs-form'),
//     modalsend: document.querySelector('.modal-form')};

//   refs.formsend.addEventListener('submit', e => {
//     e.preventDefault();
//     new FormData(e.currentTarget).forEach((value, name) =>
//       console.log(`${name}: ${value}`));
//     e.currentTarget.reset();
//   });

//    refs.modalsend.addEventListener('submit', e => {
//     e.preventDefault();
//     new FormData(e.currentTarget).forEach((value, name) =>
//       console.log(`${name}: ${value}`));
//     e.currentTarget.reset();
//   });
// })();
(() => {
        document
          .querySelector('.js-speaker-form')
          .addEventListener('submit', e => {
            e.preventDefault();

            new FormData(e.currentTarget).forEach((value, name) =>
              console.log(`${name}: ${value}`),
            );

            e.currentTarget.reset();
          });
      })();