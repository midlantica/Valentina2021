<template>
  <main>
    <section class="twoCol">
      <div class="gallery">
        <image-box images-list-class="flex" :images="images" />
      </div>
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
          thumb: "../assets/img/portfolio/aaron_sm.jpg",
          src: "../assets/img/portfolio/aaron.jpg",
          caption: "Aaron",
        },
        {
          thumb: "../assets/img/portfolio/today_is_going_to_be_awesome_sm.jpg",
          src: "../assets/img/portfolio/today_is_going_to_be_awesome.jpg",
          caption: "Today Is Going To Be Awesome",
        },
        {
          thumb: "../assets/img/portfolio/pins_sm.jpg",
          src: "../assets/img/portfolio/pins.jpg",
          caption: "Pins",
        },
        {
          thumb: "../assets/img/portfolio/arabella_sm.jpg",
          src: "../assets/img/portfolio/arabella.jpg",
          caption: "Arabella",
        },
        {
          thumb: "../assets/img/portfolio/sugar_skull_sm.jpg",
          src: "../assets/img/portfolio/sugar_skull.jpg",
          caption: "Sugar Skull",
        },
        {
          thumb: "../assets/img/portfolio/tennessee_sm.jpg",
          src: "../assets/img/portfolio/tennessee.jpg",
          caption: "Tennessee",
        },
        {
          thumb: "../assets/img/portfolio/backpack_sm.jpg",
          src: "../assets/img/portfolio/backpack.jpg",
          caption: "Backpack",
        },
        {
          thumb: "../assets/img/portfolio/beer_glass_sm.jpg",
          src: "../assets/img/portfolio/beer_glass.jpg",
          caption: "Beer Glass",
        },
        {
          thumb: "../assets/img/portfolio/bags_sm.jpg",
          src: "../assets/img/portfolio/bags.jpg",
          caption: "Bags",
        },
        {
          thumb: "../assets/img/portfolio/bee_awesome_sm.jpg",
          src: "../assets/img/portfolio/bee_awesome.jpg",
          caption: "Bee Awesome",
        },
        {
          thumb: "../assets/img/portfolio/box_sm.jpg",
          src: "../assets/img/portfolio/box.jpg",
          caption: "Box",
        },
        {
          thumb: "../assets/img/portfolio/calendar_sm.jpg",
          src: "../assets/img/portfolio/calendar.jpg",
          caption: "Calendar",
        },
        {
          thumb: "../assets/img/portfolio/candle_valentina_sm.jpg",
          src: "../assets/img/portfolio/candle_valentina.jpg",
          caption: "Candle Valentina",
        },
        {
          thumb: "../assets/img/portfolio/coin_bag_sm.jpg",
          src: "../assets/img/portfolio/coin_bag.jpg",
          caption: "Coin Bag",
        },
        {
          thumb: "../assets/img/portfolio/coloring_book_sm.jpg",
          src: "../assets/img/portfolio/coloring_book.jpg",
          caption: "Coloring Book",
        },
        {
          thumb: "../assets/img/portfolio/conexion_americas_mural_sm.jpg",
          src: "../assets/img/portfolio/conexion_americas_mural.jpg",
          caption: "Conexion Americas Mural",
        },
        {
          thumb: "../assets/img/portfolio/decal_sm.jpg",
          src: "../assets/img/portfolio/decal.jpg",
          caption: "Decal",
        },
        {
          thumb: "../assets/img/portfolio/el_mago_sm.jpg",
          src: "../assets/img/portfolio/el_mago.jpg",
          caption: "El Mago",
        },
        {
          thumb: "../assets/img/portfolio/eva_sm.jpg",
          src: "../assets/img/portfolio/eva.jpg",
          caption: "Eva",
        },
        {
          thumb: "../assets/img/portfolio/flowers_mural_sm.jpg",
          src: "../assets/img/portfolio/flowers_mural.jpg",
          caption: "Flowers Mural",
        },
        {
          thumb: "../assets/img/portfolio/flying_mural_sm.jpg",
          src: "../assets/img/portfolio/flying_mural.jpg",
          caption: "Flying Mural",
        },
        {
          thumb: "../assets/img/portfolio/flying_mural_details_sm.jpg",
          src: "../assets/img/portfolio/flying_mural_details.jpg",
          caption: "Flying Mural Details",
        },
        {
          thumb: "../assets/img/portfolio/german_shepherd_sm.jpg",
          src: "../assets/img/portfolio/german_shepherd.jpg",
          caption: "German Shepherd",
        },
        {
          thumb: "../assets/img/portfolio/guitar_01_sm.jpg",
          src: "../assets/img/portfolio/guitar_01.jpg",
          caption: "Guitar 01",
        },
        {
          thumb: "../assets/img/portfolio/guitar_02_sm.jpg",
          src: "../assets/img/portfolio/guitar_02.jpg",
          caption: "Guitar 02",
        },
        {
          thumb: "../assets/img/portfolio/helios_sm.jpg",
          src: "../assets/img/portfolio/helios.jpg",
          caption: "Helios",
        },
        {
          thumb: "../assets/img/portfolio/hello_person_sm.jpg",
          src: "../assets/img/portfolio/hello_person.jpg",
          caption: "Hello Person",
        },
        {
          thumb: "../assets/img/portfolio/lets_do_this_sm.jpg",
          src: "../assets/img/portfolio/lets_do_this.jpg",
          caption: "Lets Do This",
        },
        {
          thumb: "../assets/img/portfolio/little_deer_flowers_sm.jpg",
          src: "../assets/img/portfolio/little_deer_flowers.jpg",
          caption: "Little Deer Flowers",
        },
        {
          thumb: "../assets/img/portfolio/little_planter_sm.jpg",
          src: "../assets/img/portfolio/little_planter.jpg",
          caption: "Little Planter",
        },
        {
          thumb: "../assets/img/portfolio/magdalena_sm.jpg",
          src: "../assets/img/portfolio/magdalena.jpg",
          caption: "Magdalena",
        },
        {
          thumb: "../assets/img/portfolio/maya_quotes_sm.jpg",
          src: "../assets/img/portfolio/maya_quotes.jpg",
          caption: "Maya Quotes",
        },
        {
          thumb: "../assets/img/portfolio/mug_sm.jpg",
          src: "../assets/img/portfolio/mug.jpg",
          caption: "Mug",
        },
        {
          thumb: "../assets/img/portfolio/nativity_sm.jpg",
          src: "../assets/img/portfolio/nativity.jpg",
          caption: "Nativity",
        },
        {
          thumb: "../assets/img/portfolio/notebooks_sm.jpg",
          src: "../assets/img/portfolio/notebooks.jpg",
          caption: "Notebooks",
        },
        {
          thumb: "../assets/img/portfolio/octopus_bloom_sm.jpg",
          src: "../assets/img/portfolio/octopus_bloom.jpg",
          caption: "Octopus Bloom",
        },
        {
          thumb: "../assets/img/portfolio/pereza_sm.jpg",
          src: "../assets/img/portfolio/pereza.jpg",
          caption: "Pereza",
        },
        {
          thumb: "../assets/img/portfolio/pete_sm.jpg",
          src: "../assets/img/portfolio/pete.jpg",
          caption: "Pete",
        },
        {
          thumb: "../assets/img/portfolio/phone_case_sm.jpg",
          src: "../assets/img/portfolio/phone_case.jpg",
          caption: "Phone Case",
        },
        {
          thumb: "../assets/img/portfolio/pineapple_pen_sm.jpg",
          src: "../assets/img/portfolio/pineapple_pen.jpg",
          caption: "Pineapple Pen",
        },
        {
          thumb: "../assets/img/portfolio/planner_sm.jpg",
          src: "../assets/img/portfolio/planner.jpg",
          caption: "Planner",
        },
        {
          thumb: "../assets/img/portfolio/plate_sm.jpg",
          src: "../assets/img/portfolio/plate.jpg",
          caption: "Plate",
        },
        {
          thumb: "../assets/img/portfolio/prints_sm.jpg",
          src: "../assets/img/portfolio/prints.jpg",
          caption: "Prints",
        },
        {
          thumb: "../assets/img/portfolio/pumpkins_sm.jpg",
          src: "../assets/img/portfolio/pumpkins.jpg",
          caption: "Pumpkins",
        },
        {
          thumb: "../assets/img/portfolio/shop_sm.jpg",
          src: "../assets/img/portfolio/shop.jpg",
          caption: "Shop",
        },
        {
          thumb: "../assets/img/portfolio/table_sm.jpg",
          src: "../assets/img/portfolio/table.jpg",
          caption: "Table",
        },
        {
          thumb: "../assets/img/portfolio/unicorn_planter_sm.jpg",
          src: "../assets/img/portfolio/unicorn_planter.jpg",
          caption: "Unicorn Planter",
        },
        {
          thumb: "../assets/img/portfolio/valentin_mug_sm.jpg",
          src: "../assets/img/portfolio/valentin_mug.jpg",
          caption: "Valentin Mug",
        },
        {
          thumb: "../assets/img/portfolio/valentina_address_book_sm.jpg",
          src: "../assets/img/portfolio/valentina_address_book.jpg",
          caption: "Valentina Address Book",
        },
        {
          thumb: "../assets/img/portfolio/watercolor_sm.jpg",
          src: "../assets/img/portfolio/watercolor.jpg",
          caption: "Watercolor",
        },
        {
          thumb: "../assets/img/portfolio/wrapping_paper_sm.jpg",
          src: "../assets/img/portfolio/wrapping_paper.jpg",
          caption: "Wrapping Paper",
        },
        {
          thumb: "../assets/img/portfolio/you_got_this_sm.jpg",
          src: "../assets/img/portfolio/you_got_this.jpg",
          caption: "You Got This",
        },
      ]

      return {
        images,
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "../assets/css/gallery.scss";

  aside {
    margin-top: 0 !important;
  }
  .vue-lb-info {
    padding-top: 0.6rem !important;
  }

  body.portfolio section.twoCol {
    grid-column: 1 / span 11;
    // background: red;

    @include breakpoint($SmMdLg) {
      // grid-column: 2 / span 9;
    }

    @include breakpoint($sm) {
      // grid-column: 2 / span 9;
    }
  }

  .portfolio main {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column: 3 / span 9;
    grid-row: 4;
    grid-auto-flow: row;
    max-width: 1000px;
    // margin: auto;

    @include breakpoint($SmMdLg) {
      // grid-column: 2 / span 11;
    }
  }

  .flex {
    display: flex;
    width: 100%;
  }
  .flex img {
    max-width: 100px;
  }
</style>
