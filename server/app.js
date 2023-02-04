import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/usersRouter.js";
import postRouter from "./routes/postsRouter.js";

import { verifyToken } from "./middleware/auth.js";
import { register } from "./controllers/authController.js";
import { createPost } from "./controllers/postsController.js";
import multer from "multer";

const app = express();

/* FILE STORAGE */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage });

/* ROUTES WITH FILES */
app.post("/auth/register", upload.single("picture"), register);
app.post("/posts", verifyToken, upload.single("picture"), createPost);

/* ROUTES */
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/posts", postRouter);


export default app