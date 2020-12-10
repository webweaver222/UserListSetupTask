const compose = (...funcs) => (comp) => {
  return funcs.reduceRight((wrapped, func) => func(wrapped), comp);
};

const mockUsers = () => {
  const users = [
    {
      id: 1,
      email: "test@test.com",
      password: "test",
      phone: "0578492718",
      fullName: "Alex Jones",
      status: "Client",
      createdAt: "December 10, 2020",
      updatedAt: "December 10, 2020",
    },{
      id: 2,
      email: "ilon@musk.com",
      password: "123",
      phone: "0578492716",
      fullName: "John Smith",
      status: "Partner",
      createdAt: "December 9, 2020",
      updatedAt: "December 9, 2020",
    },
    {
      id: 3,
      email: "blm@gmail.com",
      password: "password",
      phone: "3373559",
      fullName: "George Floyd",
      status: "Admin",
      createdAt: "December 5, 2020",
      updatedAt: "December 5, 2020",
    },
  ];

  localStorage.setItem("users", JSON.stringify(users));
};

const getDateString = () =>
  new Date().toLocaleString("eng", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export { compose, mockUsers, getDateString };
