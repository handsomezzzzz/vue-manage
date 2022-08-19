<template>
  <div class="common-table">
    <el-table ref="table" :data="tableData">
      <el-table-column
        v-for="item in tableLabel"
        :label="item.label"
        :key="item.label"
        show-overflow-tooltip
        :width="item.width ? item.width : 125"
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="180">
        <template slot-scope="scope">
          <div class="buttonTwo">
            <el-button size="mini" @click="editTable(scope.row)"
              >编辑</el-button
            >
            <el-button size="mini" type="danger" @click="deleteTable(scope.row)"
              >删除</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      class="pager"
      :total="config.total"
      :current-page.sync="config.page"
      @current-change="changePage"
      :page-size="20"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: "TableComponent",
  props: {
    tableLabel: Array,
    tableData: Array,
    config: Object,
  },
  data() {
    return {};
  },
  methods: {
    editTable(row) {
      this.$emit("edit", row);
      console.log(row);
    },
    deleteTable(row) {
      this.$emit("del", row);
    },
    changePage(page) {
      this.$emit("changePage", page);
    },
  },
};
</script>
<style scoped>
.common-table {
  height: calc(100% - 62px);
  background-color: #fff;
  position: relative;
}
.pager {
  position: absolute;
  bottom: 0;
  right: 20px;
}
.buttonTwo{
  position: relative;
  top: -10px;
}
</style>
