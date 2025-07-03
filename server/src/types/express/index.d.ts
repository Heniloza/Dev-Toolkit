import { UserType } from "../../models/User"; // adjust path if needed

declare global {
  namespace Express {
    interface Request {
      user?: UserType;
    }
  }
}