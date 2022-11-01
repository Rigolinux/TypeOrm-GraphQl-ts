
import app from "./app";

//database
import { conection } from "./Databases/database";

conection.initialize().then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.log(err);
});

app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})
