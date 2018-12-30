import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import logger from "./loger";

export default applyMiddleware(thunk,logger)