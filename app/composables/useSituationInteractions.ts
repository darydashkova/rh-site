export function useSituationInteractions(initialQuestions: Record<string, boolean> = {}, moduleCount = 0) {
  const consultation = useConsultation();
  const expanded = reactive({ ...initialQuestions });
  const activeModule = ref(0);
  const sentForms = reactive<Record<string, boolean>>({});
  function toggleQuestion(id: string) { expanded[id] = !expanded[id]; }
  function changeModule(direction: number) { activeModule.value = (activeModule.value + direction + moduleCount) % moduleCount; }
  function scrollCarousel(id: string, direction: number) {
    const track = document.getElementById(id);
    if (!track) return;
    const card = track.querySelector<HTMLElement>('[role="group"]');
    const gap = parseFloat(getComputedStyle(track).columnGap) || 20;
    track.scrollBy({ left: direction * ((card?.offsetWidth || 400) + gap), behavior: 'smooth' });
  }
  function submitPreview(id: string) { sentForms[id] = true; }
  return { openConsultation: consultation.open, expanded, toggleQuestion, activeModule, changeModule, scrollCarousel, sentForms, submitPreview };
}
