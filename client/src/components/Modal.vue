<script>

import {defineComponent} from "vue";
import store from "../../store";
import {mapState, mapActions, mapGetters, mapMutations} from "vuex";

export default defineComponent({
  computed: {
    store() {
      return store
    },

    ...mapState({
      positions: state => state.user.positions
    })
  },
  mounted() {
    this.getPosition();
  },
  methods: {
    ...mapMutations({
      setPositions: 'user/setPositions'
    }),
    ...mapActions({
      getPosition: 'user/getPosition'
    }),

    changeColor(event) {
      event.target.style.color = '#333333';
    }
  }
})
</script>

<template>
  <div class="modal-wrapper">

    <div class="panel">

      <!--  header   -->

      <div class="modal-header bg-grey-lighter">
        <div class="pull-left text-header text-large pad-left-3 ">Заголовок</div>
        <div class="col">
          <button class="pull-right btn btn-icon round">
            <div class="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2064_6)">
                  <path
                      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                      fill="#ACACB3"/>
                </g>
                <defs>
                  <clipPath id="clip0_2064_6">
                    <rect width="24" height="24" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </button>
        </div>
      </div>

      <!--  body   -->

      <div class="panel-body pad-none">
        <div class="tile-body" style="height: 667px">
          <div class="text-large text-title">
            Заголовок
          </div>
          <div class="d-flex flex-col">
            <form class="d-flex flex-col" style="height: 100%">
              <!--  input Имя -->
              <div class="form-control form-control-icon-left">
                <div class="d-flex flex-v-center">
                  <div class="svg-wrapper">
                    <svg width="24" height="52" viewBox="0 0 24 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1_603)">
                        <path
                            d="M12 26C14.21 26 16 24.21 16 22C16 19.79 14.21 18 12 18C9.79 18 8 19.79 8 22C8 24.21 9.79 26 12 26ZM12 28C9.33 28 4 29.34 4 32V34H20V32C20 29.34 14.67 28 12 28Z"
                            fill="#ACACB3"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_603">
                          <rect width="24" height="24" fill="white" transform="translate(0 14)"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div class="input-container">
                    <div class="border-none color-primary pad-left-1 text-small">Имя</div>
                    <input
                        class="some-input"
                        type="text"
                        placeholder="не указано"
                        required>
                  </div>
                </div>
              </div>

              <!--  input Фамилия -->
              <div class="form-control form-control-icon-left">
                <div class="d-flex flex-v-center">
                  <div class="svg-wrapper">
                    <svg width="24" height="52" viewBox="0 0 24 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1_603)">
                        <path
                            d="M12 26C14.21 26 16 24.21 16 22C16 19.79 14.21 18 12 18C9.79 18 8 19.79 8 22C8 24.21 9.79 26 12 26ZM12 28C9.33 28 4 29.34 4 32V34H20V32C20 29.34 14.67 28 12 28Z"
                            fill="#ACACB3"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_603">
                          <rect width="24" height="24" fill="white" transform="translate(0 14)"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div class="input-container">
                    <div class="border-none color-primary text-small pad-left-1">Фамилия</div>
                    <input
                        class="some-input"
                        type="text"
                        placeholder="не указано"
                        required>
                  </div>
                </div>
              </div>

              <!--  input Отчество  -->
              <div class="form-control form-control-icon-left">
                <div class="d-flex flex-v-center">
                  <div class="svg-wrapper">
                    <svg width="24" height="52" viewBox="0 0 24 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1_603)">
                        <path
                            d="M12 26C14.21 26 16 24.21 16 22C16 19.79 14.21 18 12 18C9.79 18 8 19.79 8 22C8 24.21 9.79 26 12 26ZM12 28C9.33 28 4 29.34 4 32V34H20V32C20 29.34 14.67 28 12 28Z"
                            fill="#ACACB3"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_603">
                          <rect width="24" height="24" fill="white" transform="translate(0 14)"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div class="input-container">
                    <div class="border-none color-primary text-small pad-left-1">Отчество</div>
                    <input
                        class="some-input"
                        type="text"
                        placeholder="не указано"
                        required>
                  </div>
                </div>
              </div>

              <!--  input СНИЛС -->
              <div class="form-control form-control-icon-left">
                <div class="d-flex flex-v-center">
                  <div class="svg-wrapper">
                    <svg width="24" height="52" viewBox="0 0 24 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M4 31V23H2V21H6V31H4ZM22 29C22 30.11 21.1 31 20 31H16V29H20V27H18V25H20V23H16V21H20C20.5304 21 21.0391 21.2107 21.4142 21.5858C21.7893 21.9609 22 22.4696 22 23V24.5C22 24.8978 21.842 25.2794 21.5607 25.5607C21.2794 25.842 20.8978 26 20.5 26C20.8978 26 21.2794 26.158 21.5607 26.4393C21.842 26.7206 22 27.1022 22 27.5V29ZM14 29V31H8V27C8 25.89 8.9 25 10 25H12V23H8V21H12C12.5304 21 13.0391 21.2107 13.4142 21.5858C13.7893 21.9609 14 22.4696 14 23V25C14 26.11 13.1 27 12 27H10V29H14Z"
                          fill="#ACACB3"/>
                    </svg>

                  </div>
                  <div class="input-container">
                    <div class="border-none color-primary text-small pad-left-1">СНИЛС</div>
                    <input
                        class="some-input"
                        type="text"
                        placeholder="не указано"
                        required>
                  </div>
                </div>
              </div>


              <!--  input Должность -->
              <div class="form-control form-control-icon-left">
                <div class="d-flex flex-v-center">
                  <div class="svg-wrapper">
                    <svg width="24" height="52" viewBox="0 0 24 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M20 20H16V18C16 17.4696 15.7893 16.9609 15.4142 16.5858C15.0391 16.2107 14.5304 16 14 16H10C8.89 16 8 16.89 8 18V20H4C2.89 20 2 20.89 2 22V33C2 33.5304 2.21071 34.0391 2.58579 34.4142C2.96086 34.7893 3.46957 35 4 35H20C20.5304 35 21.0391 34.7893 21.4142 34.4142C21.7893 34.0391 22 33.5304 22 33V22C22 21.4696 21.7893 20.9609 21.4142 20.5858C21.0391 20.2107 20.5304 20 20 20ZM10 18H14V20H10V18ZM12 23C12.663 23 13.2989 23.2634 13.7678 23.7322C14.2366 24.2011 14.5 24.837 14.5 25.5C14.5 26.163 14.2366 26.7989 13.7678 27.2678C13.2989 27.7366 12.663 28 12 28C11.337 28 10.7011 27.7366 10.2322 27.2678C9.76339 26.7989 9.5 26.163 9.5 25.5C9.5 24.837 9.76339 24.2011 10.2322 23.7322C10.7011 23.2634 11.337 23 12 23ZM17 33H7V31.75C7 30.37 9.24 29.25 12 29.25C14.76 29.25 17 30.37 17 31.75V33Z"
                          fill="#ACACB3"/>
                    </svg>
                  </div>
                  <div class="input-container">
                    <div class="border-none color-primary text-small pad-left-1">Должность</div>
                    <select class="position" @change="changeColor">
                      <option disabled selected>не указано</option>
                      <option v-for="position in positions" :key="positions[position]" :value="position">
                        {{ position }}
                      </option>
                    </select>

                  </div>
                </div>
              </div>

              <div class="text-large text-title pad-top-6">
                Заголовок
              </div>

              <!--  input Телефон -->
              <div class="form-control form-control-icon-left">
                <div class="d-flex flex-v-center">
                  <div class="svg-wrapper">
                    <svg width="24" height="52" viewBox="0 0 24 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1_651)">
                        <path
                            d="M17 15.01L6.99999 15C5.89999 15 5.00999 15.9 5.00999 17V35C5.00999 36.1 5.89999 37 6.99999 37H17C18.1 37 19 36.1 19 35V17C19 15.9 18.1 15.01 17 15.01ZM17 33H6.99999V19H17V33Z"
                            fill="#ACACB3"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_651">
                          <rect width="24" height="24" fill="white" transform="translate(0 14)"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div class="input-container">
                    <div class="border-none color-primary text-small pad-left-1">Телефон</div>
                    <input
                        class="some-input"
                        type="number"
                        placeholder="не указано"
                        required>
                  </div>
                </div>
              </div>

              <!--  input Почта -->
              <div class="form-control form-control-icon-left">
                <div class="d-flex flex-v-center">
                  <div class="svg-wrapper">
                    <svg width="24" height="52" viewBox="0 0 24 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1_644)">
                        <path
                            d="M20 18H4C2.9 18 2.01 18.9 2.01 20L2 32C2 33.1 2.9 34 4 34H20C21.1 34 22 33.1 22 32V20C22 18.9 21.1 18 20 18ZM20 22L12 27L4 22V20L12 25L20 20V22Z"
                            fill="#ACACB3"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_644">
                          <rect width="24" height="24" fill="white" transform="translate(0 14)"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div class="input-container">
                    <div class="border-none color-primary text-small pad-left-1">Электронная почта</div>
                    <input
                        class="some-input"
                        type="email"
                        placeholder="не указано"
                        required>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <!--    footer   -->

        <div class="modal-footer pad-none pad-5">
          <div class="pull-right">
            <button class="pad-right-4 btn btn-inline  color-link text-large">Отмена</button>
            <button class="btn btn-primary radius-1 text-large">Button</button>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>
