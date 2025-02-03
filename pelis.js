
const fs = require('fs');
const path = require('path');

//leer elarchivo de pelis.json
const datos = JSON.parse(fs.readFileSync(path.join(__dirname,
    'pelis.json'),'utf-8'));



exports.getAll = () =>{
    return datos;
};

exports.getBySort = (property)=>{
    return[...datos].sort((a,b)=>{
        if(a[property]<b[property]) return -1;
        if(a[property]>b[property]) return 1;
        return 0;
    });
}

exports.getBySearch = (datos,keyword)=>{
    const results = datos.filter(item=>{
        const lowerCaseKeyword = keyword.toLowerCase();

        return Object.values(item).some(value =>
            value.toString().toLowerCase().includes(lowerCaseKeyword)
        );
    });

    return results;
}