<template>
    <div>
        <b-carousel
                id="carousel-1"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
        >
            <b-carousel-slide>
                <template v-slot:img>
                    <img
                        class="imgSlideCarousel imgMirror"
                        src="https://m.atcdn.co.uk/ect/media/w1920/brand-store/volkswagen/tiguan/hero.jpg"
                        alt="image slot"
                    >
                </template>
            </b-carousel-slide>

            <b-carousel-slide>
                <template v-slot:img>
                    <img
                            class="imgSlideCarousel"
                            src="https://electrek.co/wp-content/uploads/sites/3/2019/12/SX3Semi-Family-e1534526883239.jpg?quality=82&strip=all&w=1600"
                            alt="image slot"
                    >
                </template>
            </b-carousel-slide>
            <b-carousel-slide>
                <template v-slot:img>
                    <img
                            class="imgSlideCarousel"
                            src="https://az749841.vo.msecnd.net/sitesencom/alv1/731e092e-cc42-4fab-9a11-22fb3cac036e/skoda-scala-m20-gallery-01.bf0af9547dc8f97dd082b0f964ef8749.fit-1450x760.jpg"
                            alt="image slot"
                    >
                </template>
            </b-carousel-slide>
            <b-carousel-slide>
                <template v-slot:img>
                    <img
                            class="imgSlideCarousel"
                            src="https://suppliermatch.org/wp-content/uploads/2019/03/Volkswagen-Australia-Cover.jpg"
                            alt="image slot"
                    >
                </template>
            </b-carousel-slide>
        </b-carousel>
        <TheForm/>
    </div>
</template>

<script>
    import TheForm from "./TheForm"
    export default {
        components:{
            TheForm
},
        data() {
            return {
                sliding: null,
            }
        },
        methods: {
            onSlideStart() {
                this.sliding = true
            },
            onSlideEnd() {
                this.sliding = false
            },
            
        }
    }
</script>
<style>
    .formReservation{
        position: absolute;
        min-height: 360px;
        max-height: 440px;
        max-width: 500px;
        background-color: rgba(255,255,255,0.7);
        padding: 15px;
        margin-top: -600px;
        margin-left: 140px;
        z-index: 999;
    }
    .imgSlideCarousel{
        width: 100%;
        height: 700px;
    }
    .timeClass{
        display: flex;
        flex-direction: row;
    }
    .imgMirror{
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
    }
</style>