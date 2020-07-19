<template>
  <router-view />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  word-wrap: break-word;
  overflow-wrap: break-word;
  min-height: 0;
  min-width: 0;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
html {
  font-size: 10px;
}
body {
  min-width: 320px;
  font-family: Pangram, Avenir, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1;
  color: $textColor;
}
p {
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.6;
}
h1 {
  font-size: 3.2rem;
}
h2 {
  font-size: 2.4rem;
}
h3 {
  font-size: 1.8rem;
}
a {
  color: $deepGray;
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  @include mq-md() {
    &:hover {
      opacity: 0.5;
    }
  }
}
ul {
  list-style: none;
}
img {
  max-width: 100%;
  border: none;
  border-style: none;
  vertical-align: top;
}
svg {
  display: block;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid $trueGray;
  margin-top: 30px;
  padding: 0;
  @include mq-md() {
    margin-top: 80px;
  }
}
input,
select {
  vertical-align: middle;
}
input,
textarea {
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  box-shadow: none;
  background-image: none;
  background-color: #fff;
  padding: 5px 15px;
  max-width: 100%;
}
</style>
