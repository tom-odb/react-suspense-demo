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
      5000
    );
  });

export const getLama = () =>
  new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          name: "Tim"
        }),
      5000
    );
  });
