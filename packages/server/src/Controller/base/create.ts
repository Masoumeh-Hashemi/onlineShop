
 export async function create(ctx:any,collectionName:any) {
     const body = ctx.request.body({type:"json"});
     console.log("/////////////////")
       if (!ctx.request.hasBody) {
    ctx.response.status = 404;
    ctx.response.body = {
      success: false,
      message: "No data provided",
    };
  }

  try{
    console.group("inside create try", "===============")
    console.log("inside create try")
    console.groupEnd()
    const json = await body.value;
    const creation = await collectionName.insertOne({json})
    ctx.response.body = {
      success: true,
      body : creation
  };
ctx.response.status = 201
  }
  catch(error){
    ctx.response.body = null;
    ctx.response.status = 500;
  }
 } 