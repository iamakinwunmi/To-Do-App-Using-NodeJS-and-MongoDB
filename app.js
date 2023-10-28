const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")

const PORT = process.env.PORT

const app = express;
app.set = ("view engine", "ejs")
app.use = (bodyParser.urlencoded({extended:true}))
app.use = (express.static("public"))
mongoose.connect(process.env.MongoDB_ToDo_URL,{useNewerUrlParsermongodb+srv})

const itemSchema = {
    name: String
};

const Item = mongoose.model("Item", "itemsSchema");

const item1 = new Item({
    name: "Welcome to My To-Do List App"
});

const item2 = new Item({
    name: "Hit on the + button to add item"
});

const item3 = new Item({
    name: "Hit on the checked box to delete item"
});

const defaultItems = [item1,item2,item3]

const listSchema = {
    name: String
    items: [itemSchema]
}

const List = mongoose.model("List". listSchema);



app.get("/",(res,req) => {
    Item.find({},(err,foundItem)=>{
        if (foundItem.length===0){
            Item.insertMany(defaultItems(err)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log("Successfully saved!");
                }
                res.redirect("/")
            })
            
        }else{
            res.render("index", {listTitle:"Today",newListItems:foundItems.reverse()})
        }
    });
});


app.post("/", (req,res)=>{
    const ItemName = req.body.newItem;
    const listName = req.body.list

    const item = new Item ({
        name = ItemName
    })
    item.save((err)=>{
        if(!err){
            console.log("Save!");
            save.redirect("/");
        }
    })
})

app.post("/delete", (req,res)=>{
    const checkedbox = req.body.checkbox;

    findByIdAndDelete(checkedbox,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Deleted!");
            res.redirect ("/");
    }
    })
})


app.get("/about",(res,req)=>{
    res.render ("about")
})



app.listen (PORT, ()=>{
    console.log(`to-do app is running at ${PORT}`)
})

