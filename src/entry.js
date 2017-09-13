
import $ from "./common-1";
import setStyle from "./common-2";

var app=$("#app");
app.textContent="Hello world!";

setStyle(app,{
    "font-size":"2em",
    "color":"red"
});