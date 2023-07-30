
export const useClipboard = async (text: string): Promise<boolean> => {
    try {
        await navigator.clipboard.writeText(text)
        return true;
    } catch (err) {
        console.error("Failed to write to clipboard ... ")
        return false;
    }
}