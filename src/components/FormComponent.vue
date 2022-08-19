<template>
  <el-form ref="form" :model="form" :inline="inline" label-width="100px">
    <el-form-item
      :label="item.label"
      v-for="item in formlabel"
      :key="item.label"
    >
      <el-input
        v-if="item.type === 'input'"
        :placeholder="'请输入' + item.label"
        v-model="form[item.model]"
      ></el-input>
      <el-switch v-if="item.type === 'switch'" v-model="form[item.model]">
      </el-switch>
      <el-date-picker
        v-if="item.type === 'date'"
        type="date"
        value-format="yyyy-MM-DD"
        v-model="form[item.model]"
        placeholder="请选择日期"
      ></el-date-picker>
      <el-select
        v-if="item.type === 'select'"
        :placeholder="'请选择' + item.label"
        v-model="form[item.model]"
      >
        <el-option v-for="subitem in item.opts" :label="subitem.label" :value="subitem.value" :key="subitem.label"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item><slot></slot></el-form-item>
  </el-form>
</template>
<script>
export default {
  name: "FormComponent",
  props: {
    formlabel: Array,
    form: Object,
    inline: Boolean,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>
