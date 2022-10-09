<template>
  <router-view/>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}

body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: whitesmoke;
  flex-direction: column;
}

footer {
  // position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  color: #fff;
  background: #1f2b38;
  text-align: center;
}

footer p {
  color: #fff;
  font-size: 22px;

}

footer p a{
  color: #fff;
  text-decoration: none;
}
</style>
