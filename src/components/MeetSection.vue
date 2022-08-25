<template>
    <div>
        <section id="meet">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h1>More About Damon Vaughn</h1>
                        <p>Damon Vaughn is a professor of psycology at the university of Toronto, a clinical psicologist
                            and the author of the multi-milion copy bestseller "The story of my life"</p>
                        <div class="button">
                            <button>Meet the Author</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div id="shops" class="container-fluid d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-3 d-flex justify-content-center">
                            <img src="../assets/images/ebay-logotan-2x-200x66.png" alt="">
                        </div>
                        <div class="col-3 d-flex justify-content-center">
                            <img src="../assets/images/audible-logotan-2x-200x66.png" alt="">
                        </div>
                        <div class="col-3 d-flex justify-content-center">
                            <img src="../assets/images/bb-logotan-2x-200x66.png" alt="">
                        </div>
                        <div class="col-3 d-flex justify-content-center">
                            <img src="../assets/images/kindlefire-logotan-2x-200x66.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'MeetSection',
}
</script>

<style lang="scss">
#meet {
    padding: 70px 0 70px;

    h1 {
        font-size: 70px;
        color: #69A0FF;
        font-family: 'Dancing Script', cursive;
        text-align: center;
    }

    p {
        font-size: 26px;
        text-align: center;
        margin-bottom: 30px;
    }

    .button {
        display: flex;
        justify-content: center;
        font-size: 14px;

        button {
            padding: 5px 20px;
            border-radius: 5px;
            background-color: #3da698;
            color: white;
            border: 1px solid #3da698;
        }
    }

}

#shops {
    height: 150px;
    background-color: #f3ece3;
}
</style>
