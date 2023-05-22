import './Resume.css'
import figma from './assets/figma.png'
import xd from './assets/xd.png'
import Ai from './assets/illustrator.png'
import ps from './assets/photoshop-express.png'

function Top(){
return(
    <div>
        <h2>NANDANA AJITH</h2>
        <h4>UI/UX Designer</h4>
        <p>9400621790</p>
        <a href='mailto:nandanaajith312@gmail.com'>nandanaajith312@gmail.com</a>
        <h4>TRIVANDRUM, KERALA</h4>
    </div>
);


}
function Objective(){
return(
    <div>

    <h3>Objective</h3>
    <p>“An aspiring UI designer, currently pursuing graduation in electronics and communication engineering. Passion is to create user friendly projects. Confident that I can portray my skills and abilities through my work.”</p>
    </div>
);
}
function Skill (){
return (
    <div>
        <h2>Skills</h2>
        <ul>
        <li>UI/UX design</li>
        <li>Prototyping</li>
        <li>Wireframing</li>
        <li>Design thinking</li>
        <li>Interaction Design</li>
        <li>Basic coding [HTML,CSS]</li>


        </ul> 
    </div>
);
}
function Tool(){
return(
    <div>
       
    </div>
);

    
}
function Education(){

}
export default function Resume(){
    return (
        <div>
            <Top/>
            <Objective/>
            <Skill/>
            <Tool/>
            <Education/>
        </div>
    );
}