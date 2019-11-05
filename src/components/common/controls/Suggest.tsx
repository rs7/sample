import {Suggest as BCDSuggest} from "@vendor/bcd-front-ui-standalone";
import React from "react";

interface Props<T> {
    options: T[];
    selected: T[];
    multiple: boolean;
    labelFunction(option: T): string;
    onChange(selected: T[]): void;
}

export function Suggest<T>(props: Props<T>) {
    let {options, selected, onChange, labelFunction, multiple} = props;

    return (
        <BCDSuggest<T>
            multiple={multiple}
            options={options}
            defaultValue={selected}
            onChange={onChange}

            SuggestedItem={SuggestedItem}
            SelectedItem={SelectedItem}
            FilterSuggest={FilterSuggest}
        />
    );

    function SelectedItem({option}: HandlerArgument<T>) {
        return (
            <div className={BCDSuggest.block.el("selected-label")}>
                {shortLabel(labelFunction(option))}
            </div>
        );
    }

    function SuggestedItem({option, inputValue}: HandlerArgument<T>) {
        let dangerouslySetInnerHTML = {
            __html: highlight(labelFunction(option), createPattern(inputValue))
        };

        return (
            <div className={BCDSuggest.block.el("suggested-label")} dangerouslySetInnerHTML={dangerouslySetInnerHTML}/>
        );
    }

    function FilterSuggest(options: T[], input: string) {
        if (!options) return [];
        if (!input) return performanceOptions(options);

        let pattern = createPattern(input);

        if (!pattern) return performanceOptions(options);

        return performanceOptions(options.filter(option => pattern.test(labelFunction(option))));
    }
}

function highlight(text, input) {
    return text && text.replace(input, `<span class=${BCDSuggest.block.el("found")}>$&</span>`);
}

function createPattern(text: string): RegExp {
    try {
        return new RegExp(text, "ig");
    } catch (e) {
        return null;
    }
}

function shortLabel(label:string) {
    return label && label.split('.')[0];
}

function performanceOptions<T>(options: T[]): T[] {
    return options.slice(0, 20);
}

interface HandlerArgument<T> {
    option: T;
    inputValue: string;
}
