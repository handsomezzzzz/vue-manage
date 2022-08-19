<template>
  <div class="user">
    <el-dialog
      :title="formtype === 'add' ? '新增用户' : '更新用户'"
      :visible.sync="isShow"
    >
      <form-component
        :formlabel="userlabel"
        :form="userform"
        :inline="true"
        ref="form"
      ></form-component>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </div>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary" @click="newAdd">+新增</el-button>
      <form-component
        :formlabel="formLabel"
        :form="searchForm"
        :inline="true"
        ref="form"
      >
        <el-button type="primary" @click="getList(searchForm.keyword)">搜索</el-button>
      </form-component>
    </div>
    <table-component
      ref="table"
      :tableData="tableData"
      :tableLabel="tableLabel"
      :config="config"
      @changePage="getList()"
      @edit="editUser"
      @del="delUser"
    ></table-component>
  </div>
</template>
<script>
import TableComponent from "@/components/TableComponent.vue";
import FormComponent from "@/components/FormComponent.vue";
import { getUser } from "../../api/adress.js";
export default {
  name: "User",
  data() {
    return {
      isShow: false,
      formtype: "add",
      userlabel: [
        {
          model: "name",
          label: "姓名",
          type: "input",
        },
        {
          model: "age",
          label: "年龄",
          type: "input",
        },
        {
          model: "sex",
          label: "性别",
          type: "select",
          opts: [
            {
              label: "男",
              value: 1,
            },
            {
              label: "女",
              value: 0,
            },
          ],
        },
        {
          model: "birth",
          label: "出生日期",
          type: "date",
        },
        {
          model: "addr",
          label: "地址",
          type: "input",
        },
      ],
      userform: {
        name: "",
        addr: "",
        birth: "",
        sex: "",
        age: "",
      },
      tableData: [],
      tableLabel: [
        {
          prop: "name",
          label: "姓名",
        },
        {
          prop: "sexlabel",
          label: "性别",
        },
        {
          prop: "age",
          label: "年龄",
        },
        {
          prop: "birth",
          label: "出生日期",
        },
        {
          prop: "addr",
          label: "家庭住址",
        },
      ],
      config: {
        page: 1,
        total: 20,
      },
      formLabel: [
        {
          model: "keyword",
          label: "",
          type: "input",
        },
      ],
      searchForm: {
        keyword: "",
      },
    };
  },
  components: {
    FormComponent,
    TableComponent,
  },
  methods: {
    newAdd() {
      this.isShow = true;
      this.formtype = "add";
      this.userform = {
        //初始化数据
        name: "",
        addr: "",
        birth: "",
        sex: "",
        age: "",
      };
    },
    confirm() {
      if (this.formtype === "edit") {
        this.$http.post("/user/edit", this.userform).then(() => {
          this.getList(); //当完成添加后更新列表
          this.isShow = false;
        }).then(() => {
          this.$message({
            type: "success",
            message: "编辑成功!",
          })
        }); //就是用axios发送了请求，只需要去用Mock拦截就好了
      } else {
        this.$http.post("/user/add", this.$qs.parse(this.userform)).then(() => {
          this.getList();//当完成编辑后更新列表
          this.isShow = false;
        }).then(() => {
          this.$message({
            type: "success",
            message: "添加成功!",
          })
        })
      }
    },
    getList(name = "") {
      this.config.loading = true;
      name ? (this.config.page = 1) : "";
      getUser({
        page: this.config.page,
        name
      }).then((res) => {
        this.tableData = res.data.list.map((item) => {
          item.sexlabel = item.sex === 0 ? "女" : "男";
          return item;
        });
        this.config.total = res.data.count;
        this.config.loading = false;
      });
    },
    editUser(row) {
      this.formtype = "edit";
      this.isShow = true;
      this.userform = row;
    },
    delUser(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        const id = row.id
        this.$http
          .get("/user/del", {
            params:{ id } 
          })
          .then(() => {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            this.getList();
          });
      });
    },
  },
  created() {
    this.getList();
  },
};
</script>
<style scoped>
.el-button {
  width: 100px;
  position: relative;
  top: 0px;
}
.manage-header {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
</style>
