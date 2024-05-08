<template>
  <div id="app">
    <Main :list=list>
      <template #head>
        <th>id</th>
        <th>物件</th>
        <th>价格</th>
        <th>标签</th>
      </template>
      <template #body='inf'>
        <td>{{ inf.inf2+1 }}</td>
        <td>{{ inf.inf1.name }}</td>
        <td>{{ inf.inf1.price }}</td>
        <td><mytag :tag=inf.inf1.tag @enter='inf.inf1.tag=$event'></mytag></td>
      </template>
    </Main>
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import mytag from "./components/mytag.vue";

export default {
  name: "App",
  components: {
    Main,
    mytag
  },
  data() {
    return {
      list: [
        {
          id: 1,
          name: "上衣",
          price: 200,
          tag: "fir",
        },
        {
          id: 2,
          name: "厨具",
          price: 1000,
          tag: "sec",
        },
        {
          id: 3,
          name: "手机",
          price: 2000,
          tag: "thi",
        },
      ],
    };
  },
};
</script>

<style>
</style>
