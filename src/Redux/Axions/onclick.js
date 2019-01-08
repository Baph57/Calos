
export const ON_CLICK_CONSOLE_LOG = "ON_CLICK_CONSOLE_LOG";

export default function onClick(log){
    return{
    type: ON_CLICK_CONSOLE_LOG,
    log
    }
}