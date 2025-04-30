import Header from "../components/Header";

const Home = () => 
    {
        return(

            <>
            <h1 className="home">Home</h1>
            <p>Esse é o Home</p>
            </>
        )
    } 
const Produtos = () =>{
    const produtos = [
        {nome: "Notebook", propriedades: ['16gb', '512gb']},
        {nome: "Smartphone", propriedades: ['2gb', '128gb']}
    ];

    return(
        <>
        <h1>Produtos</h1>
       
        </>
    )
}

const App = () =>{

    const { pathname } = window.location

    console.log(pathname)

    let Component

    if(pathname == '/produtos'){
Component = Produtos
    } else {
        Component = Home
    }

    return(
        <>

        <Header/>
        <Component/>
        
        </>
    )
}

export default App
 