<template>
    <footer>
        <div class="container-fluid">
            <div class="row">
                <div class="col-2 d-flex justify-content-center">
                    <img src="../assets/images/author-logo-round-small.png" alt="">
                </div>
                <div class="col-2">
                    <h4>ABOUT ME</h4>
                    <P class="font-footer">
                        Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada
                        feugiat. Vivamus suscipit tortor eget felis porttitor volutpat.
                    </P>
                </div>
                <div class="col-3 offset-1">
                    <h4>USEFUL LINKS</h4>
                    <ul>
                        <li class="font-footer" li v-for="link in links" :key="link">
                            <font-awesome-icon class="arrow" icon="fa-solid fa-angle-right" /> {{
                                    link
                            }}
                        </li>
                    </ul>
                </div>
                <div class="col-3">
                    <h4>CONTACT INFO</h4>
                    <ul class="p-0">
                        <li class="font-footer" v-for="contact in contacts" :key="contact">{{ contact }}</li>
                    </ul>
                </div>

            </div>
            <div class="row">
                <div class="col">
                    <p id="copy">
                        Copyright 2012 - 2020 | Avada Theme by <span>ThemeFusion</span> | All Rights Reversed | Powered
                        By <span>WordPress</span>
                    </p>
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
    padding-top: 80px;

    img {
        height: 130px;
    }

    h4 {
        margin-bottom: 30px;
        font-size: 16px;
    }

    ul {
        list-style: none;
        padding: 0;

    }

    .arrow {
        margin: 0 10px;
        height: 10px;
    }

    .font-footer {
        font-size: 12px;
        line-height: 25px;
    }

    #copy {
        margin-top: 60px;
        text-align: center;
        color: grey;
        font-size: 10px;

        span {
            color: white;
        }
    }
}
</style>
