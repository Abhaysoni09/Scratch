const imagekit = require("@imagekit/nodejs")

const client = new imagekit({
    privateKey:"private_lxq8Wc/2PnxdtbgH5XIaptQgBaE="
})

const uploadfile =async (buffer)=>{
   const result=  await client.files.upload({
        file:buffer.toString("base64"),
        fileName:"image.jpg"
    })
    return result
}

module.exports = uploadfile