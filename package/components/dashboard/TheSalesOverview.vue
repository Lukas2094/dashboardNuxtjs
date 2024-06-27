<template>
  <v-container style="width: 100%;">
    <v-sheet class="mx-auto" width="100%" style="padding: 10px">
      <v-form ref="form1">
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-select
          v-model="select"
          :items="items"
          :rules="[v => !!v || 'Item is required']"
          label="Item"
          required
        ></v-select>

        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
        ></v-checkbox>

        <div class="d-flex flex-column">
          <v-btn
            class="mt-4"
            color="success"
            block
            @click="validateForm1"
          >
            Validate Form 1
          </v-btn>

          <v-btn
            class="mt-4"
            color="error"
            block
            @click="resetForm1"
          >
            Reset Form 1
          </v-btn>

          <v-btn
            class="mt-4"
            color="warning"
            block
            @click="resetValidationForm1"
          >
            Reset Validation Form 1
          </v-btn>
        </div>
      </v-form>
    </v-sheet>

    <v-sheet class="mx-auto mt-6" width="100%" style="padding: 10px">
      <v-form ref="form2" v-model="valid">
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="firstname"
              :counter="10"
              :rules="nameRules"
              label="First name"
              hide-details
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="lastname"
              :counter="10"
              :rules="nameRules"
              label="Last name"
              hide-details
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              hide-details
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      // Dados para o primeiro formulário
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      select: null,
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
      checkbox: false,

      // Dados para o segundo formulário
      valid: false,
      firstname: '',
      lastname: '',
      email: '',
      nameRules: [
        value => {
          if (value) return true;
          return 'Name is required.';
        },
        value => {
          if (value?.length <= 10) return true;
          return 'Name must be less than 10 characters.';
        },
      ],
      emailRules: [
        value => {
          if (value) return true;
          return 'E-mail is required.';
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true;
          return 'E-mail must be valid.';
        },
      ],
    };
  },
  methods: {
    // Métodos para o primeiro formulário
    async validateForm1() {
      const { valid } = await this.$refs.form1.validate();
      if (valid) alert('Form 1 is valid');
    },
    resetForm1() {
      this.$refs.form1.reset();
    },
    resetValidationForm1() {
      this.$refs.form1.resetValidation();
    },
  },
};
</script>
