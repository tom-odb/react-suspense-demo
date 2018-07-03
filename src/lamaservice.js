export const getLamas = () =>
  new Promise(resolve => {
    setTimeout(
      () =>
        resolve([
          {
            name: "Bob"
          },
          {
            name: "Mike"
          }
        ]),
      2000
    );
  });
