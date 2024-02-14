const routes = "http://192.168.43.105:3000";

const rutaLogin = `${routes}/login`;

export const checkLogin = async (Email, Contrasena) => {
  try {
    const respuesta = await fetch(rutaLogin, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Email, Contrasena }),
    });

    return await respuesta.json();
  } catch (err) {
    console.log("Fallo login", err);
  }
};

export const createUser = async (username, email, password) => {
  const response = await fetch(apisu, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });
  return await response.json();
};
