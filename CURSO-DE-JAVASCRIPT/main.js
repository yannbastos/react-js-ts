const loginUser = (email, password, onSuccess, onError) => {
  setTimeout(() => {
    const error = false;

    if (error) {
      return onError(new Error("error in login!"));
    }

    console.log("user logged!");
    callback({ email });
  }, 1500);

  console.log("after setTimeout");
};

const user = loginUser(
  "yann@gmail.com",
  "123456",
  (user) => {
    console.log({ user });
  },
  (error) => {
    console.log({ error });
  },
);
