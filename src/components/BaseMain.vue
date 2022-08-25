<template>
    <div>
        <MeetSection />
        <JumboSection />
        <TestimonialSection />
    </div>
</template>

<script>
import MeetSection from './MeetSection.vue'
import JumboSection from './JumboSection.vue'
import TestimonialSection from './TestimonialSection.vue'
export default {
    name: 'BaseMain',
    components: {
        MeetSection,
        JumboSection,
        TestimonialSection,
    },
}
</script>

<style lang="scss">
</style>
