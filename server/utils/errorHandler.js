
export default function errorHandler(fn){
    return (req,res,next)=>{
        fn(req,res,next).catch(next);   
    }
}
