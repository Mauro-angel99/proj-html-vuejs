<template>
    <footer>
        <div class="container-fluid">
            <div class="row">
                <div class="col-3">
                    <img src="../assets/images/author-logo-round-small.png" alt="">
                </div>
                <div class="col-3">
                    <h4>ABOUT ME</h4>
                    <P>
                        Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada
                        feugiat. Vivamus suscipit tortor eget felis porttitor volutpat.
                    </P>
                </div>
                <div class="col-3">
                    <h4>USEFUL LINKS</h4>
                    <ul>
                        <li li v-for="link in links" :key="link">{{ link }}</li>
                    </ul>
                </div>
                <div class="col-3">
                    <h4>CONTACT INFO</h4>
                    <ul>
                        <li li v-for="contact in contacts" :key="contact">{{ contact }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>

export default {
    name: 'TheFooter',
    props: {
        links: Array,
        contacts: Array,

    },
}
</script>

<style lang="scss">
footer {
    height: 400px;
    background-image: url(../assets/images/footer-3.jpg);
    background-size: cover;
    background-position-y: top;
    color: white;
}
</style>
