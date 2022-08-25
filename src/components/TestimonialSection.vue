<template>
    <div>
        <section id="testimonial">
            <div class="container">
                <div class="row">
                    <div class="col-5 offset-1">
                        <h2>What The Critics Say</h2>
                        <span>TESTIMONIAL FROM AROUND THE WORD</span>
                    </div>
                    <div class="col-5 d-flex justify-content-end align-items-center">
                        <button>Read All Testimonial</button>
                    </div>
                    <div class="col-6"></div>
                </div>
            </div>
        </section>
    </div>

</template>

<script>

export default {
    name: 'TestimonialSection',
}
</script>

<style lang="scss">
#testimonial {
    padding: 50px 0 50px;

    h2 {
        font-family: 'Abril Fatface', cursive;
    }

    span {
        color: #3da698;
        font-weight: 600;
    }

    button {
        height: 35px;
        padding: 0 20px;
        border-radius: 5px;
        font-size: 12px;
        color: white;
        background-color: #69A0FF;
        border: 1px solid #69A0FF;
    }
}
</style>