.modal-header {
  padding: var(--spacer-layout1) var(--spacer-layout1);
  height: 64px;
  display: flex;
  align-items: center;
}

.modal-wrapper {
  display: flex;
  flex-direction: column;
  width: 382px;
  height: 819px;
  box-shadow: 0 4px 50px rgba(0, 0, 0, 0.06);
}

.text-header {
  word-spacing: 1px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #333333;
}

.text-title {
  word-spacing: 1px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}

.svg-wrapper {
  padding-top: 9px;
  width: 24px;
  height: 52px;
}

.input-container {
  width: 110%;
  padding-top: 15px;
  padding-left: 10px;
}

input[type=number] {
  appearance: none;
}

input[type=text], [type=number], [type=email] {
  width: 100%;
  height: 30px;
  border: 0;
  border-bottom: #333333 1px solid;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

input::placeholder {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #BABBBE;
}

.position {
  width: 100%;
  height: 30px;
  border: 0;
  color: #BABBBE;
  border-bottom: #333333 1px solid;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  appearance: none;
  background: url("../assets/arrow_drop_down.svg") no-repeat;
  background-position-x: calc(100%);
  option{
    border: 0;
    color: #333333;
  }
  option[disabled]{
    display: none;
  }
}


input, .position:focus-visible {
  outline: none;
}

.modal-footer {
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  height: 88px;
}
</style>