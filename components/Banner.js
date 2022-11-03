
export const Banner = () => {
    
    return(
        <div className="bg-black w-full">    
            <div className="w-full text-white text-right bg-contain h-[40vh] mobile:h-[50vh]" style={{"backgroundImage":'url("/cover-parallax.jpg")', "backgroundRepeat": "no-repeat", "backgroundPosition": "center center"}}/>
            
            <div className="w-full bg-transparent pl-5 pb-10">
                <h1 className="text-[3.5rem] c_tab:text-9xl bg-gradient-radial bg-[rgba(253,29,29,1)]  from-[rgba(253,29,29,1)] to-[rgba(252,176,69,1)] bg-clip-text text-transparent" style={{"fontWeight": "600", "wordWrap": "break-word"}}>Pure sound</h1>     
                
                <button className="bg-gradient-to-l bg-[rgba(253,29,29,1)] from-[rgba(253,29,29,1)] to-[rgba(252,176,69,1)] text-black font-extrabold text-[1rem] c_tab:text-2xl rounded-lg px-2 ml-[4px] scale-1 transition transition:transform duration:200 hover:scale-[1.02] mobile:mt-4">Get yours now {">>>"}</button>   
            </div>  
        </div>
    )
}