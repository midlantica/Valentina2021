<template>
  <main>
    <section class="twoCol">
      <ImageBox image-list-class="reddy" :images="images" />
    </section>

    <aside class="col3">
      <Social />
    </aside>
  </main>
</template>

<script>
  import Social from "../components/Social"
  import ImageBox from "vue3-image-box"

  export default {
    components: {
      Social,
      ImageBox,
    },
    setup() {
      const images = [
        {
          thumb: "/portfolio/aaron_sm.jpg",
          src: "/portfolio/aaron.jpg",
          caption: "Aaron",
        },
        {
          thumb: "/portfolio/today_is_going_to_be_awesome_sm.jpg",
          src: "/portfolio/today_is_going_to_be_awesome.jpg",
          caption: "Today Is Going To Be Awesome",
        },
        {
          thumb: "/portfolio/pins_sm.jpg",
          src: "/portfolio/pins.jpg",
          caption: "Pins",
        },
        {
          thumb: "/portfolio/arabella_sm.jpg",
          src: "/portfolio/arabella.jpg",
          caption: "Arabella",
        },
        {
          thumb: "/portfolio/sugar_skull_sm.jpg",
          src: "/portfolio/sugar_skull.jpg",
          caption: "Sugar Skull",
        },
        {
          thumb: "/portfolio/tennessee_sm.jpg",
          src: "/portfolio/tennessee.jpg",
          caption: "Tennessee",
        },
        {
          thumb: "/portfolio/backpack_sm.jpg",
          src: "/portfolio/backpack.jpg",
          caption: "Backpack",
        },
        {
          thumb: "/portfolio/beer_glass_sm.jpg",
          src: "/portfolio/beer_glass.jpg",
          caption: "Beer Glass",
        },
        {
          thumb: "/portfolio/bags_sm.jpg",
          src: "/portfolio/bags.jpg",
          caption: "Bags",
        },
        {
          thumb: "/portfolio/bee_awesome_sm.jpg",
          src: "/portfolio/bee_awesome.jpg",
          caption: "Bee Awesome",
        },
        {
          thumb: "/portfolio/box_sm.jpg",
          src: "/portfolio/box.jpg",
          caption: "Box",
        },
        {
          thumb: "/portfolio/calendar_sm.jpg",
          src: "/portfolio/calendar.jpg",
          caption: "Calendar",
        },
        {
          thumb: "/portfolio/candle_valentina_sm.jpg",
          src: "/portfolio/candle_valentina.jpg",
          caption: "Candle Valentina",
        },
        {
          thumb: "/portfolio/coin_bag_sm.jpg",
          src: "/portfolio/coin_bag.jpg",
          caption: "Coin Bag",
        },
        {
          thumb: "/portfolio/coloring_book_sm.jpg",
          src: "/portfolio/coloring_book.jpg",
          caption: "Coloring Book",
        },
        {
          thumb: "/portfolio/conexion_americas_mural_sm.jpg",
          src: "/portfolio/conexion_americas_mural.jpg",
          caption: "Conexion Americas Mural",
        },
        {
          thumb: "/portfolio/decal_sm.jpg",
          src: "/portfolio/decal.jpg",
          caption: "Decal",
        },
        {
          thumb: "/portfolio/el_mago_sm.jpg",
          src: "/portfolio/el_mago.jpg",
          caption: "El Mago",
        },
        {
          thumb: "/portfolio/eva_sm.jpg",
          src: "/portfolio/eva.jpg",
          caption: "Eva",
        },
        {
          thumb: "/portfolio/flowers_mural_sm.jpg",
          src: "/portfolio/flowers_mural.jpg",
          caption: "Flowers Mural",
        },
        {
          thumb: "/portfolio/flying_mural_sm.jpg",
          src: "/portfolio/flying_mural.jpg",
          caption: "Flying Mural",
        },
        {
          thumb: "/portfolio/flying_mural_details_sm.jpg",
          src: "/portfolio/flying_mural_details.jpg",
          caption: "Flying Mural Details",
        },
        {
          thumb: "/portfolio/german_shepherd_sm.jpg",
          src: "/portfolio/german_shepherd.jpg",
          caption: "German Shepherd",
        },
        {
          thumb: "/portfolio/guitar_01_sm.jpg",
          src: "/portfolio/guitar_01.jpg",
          caption: "Guitar 01",
        },
        {
          thumb: "/portfolio/guitar_02_sm.jpg",
          src: "/portfolio/guitar_02.jpg",
          caption: "Guitar 02",
        },
        {
          thumb: "/portfolio/helios_sm.jpg",
          src: "/portfolio/helios.jpg",
          caption: "Helios",
        },
        {
          thumb: "/portfolio/hello_person_sm.jpg",
          src: "/portfolio/hello_person.jpg",
          caption: "Hello Person",
        },
        {
          thumb: "/portfolio/lets_do_this_sm.jpg",
          src: "/portfolio/lets_do_this.jpg",
          caption: "Lets Do This",
        },
        {
          thumb: "/portfolio/little_deer_flowers_sm.jpg",
          src: "/portfolio/little_deer_flowers.jpg",
          caption: "Little Deer Flowers",
        },
        {
          thumb: "/portfolio/little_planter_sm.jpg",
          src: "/portfolio/little_planter.jpg",
          caption: "Little Planter",
        },
        {
          thumb: "/portfolio/magdalena_sm.jpg",
          src: "/portfolio/magdalena.jpg",
          caption: "Magdalena",
        },
        {
          thumb: "/portfolio/maya_quotes_sm.jpg",
          src: "/portfolio/maya_quotes.jpg",
          caption: "Maya Quotes",
        },
        {
          thumb: "/portfolio/mug_sm.jpg",
          src: "/portfolio/mug.jpg",
          caption: "Mug",
        },
        {
          thumb: "/portfolio/nativity_sm.jpg",
          src: "/portfolio/nativity.jpg",
          caption: "Nativity",
        },
        {
          thumb: "/portfolio/notebooks_sm.jpg",
          src: "/portfolio/notebooks.jpg",
          caption: "Notebooks",
        },
        {
          thumb: "/portfolio/octopus_bloom_sm.jpg",
          src: "/portfolio/octopus_bloom.jpg",
          caption: "Octopus Bloom",
        },
        {
          thumb: "/portfolio/pereza_sm.jpg",
          src: "/portfolio/pereza.jpg",
          caption: "Pereza",
        },
        {
          thumb: "/portfolio/pete_sm.jpg",
          src: "/portfolio/pete.jpg",
          caption: "Pete",
        },
        {
          thumb: "/portfolio/phone_case_sm.jpg",
          src: "/portfolio/phone_case.jpg",
          caption: "Phone Case",
        },
        {
          thumb: "/portfolio/pineapple_pen_sm.jpg",
          src: "/portfolio/pineapple_pen.jpg",
          caption: "Pineapple Pen",
        },
        {
          thumb: "/portfolio/planner_sm.jpg",
          src: "/portfolio/planner.jpg",
          caption: "Planner",
        },
        {
          thumb: "/portfolio/plate_sm.jpg",
          src: "/portfolio/plate.jpg",
          caption: "Plate",
        },
        {
          thumb: "/portfolio/prints_sm.jpg",
          src: "/portfolio/prints.jpg",
          caption: "Prints",
        },
        {
          thumb: "/portfolio/pumpkins_sm.jpg",
          src: "/portfolio/pumpkins.jpg",
          caption: "Pumpkins",
        },
        {
          thumb: "/portfolio/shop_sm.jpg",
          src: "/portfolio/shop.jpg",
          caption: "Shop",
        },
        {
          thumb: "/portfolio/table_sm.jpg",
          src: "/portfolio/table.jpg",
          caption: "Table",
        },
        {
          thumb: "/portfolio/unicorn_planter_sm.jpg",
          src: "/portfolio/unicorn_planter.jpg",
          caption: "Unicorn Planter",
        },
        {
          thumb: "/portfolio/valentin_mug_sm.jpg",
          src: "/portfolio/valentin_mug.jpg",
          caption: "Valentin Mug",
        },
        {
          thumb: "/portfolio/valentina_address_book_sm.jpg",
          src: "/portfolio/valentina_address_book.jpg",
          caption: "Valentina Address Book",
        },
        {
          thumb: "/portfolio/watercolor_sm.jpg",
          src: "/portfolio/watercolor.jpg",
          caption: "Watercolor",
        },
        {
          thumb: "/portfolio/wrapping_paper_sm.jpg",
          src: "/portfolio/wrapping_paper.jpg",
          caption: "Wrapping Paper",
        },
        {
          thumb: "/portfolio/you_got_this_sm.jpg",
          src: "/portfolio/you_got_this.jpg",
          caption: "You Got This",
        },
      ]

      return {
        images,
      }
    },
  }
