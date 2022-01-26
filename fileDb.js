const fs = require('fs');
const path = './messages';
let filesPath = [];

module.exports = {
    init() {
        fs.readdir(path, (err, files) => {
            if (err) {
                filesPath = [];
            }
            filesPath = files;
        });
    },
    getMessages() {
        const files = (filesPath.length < 5) ? filesPath : filesPath.slice(-5);
        return files.map(file => {
            const filePath = path + '/' + file;
            const message = fs.readFileSync(filePath);
            return (JSON.parse(message));
        });
    },
    getMessage(date) {
        let data = null;
        filesPath.forEach(file => {
            const filePath = path + '/' + file;
            const fileContents = fs.readFileSync(filePath);
            const fileData = JSON.parse(fileContents);
            if (fileData.date === date) {
                data = fileData;
            }
        });
        return data;
    },
    addMessage(message) {
        const date = new Date().toISOString();
        const fileName = date;
        const newMessage = {
            message: message.message,
            date: date
        };
        fs.writeFileSync(`./messages/${fileName}.txt`, JSON.stringify(newMessage));
        return newMessage;
    },
}