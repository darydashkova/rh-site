<script lang="ts">
import { computed, defineComponent, h } from "vue";
import {
  parseFormattedText,
  renderFormattedText,
} from "../utils/formattedText";

export default defineComponent({
  props: { text: { type: String, required: true } },
  setup(props) {
    const content = computed(() => parseFormattedText(props.text));
    const consultation = useConsultation();
    return () =>
      h(
        "div",
        { class: "service-copy" },
        renderFormattedText(content.value, resolveSiteLink, consultation.open),
      );
  },
});
</script>
