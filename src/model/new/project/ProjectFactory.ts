import {ProjectClassName, ProjectTypeMap} from "../../common/className/ClassName";
import {extendEntity} from "../ExtendEntity";
import {ProjectClassNameMap} from "./ProjectClassNameMap";
import {ABBProjectFactory} from "./specific/ABBProject";
import {ASProjectFactory} from "./specific/ASProject";
import {CARTProjectFactory} from "./specific/CARTProject";
import {CONSTRProjectFactory} from "./specific/CONSTRProject";
import {CRPProjectFactory} from "./specific/CRPProject";
import {CTProjectFactory} from "./specific/CTProject";
import {DISUPProjectFactory} from "./specific/DISUPProject";
import {DPDProjectFactory} from "./specific/DPDProject";
import {DSDProjectFactory} from "./specific/DSDProject";
import {ESProjectFactory} from "./specific/ESProject";
import {EVENTProjectFactory} from "./specific/EVENTProject";
import {FINProjectFactory} from "./specific/FINProject";
import {GRProjectFactory} from "./specific/GRProject";
import {HRProjectFactory} from "./specific/HRProject";
import {ITFProjectFactory} from "./specific/ITFProject";
import {ITSProjectFactory} from "./specific/ITSProject";
import {LAUNCHProjectFactory} from "./specific/LAUNCHProject";
import {MABProjectFactory} from "./specific/MABProject";
import {MOLProjectFactory} from "./specific/MOLProject";
import {NBUProjectFactory} from "./specific/NBUProject";
import {NCSProjectFactory} from "./specific/NCSProject";
import {OPTIMProjectFactory} from "./specific/OPTIMProject";
import {PRODProjectFactory} from "./specific/PRODProject";
import {PROTProjectFactory} from "./specific/PROTProject";
import {RDProjectFactory} from "./specific/RDProject";
import {REGProjectFactory} from "./specific/REGProject";
import {RNAProjectFactory} from "./specific/RNAProject";
import {SMProjectFactory} from "./specific/SMProject";
import {TRANSProjectFactory} from "./specific/TRANSProject";
import {TRFProjectFactory} from "./specific/TRFProject";
import {TSDProjectFactory} from "./specific/TSDProject";

export function ProjectFactory<Code extends keyof ProjectClassNameMap>(projectCode: Code): ProjectClassNameMap[Code] {


    return extendEntity(ProjectFactoryMap[ProjectTypeMap.get(projectCode)]());
}

const ProjectFactoryMap = {
    [ProjectClassName.SM]: SMProjectFactory,
    [ProjectClassName.REG]: REGProjectFactory,
    [ProjectClassName.PROD]: PRODProjectFactory,
    [ProjectClassName.NCS]: NCSProjectFactory,
    [ProjectClassName.NBU]: NBUProjectFactory,
    [ProjectClassName.LAUNCH]: LAUNCHProjectFactory,
    [ProjectClassName.ITS]: ITSProjectFactory,
    [ProjectClassName.ITF]: ITFProjectFactory,
    [ProjectClassName.HR]: HRProjectFactory,
    [ProjectClassName.GR]: GRProjectFactory,
    [ProjectClassName.FIN]: FINProjectFactory,
    [ProjectClassName.EVENT]: EVENTProjectFactory,
    [ProjectClassName.ES]: ESProjectFactory,
    [ProjectClassName.CT]: CTProjectFactory,
    [ProjectClassName.CONSTR]: CONSTRProjectFactory,
    [ProjectClassName.TRF]: TRFProjectFactory,
    [ProjectClassName.DPD]: DPDProjectFactory,
    [ProjectClassName.DSD]: DSDProjectFactory,
    [ProjectClassName.ABB]: ABBProjectFactory,
    [ProjectClassName.MAB]: MABProjectFactory,
    [ProjectClassName.MOL]: MOLProjectFactory,
    [ProjectClassName.PROT]: PROTProjectFactory,
    [ProjectClassName.CART]: CARTProjectFactory,
    [ProjectClassName.RNA]: RNAProjectFactory,
    [ProjectClassName.TRANS]: TRANSProjectFactory,
    [ProjectClassName.DISUP]: DISUPProjectFactory,
    [ProjectClassName.OPTIM]: OPTIMProjectFactory,
    [ProjectClassName.TSD]: TSDProjectFactory,
    [ProjectClassName.RD]: RDProjectFactory,
    [ProjectClassName.AS]: ASProjectFactory,
    [ProjectClassName.CRP]: CRPProjectFactory,
};
