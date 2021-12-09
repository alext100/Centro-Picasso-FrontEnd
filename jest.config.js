module.exports = {
  globals: {
    "vue-jest": {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith("b-"),
      },
    },
  },
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,vue,ts}", "!src/main.js"],
  modulePathIgnorePatterns: [
    "src/main.ts",
    "src/store/index.ts",
    "protectedRoute.ts",
    "shims-vue.d.ts",
    "studentBoard.spec.ts",
    "addUser.spec.ts",
    "onlineLesson.spec.ts",
  ],
};
