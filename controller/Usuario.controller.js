import Usuarios from "../models/users.model.js";

export const getUsuarios = async (req, res) => {
  try {
    const response = await Usuarios.find();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json("Error en el servidor: " + error);
  }
};

export const getUsuariosId = async (req, res) => {
  try {
    const { _id } = req.params;
    const response = await Usuarios.findById(_id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json("Error en el servidor: " + error);
  }
};

export const createUsuarios = async (req, res) => {
  try {
    const { name, email, phone, user, city } = req.body;
    if (name && email && phone && user && city) {
      const contador = await Usuarios.countDocuments();

      const newUser = new Usuarios({
        id: contador + 1,
        name,
        email,
        phone,
        user,
        city,
      });

      await newUser.save();
      res.status(200).json("usuario creado");
    } else {
      res.status(400).json("Error al crear usuario");
    }
  } catch (error) {
    res.status(500).json("Error en el servidor: " + error);
  }
};

export const updateUsuarios = async (req, res) => {
  try {
    const { _id } = req.params;
    const { name, email, phone, user, city } = req.body;
    if (name && email && phone && user && city) {
      const usuario = await Usuarios.findById(_id);
      if (usuario) {
        usuario.name = name;
        usuario.email = email;
        usuario.phone = phone;
        usuario.city = city;
        usuario.user = user;

        await usuario.save();
        res.status(200).json("usuario actualizado");
      } else {
        res.status(400).json("El usuario no se encontro");
      }
    } else {
      res.status(400).json("Error al actualizar usuario");
    }
  } catch (error) {
    res.status(500).json("Error en el servidor: " + error);
  }
};

export const deleteUsuarios = async (req, res) => {
  try {
    const { _id } = req.params;
    const deleteUsuario = await Usuarios.findByIdAndDelete(_id);
    if (deleteUsuario) {
      res.status(200).json("usuario eliminado");
    } else {
      res.status(400).json("El usuario no se encontro");
    }
  } catch (error) {
    res.status(500).json("Error en el servidor: " + error);
  }
};
