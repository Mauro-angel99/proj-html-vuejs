<template>
    <div>
        <section id="testimonial">
            <div class="container">
                <div class="row">
                    <div class="col-5 offset-1">
                        <h2 class="pb-4">What The Critics Say</h2>
                        <p class="subtitle">TESTIMONIAL FROM AROUND THE WORD</p>
                    </div>
                    <div class="col-5 d-flex justify-content-end align-items-center">
                        <button>Read All Testimonial</button>
                    </div>
                    <div class="pt-4 d-flex">
                        <div id="best-comment" class="col-5 offset-1">
                            <h2>Best Author Of His Generation</h2>
                            <hr>
                            <span>This book will change your perspective on life</span>
                            <p>
                                Donec fringilla nunc eu turpis dignissim, ateuismod sapien tincidunt. Maecenas eleifend
                                conque cursus. In vitae enim quis sem pharetra. Curabitur arcu erat, accumsan id
                                imperdiet
                                et, porttitor at sem.
                            </p>
                            <p>
                                Donec retrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor
                                volutpat. Nulla quis lorem ut liber. Proin eget tortor risus. Praesent sapien massa,
                                covallis a pellentesque nec, egestas non nisi. Donec retrum conque leo eget malesuada.
                            </p>
                            <div>
                                <img src="../assets/images/nytimes-logo-white-xsmall.png" alt="">
                                <span>Justine Kilpatrick, </span>
                                <span class="green">The New York Times</span>
                            </div>
                        </div>
                        <div class="col-4 offset-1">
                            <div class="comment">
                                <div class="card">
                                    <h3>A True Masterpice, Bravo!</h3>
                                    <p>
                                        Nulla quis lorem ut libero malesuada feugiat. Vivamus magne justo, lacinia eget
                                        consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis
                                        porttitor
                                        volutpat. Nulla quis lorem ut libero malesuada feug at.
                                    </p>
                                </div>
                                <div class="d-flex align items center">
                                    <img class="logo" src="../assets/images/theguardian-xsmall.png" alt="">
                                    <span class="grey">Gerald Hendley, </span><span>The Guardian</span>
                                </div>
                            </div>
                            <div class="comment">
                                <div class="card">
                                    <h3>A True Masterpice, Bravo!</h3>
                                    <p>
                                        Nulla quis lorem ut libero malesuada feugiat. Vivamus magne justo, lacinia eget
                                        consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis
                                        porttitor
                                        volutpat. Nulla quis lorem ut libero malesuada feug at.
                                    </p>
                                </div>
                                <div class="d-flex align items center">
                                    <img class="logo" src="../assets/images/theguardian-xsmall.png" alt="">
                                    <span class="grey">Gerald Hendley, </span><span>The Guardian</span>
                                </div>
                            </div>
                        </div>
                    </div>
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
        margin: 0;
    }

    .subtitle {
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

#best-comment {
    color: white;
    height: 550px;
    background-image: url(../assets/images/testimonial2-2x.jpg);
    background-position: center;
    background-size: cover;
    padding: 60px 70px;
    border-radius: 0 0 70px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    p {
        font-size: 14px;
    }

    img {
        margin-right: 15px;
    }

    .green {
        color: #3da698;
    }
}

.card {
    background-color: #f3ece3;
    border: 1px solid #f3ece3;
    padding: 30px;
    margin-bottom: 15px;
    text-align: center;

    p {
        font-size: 15px;
        line-height: 27px;
        color: grey;

    }

}

.comment {

    .logo {
        margin: 0 20px 25px 0;

    }

    span {
        font-weight: 700;
    }

    .grey {
        color: grey;
    }
}
</style>
