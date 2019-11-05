import React from "react";
import {ProjectClassName} from "../../../model/common/className/ClassName";
import {SpecificProject} from "../../../model/new/project/SpecificProject";
import {NoValid} from "../../common/interfaceElements/placeholder/NoValid";
import {ProjectProps} from "../ProjectProps";
import {ABBProjectDetails} from "./specific/ABBProjectDetails";
import {ASProjectDetails} from "./specific/ASProjectDetails";
import {CARTProjectDetails} from "./specific/CARTProjectDetails";
import {CONSTRProjectDetails} from "./specific/CONSTRProjectDetails";
import {CRPProjectDetails} from "./specific/CRPProjectDetails";
import {CTProjectDetails} from "./specific/CTProjectDetails";
import {DISUPProjectDetails} from "./specific/DISUPProjectDetails";
import {DPDProjectDetails} from "./specific/DPDProjectDetails";
import {DSDProjectDetails} from "./specific/DSDProjectDetails";
import {ESProjectDetails} from "./specific/ESProjectDetails";
import {EVENTProjectDetails} from "./specific/EVENTProjectDetails";
import {FINProjectDetails} from "./specific/FINProjectDetails";
import {GRProjectDetails} from "./specific/GRProjectDetails";
import {HRProjectDetails} from "./specific/HRProjectDetails";
import {ITFProjectDetails} from "./specific/ITFProjectDetails";
import {ITSProjectDetails} from "./specific/ITSProjectDetails";
import {LAUNCHProjectDetails} from "./specific/LAUNCHProjectDetails";
import {MABProjectDetails} from "./specific/MABProjectDetails";
import {MOLProjectDetails} from "./specific/MOLProjectDetails";
import {NBUProjectDetails} from "./specific/NBUProjectDetails";
import {NCSProjectDetails} from "./specific/NCSProjectDetails";
import {OPTIMProjectDetails} from "./specific/OPTIMProjectDetails";
import {PRODProjectDetails} from "./specific/PRODProjectDetails";
import {PROTProjectDetails} from "./specific/PROTProjectDetails";
import {RDProjectDetails} from "./specific/RDProjectDetails";
import {REGProjectDetails} from "./specific/REGProjectDetails";
import {RNAProjectDetails} from "./specific/RNAProjectDetails";
import {SMProjectDetails} from "./specific/SMProjectDetails";
import {TRANSProjectDetails} from "./specific/TRANSProjectDetails";
import {TRFProjectDetails} from "./specific/TRFProjectDetails";
import {TSDProjectDetails} from "./specific/TSDProjectDetails";

export function ProjectSpecificDetails({value, onChange}: ProjectProps<SpecificProject>) {
    switch (value.className) {
        case ProjectClassName.TRF:
            return <TRFProjectDetails value={value} onChange={onChange}/>;
        case ProjectClassName.DPD:
            return <DPDProjectDetails value={value} onChange={onChange}/>;
        case ProjectClassName.DSD:
            return <DSDProjectDetails value={value} onChange={onChange}/>;

        case ProjectClassName.ABB:
            return <ABBProjectDetails value={value} onChange={onChange}/>;
        case ProjectClassName.MAB:
            return <MABProjectDetails value={value} onChange={onChange}/>;
        case ProjectClassName.MOL:
            return <MOLProjectDetails value={value} onChange={onChange}/>;
        case ProjectClassName.PROT:
            return <PROTProjectDetails value={value} onChange={onChange}/>;
        case ProjectClassName.CART:
            return <CARTProjectDetails value={value} onChange={onChange}/>;
        case ProjectClassName.RNA:
            return <RNAProjectDetails value={value} onChange={onChange}/>;
        case ProjectClassName.TRANS:
            return <TRANSProjectDetails value={value} onChange={onChange}/>;
        case ProjectClassName.DISUP:
            return <DISUPProjectDetails value={value} onChange={onChange}/>;
        case ProjectClassName.OPTIM:
            return <OPTIMProjectDetails value={value} onChange={onChange}/>;
        case ProjectClassName.TSD:
            return <TSDProjectDetails value={value} onChange={onChange}/>;

        case ProjectClassName.RD:
            return <RDProjectDetails value={value} onChange={onChange}/>;

        case ProjectClassName.AS:
            return <ASProjectDetails value={value} onChange={onChange}/>;
        case ProjectClassName.CONSTR:
            return <CONSTRProjectDetails value={value} onChange={onChange}/>;
        case ProjectClassName.CRP:
            return <CRPProjectDetails value={value} onChange={onChange}/>;
        case ProjectClassName.CT:
            return <CTProjectDetails value={value} onChange={onChange}/>;
        case ProjectClassName.ES:
            return <ESProjectDetails value={value} onChange={onChange}/>;
        case ProjectClassName.EVENT:
            return <EVENTProjectDetails value={value} onChange={onChange}/>;
        case ProjectClassName.FIN:
            return <FINProjectDetails value={value} onChange={onChange}/>;
        case ProjectClassName.GR:
            return <GRProjectDetails value={value} onChange={onChange}/>;
        case ProjectClassName.HR:
            return <HRProjectDetails value={value} onChange={onChange}/>;
        case ProjectClassName.ITF:
            return <ITFProjectDetails value={value} onChange={onChange}/>;
        case ProjectClassName.ITS:
            return <ITSProjectDetails value={value} onChange={onChange}/>;
        case ProjectClassName.LAUNCH:
            return <LAUNCHProjectDetails value={value} onChange={onChange}/>;
        case ProjectClassName.NBU:
            return <NBUProjectDetails value={value} onChange={onChange}/>;
        case ProjectClassName.NCS:
            return <NCSProjectDetails value={value} onChange={onChange}/>;
        case ProjectClassName.PROD:
            return <PRODProjectDetails value={value} onChange={onChange}/>;
        case ProjectClassName.REG:
            return <REGProjectDetails value={value} onChange={onChange}/>;
        case ProjectClassName.SM:
            return <SMProjectDetails value={value} onChange={onChange}/>;
    }

    return <NoValid/>;
}
