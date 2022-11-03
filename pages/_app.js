import Layout from "../layout/layout"
import "../styles/globals.css"

function App({ Component, props  }){
    return(
        <Layout>
            <Component {...props} />
        </Layout>
    )
}

export default App;