</script>

<style lang="scss">
  // @import "../assets/css/gallery";
  @import "@/assets/css/vendor/vue-lightbox";

  .portfolio main {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column: 2 / span 10;
    grid-row: initial;
    grid-auto-flow: row;
    max-width: 100%;
    max-width: 1080px;
    width: 100%;
    margin: auto;

    @include breakpoint($SmMdLg) {
      grid-column: 2 / span 10 !important;
      // width: 100%;
    }

    aside.col3 {
      grid-column: initial;
    }
  }

  .portfolio section.twoCol {
    grid-column: 2 / span 9;
    // background: red;

    @include breakpoint($SmMdLg) {
      grid-column: 1 / span 11;
    }

    @include breakpoint($sm) {
      grid-column: 1 / span 11;
    }
  }

  .portfolio section.twoCol > div {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important;
    gap: 1rem;
    // background: red !important;

    @include breakpoint($SmMdLg) {
      // flex-basis: 21%;
      // background: red;
    }

    @include breakpoint($SmMd) {
      // flex-basis: 43%;
      // background: green;
    }

    @include breakpoint($mdlg) {
      // flex-basis: 30%;
      // background: purple;
    }

    @include breakpoint($sm) {
      flex-basis: 100%;
      // background: blue;
    }

    img {
      margin-bottom: -4px;
    }
  }

  aside {
    margin-top: 0 !important;
  }

  .vue-lb-info {
    bottom: 22px !important;
  }
</style>
