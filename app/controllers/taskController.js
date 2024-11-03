import {UPLOAD_FOLDER} from "../config/config.js";
import {moveFile} from "../utility/moveFile.js";


export const demo1 =  async (req, res) => {


    // params
    let name=req.params.name;
    let age=req.params.age;
    let city=req.params.city;


    // query string
    let country=req.query.country;
    let lang=req.query.lang;


    return res.json({message:lang});
}
// Create

export const createTask =  async (req, res) => {
    return res.json({message:'Task created successfully'});
}

// Read
export const readTask =  async (req, res) => {
    return res.json({message:'Task read successfully'});
}


// Update
export const updateTask =  async (req, res) => {
    return res.json({message:'Task update successfully'});
}


// Delete
export const deleteTask =  async (req, res) => {
    return res.json({message:'Task delete successfully'});
}


/*

export const demo2 =  async (req, res) => {
    let reqBody=req.body;
    return res.json({message:reqBody});
}


export const demo3 =  async (req, res) => {
    let pic=req.files['pic']
    let reqBody=req.body;
    return res.json({message:reqBody});
}

export const demo4 =  async (req, res) => {
    let myFile=req.files['myFile']
    let myFilePath=UPLOAD_FOLDER(myFile.name)
    await moveFile(myFile,myFilePath)
    return res.json({message:"successfully moved file"});
}

export const demo5 =  async (req, res) => {
    let reqHeaders=req.headers;
    return res.json({message:reqHeaders});
}
*/