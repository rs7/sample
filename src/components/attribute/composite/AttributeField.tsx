import React from "react";
import {CriteriaFactory} from "../../../model/new/nested/Criteria";
import {DosageRegimenFactory} from "../../../model/new/nested/DosageRegimen";
import {InteractionFactory} from "../../../model/new/nested/Interaction";
import {PackingFactory} from "../../../model/new/nested/Packing";
import {ProjectLinkFactory} from "../../../model/new/nested/ProjectLink";
import {ReferentFactory} from "../../../model/new/nested/Referent";
import {SequenceFactory} from "../../../model/new/nested/Sequence";
import {SubstanceFactory} from "../../../model/new/nested/Substance";
import {TargetFactory} from "../../../model/new/nested/Target";
import {TestSystemFactory} from "../../../model/new/nested/TestSystem";
import {TrialGroupFactory} from "../../../model/new/nested/TrialGroup";
import {createCompositeListAttributeFieldComponent, createLinksListComponent} from "../../common/attributes/list/ListAttributeHelper";
import {DosageRegimenPartial} from "./dosageRegimen/DosageRegimenPartial";
import {InteractionPartial} from "./interaction/InteractionPartial";
import {PackingPartial} from "./packing/PackingPartial";
import {ProjectCriteriaPartial} from "./projectCriteria/ProjectCriteriaPartial";
import {ProjectLinkPartial} from "./projectLink/ProjectLinkPartial";
import {ReferentPartial} from "./referent/ReferentPartial";
import {SequencePartial} from "./sequence/SequencePartial";
import {ActiveSubstancePartial} from "./substance/ActiveSubstancePartial";
import {TargetPartial} from "./target/TargetPartial";
import {TestSystemPartial} from "./testSystem/TestSystemPartial";
import {TrialGroupPartial} from "./trialGroup/TrialGroupPartial";

export const InteractionListAttributeField = createCompositeListAttributeFieldComponent(
    InteractionPartial,
    InteractionFactory,
);
export const TargetListAttributeField = createCompositeListAttributeFieldComponent(
    TargetPartial,
    TargetFactory,
);
export const ProjectCriteriaListAttributeField = createCompositeListAttributeFieldComponent(
    ProjectCriteriaPartial,
    CriteriaFactory,
);
export const PackingListAttributeField = createCompositeListAttributeFieldComponent(
    PackingPartial,
    PackingFactory,
);
export const ReferentListAttributeField = createCompositeListAttributeFieldComponent(
    ReferentPartial,
    ReferentFactory,
);
export const SequenceListAttributeField = createCompositeListAttributeFieldComponent(
    SequencePartial,
    SequenceFactory,
);
export const TestSystemListAttributeField = createCompositeListAttributeFieldComponent(
    TestSystemPartial,
    TestSystemFactory,
);
export const SubstanceListAttributeField = createCompositeListAttributeFieldComponent(
    ActiveSubstancePartial,
    SubstanceFactory,
);
export const TrialGroupListAttributeField = createCompositeListAttributeFieldComponent(
    TrialGroupPartial,
    TrialGroupFactory,
);
export const DosageRegimenListAttributeField = createCompositeListAttributeFieldComponent(
    DosageRegimenPartial,
    DosageRegimenFactory,
);
export const ProjectLinkListAttributeField = createLinksListComponent(
    ProjectLinkPartial,
    ProjectLinkFactory,
);
