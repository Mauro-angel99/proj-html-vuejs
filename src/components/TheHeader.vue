<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <img src="../assets/images/author-logo-round-small.png" alt="">
        </div>
        <div id="sidebar" class="col-6">
          <ul>
            <li v-for="(item, i) in sideMenu" :key="i"><a @click="selectItem(i)" :class="{ 'click': i === activeItem }"
                href="#">{{ item }}</a>
            </li>
            <li>
              <font-awesome-icon class="icon-shop" icon="fa-solid fa-cart-shopping" />
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="paragraph-header col-6">
          <h1>Damon Vaughn</h1>
          <p>Best-selling author and the most inflential public intellectual in the western word right now.</p>
          <span>- The New York Times</span>
          <div>
            <font-awesome-icon class="icon" icon="fa-solid fa-arrow-left" />
            <font-awesome-icon class="icon" icon="fa-solid fa-arrow-right" />
          </div>
        </div>
      </div>
      <div>
        <div class="labels">
          <div id="demos">
            <font-awesome-icon class="folder" icon="fa-solid fa-folder" />
            <span>Demos</span>
          </div>
          <div id="label">
            <div id="price">
              <span class="dollar">$</span>
              <span class="number">39</span>
            </div>
            <span class="on-sale">On Sale</span>
          </div>
        </div>
      </div>
      <div id="book">
        <div class="row">
          <div class="col-6 d-flex justify-content-end align-items-center">
            <img src="../assets/images/book-widget.png" alt="">
          </div>
          <div class="col-6">
            <h4>Latest Book Release</h4>
            <span>D. VAUGHN AUTOBIOGRAPHY</span>
            <P>Vestibulum tristique turpis in ipsum egestas lobortis. Duis maximus bibendum volutpat. Lorem ipsum
              dolor sit amet.
            </P>
          </div>
        </div>
        <div id="buy-button" class="col-12 d-flex justify-content-center">
          <div>
            <button class="amazon">
              <font-awesome-icon class="icon" icon="fa-brands fa-amazon" />Buy on amazon
            </button>
            <button class="apple">
              <font-awesome-icon class="icon" icon="fa-brands fa-apple" />Buy on AppleStore
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    sideMenu: Array
  },
  data() {
    return {
      activeItem: null
    }
  },
  methods: {
    selectItem(i) {
      this.activeItem = i;
    },
  }
}
</script>


<style scoped lang="scss">
header {
  background-image: url(../assets/images/footer-3.jpg);
  filter: brightness(180%);
  background-size: cover;
  background-position-y: center;
  height: 600px;

  img {
    height: 150px;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;

    li {
      padding-top: 40px;


      a {
        text-decoration: none;
        padding-top: 35px;
        color: white;


        &:hover {
          color: #936c0f;
        }
      }

      .icon-shop {
        color: white;

        &:hover {
          color: #936c0f;
          cursor: pointer;
        }
      }
    }

  }

  .paragraph-header {

    padding-left: 70px;

    h1 {
      font-size: 70px;
      color: #936c0f;

      font-family: 'Dancing Script', cursive;
    }

    p {
      font-size: 30px;
      color: white;

      font-family: 'Abril Fatface', cursive;
      font-weight: lighter;
    }

    span {
      font-size: 20px;
      font-weight: 600;
      color: rgb(71, 71, 71);
      font-family: inherit;
    }

    .icon {
      color: white;
      padding: 15px;
      background-color: black;
      margin: 30px 2px 0 0;
      cursor: pointer;
    }
  }

  .click {
    color: #936c0f;
    border-top: 6px solid #936c0f;
  }
}

.labels {
  width: 60px;
  position: absolute;
  right: 0px;
  top: 150px;

}

#demos {
  margin-bottom: 10px;
  height: 50px;
  width: 50px;
  background-color: white;
  border-radius: 15%;
  font-size: 10px;
  font-weight: 800;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .folder {
    color: black;
    height: 25px;
  }

}

#label {
  color: green;
  height: 50px;
  width: 50px;
  background-color: white;
  border-radius: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  #price {
    display: flex;
  }

  .dollar {
    font-size: 18px;
  }

  .number {
    font-size: 25px;
    font-weight: 700;
  }

  .on-sale {
    color: black;
    font-size: 10px;
    font-weight: 700;
  }

}

#book {
  position: absolute;
  right: 0;
  top: 300px;
  height: 300px;
  width: 600px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: end;

  .row {
    max-width: 600px;
  }

  img {
    height: 200px;
  }

  h4 {
    font-weight: 700;
    margin-bottom: 10px;
  }

  span {
    color: #936c0f;
    font-weight: 700;
    font-size: 16px;
  }

  p {
    font-size: 14px;
    line-height: 25px;
    font-weight: 700;
    margin-top: 15px;
  }



  #buy-button {
    height: 18%;

    button {
      border: 1px solid #3da698;
      padding: 10px 20px;
      font-size: 14px;
      font-weight: 700;

      &:hover {
        background-color: #88cec4;
      }
    }

    .icon {
      margin-right: 5px;
    }

    .amazon {
      border-radius: 8px 0 0 8px;
    }

    .apple {
      border-radius: 0 8px 8px 0;
    }
  }
}
</style>
