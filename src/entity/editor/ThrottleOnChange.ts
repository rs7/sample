import {createThrottle} from "../../utils/throttle";
import {OnChange} from "./OnChange";

export function createThrottleChange<T>(onChange: OnChange<T>, delay: number): OnChange<T> {
    return createThrottle(onChange, delay);
}
