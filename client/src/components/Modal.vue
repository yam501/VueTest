<template>
  <div class="d-flex flex-col w-20">
    <div class="panel">
      <!-- header -->
      <div class="d-flex flex-v-center header bg-grey-lighter">
        <div class="pull-left text-body text-header pad-left-3">Заголовок</div>
        <div class="col">
          <button type="button" class="pull-right btn btn-icon round">
            <div class="icon"><i class="mdi mdi-24px mdi-close"></i></div>
          </button>
        </div>
      </div>

      <!-- body -->
      <div class="panel-body pad-none">
        <div class="tile-body">
          <div class="text-body text-title">Заголовок</div>
          <div class="d-flex flex-col">
            <form class="d-flex flex-col" @submit.prevent="submitForm">
              <!-- input Имя -->
              <div class="form-control form-control-icon-left">
                <div class="d-flex flex-v-center">
                  <div class="icon w-10"><i class="mdi mdi-24px mdi-account mdi-dark mdi-inactive"></i></div>
                  <div class="w-90 pad-5">
                    <div :class="{'border-none color-primary pad-left-1 text-small': true, 'color-red': !isValidName}">
                      Имя*
                    </div>
                    <input
                        v-model="localName"
                        class="w-100"
                        type="text"
                        placeholder="не указано"
                        @input="validateName"
                        required>
                  </div>
                </div>
              </div>

              <!-- input Фамилия -->
              <div class="form-control form-control-icon-left">
                <div class="d-flex flex-v-center">
                  <div class="icon w-10"><i class="mdi mdi-24px mdi-account mdi-dark mdi-inactive"></i></div>
                  <div class="w-90 pad-left-5 pad-right-5">
                    <div
                        :class="{'border-none color-primary pad-left-1 text-small': true, 'color-red': !isValidSecondName}">
                      Фамилия*
                    </div>
                    <input
                        v-model="localSecondName"
                        class="w-100"
                        type="text"
                        placeholder="не указано"
                        @input="validateSecondName"
                        required>
                  </div>
                </div>
              </div>

              <!-- input Отчество -->
              <div class="form-control form-control-icon-left">
                <div class="d-flex flex-v-center">
                  <div class="icon w-10"><i class="mdi mdi-24px mdi-account mdi-dark mdi-inactive"></i></div>
                  <div class="w-90 pad-5">
                    <div class="border-none color-primary text-small pad-left-1">Отчество</div>
                    <input
                        v-model="localMiddleName"
                        class="w-100"
                        type="text"
                        placeholder="не указано">
                  </div>
                </div>
              </div>

              <!-- input СНИЛС -->
              <div class="form-control form-control-icon-left">
                <div class="d-flex flex-v-center">
                  <div class="icon w-10"><i class="mdi mdi-24px mdi-numeric mdi-dark mdi-inactive"></i></div>
                  <div class="w-90 pad-left-5 pad-right-5">
                    <div :class="{'border-none color-primary pad-left-1 text-small': true, 'color-red': !isValidSNILS}">
                      СНИЛС
                    </div>
                    <input
                        v-model="localSNILS"
                        class="w-100"
                        type="text"
                        maxlength="14"
                        @input="validateAndMaskSNILS"
                        placeholder="не указано"
                    >
                  </div>
                </div>
              </div>

              <!-- input Должность -->
              <div class="form-control form-control-icon-left">
                <div class="d-flex flex-v-center">
                  <div class="icon w-10"><i class="mdi mdi-24px mdi-briefcase mdi-dark mdi-inactive"></i></div>
                  <div class="w-90 pad-5">
                    <div
                        :class="{'border-none color-primary pad-left-1 text-small': true, 'color-red': !isValidPosition}">
                      Должность*
                    </div>
                    <select
                        v-model="localPosition"
                        class="position w-100 color-muted"
                        @change="validatePosition"
                        required>
                      <option disabled selected>не указано</option>
                      <option v-for="position in positions" :key="position" :value="position">
                        {{ position }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="text-body text-title pad-top-5">
                Заголовок
              </div>


              <!-- input Телефон -->
              <div class="form-control form-control-icon-left">
                <div class="d-flex flex-v-center">
                  <div class="icon w-10"><i class="mdi mdi-24px mdi-cellphone mdi-dark mdi-inactive"></i></div>
                  <div class="w-90 pad-5">
                    <div :class="{'border-none color-primary pad-left-1 text-small': true, 'color-red': !isValidNum}">
                      Телефон*
                    </div>
                    <input
                        v-model="localNum"
                        maxlength="18"
                        type="tel"
                        class="w-100"
                        @input="applyPhoneMask"
                        placeholder="не указано"
                        required>
                  </div>
                </div>
              </div>

              <!-- input Почта -->
              <div class="form-control form-control-icon-left">
                <div class="d-flex flex-v-center">
                  <div class="icon w-10"><i class="mdi mdi-24px mdi-email mdi-dark mdi-inactive"></i></div>
                  <div class="w-90 pad-left-5 pad-right-5">
                    <div
                        :class="{'border-none color-primary pad-left-1 text-small pad-top-2': true, 'color-red': !isValidEmail}">
                      Электронная почта*
                    </div>
                    <input
                        v-model="localEmail"
                        class="w-100"
                        type="email"
                        placeholder="не указано"
                        @input="validateEmail"
                        required>
                  </div>
                </div>
              </div>

              <!-- footer -->
              <hr class="mar-top-8" style="width: 383px; margin-left: -24px"/>
              <div class="d-flex flex-h-end flex-v-center h-20v pad-none mar-none">
                <div class="pull-right pad-top-6">
                  <button type="button" class="pad-right-4 btn btn-inline color-link text-large">Отмена</button>
                  <button type="submit" class="btn btn-primary radius-1 text-large">Button</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import {mapState, mapActions, mapMutations} from "vuex";
import PhoneInputMask from "@/inputMask/PhoneInputMask";
import SnilsInputMask from "@/inputMask/SnilsInputMask";

export default defineComponent({
  data() {
    return {
      phoneMask: new PhoneInputMask(),
      snilsMask: new SnilsInputMask(),
      localName: '',
      localSecondName: '',
      localMiddleName: '',
      localSNILS: '',
      localPosition: '',
      localNum: '',
      localEmail: '',
      isValidName: true,
      isValidSecondName: true,
      isValidSNILS: true,
      isValidPosition: true,
      isValidNum: true,
      isValidEmail: true,
      invalidFields: []
    };
  },

  computed: {
    ...mapState({
      name: state => state.user.name,
      secondName: state => state.user.secondName,
      middleName: state => state.user.middleName,
      SNILS: state => state.user.SNILS,
      position: state => state.user.position,
      num: state => state.user.num,
      email: state => state.user.email,
      positions: state => state.user.positions
    })
  },

  watch: {
    name(newName) {
      this.localName = newName
      this.validateName()
    },
    secondName(newSecondName) {
      this.localSecondName = newSecondName
      this.validateSecondName();
    },
    middleName(newMiddleName) {
      this.localMiddleName = newMiddleName
    },
    SNILS(newSNILS) {
      this.localSNILS = newSNILS
    },
    position(newPosition) {
      this.localPosition = newPosition
      this.validatePosition()
    },
    num(newNum) {
      this.localNum = newNum
      this.validateNum()
    },
    email(newEmail) {
      this.localEmail = newEmail
      this.validateEmail()
    },
  },

  mounted() {
    this.getPosition();
    this.getUser();
  },

  methods: {
    ...mapMutations({
      setPositions: 'user/setPositions'
    }),
    ...mapActions({
      getUser: 'user/getUser',
      getPosition: 'user/getPosition',
      changeUser: 'user/changeUser'
    }),

    async submitForm() {
      const userData = {
        name: this.localName,
        secondName: this.localSecondName,
        middleName: this.localMiddleName,
        SNILS: this.localSNILS,
        position: this.localPosition,
        num: this.localNum,
        email: this.localEmail,
      }

      const invalidFields = await this.changeUser(userData)

      if (invalidFields) {
        this.invalidFields = invalidFields
        this.updateValidationStatus()
      }
    },

    updateValidationStatus() {
      this.isValidName = !this.invalidFields.includes('name')
      this.isValidSecondName = !this.invalidFields.includes('secondName')
      this.isValidPosition = !this.invalidFields.includes('position')
      this.isValidNum = !this.invalidFields.includes('number')
      this.isValidEmail = !this.invalidFields.includes('email')
      this.isValidSNILS = !this.invalidFields.includes('SNILS')
    },


    applyPhoneMask(event) {
      const input = event.target
      const inputValue = input.value
      const formattedValue = this.phoneMask.formatNumberToClient(inputValue)
      input.value = formattedValue
      this.localNum = formattedValue
    },

    applySnilsMask(event) {
      const input = event.target
      const inputValue = input.value
      const formattedValue = this.snilsMask.formatNumberToClient(inputValue)
      input.value = formattedValue
      this.localSNILS = formattedValue
    },

    validateName() {
      this.isValidName = this.localName.trim() !== ''
    },

    validateSecondName() {
      this.isValidSecondName = this.localSecondName.trim() !== ''
    },

    validateAndMaskSNILS(event) {
      this.applySnilsMask(event);
    },

    validatePosition() {
      this.isValidPosition = this.localPosition.trim() !== ''
    },

    validateNum() {
      this.isValidNum = this.localNum.trim() !== ''
    },

    validateEmail() {
      this.isValidEmail = this.localEmail.trim() !== '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.localEmail)
    }
  }
});
</script>

<style scoped>
.text-header {
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.15px;
}

.text-title {
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.15px;
}

input[type=number] {
  appearance: none;
}

input[type=text], [type=tel], [type=email] {
  height: 30px;
  border: 0;
  border-bottom: var(--color-muted) 1px solid;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

input::placeholder {
  font-style: normal;
  font-weight: 400;
  color: var(--color-muted);
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
}

.position {
  height: 30px;
  padding-left: 3px;
  border: 0;
  border-bottom: var(--color-muted) 1px solid;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  appearance: none;
  background: url("../assets/arrow_drop_down.svg") no-repeat;
  background-position-x: calc(100%);

  option {
    border: 0;
    color: var(--color-black);
  }

  option[disabled] {
    display: none;
  }
}

input, .position:focus-visible {
  outline: none;
}

</style>
