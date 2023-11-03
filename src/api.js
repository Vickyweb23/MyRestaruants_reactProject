
// import Api from 'api.css'

// import React, { useEffect, useState } from "react";

// function Api(){

//     const[state,setstate]=useState([]);

//     const Main=()=>{
//         const Api= fetch("https://jsonplaceholder.typicode.com/posts");
//         const random = Api.then((item)=>item.json());
//         random.then((items)=>setstate(items));
//     }

//     useEffect(()=>{
//         Main()
//     },[])




//     return(
//         <>
//         <h1>Public Holidays</h1>

//         {
//             state.map((one)=>{
//                 return(
//                 <>
//                 <div className="col-xl-8 col-lg-8 col-md-8 col-md-4 ">
//                 <div className="card">
//                 <div clsssName="allcard "   id="allcard1">
//                 <h1 className="username  " id="username"> {one.userId}</h1>
//                 <p className="body" id="body">{one.body}</p>
//                 <p className="title" id="title">{one.title}</p>
//                 </div>
//                 </div>
//                 </div>
//                 </>
//                 )
//             })
//         }
//         </>
//     )
// }

// export default Api;


import React, { useEffect, useState } from "react";


function Api(){

    const[state,setstate]=useState([]);

    const Main=()=>{
        const Api= fetch("https://jsonplaceholder.typicode.com/posts");
        const random = Api.then((item)=>item.json());
        random.then((items)=>setstate(items));
    }

    useEffect(()=>{
        Main()
    },[])




    return(
        <>
        <h1>Public Holidays</h1>

        {
            state.map((one)=>{
                return(
                <>
                <h1> {one.name}</h1>

                </>
                )
            })
        }
        </>
    )
}

export default Api;