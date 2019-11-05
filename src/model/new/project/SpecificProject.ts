import {ABBProject} from "./specific/ABBProject";
import {ASProject} from "./specific/ASProject";
import {CARTProject} from "./specific/CARTProject";
import {CONSTRProject} from "./specific/CONSTRProject";
import {CRPProject} from "./specific/CRPProject";
import {CTProject} from "./specific/CTProject";
import {DISUPProject} from "./specific/DISUPProject";
import {DPDProject} from "./specific/DPDProject";
import {DSDProject} from "./specific/DSDProject";
import {ESProject} from "./specific/ESProject";
import {EVENTProject} from "./specific/EVENTProject";
import {FINProject} from "./specific/FINProject";
import {GRProject} from "./specific/GRProject";
import {HRProject} from "./specific/HRProject";
import {ITFProject} from "./specific/ITFProject";
import {ITSProject} from "./specific/ITSProject";
import {LAUNCHProject} from "./specific/LAUNCHProject";
import {MABProject} from "./specific/MABProject";
import {MOLProject} from "./specific/MOLProject";
import {NBUProject} from "./specific/NBUProject";
import {NCSProject} from "./specific/NCSProject";
import {OPTIMProject} from "./specific/OPTIMProject";
import {PRODProject} from "./specific/PRODProject";
import {PROTProject} from "./specific/PROTProject";
import {RDProject} from "./specific/RDProject";
import {REGProject} from "./specific/REGProject";
import {RNAProject} from "./specific/RNAProject";
import {SMProject} from "./specific/SMProject";
import {TRANSProject} from "./specific/TRANSProject";
import {TRFProject} from "./specific/TRFProject";
import {TSDProject} from "./specific/TSDProject";

export type SpecificProject =
    | TRFProject
    | DPDProject
    | DSDProject
    | ABBProject
    | MABProject
    | MOLProject
    | PROTProject
    | CARTProject
    | RNAProject
    | TRANSProject
    | DISUPProject
    | OPTIMProject
    | TSDProject
    | RDProject
    | ASProject
    | CONSTRProject
    | CRPProject
    | CTProject
    | ESProject
    | EVENTProject
    | FINProject
    | GRProject
    | HRProject
    | ITFProject
    | ITSProject
    | LAUNCHProject
    | NBUProject
    | NCSProject
    | PRODProject
    | REGProject
    | SMProject
    ;
