const JSX_Expression=()=>{
 // js code
    let username="Sundari"
    function demo(){
        return "hello sundari"
    }
    let obj={
        user:"sundari",
        age:23
    }
    let arr=["m","a","l","a"]
    // jsx expression {}
    return(

        <div>
            {/* jsx code   */}
            {/* 1. variable  */}
             <h1>{username}</h1>

             {/* 2. string  */}

             <h1>{"hello"}</h1>

             {/* 3. number  */}
             <h1>{123456}</h1>

             {/* 4. calculation  */}
             <h1>{40*40}</h1>

             {/* 5.Function calling  */}
             <h1>{demo()}</h1>

             {/* 6. object property  */}
                <h1>{obj.user}</h1>
            {/* 7. Array Access  */}
                <h1>{arr[0]}</h1>
            {/* 8. Ternary operator  */}

            <h1>{false ? "sundari" : "sheela"}</h1>

            {/* 9. Logical And &&  */}

            <h1>{false && "sundari"}</h1>

            {/* 10. map  */}

            <ol>
                {
                    arr.map((ele)=>{
                        return <li>{ele}</li>
                    })
                }
            </ol>

            <h1>
                {
                    
                }
            </h1>
        </div>
    )
}
export default JSX_Expression