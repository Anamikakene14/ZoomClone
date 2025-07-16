import "../App.css";
import { Link, useNavigate } from "react-router-dom";


export default function LandingPage(){
    const router = useNavigate();
    return (
        <div className="landingPageContainer">
            <nav>
                <div className="navHeader">
                    <h2>Apna Video Call</h2>
                </div>
                <div className="navList">
                    <p onClick={() =>{
                        router("/q23qsc");
                    }}>Join as Guest</p>
                    <p onClick={() =>{
                        router("/auth");
                    }}>Register</p>
                    <div role="button" onClick={() =>{
                        router("/auth");
                    }}><p>Login</p></div>
                </div>
            </nav>
            <div className="landingMainContainer">
                <div>
                    <h1><span style={{color: "#FF9838"}}>Connect</span> with your loved Ones</h1>
                    <p>cover a distance with Apna Video Call</p>
                    <div role="button">
                        <Link to={"/auth"}>Get Strated</Link>
                    </div>
                </div>
                <div>
                    <img src="/mobile.png" alt="img"/>
                </div>
            </div>
        </div>



    )
}