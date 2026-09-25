export function useConsultation() {
  const isOpen = useState<boolean>("consultation-open", () => false);
  return {
    isOpen,
    open: () => {
      isOpen.value = true;
    },
    close: () => {
      isOpen.value = false;
    },
  };
}
