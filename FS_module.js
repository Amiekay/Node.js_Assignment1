const fs = require('fs');
const path = require('path');

// Create directory/folder named: “Students”
fs.mkdir('./Students', (err) => {
    if(err) {
        console.log(err)
        return
    }
    console.log('Folder created succesfully')
})

// In the Students directory, create a file named user.js
const newFile = path.join(__dirname, 'Students', 'user.js');
const content = "'User details: ";

fs.writeFile(newFile, content, (err) => {
    if(err) {
        console.log(err)
        return
    }
    console.log('File created successfully')
})

// Update the Students directory to “Names”
const currentFolder = './Students'
const newFolderName = './Names'

fs.rename(currentFolder, newFolderName, function(err) {
    if(err) {
        console.log(err)
        return
    }
    console.log('Successfully renamed folder')
})
// Add your name as content to the file user.js
const filePath = path.join(__dirname, "./Names", "user.js")

fs.appendFile(filePath, 'Kalu Amarachi', (err) => {
    if(err) {
        console.log(err)
        return
    }
    console.log('Name appended successfully')
})

// Update the file and add your age, sex, nationality, phone number and any other information about yourself
const additionalInfo = '\n 29yrs old, \n Female, \n Nigerian, \n 08131559061';
fs.appendFile(filePath, 'Kalu Amarachi', additionalInfo ,(err) => {
    if(err) {
        console.log(err)
        return
    }
    console.log('Info appended successfully')
}) 
// Update the file user.js to {your_name}.js eg daniel_adesoji.js
const newFilePath = path.join(__dirname, "Names", "Kalu_Amarachi.js")
fs.rename(filePath, newFilePath, function(err) {
    if(err) {
        console.log(err)
        return
    }
    console.log('Successfully renamed folder')
})

// Read the contents from {your_name}.js. User fs.open or fs.readFile

fs.readFile('/home/tech/Node.js_Assignment1/Students/Kalu_Amarachi.js', (err, data)=>{
    if(err) {
        console.log(err)
        return
    }
    console.log(data)
})
// Delete the file {your_name}.js
fs.rm(newFilePath,(err) =>{
    if(err) {
        console.log(err)
        return
    }
    console.log('file deleted successfully')
})

// Delete the directory “Names”
fs.rmdir(newFolderName, (err) => {
    if(err) {
        console.log(err)
        return
    }
    console.log('folder deleted successfully')
})