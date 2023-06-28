import bcrypt from "bcrypt";
import { User } from "../models/user";
import { generateToken } from "../utils/token.util";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user)
      return res.status(400).json({ message: "email is already registered" });

    user = new User({
      name,
      email,
      password,
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();
    return res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while register user" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "user is not existed." });

    const passwordMatches = bcrypt.compare(password, user.password);
    if (!passwordMatches)
      return res.status(401).json({ message: "wrong credintial." });

    const tokenInfo = {
      email,
      id: user._id,
    };
    const token = generateToken(tokenInfo); // generate token for user
    return res.status(200).json({ message: "login successfully", token });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while register user" });
  }
};

export { registerUser, loginUser };
