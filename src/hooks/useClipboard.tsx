export const useClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error("Failed to write to clipboard ... ");
    return false;
  }
};

export function useClipboardManager() {
  const { clipboard } = navigator;

  const read = async () => {
    try {
      await clipboard.readText();
    } catch (err) {
      throw new Error("Failed to read clipboard text...");
    }
  };

  const add = async (text: string) => {
    try {
      const current = await read();
      await clipboard.writeText(current + text);
    } catch {
      throw new Error("Failed to add text to clipboard...");
    }
  };

  const clear = async () => {
    try {
      await clipboard.writeText("");
    } catch {
      throw new Error("Failed to clear clipboard text...");
    }
  };

  return [read, add, clear];
}
