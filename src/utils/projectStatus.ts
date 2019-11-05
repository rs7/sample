import {DangerouslyProjectStatus} from "../model/common/enums/ProjectStatus";

export const getStatusTitle = (statusGuid: DangerouslyProjectStatus) => {
    switch (statusGuid) {

        case DangerouslyProjectStatus.IN_COORDINATION: {
            return "На согласовании";
        }

        case DangerouslyProjectStatus.IN_WORK: {
            return "В работе";
        }

        case DangerouslyProjectStatus.SUSPENDED: {
            return "Приостановлены";
        }

        case DangerouslyProjectStatus.FINISHED: {
            return "Завершены";
        }

        case DangerouslyProjectStatus.CLOSED: {
            return "Закрыты";
        }
    }
};

export const getStatusTitleSingle = (statusGuid: DangerouslyProjectStatus) => {
    switch (statusGuid) {

        case DangerouslyProjectStatus.IN_COORDINATION: {
            return "На согласовании";
        }

        case DangerouslyProjectStatus.IN_WORK: {
            return "В работе";
        }

        case DangerouslyProjectStatus.SUSPENDED: {
            return "Приостановлен";
        }

        case DangerouslyProjectStatus.FINISHED: {
            return "Завершен";
        }

        case DangerouslyProjectStatus.CLOSED: {
            return "Закрыт";
        }
    }
};