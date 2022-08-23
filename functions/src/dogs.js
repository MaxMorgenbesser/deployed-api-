export function getDogs(req,res){
    res.send([{name:'ryder', age:'22', gender:'MN'},
{name:'duke', age:3, gender:"M"},
{name:'indigo', age:3, gender:"M"}
])
}

export const testApi=(req,res)=>{
    res.send([{message:"true"}])
}
