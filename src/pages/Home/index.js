
import React,{useState} from "react";


import Header from "../../Componenets/header";
import TabOptions from "../../Componenets/tabOptions";
import Footer from "../../Componenets/footer";
import DiningOut from "../../Componenets/diningOut";
import Nightlife from "../../Componenets/nightlife";
import Delivery from "../../Componenets/delivery";

const HomePage =() =>{

    const [activeTab,setActiveTab] = useState("Delivery") ;
    return(
        <div>
           <Header></Header>
           <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}></TabOptions>

            {/* DIFF SCREENS */}
            {getCorrectScreen(activeTab)}

           <Footer></Footer>

        </div>
    )
}



const getCorrectScreen= (tab) =>{
    switch (tab) {
      case "Delivery":
        return <Delivery></Delivery>
        
        break;
    
        case "Dining Out":
            return <DiningOut></DiningOut>
        
        case "Nightlife":
            return <Nightlife></Nightlife>
      default:

      return <Delivery></Delivery>
        break;
    }
  }
  

export default HomePage;