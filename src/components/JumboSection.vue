<template>
    <div>
        <section id="jumbo" class="d-flex align-items-end">
            <div class="container">
                <div class="row d-flex align-items-center">
                    <div class="col-6 d-flex justify-content-end">
                        <img id="phone" src="../assets/images/audible-app-2x-400x418.png" alt="">
                    </div>
                    <div class="col-5 d-flex flex-column">
                        <h2>New Audiobook</h2>
                        <span>NO TIME TO READ? NO PROBLEM. LISTEN ON IT</span>
                        <P>Donec fringilla nunc eu turpis dignissim, at euismod sapien tincidunt. Maecenas eleifend
                            congue cursus.</P>
                        <div class="d-flex justify-content-around">
                            <img src="../assets/images/audible-logo.png" alt="">
                            <img src="../assets/images/bn-logo-tall.png" alt="">
                            <img src="../assets/images/kindle-logo-tall.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>

<script>

export default {
    name: 'JumboSection',
}
</script>

<style lang="scss">
#jumbo {
    height: 450px;
    background-image: url(../assets/images/banner.jpg);
    background-size: cover;
    background-position-y: center;

    #phone {
        height: 400px;
    }

    h2 {
        color: white;
        text-align: center;
        font-family: 'Abril Fatface', cursive;
    }

    span {
        text-align: center;
        color: #69A0FF;
    }

    p {
        text-align: center;

        color: grey;
    }
}
</style>
