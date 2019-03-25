/**
 * Basic logger
 */
export const l  = {
    info: (tag: string, props?: any) => console.log(tag, props),
    error: (tag: string, props?: any) => console.error(tag, props)
}

export default l;