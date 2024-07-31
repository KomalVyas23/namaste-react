//import User from "./User";
import { Component } from "react";
import UserClass from "./UserClass";
import { GITHUB_LINK, GMAIL_LINK, LINKEDIN_LINK } from "../utils/constants";


class About extends Component {
    constructor(props){
        super(props);

      //  console.log("Parent Contructor");
    }

    componentDidMount(){
     //   console.log("Parent Component Did Mount");
    }

  render(){
   // console.log("Parent render");
    return(
        <>
        <div className="flex-1 flex justify-center items-center font-poppins bg-slate-50">
      <div className="flex flex-col justify-center items-center mt-4 gap-5 shadow-lg border rounded-sm w-fit max-w-xs">
        <p className="font-medium text-xl w-full text-center py-2">About Me</p>
        <UserClass name={"Komal Vyas"} location={"Mumbai"}/>
        <div className="bg-slate-900 text-white p-4 rounded-sm">
        
          <p className="pb-4 text-lg font-normal text-slate-300 text-center">
            ReactJs | JavaScript | HTML5 | CSS3 | Tailwind CSS | Front End
            Developer
          </p>

          <div className="flex space-x-4 justify-center">
          
            <a href={"mailto:"+GMAIL_LINK} className="text-gray-500 hover:text-gray-700">
           GMAIL
            </a>
            <a href={GITHUB_LINK} className="text-gray-500 hover:text-gray-700">
            GITHUB
            </a>
            <a href={LINKEDIN_LINK} className="text-gray-500 hover:text-gray-700">
            LINKEDIN
            </a>
        </div>
        </div>
      </div>
    </div>
        </>

    )
  }  
}

export default About;