<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div>
    <b-card
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
  <div>
    <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
      <template #button-content> &#x1f50d;<span class="visually-hidden">Search</span> </template>
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here...</b-dropdown-item>
    </b-dropdown>
  </div>
</template>
