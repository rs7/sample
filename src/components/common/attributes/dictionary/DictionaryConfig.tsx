import {VariousClassName} from "../../../../model/common/className/ClassName";
import {GUIDWithClassName} from "../../../../model/common/guid/GUID";
import {DataBook} from "../../../../model/crud/DataBook";
import {User} from "../../../../model/crud/user/User";

export interface DictionaryItem {
    guid: GUIDWithClassName,
    title: string,
}

export interface UserDictionaryItem {
    user_login: string,
    title: string,
}

type DictionaryConfig = Config<DictionaryItem, DataBook>;
type UserDictionaryConfig = Config<UserDictionaryItem, User>;

const dictionaryConfig: DictionaryConfig = {
    identifyFunction(item: DictionaryItem): any {
        return item.guid;
    },

    sourceFunction(source: DataBook) {
        return {
            guid: source.id,
            title: source.title,
        };
    },

    titleFunction(item: DictionaryItem) {
        return item.title;
    }
};

const userDictionaryConfig: UserDictionaryConfig = {
    identifyFunction(item: UserDictionaryItem): any {
        return item.user_login;
    },

    sourceFunction(source: User): UserDictionaryItem {
        return {
            title: source.title,
            user_login: source.user_login,
        };
    },

    titleFunction(item: UserDictionaryItem): string {
        return item.title;
    }
};

interface Config<ItemType, SourceType> {
    titleFunction(item: ItemType): string;
    identifyFunction(item: ItemType): any;
    sourceFunction(source: SourceType): ItemType;
}

export function getConfig(className: VariousClassName): Config {
    switch (className) {

        case VariousClassName.DSUser:
            return userDictionaryConfig;

        default:
            return dictionaryConfig;
    }
}
