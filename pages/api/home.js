import { home } from "../../constants/home";

export default function handler(req, res) {
  res.status(200).json(home)
}
