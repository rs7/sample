import React from "react";
import styled from "styled-components";
import {DangerouslyProjectStatus} from "../../model/common/enums/ProjectStatus";

interface Props {
    statusTitle: string;
    status: string;
    className?: string;
}

const StatusWrapper = styled.div`
  font-size: 10px;
  font-weight: bold;
  padding: 0 10px;
  border-radius: 20px 20px;
  display: inline-block;
  height: 20px;
  line-height: 20px;
`;

const StyledState = styled(StatusWrapper)`
  background-color: ${props => getColorByStatus(props.status)};
  color: white;
`;

const getColorByStatus = (status: DangerouslyProjectStatus): string => {
    switch (status) {
        case DangerouslyProjectStatus.FINISHED: {
            return "#9d77ee";
        }

        case DangerouslyProjectStatus.IN_COORDINATION: {
            return "#0377c4";
        }

        case DangerouslyProjectStatus.SUSPENDED: {
            return "#f4ad46";
        }

        case DangerouslyProjectStatus.IN_WORK: {
            return "#22aa48";
        }

        case DangerouslyProjectStatus.CLOSED: {
            return "#d93b36";
        }
    }
};

export const ProjectStatus: React.FC<Props> = (props) => {
    return (
        <StyledState status={props.status} className={props.className}>
            {props.statusTitle}
        </StyledState>
    );
};
